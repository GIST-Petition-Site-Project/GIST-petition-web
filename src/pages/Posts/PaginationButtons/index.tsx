import {
  PaginationPage,
  PaginationContainer,
  Pagination,
  usePagination,
} from '@ajna/pagination'

import {
  PostsPaginationNext,
  PostsPaginationPageGroup,
  PostsPaginationPrevious,
} from './styles'

function PaginationButtons() {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: 12,
    initialState: { currentPage: 1 },
  })

  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    >
      <PaginationContainer mt="40px">
        <PostsPaginationPrevious>이전</PostsPaginationPrevious>
        <PostsPaginationPageGroup>
          {pages.map((page: number) => (
            <PaginationPage
              w={'40px'}
              bg="#fff"
              border="1px solid #ccc"
              borderRadius="0"
              fontSize="sm"
              _hover={{
                bg: '#2F363C',
                color: '#fff',
                border: 'none',
              }}
              key={`pagination_page_${page}`}
              page={page}
              _current={{
                bg: '#2F363C',
                color: '#fff',
                border: 'none',
              }}
              _focus={{
                outline: 'none',
              }}
            />
          ))}
        </PostsPaginationPageGroup>
        <PostsPaginationNext>다음</PostsPaginationNext>
      </PaginationContainer>
    </Pagination>
  )
}

export default PaginationButtons
