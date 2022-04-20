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
import { Helmet } from 'react-helmet'
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

  const petitionContentsProps = {
    id,
    petition,
    agreements,
    totalPages,
    totalAgreement,
    isConsented,
  }

  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={petition?.description || '지스트 청원'}
        />
        <meta
          property="og:description"
          content={
            petition?.message?.slice(0, 100) ||
            '학교에 나의 의견을 공식적으로 건의하자!'
          }
        />
        <meta property="og:image" content="../../assets/img/share_image.png" />
      </Helmet>
      <Container>
        <Inner>
          <div className="petition_wrap">
            <PetitionContents {...petitionContentsProps}></PetitionContents>
          </div>
        </Inner>
      </Container>
    </>
  )
}

export default Petition
