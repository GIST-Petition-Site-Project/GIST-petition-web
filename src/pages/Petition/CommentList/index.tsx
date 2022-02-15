import { Flex, Stack } from '@chakra-ui/react'
import {
  CommentItem,
  CommentAnonymousName,
  CommentCreatedAt,
  ContentWrap,
} from './styles'
import { getComments } from '../../../utils/api/comment/getComments'
import { useEffect, useState } from 'react'
import { getAgreements } from './../../../utils/api/petition/getAgreements'

const CommentList = ({ petitionId }: PetitionId): JSX.Element => {
  const [response, setResponse] = useState<Array<GetAgreements>>([])

  useEffect(() => {
    const getAllAgreements = async () => {
      try {
        const status = await getAgreements(petitionId)
        if (status[0] < 400) {
          setResponse(status[1].content)
          console.log(status[1].content)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAllAgreements()
  }, [])

  return (
    <ul>
      {response.map(res => (
        <CommentItem key={res.id}>
          <Stack>
            <CommentAnonymousName>익명{res.id}</CommentAnonymousName>
            <ContentWrap>
              <div>{res.description}</div>
            </ContentWrap>
          </Stack>
        </CommentItem>
      ))}
    </ul>
  )
}
export default CommentList
