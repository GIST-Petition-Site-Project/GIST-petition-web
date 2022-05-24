import Inner from '@components/Inner'
import PetitionList from '@components/PetitionList'
import {
  getPetitionsByQuery,
  getWaitingByQuery,
  getAnsweredByQuery,
  getRejectedByQuery,
} from '@api/petitionAPI'
import { PetitionsSection } from './styles'
import { useTranslate } from '@hooks/useTranslate'
import locale from './locale'

const MainPetitions = (): JSX.Element => {
  const t = useTranslate(locale)
  return (
    <PetitionsSection>
      <Inner>
        <div className="petitions_title">
          <span>추천순 TOP 5</span>
        </div>
        <PetitionList
          getPetitions={() =>
            getPetitionsByQuery({
              size: 5,
              sort: 'agreeCount,desc',
            })
          }
        ></PetitionList>
        <div className="petitions_title">
          <span>답변 대기 중인 청원</span>
        </div>
        <PetitionList
          getPetitions={() =>
            getWaitingByQuery({
              size: 5,
              sort: 'agreeCount,desc',
            })
          }
        ></PetitionList>
        <div className="petitions_title">
          <span>{t('recent')}</span>
        </div>
        <PetitionList
          getPetitions={() =>
            getAnsweredByQuery({ size: 5, sort: 'createdAt,desc' })
          }
        ></PetitionList>
        <div className="petitions_title">
          <span>{t('reject')}</span>
        </div>
        <PetitionList
          getPetitions={() =>
            getRejectedByQuery({ size: 5, sort: 'createdAt,desc' })
          }
        ></PetitionList>
      </Inner>
    </PetitionsSection>
  )
}
export default MainPetitions
