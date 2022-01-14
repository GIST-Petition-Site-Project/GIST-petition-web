import {
  PaginationPage,
  PaginationContainer,
  Pagination,
  usePagination,
} from '@ajna/pagination'
import { setOffset } from '../../../redux/query/querySlice'
import { useAppDispatch, useAppSelect } from '../../../redux/store.hooks'

import {
  PostsPaginationNext,
  PostsPaginationPageGroup,
  PostsPaginationPrevious,
} from './styles'

const PaginationButtons = (): JSX.Element => {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: 12,
    initialState: { currentPage: useAppSelect(select => select.query.offset) },
  })

  const dispatch = useAppDispatch()
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    dispatch(setOffset(page))
  }
  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={handlePageChange}
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
