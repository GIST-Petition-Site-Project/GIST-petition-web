import { Divider, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getPetitionById, getRetrieveAnswer } from '@api/petitionAPI'
import {
  HeadSection,
  DescriptionSection,
  AnswerSection,
  SharingPetition,
  AgreementsSection,
} from './styles'
import AgreementList from './AgreementList'
import AgreementForm from './AgreementForm'
import { useDisclosure } from '@chakra-ui/react'
import NeedLoginModal from '@components/NeedLoginModal'
import { getDay } from '@utils/getTime'
import { RiKakaoTalkFill, RiFacebookFill } from 'react-icons/ri'
import { IoMdAlbums } from 'react-icons/io'

interface IProps {
  petitionURL: string
  petitionId: string
}

const PetitionContents = ({ petitionURL, petitionId }: IProps): JSX.Element => {
  const [response, setResponse] = useState<Petition | undefined>()
  const [answerContent, setAnswerContent] = useState<
    AnswerContent | undefined
  >()
  const { isOpen, onClose } = useDisclosure()

  const fetch = async (petitionURL: string) => {
    const response = await getPetitionById(petitionURL)
    setResponse(response?.data)
    const getAnswer = await getRetrieveAnswer(petitionId)
    setAnswerContent(getAnswer?.data)

    share('kakaotalk')
  }
  const clip = () => {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = String(location)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('URL이 복사되었습니다.')
  }

  const share = (sns: string) => {
    const thisUrl = `https://dev.gist-petition.com/${petitionURL}`
    if (sns == 'facebook') {
      const url =
        'http://www.facebook.com/sharer/sharer.php?u=' +
        encodeURIComponent(thisUrl)
      window.open(url, '', 'width=486, height=286')
    } else if (sns == 'kakaotalk') {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY)
      }
      window.Kakao.Link.createDefaultButton({
        container: '#btnKakao',
        objectType: 'feed',
        content: {
          title: response?.title || 'GIST 청원',
          description: response?.description || '',
          imageUrl:
            'https://raw.githubusercontent.com/GIST-Petition-Site-Project/GIST-petition-web-ts/develop/src/assets/img/share_img.png',
          link: {
            mobileWebUrl: thisUrl,
            webUrl: thisUrl,
          },
        },
      })
    }
  }

  useEffect(() => {
    fetch(petitionURL)
  }, [petitionId])

  return (
    <>
      {response?.message !== undefined ? (
        <HeadSection>
          <div className="title">
            <div>{response?.message}</div>
          </div>
        </HeadSection>
      ) : (
        <>
          <HeadSection>
            <Stack spacing={6}>
              <div className="info">
                <span className="progress">
                  {response?.answered
                    ? '답변완료'
                    : response?.expired
                    ? '청원기간만료'
                    : response?.released
                    ? '청원진행중'
                    : '사전동의진행중'}
                  &nbsp;
                </span>
                <span className="duration">
                  ({getDay(Number(response?.createdAt))}~
                  {getDay(Number(response?.createdAt) + 2592000000)})
                </span>
              </div>
              <div className="title">
                <div>{response?.title}</div>
              </div>
              <div className="current_agree">
                <span className="num_of_agree">
                  총 <span>{response?.agreements}</span>
                  명이 동의했습니다.
                </span>
              </div>
            </Stack>
          </HeadSection>
          <DescriptionSection>
            <Stack spacing={4}>
              <span>청원내용</span>
              <Divider color={'#ccc'}></Divider>
              <div>
                <div className="content">
                  <div className="description">{response?.description}</div>
                </div>
              </div>
            </Stack>
          </DescriptionSection>
          {response?.answered && (
            <AnswerSection>
              <Stack spacing={4}>
                <span>답변</span>
                <Divider color={'#ccc'}></Divider>
                <div>
                  <div className="content">
                    <div className="answer">{answerContent?.content}</div>
                  </div>
                </div>
              </Stack>
            </AnswerSection>
          )}
          <SharingPetition>
            <div className="share-btns">
              <div>공유하기</div>
              <ul className="sns">
                <li className="kakaotalk">
                  <a
                    href="#n"
                    id="btnKakao"
                    onClick={() => {
                      share('kakaotalk')
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
                      share('facebook')
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
            <div className="share-url">
              <div className="url-box">
                <div>URL</div>
                <div className="url">{String(location)}</div>
              </div>
              <div className="copy-btn">
                <button onClick={clip}>
                  <IoMdAlbums />
                </button>
              </div>
            </div>
          </SharingPetition>
          <AgreementsSection>
            <Stack>
              <span className="num_of_agree">
                청원동의 <span>{response?.agreements} </span>명
              </span>
              {!response?.expired && (
                <AgreementForm petitionId={petitionId}></AgreementForm>
              )}
              <AgreementList
                petitionId={petitionId}
                totalAgreement={response?.agreements}
              ></AgreementList>
            </Stack>
          </AgreementsSection>

          <NeedLoginModal disclosure={{ isOpen, onClose }}></NeedLoginModal>
        </>
      )}
    </>
  )
}

export default PetitionContents
