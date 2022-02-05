import {
  PaginationPage,
  PaginationContainer,
  Pagination,
  usePagination,
  PaginationSeparator,
} from '@ajna/pagination'
import qs from 'qs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPetitionsByQuery } from '../../../utils/api/petitions/getPetitionsByQuery'

import {
  PetitionsPaginationNext,
  PetitionsPaginationPageGroup,
  PetitionsPaginationPrevious,
} from './styles'

const PaginationButtons = (): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  const [totalPages, setTotalPages] = useState(0)
  const getPaginationInf = async (query: QueryParams) => {
    const status = await getPetitionsByQuery(query)
    if (status[0] < 400) {
      setTotalPages(status[1].totalPages)
    }
  }
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: totalPages,
    limits: {
      outer: 2,
      inner: 2,
    },
    initialState: {
      currentPage: Number(queryParams?.page) || 1,
    },
  })

  useEffect(() => {
    getPaginationInf(queryParams)
    setCurrentPage(Number(queryParams.page))
  }, [location.search])

  const navigate = useNavigate()
  const handlePageChange = (e: number) => {
    const newSearchParams = {
      ...queryParams,
      page: e,
    }
    navigate({
      pathname: '/petitions',
      search: new URLSearchParams(newSearchParams).toString(),
    })
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
