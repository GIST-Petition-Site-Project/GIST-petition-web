import {
  PaginationNext,
  PaginationPageGroup,
  PaginationPrevious,
} from '@ajna/pagination'

import theme from '../../style/theme'
import styled from '@emotion/styled'

const PetitionsPaginationPrevious = styled(PaginationPrevious)`
  background-color: ${theme.color.WHITE};
  border: 1px solid ${theme.color.LIGHT_GRAY};
  border-radius: 0;
  /* width: ${theme.size.PAGINATION_WIDTH}; ; */
`
const PetitionsPaginationPageGroup = styled(PaginationPageGroup)`
  justify-content: center;
`

const PetitionsPaginationNext = styled(PaginationNext)`
  background-color: ${theme.color.WHITE};
  border: 1px solid ${theme.color.LIGHT_GRAY};
  border-radius: 0;
  /* width: ${theme.size.PAGINATION_WIDTH}; */
`

export {
  PetitionsPaginationPrevious,
  PetitionsPaginationNext,
  PetitionsPaginationPageGroup,
}
