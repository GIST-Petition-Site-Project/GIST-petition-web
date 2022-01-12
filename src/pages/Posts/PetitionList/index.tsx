import { Link, Outlet } from 'react-router-dom'
import posts from '../posts.json'
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

function PetitionList() {
  return (
    <>
      <PostsTitle>
        <PostsText>모든 청원</PostsText>
        <PostsSelect
          placeholder="전체"
          defaultValue={'전체'}
          //width 바꾸면 button과 select창이 따로놀아
          w={'128px'}
        >
          <option value="기숙사">기숙사</option>
          <option value="학적">학적</option>
          <option value="취업">취업</option>
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
        {posts.map(post => (
          <PetitionItem>
            <PetitionCategory>{post.category}</PetitionCategory>
            <PetitionSubject>
              <Link to={`/posts/${post.id}`} key={post.id}>
                {post.title}
              </Link>
            </PetitionSubject>
            <PetitionDate>{post.created}</PetitionDate>
            <PetitionAgreement>{post.accepted}</PetitionAgreement>
          </PetitionItem>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

export default PetitionList
