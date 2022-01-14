import { ChangeEvent, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { setCategory } from '../../../redux/query/querySlice'
import { useAppDispatch, useAppSelect } from '../../../redux/store.hooks'
import { Category } from '../../../types/enums'
import { getRetrieveAllPost } from '../../../utils/api'
import { getQueryPosts } from '../../../utils/api/posts/getQueryPosts'
import {
  PetitionAgreement,
  PetitionCategory,
  PetitionDate,
  PetitionItem,
  PetitionSubject,
  PostsAgreement,
  PostsCategory,
  PostsDate,
  PostsHead,
  PostsHeadWrap,
  PostsSelect,
  PostsSubject,
  PostsText,
  PostsTitle,
} from './styles'

const PetitionList = (): JSX.Element => {
  const numberOfCategory = Object.keys(Category).filter(el =>
    isNaN(Number(el)),
  ).length

  const catergoryIdx = Array(numberOfCategory)
    .fill(0)
    .map((_x, i) => i)

  /**
   *
   * @param query 응답 바뀜 여기 수정 해야함 수정 해야함 수정 해야함
   */
  const queryPost = async (query: QueryParams) => {
    const status = await getQueryPosts(query)
    if (status[0] < 400) {
      setPostList(status[1])
      console.log(status)
    }
  }

  const [selected, setSelected] = useState(
    useAppSelect(select => select.query.category),
  )
  const [postList, setPostList] = useState<Array<PostResponse>>([]) // 수정해야함 api 변경
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
      <PostsTitle>
        <PostsText>모든 청원</PostsText>
        <PostsSelect onChange={handleSelect} value={selected} w={'128px'}>
          {catergoryIdx.map(item => (
            <option value={item} key={item}>
              {Category[item]}
            </option>
          ))}
        </PostsSelect>
      </PostsTitle>

      <PostsHead>
        <PostsHeadWrap>
          <PostsCategory>분류</PostsCategory>
          <PostsSubject>제목</PostsSubject>
          <PostsDate>날짜</PostsDate>
          <PostsAgreement>참여인원</PostsAgreement>
        </PostsHeadWrap>
      </PostsHead>

      <ul>
        {postList.map(post => (
          <PetitionItem key={post.id}>
            <PetitionCategory>{post.category}</PetitionCategory>
            <PetitionSubject>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </PetitionSubject>
            <PetitionDate>{post.createdAt.slice(0, 10)}</PetitionDate>
            <PetitionAgreement>{post.agreements.length}</PetitionAgreement>
          </PetitionItem>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export default PetitionList
