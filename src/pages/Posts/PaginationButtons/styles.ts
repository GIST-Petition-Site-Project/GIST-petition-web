import {
  PaginationNext,
  PaginationPageGroup,
  PaginationPrevious,
} from '@ajna/pagination'

import theme from '../../../style/theme'
import styled from '@emotion/styled'

const PostsPaginationPrevious = styled(PaginationPrevious)`
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ligthGray};
  border-radius: 0;
  width: ${theme.size.paginationWidth}; ;
`
const PostsPaginationPageGroup = styled(PaginationPageGroup)`
  width: 100%;
  justify-content: center;
`

const PostsPaginationNext = styled(PaginationNext)`
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.ligthGray};
  border-radius: 0;
  width: ${theme.size.paginationWidth};
`

export {
  PostsPaginationPrevious,
  PostsPaginationNext,
  PostsPaginationPageGroup,
}
