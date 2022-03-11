import { CommentList, SPaginationContainer } from './styles'
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
import { useLocation, useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
interface IProps {
  totalAgreement: number
  totalPages: number
  agreements: Agreement[]
}

const AgreementList = ({
  totalAgreement,
  totalPages,
  agreements,
}: IProps): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const { search } = useLocation()

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

  const navigate = useNavigate()
  const handlePageChange = useCallback(
    (e: number) => {
      const newSearchParams = {
        ...queryParams,
        page: e,
      }
      setCurrentPage(e)
      navigate({
        pathname: location.pathname,
        search: qs.stringify(newSearchParams),
      })
    },
    [currentPage],
  )

  return (
    <CommentList>
      <ul>
        {agreements.map((res, index) => (
          <li key={res.id}>
            <div className="comment">
              <div>
                <div className="anonymous">
                  #{Number(totalAgreement) - index - (currentPage - 1) * 10}
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
