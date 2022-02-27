import { useParams } from 'react-router'
import { Container, PetitionWrapper } from './styles'
import PetitionContents from './PetitionContents'
import { getPetitionById } from '@api/petitionAPI'
import { useEffect, useState } from 'react'

import Inner from '@components/Inner'

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
    <Container>
      <Inner>
        <PetitionWrapper>
          <PetitionContents
            petitionURL={petitionURL}
            petitionId={petitionId}
          ></PetitionContents>
        </PetitionWrapper>
      </Inner>
    </Container>
  )
}

export default Petition
