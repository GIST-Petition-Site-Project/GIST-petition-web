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
import {
  PetitionsPaginationNext,
  PetitionsPaginationPageGroup,
  PetitionsPaginationPrevious,
} from './styles'

const PaginationButtons = ({
  getPetitions,
  pathname,
}: PaginationButton): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  const [totalPages, setTotalPages] = useState(0)
  const getPaginationInf = async (query: QueryParams) => {
    const status = await getPetitions(query)
    if (status[0] < 400) {
      setTotalPages(status[1].totalPages)
    }
  }
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: totalPages,
    limits: {
      outer: 1,
      inner: 2,
    },
    initialState: {
      currentPage: Number(queryParams?.page || 1),
    },
  })

  useEffect(() => {
    getPaginationInf(queryParams)
    setCurrentPage(Number(queryParams?.page || 1))
  }, [location.search])

  const navigate = useNavigate()
  const handlePageChange = (e: number) => {
    const newSearchParams = {
      ...queryParams,
      page: e,
    }
    navigate({
      pathname: pathname,
      search: new URLSearchParams(newSearchParams).toString(),
    })
  }

  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      <PaginationContainer
        mt="40px"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        justifyContent={{ base: 'space-between', md: 'center' }}
      >
        <PetitionsPaginationPrevious
          fontSize={{ base: '12px', md: 'sm' }}
          _focus={{ outline: 'none' }}
          h={{ base: '30px', md: '40px' }}
          w={{ base: '4rem', md: '5.75rem' }}
        >
          이전
        </PetitionsPaginationPrevious>
        <PetitionsPaginationPageGroup
          w={{ base: '', md: '100%' }}
          separator={
            <PaginationSeparator
              bg="#fff"
              border="1px solid #ccc"
              borderRadius="0"
              fontSize="sm"
              w={{ base: '22.5px', md: '30px' }}
              h={{ base: '30px', md: '40px' }}
              m={{ base: '0 3px', md: '0 10px' }}
              jumpSize={10}
              _focus={{
                outline: 'none',
              }}
            />
          }
        >
          {pages.map((page: number) => (
            <PaginationPage
              w={{ base: '30px', md: '40px' }}
              h={{ base: '30px', md: '40px' }}
              bg="#fff"
              border="1px solid #ccc"
              borderRadius="0"
              fontSize={{ base: '12px', md: 'sm' }}
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
        <PetitionsPaginationNext
          fontSize={{ base: '12px', md: 'sm' }}
          _focus={{ outline: 'none' }}
          h={{ base: '30px', md: '40px' }}
          w={{ base: '4rem', md: '5.75rem' }}
        >
          다음
        </PetitionsPaginationNext>
      </PaginationContainer>
    </Pagination>
  )
}

export default PaginationButtons
