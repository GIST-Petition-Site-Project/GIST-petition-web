import { useLocation, useParams } from 'react-router'
import { Container, PetitionWrapper } from './styles'
import PetitionContents from './PetitionContents'
import {
  getAgreements,
  getId,
  getPetitionById,
  getRetrieveAnswer,
  getStateOfAgreement,
} from '@api/petitionAPI'
import { useEffect, useState } from 'react'

import Inner from '@components/Inner'
import qs from 'qs'

const Petition = (): JSX.Element => {
  const { param } = useParams()
  const { search } = useLocation()
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const [id, setId] = useState('')
  const [petition, setPetition] = useState<Petition>()
  const [answer, setAnswer] = useState<Answer>()
  const [agreements, setAgreements] = useState<Agreement[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [totalAgreement, setTotalAgreement] = useState(0)
  const [isConsented, setIsConsented] = useState(false)
  const fetchPetition = async (param: string) => {
    const id = await getId(param)
    setId(id)
    if (location.href.includes('temp')) {
      const petitionResponse = await getPetitionById(`temp/${param}`)
      setPetition(petitionResponse.data)
    } else {
      const petitionResponse = await getPetitionById(id)
      setPetition(petitionResponse.data)
    }
    const consentedResponse = await getStateOfAgreement(id)
    setIsConsented(consentedResponse.data)
  }

  useEffect(() => {
    fetchPetition(param as string)
  }, [])

  const fetchAnswer = async () => {
    if (!petition?.answered) return
    const response = await getRetrieveAnswer(id)
    setAnswer(response.data)
  }

  useEffect(() => {
    fetchAnswer()
  }, [petition])

  const fetchAgreements = async () => {
    if (!id) return
    const agreementsResponse = await getAgreements(id, queryParams)
    setAgreements(agreementsResponse?.data?.content || [])
    setTotalPages(agreementsResponse?.data?.totalPages)
    setTotalAgreement(agreementsResponse?.data?.totalElements)
  }

  useEffect(() => {
    fetchAgreements()
  }, [search, petition])

  const petitionContentsProps = {
    id,
    petition,
    answer,
    agreements,
    totalPages,
    totalAgreement,
    isConsented,
  }

  return (
    <Container>
      <Inner>
        <PetitionWrapper>
          <PetitionContents {...petitionContentsProps}></PetitionContents>
        </PetitionWrapper>
      </Inner>
    </Container>
  )
}

export default Petition
