import { Divider, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getPetitionById, getRetrieveAnswer } from '../../../utils/api'
import {
  PetitionProgress,
  PetitionTitleWrap,
  PetitionTitle,
  CurrentAgreementsText,
  CurrentAgreements,
  PetitionDescription,
  ContentWrap,
} from './styles'
import AgreementList from './../AgreementList'
import { useDisclosure } from '@chakra-ui/react'
import NeedLoginModal from '../../../components/NeedLoginModal'
import AgreementForm from './../AgreementForm'

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
                ({response?.createdAt.slice(0, 10)}~)
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
                <AgreementList petitionId={petitionId}></AgreementList>
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
