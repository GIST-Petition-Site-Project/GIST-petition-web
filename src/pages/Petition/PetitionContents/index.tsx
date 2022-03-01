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
import { idText } from 'typescript'

interface Props {
  id: string
  petition: Petition | undefined
  answer: Answer | undefined
  totalPages: number
  totalAgreement: number
  agreements: Agreement[]
  isConsented: boolean
}

const PetitionContents = ({
  id,
  petition,
  answer,
  totalPages,
  agreements,
  totalAgreement,
  isConsented,
}: Props): JSX.Element => {
  const { isOpen, onClose } = useDisclosure()

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
    const thisUrl = location.href
    if (sns == 'facebook') {
      const url =
        'http://www.facebook.com/sharer/sharer.php?u=' +
        encodeURIComponent(thisUrl)
      window.open(url, '', 'width=486, height=286')
    } else if (sns == 'kakaotalk') {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY)
      window.Kakao.Link.createDefaultButton({
        container: '#btnKakao',
        objectType: 'feed',
        content: {
          title: 'GIST 청원',
          description: petition?.title,
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

  return (
    <>
      {petition?.message !== undefined ? (
        <PetitionTitleWrap>
          <PetitionTitle ml={'20px'} mr={'20px'}>
            {petition?.message}
          </PetitionTitle>
        </PetitionTitleWrap>
      ) : (
        <>
          <Stack spacing={6} color={'#333'}>
            <PetitionProgress>
              <Text fontWeight={'bold'} display={'inline-block'}>
                {response?.answered
                  ? '답변완료'
                  : response?.expired
                  ? '청원기간만료'
                  : response?.released
                  ? '청원진행중'
                  : '사전동의진행중'}
                &nbsp;
              </Text>
              <Text display={'inline'}>
                ({getDay(Number(petition?.createdAt))}~
                {getDay(Number(petition?.createdAt) + 2592000000)})
              </Text>
            </PetitionProgress>
            <PetitionTitleWrap>
              <PetitionTitle ml={'20px'} mr={'20px'}>
                {petition?.title}
              </PetitionTitle>
            </PetitionTitleWrap>
            <CurrentAgreementsText>
              <Text>
                총 <CurrentAgreements>{petition?.agreements}</CurrentAgreements>
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
                  {petition?.description}
                </PetitionDescription>
              </ContentWrap>
            </div>
          </Stack>
          {petition?.answered ? (
            <Stack color={'#333'} mt={'20px'} mb={'20px'} spacing={4}>
              <Text fontSize={'20px'} fontWeight={'bold'} align={'left'}>
                답변
              </Text>
              <Divider color={'#ccc'}></Divider>
              <div>
                <ContentWrap>
                  <PetitionDescription>{answer?.content}</PetitionDescription>
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
                    <div className="url">{location.href}</div>
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
                    {petition?.agreements}{' '}
                  </span>
                  명
                </Text>
                <AgreementForm {...agreementFormProps}></AgreementForm>
                <AgreementList {...agreementListProps}></AgreementList>
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
