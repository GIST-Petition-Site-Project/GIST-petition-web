import {
  PaginationPage,
  usePagination,
  PaginationSeparator,
  PaginationPrevious,
  PaginationNext,
  Pagination,
  PaginationPageGroup,
} from '@ajna/pagination'
import { AxiosResponse } from 'axios'
import qs from 'qs'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SPaginationContainer } from './styles'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

interface PaginationButton {
  getPetitions: (query: QueryParams) => Promise<AxiosResponse<any, any>>
  pathname: string
}

const PaginationButtons = ({
  getPetitions,
  pathname,
}: PaginationButton): JSX.Element => {
  const t = useTranslate(locale)

  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  const [totalPages, setTotalPages] = useState(0)
  const getPaginationInf = async (query: QueryParams) => {
    const response = await getPetitions(query)
    setTotalPages(response?.data?.totalPages)
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
      <SPaginationContainer>
        <PaginationPrevious>{t('previous')}</PaginationPrevious>
        <PaginationPageGroup separator={<PaginationSeparator jumpSize={10} />}>
          {pages.map((page: number) => (
            <PaginationPage key={`pagination_page_${page}`} page={page} />
          ))}
        </PaginationPageGroup>
        <PaginationNext>{t('next')}</PaginationNext>
      </SPaginationContainer>
    </Pagination>
  )
}

export default PaginationButtons
