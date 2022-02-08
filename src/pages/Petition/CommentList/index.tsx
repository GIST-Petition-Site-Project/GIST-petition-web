import { Flex, Stack } from '@chakra-ui/react'
import {
  CommentItem,
  CommentAnonymousName,
  CommentCreatedAt,
  ContentWrap,
} from './styles'
import { getComments } from '../../../utils/api/comment/getComments'
import { useEffect, useState } from 'react'

const CommentList = ({ petitionId }: PetitionId): JSX.Element => {
  const [response, setResponse] = useState<Array<CommentResponse>>([])

  useEffect(() => {
    const getAllComment = async () => {
      try {
        const status = await getComments(petitionId)
        if (status[0] < 400) {
          setResponse(status[1])
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAllComment()
  }, [])

  return (
    <ul>
      {response.map(res => (
        <CommentItem key={res.id}>
          <Stack>
            <Flex alignItems={'center'}>
              <CommentAnonymousName>{res.userId}&nbsp;</CommentAnonymousName>
              <CommentCreatedAt>
                {res.createdAt.slice(5, 10) +
                  '  ' +
                  res.createdAt.slice(11, 16)}
              </CommentCreatedAt>
            </Flex>
            <ContentWrap>
              <div>{res.content}</div>
            </ContentWrap>
          </Stack>
        </CommentItem>
      ))}
    </ul>
  )
}
export default CommentList
