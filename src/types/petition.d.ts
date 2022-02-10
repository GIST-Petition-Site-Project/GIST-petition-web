interface Petition {
  agreements: number
  answered: boolean
  categoryName: string
  createdAt: string
  description: string
  id: number
  title: string
  updatedAt: string
  userId: number
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
  category?: number | string
}

interface GetPetitions {
  getPetitions: (query: QueryParams) => Promise<any[]>
}
