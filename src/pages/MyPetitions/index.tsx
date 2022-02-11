import PetitionList from '../../components/PetitionList'
import { getMyPetitionsByQuery } from '../../utils/api'

const MyPetitions = (): JSX.Element => {
  return (
    <>
      <PetitionList getPetitions={getMyPetitionsByQuery} />
    </>
  )
}

export default MyPetitions
