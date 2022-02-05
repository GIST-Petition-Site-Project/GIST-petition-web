import { ChangeEvent, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
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
  PetitionsSelect,
  PetitionsSubject,
  PetitionsText,
  PetitionsTitle,
} from './styles'

const PetitionList = (): JSX.Element => {
  const numberOfCategory = Object.keys(Category).filter(el =>
    isNaN(Number(el)),
  ).length

  const catergoryIdx = Array(numberOfCategory)
    .fill(0)
    .map((_x, i) => i)

  const queryPost = async (query: QueryParams) => {
    const status = await getPetitionsByQuery(query)
    if (status[0] < 400) {
      console.log(status[1].content)
      setPetitionList(status[1].content)
    }
  }

  const [selected, setSelected] = useState(
    useAppSelect(select => select.query.category),
  )
  const [petitionList, setPetitionList] = useState<Array<Petition>>([]) // 수정해야함 api 변경
  const dispatch = useAppDispatch()
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value))
    dispatch(setCategory(Number(e.target.value)))
  }

  const query = useAppSelect(select => select.query)

  useEffect(() => {
    console.log(query)
    queryPost(query)
  }, [useAppSelect(select => select.query)])

  return (
    <>
      <PetitionsTitle>
        <PetitionsText>모든 청원</PetitionsText>
        <PetitionsSelect onChange={handleSelect} value={selected} w={'128px'}>
          {catergoryIdx.map(item => (
            <option value={item} key={item}>
              {Category[item]}
            </option>
          ))}
        </PetitionsSelect>
      </PetitionsTitle>

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
              <Link
                to={`/petitions/${petition.id}`}
                style={{
                  display: 'inline-block',
                  textAlign: 'left',
                }}
              >
                {petition.title}
              </Link>
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
