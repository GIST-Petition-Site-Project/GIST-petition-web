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
  size: number
  page: number
  category: number
}
