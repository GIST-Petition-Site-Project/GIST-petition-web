import { CommentList, SPaginationContainer } from './styles'
import { useEffect, useState } from 'react'
import { getAgreements } from '@api/petitionAPI'
import qs from 'qs'
import {
  usePagination,
  PaginationPage,
  PaginationSeparator,
  PaginationPrevious,
  PaginationNext,
  Pagination,
  PaginationPageGroup,
} from '@ajna/pagination'

import { getDayTime } from '@utils/getTime'
interface IProps {
  petitionId: string
  totalAgreement: number | undefined
}

const AgreementList = ({ petitionId, totalAgreement }: IProps): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const [totalPages, setTotalPages] = useState<number>(0)
  const [response, setResponse] = useState<Array<GetAgreements>>([])
  const fetch = async (petitionId: any, queryParams: any) => {
    try {
      const response = await getAgreements(petitionId, queryParams)
      setResponse(response?.data?.content || [])
      setTotalPages(response?.data?.totalPages)
    } catch (error) {
      console.log(error)
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

  const handlePageChange = (e: number) => {
    setCurrentPage(e)
    const newSearchParams = {
      ...queryParams,
      page: e,
    }
    fetch(petitionId, newSearchParams)
  }

  useEffect(() => {
    fetch(petitionId, queryParams)
  }, [petitionId])

  return (
    <CommentList>
      <ul>
        {response.map((res, index) => (
          <li key={res.id}>
            <div className="comment">
              <div>
                <div className="anonymous">
                  # {Number(totalAgreement) - index - (currentPage - 1) * 10}
                </div>
                <div className="date">{getDayTime(res.createdAt)}</div>
              </div>
              <div className="content">
                <div>{res.description}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        >
          <SPaginationContainer>
            <PaginationPrevious>이전</PaginationPrevious>
            <PaginationPageGroup
              separator={<PaginationSeparator jumpSize={10} />}
            >
              {pages.map((page: number) => (
                <PaginationPage key={`pagination_page_${page}`} page={page} />
              ))}
            </PaginationPageGroup>
            <PaginationNext>다음</PaginationNext>
          </SPaginationContainer>
        </Pagination>
      </div>
    </CommentList>
  )
}
export default AgreementList
