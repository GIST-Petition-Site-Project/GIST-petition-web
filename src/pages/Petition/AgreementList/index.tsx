import { Flex, Stack } from '@chakra-ui/react'
import {
  AgreementItem,
  AgreementAnonymousName,
  AgreementCreatedAt,
  ContentWrap,
} from './styles'
import { useEffect, useState } from 'react'
import { getAgreements } from '../../../utils/api/petition/getAgreements'

const AgreementList = ({ petitionId }: PetitionId): JSX.Element => {
  const [response, setResponse] = useState<Array<GetAgreements>>([])

  useEffect(() => {
    const getAllAgreements = async () => {
      try {
        const response = await getAgreements(petitionId)
        setResponse(response?.data?.content)
      } catch (error) {
        console.log(error)
      }
    }
    getAllAgreements()
  }, [])

  return (
    <ul>
      {response.map((res, index) => (
        <AgreementItem key={res.id}>
          <Stack>
            <AgreementAnonymousName>
              익명{response.length - index}
            </AgreementAnonymousName>
            <ContentWrap>
              <div>{res.description}</div>
            </ContentWrap>
          </Stack>
        </AgreementItem>
      ))}
    </ul>
  )
}
export default AgreementList
