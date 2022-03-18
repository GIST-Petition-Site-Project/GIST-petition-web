import { Divider, Stack } from '@chakra-ui/react'
import {
  HeadSection,
  DescriptionSection,
  AnswerSection,
  SharingPetition,
  AgreementsSection,
} from './styles'
import AgreementList from './AgreementList'
import AgreementForm from './AgreementForm'
import { getDay } from '@utils/getTime'
import { RiKakaoTalkFill, RiFacebookFill } from 'react-icons/ri'
import { IoMdAlbums } from 'react-icons/io'
import { useEffect, useRef } from 'react'
import Youtube from '@components/youtube'

interface IProps {
  id: string
  petition: Petition | undefined
  totalPages: number
  totalAgreement: number
  agreements: Agreement[]
  isConsented: boolean
}

const PetitionContents = ({
  id,
  petition,
  totalPages,
  agreements,
  totalAgreement,
  isConsented,
}: IProps): JSX.Element => {
  const sharingURL =
    process.env.NODE_ENV === 'development'
      ? 'https://dev.gist-petition.com' + location.pathname
      : location.origin + location.pathname

  const agreementListProps = {
    totalAgreement,
    totalPages,
    agreements,
  }

  const agreementFormProps = {
    id,
    isConsented,
  }

  const clip = () => {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = String(location.origin + location.pathname)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('URL이 복사되었습니다.')
  }

  const shareFacebook = () => {
    const url =
      'http://www.facebook.com/sharer/sharer.php?u=' +
      encodeURIComponent(sharingURL)
    window.open(url, '', 'width=256, height=512')
  }

  const shareKakaoTalk = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY)
    }
    window.Kakao.Link.createDefaultButton({
      container: '#btnKakao',
      objectType: 'feed',
      content: {
        title: petition?.title,
        description: petition?.description,
        imageUrl:
          'https://raw.githubusercontent.com/GIST-Petition-Site-Project/GIST-petition-web/develop/src/assets/img/share_image.png',
        link: {
          mobileWebUrl: sharingURL,
          webUrl: sharingURL,
        },
      },
    })
  }

  useEffect(() => {
    if (petition) {
      shareKakaoTalk()
    }
  }, [petition])

  return (
    <>
      {petition?.message !== undefined ? (
        <HeadSection>
          <div className="title">
            <div>{petition?.message}</div>
          </div>
        </HeadSection>
      ) : (
        <>
          <HeadSection>
            <Stack spacing={6}>
              <div className="info">
                <span className="progress">
                  {petition?.answered
                    ? '답변완료'
                    : petition?.expired
                    ? '청원기간만료'
                    : petition?.released
                    ? '청원진행중'
                    : '사전동의진행중'}
                  &nbsp;
                </span>
                <span className="duration">
                  ({getDay(Number(petition?.createdAt))}~
                  {getDay(Number(petition?.createdAt) + 2592000000)})
                </span>
              </div>
              <div className="title">
                <div>{petition?.title}</div>
              </div>
              <div className="current_agree">
                <span className="num_of_agree">
                  총 <span>{petition?.agreeCount}</span>
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
                  <div className="description">{petition?.description}</div>
                </div>
              </div>
            </Stack>
          </DescriptionSection>
          {petition?.answered && (
            <AnswerSection>
              <Stack spacing={4}>
                <span>답변</span>
                <Divider color={'#ccc'}></Divider>
                <div>
                  <div className="content">
                    <Youtube url={'XbL-AwYX8ME'}></Youtube>
                    <div className="answer">{petition?.answer.description}</div>
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
                  <button
                    id="btnKakao"
                    onClick={() => {
                      shareKakaoTalk()
                    }}
                    className="kakaotalk"
                    title="카카오톡 새창열림"
                  >
                    <RiKakaoTalkFill />
                  </button>
                </li>
                <li className="facebook">
                  <button
                    onClick={() => {
                      shareFacebook()
                    }}
                    className="facebook"
                    title="페이스북 새창열림"
                  >
                    <RiFacebookFill />
                  </button>
                </li>
              </ul>
            </div>
            <div className="share-url">
              <div className="url-box">
                <div>URL</div>
                <div className="url">{sharingURL}</div>
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
                청원동의 <span>{petition?.agreeCount} </span>명
              </span>
              {!petition?.expired && (
                <AgreementForm {...agreementFormProps}></AgreementForm>
              )}
              <AgreementList {...agreementListProps} />
            </Stack>
          </AgreementsSection>
        </>
      )}
    </>
  )
}

export default PetitionContents
