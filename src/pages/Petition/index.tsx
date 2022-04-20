import { useLocation, useParams } from 'react-router'
import { Container } from './styles'
import PetitionContents from './PetitionContents'
import {
  getAgreements,
  getId,
  getPetitionById,
  getStateOfAgreement,
} from '@api/petitionAPI'
import { useEffect, useState } from 'react'
import Inner from '@components/Inner'
import qs from 'qs'
import setMetaTags from '@utils/setMetatags'

const Petition = (): JSX.Element => {
  const { param } = useParams()
  const { search } = useLocation()
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const [id, setId] = useState('')
  const [petition, setPetition] = useState<Petition>()
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

  // 커스텀훅으로 빼도 좋을것 같음 @kimjngyun
  useEffect(() => {
    if (petition) {
      setMetaTags(
        petition.title,
        petition.description,
        location.origin + location.pathname,
      )
    }

    return () => {
      setMetaTags(
        '지스트 청원',
        '학교에 나의 의견을 공식적으로 건의하자!',
        'https://www.gist-petition.com',
      )
    }
  }, [petition])

  const petitionContentsProps = {
    id,
    petition,
    agreements,
    totalPages,
    totalAgreement,
    isConsented,
  }

  return (
    <Container>
      <Inner>
        <div className="petition_wrap">
          <PetitionContents {...petitionContentsProps}></PetitionContents>
        </div>
      </Inner>
    </Container>
  )
}

export default Petition
