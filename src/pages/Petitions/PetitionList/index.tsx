import qs from 'qs'
import { ChangeEvent, useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { setCategory } from '../../../redux/query/querySlice'
import { useAppDispatch, useAppSelect } from '../../../redux/store.hooks'
import { Category } from '../../../types/enums'
import { getPetitionsByQuery } from '../../../utils/api'
import {
  PetitionAgreement,
  PetitionCategory,
  PetitionDate,
  PetitionItem,
  PetitionSubject,
  PetitionsAgreement,
  PetitionsCategory,
  PetitionsDate,
  PetitionsHead,
  PetitionsHeadWrap,
  PetitionsSubject,
} from './styles'

const PetitionList = (): JSX.Element => {
  const queryParams: any = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

  const queryPost = async (query: QueryParams) => {
    const status = await getPetitionsByQuery(query)
    if (status[0] < 400) {
      setPetitionList(status[1].content)
    }
  }

  const [petitionList, setPetitionList] = useState<Array<Petition>>([])

  useEffect(() => {
    queryPost(queryParams)
  }, [location.search])

  return (
    <>
      <PetitionsHead>
        <PetitionsHeadWrap>
          <PetitionsCategory>분류</PetitionsCategory>
          <PetitionsSubject>제목</PetitionsSubject>
          <PetitionsDate>날짜</PetitionsDate>
          <PetitionsAgreement>참여인원</PetitionsAgreement>
        </PetitionsHeadWrap>
      </PetitionsHead>

      <ul>
        {petitionList.map(petition => (
          <PetitionItem key={petition.id}>
            <PetitionCategory>{petition.categoryName}</PetitionCategory>
            <PetitionSubject>
              <Link to={`/petitions/${petition.id}`}>{petition.title}</Link>
            </PetitionSubject>
            <PetitionDate>{petition.createdAt.slice(0, 10)}</PetitionDate>
            <PetitionAgreement>{petition.agreements}</PetitionAgreement>
          </PetitionItem>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export default PetitionList
