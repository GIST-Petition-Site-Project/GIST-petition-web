import {
  PaginationNext,
  PaginationPageGroup,
  PaginationPrevious,
} from '@ajna/pagination'

import styled from '@emotion/styled'

const PostsPaginationPrevious = styled(PaginationPrevious)`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0;
  width: 92px;
`
const PostsPaginationPageGroup = styled(PaginationPageGroup)`
  width: 100%;
  justify-content: center;
`

const PostsPaginationNext = styled(PaginationNext)`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0;
  width: 92px;
`

export {
  PostsPaginationPrevious,
  PostsPaginationNext,
  PostsPaginationPageGroup,
}
