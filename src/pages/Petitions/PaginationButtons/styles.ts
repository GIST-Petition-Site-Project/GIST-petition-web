import {
  PaginationNext,
  PaginationPageGroup,
  PaginationPrevious,
} from '@ajna/pagination'

import theme from '../../../style/theme'
import styled from '@emotion/styled'

const PetitionsPaginationPrevious = styled(PaginationPrevious)`
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ligthGray};
  border-radius: 0;
  width: ${theme.size.paginationWidth}; ;
`
const PetitionsPaginationPageGroup = styled(PaginationPageGroup)`
  width: 100%;
  justify-content: center;
`

const PetitionsPaginationNext = styled(PaginationNext)`
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ligthGray};
  border-radius: 0;
  width: ${theme.size.paginationWidth};
`

export {
  PetitionsPaginationPrevious,
  PetitionsPaginationNext,
  PetitionsPaginationPageGroup,
}
