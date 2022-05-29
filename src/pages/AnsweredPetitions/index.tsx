import { Container, PetitionBoard } from './styles'
import PaginationButtons from '@components/PaginationButtons'
import PetitionList from '@components/PetitionList'
import { getAnsweredByQuery } from '@api/petitionAPI'
import Inner from '@components/Inner'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const AnsweredPetitions = (): JSX.Element => {
  const t = useTranslate(locale)

  return (
    <Container>
      <Inner>
        <PetitionBoard>
          <div className="petition_type">
            <span>{t('answered')}</span>
          </div>
          <PetitionList getPetitions={getAnsweredByQuery} />
          <div>
            <PaginationButtons
              getPetitions={getAnsweredByQuery}
              pathname={'/answer'}
            />
          </div>
        </PetitionBoard>
      </Inner>
    </Container>
  )
}

export default AnsweredPetitions
