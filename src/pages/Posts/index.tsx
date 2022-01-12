// 청원 글 목록
import { Link, Outlet } from 'react-router-dom'
import posts from './posts.json'
import {
  Inner,
  PostsTitle,
  PostsHead,
  PostsHeadWrap,
  PostsCategory,
  PostsSubject,
  PostsDate,
  PostsAgreement,
  PetitionList,
  PetitionItem,
  PetitionCategory,
  PetitionSubject,
  PetitionDate,
  PetitionAgreement,
} from './styles'
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
