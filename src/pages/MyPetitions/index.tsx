import { Container, PetitionBoard } from './styles'
import PaginationButtons from '@components/PaginationButtons'
import { getMineByQuery } from '@api/petitionAPI'
import MyPetitionList from './MyPetitionList'
import { useNavigate } from 'react-router-dom'
import Inner from '@components/Inner'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const MyPetitions = (): JSX.Element => {
  const t = useTranslate(locale)

  const navigate = useNavigate()

  return (
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>{t('mine')}</span>
          </div>
          <MyPetitionList getPetitions={getMineByQuery} />
          <div className="pagination">
            <PaginationButtons
              getPetitions={getMineByQuery}
              pathname={'/mypetitions'}
            />
          </div>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default MyPetitions
