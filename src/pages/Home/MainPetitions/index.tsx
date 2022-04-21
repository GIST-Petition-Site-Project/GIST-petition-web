import Inner from '@components/Inner'
import PetitionList from '@components/PetitionList'
import {
  getPetitionsByQuery,
  getWaitingByQuery,
  getAnsweredByQuery,
  getRejectedByQuery,
} from '@api/petitionAPI'
import { PetitionsSection } from './styles'

const MainPetitions = (): JSX.Element => {
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
          <span>최근 답변된 청원</span>
        </div>
        <PetitionList
          getPetitions={() =>
            getAnsweredByQuery({ size: 5, sort: 'createdAt,desc' })
          }
        ></PetitionList>
        <div className="petitions_title">
          <span>최근 반려된 청원</span>
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
