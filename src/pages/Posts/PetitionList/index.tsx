import { ChangeEvent, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { setCategory } from '../../../redux/query/querySlice'
import { useAppDispatch, useAppSelect } from '../../../redux/store.hooks'
import { Category } from '../../../types/enums'
import { getRetrieveAllPost } from '../../../utils/api'
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
  const categories = Object.keys(Category).filter(v => !(parseInt(v) >= 0))
  const [selected, setSelected] = useState(categories[0])
  const [postList, setPostList] = useState<Array<PostResponse>>([])

  const getAllPost = async () => {
    try {
      const status = await getRetrieveAllPost()
      if (status[0] < 400) {
        setPostList(status[1])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const dispatch = useAppDispatch()
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
    dispatch(setCategory(e.target.value))
  }

  const query = useAppSelect(select => select.query)
  useEffect(() => {
    getAllPost()
    console.log(query)
  }, [useAppSelect(select => select.query)])

  return (
    <>
      <PostsTitle>
        <PostsText>모든 청원</PostsText>
        <PostsSelect onChange={handleSelect} value={selected} w={'128px'}>
          {categories.map(item => (
            <option value={item} key={item}>
              {item}
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
            <PetitionDate>{post.createdAt}</PetitionDate>
            <PetitionAgreement>{post.agreements.length}</PetitionAgreement>
          </PetitionItem>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export default PetitionList
