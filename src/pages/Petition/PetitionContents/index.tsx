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
import { useEffect, useState } from 'react'
import Youtube from '@components/youtube'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'
import { useAppSelect } from '@redux/store.hooks'

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
  const t = useTranslate(locale)

  const [status, setStatus] = useState('')
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
    alert(t('copied'))
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

    if (petition?.status === 'ANSWERED') {
      setStatus(t('answered'))
    } else if (petition?.status === 'REJECTED') {
      setStatus(t('rejected'))
    } else if (petition?.expired) {
      setStatus(t('expired'))
    } else if (petition?.status === 'RELEASED') {
      if (petition?.agreeCount >= 50) {
        setStatus(t('waiting'))
      } else {
        setStatus(t('progress'))
      }
    } else if (petition?.status === 'TEMPORARY') {
      setStatus(t('prior'))
    }
  }, [petition, useAppSelect(select => select.lang.mode)])

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
                  {status}
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
                  {t('total')}
                  <span>{petition?.agreeCount}</span>
                  {t('signed')}
                </span>
              </div>
            </Stack>
          </HeadSection>
          <DescriptionSection>
            <Stack spacing={4}>
              <span>{t('description')}</span>
              <Divider color={'#ccc'}></Divider>
              <div>
                <div className="content">
                  <div className="description">{petition?.description}</div>
                </div>
              </div>
            </Stack>
          </DescriptionSection>
          {(petition?.status === 'ANSWERED' || 'REJECTED') && (
            <AnswerSection>
              <Stack spacing={4}>
                <span>
                  {petition?.status === 'ANSWERED'
                    ? t('answer')
                    : petition?.status === 'REJECTED' && t('rejection')}
                </span>
                <Divider color={'#ccc'}></Divider>
                <div>
                  <div className="content">
                    {petition?.answer?.videoUrl && (
                      <Youtube url={petition?.answer.videoUrl}></Youtube>
                    )}
                    {petition?.status === 'ANSWERED' && (
                      <div className="answer">
                        {petition?.answer.description}
                      </div>
                    )}
                    {petition?.status === 'REJECTED' && (
                      <div className="answer">
                        {petition?.rejection.description}
                      </div>
                    )}
                  </div>
                </div>
              </Stack>
            </AnswerSection>
          )}
          <SharingPetition>
            <div className="share-btns">
              <div>{t('share')}</div>
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
                  <span>{t('copyBtn')}</span>
                </button>
              </div>
            </div>
          </SharingPetition>
          <AgreementsSection>
            <Stack>
              <span className="num_of_agree">
                {t('agree')}
                <span>{petition?.agreeCount} </span>
                {t('people')}
              </span>
              {!petition?.expired && petition?.status !== 'REJECTED' && (
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
