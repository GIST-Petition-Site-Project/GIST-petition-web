import PetitionList from '../../components/PetitionList'
import { getPetitionsByQuery } from '../../utils/api'

const MyPetitions = (): JSX.Element => {
  return (
    <>
      <PetitionList getPetitions={getPetitionsByQuery} />
    </>
  )
}

export default MyPetitions
