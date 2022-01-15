import {
  PaginationPage,
  PaginationContainer,
  Pagination,
  usePagination,
} from '@ajna/pagination'
import { useEffect, useState } from 'react'
import { setPage } from '../../../redux/query/querySlice'
import { useAppDispatch, useAppSelect } from '../../../redux/store.hooks'
import { getQueryPosts } from '../../../utils/api/posts/getQueryPosts'

import {
  PostsPaginationNext,
  PostsPaginationPageGroup,
  PostsPaginationPrevious,
} from './styles'

const PaginationButtons = (): JSX.Element => {
  const [totalPages, setTotalPages] = useState(0)

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: totalPages,
    limits: {
      outer: 2,
      inner: 2,
    },
    initialState: { currentPage: useAppSelect(select => select.query.page) },
  })
  const getPaginationInf = async (query: QueryParams) => {
    const status = await getQueryPosts(query)
    if (status[0] < 400) {
      setTotalPages(status[1].totalPages)
    }
  }
  const query = useAppSelect(select => select.query)
  useEffect(() => {
    setCurrentPage(1)
    dispatch(setPage(1))
  }, [query.category])

  useEffect(() => {
    getPaginationInf(query)
  }, [query])

  const dispatch = useAppDispatch()
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    dispatch(setPage(page))
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
