interface Petition {
  agreeCount: number
  answer: Answer
  answered: boolean
  categoryName: string
  createdAt: number
  description: string
  expired: boolean
  rejected: boolean
  id: number
  released: boolean
  tempUrl: string
  title: string
  updatedAt: number
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
  sort?: string
}

interface GetPetitions {
  getPetitions: (query: QueryParams) => Promise<AxiosResponse<any, any>>
}

interface AgreePetition {
  description: string
}

interface Agreement {
  description: string
  id: number
  createdAt: number
  totalPages: number
}
interface Window {
  Kakao: any
}
