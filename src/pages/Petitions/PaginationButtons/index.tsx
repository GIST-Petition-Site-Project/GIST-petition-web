import {
  PaginationPage,
  PaginationContainer,
  Pagination,
  usePagination,
  PaginationSeparator,
} from '@ajna/pagination'
import { useEffect, useState } from 'react'
import { setPage } from '../../../redux/query/querySlice'
import { useAppDispatch, useAppSelect } from '../../../redux/store.hooks'
import { getPetitionsByQuery } from '../../../utils/api/petitions/getPetitionsByQuery'

import {
  PetitionsPaginationNext,
  PetitionsPaginationPageGroup,
  PetitionsPaginationPrevious,
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
    const status = await getPetitionsByQuery(query)
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
        <PetitionsPaginationPrevious _focus={{ outline: 'none' }}>
          이전
        </PetitionsPaginationPrevious>
        <PetitionsPaginationPageGroup
          separator={
            <PaginationSeparator
              bg="#fff"
              border="1px solid #ccc"
              borderRadius="0"
              fontSize="sm"
              w="30px"
              jumpSize={10}
              _focus={{
                outline: 'none',
              }}
              _active={
                {
                  // bg: '#2F363C',
                }
              }
              m="0 10px"
            />
          }
        >
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
              _active={{
                bg: '#2F363C',
              }}
            />
          ))}
        </PetitionsPaginationPageGroup>
        <PetitionsPaginationNext _focus={{ outline: 'none' }}>
          다음
        </PetitionsPaginationNext>
      </PaginationContainer>
    </Pagination>
  )
}

export default PaginationButtons
