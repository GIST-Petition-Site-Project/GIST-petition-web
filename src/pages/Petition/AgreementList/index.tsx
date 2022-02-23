import { Stack } from '@chakra-ui/react'
import { AgreementItem, AgreementAnonymousName, ContentWrap } from './styles'
import { useEffect, useState } from 'react'
import { getAgreements } from '@api/petitionAPI'

interface IProps {
  petitionId: string
}

const AgreementList = ({ petitionId }: IProps): JSX.Element => {
  const [response, setResponse] = useState<Array<GetAgreements>>([])
  const getAllAgreements = async () => {
    try {
      const response = await getAgreements(petitionId)
      setResponse(response?.data?.content || [])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllAgreements()
  }, [petitionId])

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
