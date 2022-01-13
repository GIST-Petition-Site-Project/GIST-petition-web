import { chakra, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaFileSignature } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { getRetrievePost } from '../../../utils/api'
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

const PetitionContents = (): JSX.Element => {
  const { postId } = useParams()
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

  const getPostContentsFunction = async (id: string | undefined) => {
    const status = await getRetrievePost(id)
    if (status[0] < 400) {
      setResponse(status[1])
    }
  }

  useEffect(() => {
    getPostContentsFunction(postId)
  }, [])

  return (
    <>
      <Stack spacing={6} color={'#333'}>
        <PetitionProgress>
          <Text fontWeight={'bold'} display={'inline-block'}>
            {response.answered}청원진행중&nbsp;
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
            총 <CurrentAgreements>{response.accepted}</CurrentAgreements>
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
        <AgreementButton colorScheme={'none'} _focus={{ outline: 'none' }}>
          <Flex>
            <CFaFileSignature />
            <Text>&nbsp;동의하기</Text>
          </Flex>
        </AgreementButton>
      </div>
    </>
  )
}

export default PetitionContents
