interface Petition {
  agreements: number
  answered: boolean
  expired: boolean
  categoryName: string
  createdAt: string
  description: string
  id: number
  title: string
  updatedAt: string
  userId: number
  tempUrl: string
  message: string
}

interface PetitionId {
  petitionId: string
}

interface PetitionsInput {
  title: string
  categoryId: number
  description: string
}

interface QueryParams {
  size?: number | string
  page?: number | string
  categoryId?: number | string
}

interface GetPetitions {
  getPetitions: (query: QueryParams) => Promise<AxiosResponse<any, any>>
}

interface PaginationButton {
  getPetitions: (query: QueryParams) => Promise<AxiosResponse<any, any>>
  pathname: string
}

interface AgreePetition {
  description: string
}

interface GetAgreements {
  description: string
  id: number
}
interface Window {
  Kakao: any
}
