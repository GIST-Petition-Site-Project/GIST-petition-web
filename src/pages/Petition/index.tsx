// 청원 Id로 해당 글, 글 좋아요, 댓글 조회
import { useParams } from 'react-router'
import { Container, PetitionWrapper, SharingPetition } from './styles'
import PetitionContents from './PetitionContents'
import { getPetitionById } from '../../utils/api'
import { useEffect, useState } from 'react'
import { RiKakaoTalkFill, RiFacebookFill } from 'react-icons/ri'
import { IoMdAlbums } from 'react-icons/io'
import Inner from '../../components/Inner'

const Petition = (): JSX.Element => {
  const { id } = useParams()
  const [petitionId, setPetitionId] = useState<string>(String(id))
  const petitionURL: string = location.pathname.slice(1)
  const getPetitionId = async (petitionURL: string) => {
    const response = await getPetitionById(petitionURL)
    if (response?.data?.id) {
      setPetitionId(String(response?.data?.id))
    }
  }
  useEffect(() => {
    getPetitionId(petitionURL)
  }, [])

  const clip = () => {
    let url = ''
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    url = String(document.querySelector('.url')?.textContent)
    textarea.value = url
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('URL이 복사되었습니다.')
  }

  const fn_sendFB = (sns: string) => {
    const thisUrl = `https://dev.gist-petition.com/${petitionURL}`
    if (sns == 'facebook') {
      const url =
        'http://www.facebook.com/sharer/sharer.php?u=' +
        encodeURIComponent(thisUrl)
      window.open(url, '', 'width=486, height=286')
    } else if (sns == 'kakaotalk') {
      console.log(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY)
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY)
      window.Kakao.Link.createDefaultButton({
        container: '#btnKakao',
        objectType: 'feed',
        content: {
          title: 'GIST 청원',
          description: '',
          imageUrl: thisUrl,
          link: {
            mobileWebUrl: thisUrl,
            webUrl: thisUrl,
          },
        },
      })
    }
  }

  return (
    <Container>
      <Inner>
        <PetitionWrapper>
          <PetitionContents
            petitionURL={petitionURL}
            petitionId={petitionId}
          ></PetitionContents>
        </PetitionWrapper>
        <SharingPetition>
          <div className="share-url">
            <div className="url-box">
              <div>URL</div>
              <div className="url">
                https://dev.gist-petition.com/
                {petitionURL}
              </div>
            </div>
            <div className="copy-btn">
              <button onClick={clip}>
                <IoMdAlbums />
              </button>
            </div>
          </div>
          <div className="share-btns">
            <div>공유하기</div>
            <ul className="sns">
              <li className="kakaotalk">
                <a
                  href="#n"
                  id="btnKakao"
                  onClick={() => {
                    fn_sendFB('kakaotalk')
                    return false
                  }}
                  className="kakaotalk"
                  target="_self"
                  title="카카오톡 새창열림"
                >
                  <RiKakaoTalkFill />
                </a>
              </li>
              <li className="facebook">
                <a
                  href="#n"
                  onClick={() => {
                    fn_sendFB('facebook')
                    return false
                  }}
                  className="facebook"
                  target="_self"
                  title="페이스북 새창열림"
                >
                  <RiFacebookFill />
                </a>
              </li>
            </ul>
          </div>
        </SharingPetition>
      </Inner>
    </Container>
  )
}

export default Petition
