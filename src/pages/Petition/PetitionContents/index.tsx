import { chakra, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaFileSignature } from 'react-icons/fa'
import {
  getPetitionById,
  getStateOfAgreement,
  postAgreePetition,
  getRetrieveAnswer,
} from '../../../utils/api'
import {
  PetitionProgress,
  PetitionTitleWrap,
  PetitionTitle,
  CurrentAgreementsText,
  CurrentAgreements,
  PetitionDescription,
  AgreementButton,
  ContentWrap,
} from './styles'
import CommentList from '../CommentList'
import { useParams } from 'react-router-dom'

const CFaFileSignature = chakra(FaFileSignature)

import { useDisclosure } from '@chakra-ui/react'
import NeedLoginModal from '../../../components/NeedLoginModal'
import CommentForm from './../CommentForm/index'

const PetitionContents = ({ petitionId }: PetitionId): JSX.Element => {
  const [response, setResponse] = useState<Petition>({
    agreements: 0,
    answered: true,
    categoryName: '',
    createdAt: '',
    description: '',
    id: 0,
    title: '',
    updatedAt: '',
    userId: 0,
  })
  const [isConsented, setIsConsented] = useState<boolean>(false)
  const [answerContent, setAnswerContent] = useState<
    AnswerContent | undefined
  >()
  const { onOpen, isOpen, onClose } = useDisclosure()

  useEffect(() => {
    const getPetitionInformation = async (id: string) => {
      const getPetition = await getPetitionById(id)
      if (getPetition[0] < 400) {
        setResponse(getPetition[1])
      }
    }
    getPetitionInformation(petitionId)
  }, [isConsented])

  useEffect(() => {
    const checkAgreeByMe = async (id: string) => {
      const getStateAgree = await getStateOfAgreement(id)
      if (getStateAgree[0] < 400) {
        setIsConsented(getStateAgree[1])
      }
    }
    checkAgreeByMe(petitionId)
  }, [])

  useEffect(() => {
    const getAnswerContent = async (id: string) => {
      const getAnswer = await getRetrieveAnswer(id)
      setAnswerContent(getAnswer?.data)
    }
    getAnswerContent(petitionId)
  }, [])
  const castedPetitionId = petitionId as string
  return (
    <>
      <Stack spacing={6} color={'#333'}>
        <PetitionProgress>
          <Text fontWeight={'bold'} display={'inline-block'}>
            {!response.answered ? '청원진행중' : '답변완료'}&nbsp;
          </Text>
          <Text display={'inline'}>({response.createdAt.slice(0, 10)}~)</Text>
        </PetitionProgress>
        <PetitionTitleWrap>
          <PetitionTitle ml={'20px'} mr={'20px'}>
            {response.title}
          </PetitionTitle>
        </PetitionTitleWrap>
        <CurrentAgreementsText>
          <Text>
            총 <CurrentAgreements>{response.agreements}</CurrentAgreements>
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
            <PetitionDescription>{response.description}</PetitionDescription>
          </ContentWrap>
        </div>
      </Stack>
      {response.answered ? (
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
            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'20px'}>
              청원동의{' '}
              <span style={{ color: '#FF0000' }}>{response.agreements} </span>명
            </Text>
            <CommentForm petitionId={castedPetitionId}></CommentForm>
            <CommentList petitionId={castedPetitionId}></CommentList>
          </Stack>
        </div>
      )}

      <NeedLoginModal disclosure={{ isOpen, onClose }}></NeedLoginModal>
    </>
  )
}

export default PetitionContents
