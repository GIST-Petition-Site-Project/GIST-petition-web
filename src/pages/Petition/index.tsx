// 청원 Id로 해당 글, 글 좋아요, 댓글 조회
import { useParams } from 'react-router'
import { Inner, PetitionWrapper, PetitionView } from './styles'
import { Stack, Text } from '@chakra-ui/react'
import PetitionContents from './PetitionContents'

const Petition = (): JSX.Element => {
  const { petitionId } = useParams()
  const castedPetitionId = petitionId as string
  return (
    <Inner>
      <PetitionWrapper>
        <PetitionView p={{ base: '30px 10px', md: '50px 30px' }}>
          <PetitionContents petitionId={castedPetitionId}></PetitionContents>
        </PetitionView>
      </PetitionWrapper>
    </Inner>
  )
}

export default Petition
