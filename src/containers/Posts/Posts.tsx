// 청원 글 목록
import { Link, Outlet } from 'react-router-dom'
import posts from './posts.json'
import styled from '@emotion/styled'
import { Button, Select, Stack, Text } from '@chakra-ui/react'
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  usePagination,
} from '@ajna/pagination'
import { useEffect } from 'react'

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
`

const PostsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

const PostsHead = styled.div`
  height: 50px;
  width: 100%;
  border-top: 2px solid #333;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
  align-items: center;
`
const PostsHeadWrap = styled.div`
  position: relative;
  width: 100%;
`

const PostsCategory = styled.div`
  position: absolute;
  top: 0;
  width: 150px;
`
const PostsSubject = styled.div`
  margin-left: 220px;
  margin-right: 250px;
`
const PostsDate = styled.div`
  position: absolute;
  top: 0;
  right: 90px;
  width: 130px;
  text-align: center;
`
const PostsAgreement = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 90px;
  text-align: center;
`

const PetitionList = styled.ul``

const PetitionItem = styled.li`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  :hover {
    background-color: #f8f8f8;
  }
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
`

const PetitionCategory = styled.div`
  position: absolute;
  text-indent: 10px;
`
const PetitionSubject = styled.div`
  position: absolute;
  left: 220px;
  :hover {
    text-decoration: underline;
  }
`
const PetitionDate = styled.div`
  position: absolute;
  right: 90px;
  width: 130px;
`
const PetitionAgreement = styled.div`
  width: 90px;
  position: absolute;
  right: 0;
  color: #df3127;
  font-weight: bold;
`

const Posts = (): JSX.Element => {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    pagesCount: 12,
    initialState: { currentPage: 1 },
  })
  return (
    <Inner>
      <div
        className="petition_board"
        style={{
          position: 'relative',
          top: '150px',
          textAlign: 'center',
        }}
      >
        <PostsTitle>
          <Text fontSize={'20px'} fontWeight={'bold'}>
            모든 청원
          </Text>
          <Select
            placeholder="전체"
            defaultValue={'전체'}
            w={'128px'}
            h={'40px'}
            borderRadius={0}
            borderColor={'#ccc'}
          >
            <option value="기숙사">기숙사</option>
            <option value="학적">학적</option>
            <option value="취업">취업</option>
          </Select>
        </PostsTitle>

        <PostsHead>
          <PostsHeadWrap>
            <PostsCategory>분류</PostsCategory>
            <PostsSubject>제목</PostsSubject>
            <PostsDate>날짜</PostsDate>
            <PostsAgreement>참여인원</PostsAgreement>
          </PostsHeadWrap>
        </PostsHead>

        <PetitionList>
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
        </PetitionList>
        <Outlet />

        {/* Paigination */}
        <Stack>
          <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          >
            <PaginationContainer mt="40px">
              <PaginationPrevious
                bg="#fff"
                border="1px solid #ccc"
                borderRadius="0"
                w={'92px'}
              >
                이전
              </PaginationPrevious>
              <PaginationPageGroup w="100%" justifyContent={'center'}>
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
                  />
                ))}
              </PaginationPageGroup>
              <PaginationNext
                bg="#fff"
                border="1px solid #ccc"
                borderRadius="0"
                w={'92px'}
              >
                다음
              </PaginationNext>
            </PaginationContainer>
          </Pagination>
        </Stack>
      </div>
    </Inner>
  )
}

export default Posts
