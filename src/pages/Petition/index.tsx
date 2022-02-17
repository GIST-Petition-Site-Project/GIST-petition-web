// 청원 Id로 해당 글, 글 좋아요, 댓글 조회
import { useParams } from 'react-router'
import { Inner, PetitionWrapper, PetitionView } from './styles'
import PetitionContents from './PetitionContents'
import { getPetitionById } from '../../utils/api'
import { useEffect, useState } from 'react'
import AgreementForm from './AgreementForm'
import AgreementList from './AgreementList'

const Petition = (): JSX.Element => {
  const { id } = useParams()
  const [petitionId, setPetitionId] = useState<string>(String(id))
  const petitionURL: string = location.pathname.slice(1)
  const getPetitionId = async (petitionURL: string) => {
    const response = await getPetitionById(petitionURL)
    if (response?.data?.id) {
      setPetitionId(String(response?.data?.id))
    }
  }
  useEffect(() => {
    getPetitionId(petitionURL)
  }, [])
  return (
    <Inner>
      <PetitionWrapper>
        <PetitionView p={{ base: '30px 10px', md: '50px 30px' }}>
          <PetitionContents
            petitionURL={petitionURL}
            petitionId={petitionId}
          ></PetitionContents>
        </PetitionView>
      </PetitionWrapper>
    </Inner>
  )
}

export default Petition
