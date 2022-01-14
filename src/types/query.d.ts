import { Category } from './enums'

interface Query {
  limit: number
  offset: number
  category: Category
}
