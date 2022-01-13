import { chakra, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaFileSignature } from 'react-icons/fa'
import {
  getRetrievePost,
  getStateOfAgreement,
  postAgreePost,
} from '../../../utils/api'
import {
  PetitionProgress,
  PetitionTitleWrap,
  PetitionTitle,
  CurrentAgreementsText,
  CurrentAgreements,
  PetitionDescription,
  AgreementButton,
} from './styles'
const CFaFileSignature = chakra(FaFileSignature)

const PetitionContents = ({ postId }: PostId): JSX.Element => {
  const [response, setResponse] = useState<PostResponse>({
    accepted: 0,
    agreements: [
      {
        createdAt: '',
        userId: 0,
      },
    ],
    answered: true,
    category: '',
    createdAt: '',
    description: '',
    id: 0,
    title: '',
    updatedAt: '',
    userId: 0,
  })
  const [isConsented, setIsConsented] = useState(false)

  const handleAgreement = async () => {
    const status = await postAgreePost(postId)
    setIsConsented(true)
  }

  useEffect(() => {
    const getPostInformation = async (id: string) => {
      const getPost = await getRetrievePost(id)
      console.log(getPost)
      if (getPost[0] < 400) {
        setResponse(getPost[1])
      }
    }
    getPostInformation(postId)
  }, [isConsented])

  useEffect(() => {
    const checkAgreeByMe = async (id: string) => {
      const getStateAgree = await getStateOfAgreement(id)
      if (getStateAgree[0] < 400) {
        setIsConsented(getStateAgree[1])
      }
    }
    checkAgreeByMe(postId)
  }, [])

  return (
    <>
      <Stack spacing={6} color={'#333'}>
        <PetitionProgress>
          <Text fontWeight={'bold'} display={'inline-block'}>
            {!response.answered ? '청원진행중' : '답변완료'}&nbsp;
          </Text>
          <Text display={'inline'}>({response.createdAt}~)</Text>
        </PetitionProgress>
        <PetitionTitleWrap>
          <PetitionTitle ml={'20px'} mr={'20px'}>
            {response.title}
          </PetitionTitle>
        </PetitionTitleWrap>
        <CurrentAgreementsText>
          <Text>
            총{' '}
            <CurrentAgreements>{response.agreements.length}</CurrentAgreements>
            명이 동의했습니다.
          </Text>
        </CurrentAgreementsText>
      </Stack>
      <Stack color={'#333'} mt={'20px'} mb={'20px'} spacing={4}>
        <Text fontSize={'20px'} fontWeight={'bold'} align={'left'}>
          청원내용
        </Text>
        <Divider color={'#ccc'}></Divider>
        <PetitionDescription>{response.description}</PetitionDescription>
      </Stack>
      <div>
        <AgreementButton
          onClick={handleAgreement}
          colorScheme={'none'}
          _focus={{ outline: 'none' }}
          disabled={isConsented}
        >
          <Flex>
            <CFaFileSignature />
            <Text>&nbsp;{!isConsented ? '동의하기' : '동의완료'}</Text>
          </Flex>
        </AgreementButton>
      </div>
    </>
  )
}

export default PetitionContents
