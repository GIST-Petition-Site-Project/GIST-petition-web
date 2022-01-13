// 청원 Id로 해당 글, 글 좋아요, 댓글 조회
import { useParams } from 'react-router'
import { Inner, PetitionWrapper, PetitionView } from './styles'
import { Stack, Text } from '@chakra-ui/react'
import PetitionContents from './PetitionContents'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const Post = (): JSX.Element => {
  const { params } = useParams()
  console.log(params)
  return (
    <Inner>
      <PetitionWrapper>
        <PetitionView>
          <PetitionContents></PetitionContents>
          <Stack>
            <Text textAlign={'left'} fontWeight={'bold'} fontSize={'20px'}>
              의견보기
            </Text>
            <CommentForm></CommentForm>
            <CommentList></CommentList>
          </Stack>
        </PetitionView>
      </PetitionWrapper>
    </Inner>
  )
}

export default Post
