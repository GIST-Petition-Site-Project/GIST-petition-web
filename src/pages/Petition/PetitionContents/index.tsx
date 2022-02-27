import { Divider, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getPetitionById, getRetrieveAnswer } from '@api/petitionAPI'
import {
  PetitionProgress,
  PetitionTitleWrap,
  PetitionTitle,
  CurrentAgreementsText,
  CurrentAgreements,
  PetitionDescription,
  ContentWrap,
  SharingPetition,
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

  const share = (sns: string) => {
    alert('구현중!')
    // const thisUrl = `https://dev.gist-petition.com/${petitionURL}`
    // if (sns == 'facebook') {
    //   const url =
    //     'http://www.facebook.com/sharer/sharer.php?u=' +
    //     encodeURIComponent(thisUrl)
    //   window.open(url, '', 'width=486, height=286')
    // } else if (sns == 'kakaotalk') {
    //   window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY)
    //   window.Kakao.Link.createDefaultButton({
    //     container: '#btnKakao',
    //     objectType: '',
    //     content: {
    //       title: 'GIST 청원',
    //       description: '',
    //       imageUrl: thisUrl,
    //       link: {
    //         mobileWebUrl: thisUrl,
    //         webUrl: thisUrl,
    //       },
    //     },
    //   })
    // }
  }

  useEffect(() => {
    const getPetitionInformation = async (petitionURL: string) => {
      const response = await getPetitionById(petitionURL)
      setResponse(response?.data)
      const getAnswer = await getRetrieveAnswer(petitionId)
      setAnswerContent(getAnswer?.data)
    }
    getPetitionInformation(petitionURL)
  }, [petitionId])

  return (
    <>
      {response?.message !== undefined ? (
        <PetitionTitleWrap>
          <PetitionTitle ml={'20px'} mr={'20px'}>
            {response?.message}
          </PetitionTitle>
        </PetitionTitleWrap>
      ) : (
        <>
          <Stack spacing={6} color={'#333'}>
            <PetitionProgress>
              <Text fontWeight={'bold'} display={'inline-block'}>
                {!response?.answered ? '청원진행중' : '답변완료'}&nbsp;
              </Text>
              <Text display={'inline'}>
                ({getDay(Number(response?.createdAt))}~
                {getDay(Number(response?.createdAt) + 2592000000)})
              </Text>
            </PetitionProgress>
            <PetitionTitleWrap>
              <PetitionTitle ml={'20px'} mr={'20px'}>
                {response?.title}
              </PetitionTitle>
            </PetitionTitleWrap>
            <CurrentAgreementsText>
              <Text>
                총 <CurrentAgreements>{response?.agreements}</CurrentAgreements>
                명이 동의했습니다.
              </Text>
            </CurrentAgreementsText>
          </Stack>
          <Stack color={'#333'} mt={'20px'} mb={'20px'} spacing={4}>
            <Text fontSize={'20px'} fontWeight={'bold'} align={'left'}>
              청원내용
            </Text>
            <Divider color={'#ccc'}></Divider>
            <div>
              <ContentWrap>
                <PetitionDescription>
                  {response?.description}
                </PetitionDescription>
              </ContentWrap>
            </div>
          </Stack>
          {response?.answered ? (
            <Stack color={'#333'} mt={'20px'} mb={'20px'} spacing={4}>
              <Text fontSize={'20px'} fontWeight={'bold'} align={'left'}>
                답변
              </Text>
              <Divider color={'#ccc'}></Divider>
              <div>
                <ContentWrap>
                  <PetitionDescription>
                    {answerContent?.content}
                  </PetitionDescription>
                </ContentWrap>
              </div>
            </Stack>
          ) : (
            <div>
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
                          share('facebook')
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
                <div className="share-url">
                  <div className="url-box">
                    <div>URL</div>
                    <div className="url">
                      https://www.gist-petition.com/
                      {petitionURL}
                    </div>
                  </div>
                  <div className="copy-btn">
                    <button onClick={clip}>
                      <IoMdAlbums />
                    </button>
                  </div>
                </div>
              </SharingPetition>
              <Stack>
                <Text
                  textAlign={'left'}
                  fontWeight={'bold'}
                  fontSize={'20px'}
                  p={'0.5em 0'}
                >
                  청원동의{' '}
                  <span style={{ color: '#FF0000' }}>
                    {response?.agreements}{' '}
                  </span>
                  명
                </Text>
                <AgreementForm petitionId={petitionId}></AgreementForm>
                <AgreementList
                  petitionId={petitionId}
                  totalAgreement={response?.agreements}
                ></AgreementList>
              </Stack>
            </div>
          )}

          <NeedLoginModal disclosure={{ isOpen, onClose }}></NeedLoginModal>
        </>
      )}
    </>
  )
}

export default PetitionContents
