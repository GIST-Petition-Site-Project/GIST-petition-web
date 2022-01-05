import { useState } from 'react'
import {
  Heading,
  Button,
  Collapse,
  Box,
  ListItem,
  List,
  Link,
  Divider,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
`
const CollapseInner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
`

const Precaution = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #df3127 50%, #5a5e5d 50%);
  /* 반은 빨간색, 반은 회색으로 설정해줍니다. */
  /* 이 방식이 제일 간단한 것 같아요! */
`
function MainPrecaution() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)

  return (
    <>
      <Precaution style={{}}>
        <Inner>
          <Button
            onClick={() => {
              if (rightOpen === true) {
                setRightOpen(!rightOpen)
              }
              setLeftOpen(leftOpen => !leftOpen)
            }}
            height="54px"
            width="50%"
            colorScheme="#df3127"
            // colorScheme red가 red_primary가 아닌 secondary로 정의돼있어서 일단 color코드로 써놓겠습니다. (피그마 참고)
            color="white"
            borderRadius="0"
            textAlign="right"
            // Inner 900px에 글자를 딱 맞추기 위해 flex 값을 주었습니다.
            // 왼쪽 패딩 역시 900px에 맞추기 위해 0으로 설정했습니다.
            display="inline-flex"
            justifyContent="space-between"
            pl="0"
            _focus={{
              outline: 'none',
            }}
          >
            <Heading as="h2" fontSize="16px">
              이런 청원은 삭제·숨김 처리될 수 있습니다
            </Heading>
            <IoMdArrowDropdownCircle size="22px" />
          </Button>
          <Button
            bg="#5a5e5d"
            colorScheme="gray.500"
            color="white"
            borderRadius="0"
            height="54px"
            width="50%"
            onClick={() => {
              if (leftOpen === true) {
                setLeftOpen(!leftOpen)
              }
              setRightOpen(rightOpen => !rightOpen)
            }}
            display="inline-flex"
            justifyContent="space-between"
            pr="0"
            _focus={{
              outline: 'none',
            }}
          >
            <Heading as="h2" fontSize="16px">
              이런 청원은 답변이 어려울 수 있습니다
            </Heading>
            <IoMdArrowDropdownCircle size="22px" />
          </Button>
        </Inner>
      </Precaution>

      <Collapse in={leftOpen} animateOpacity animate={{ opacity: 0 }}>
        <Box
          p="40px 0"
          color="white"
          mt="0"
          bg="#DD433B"
          shadow="md"
          position="relative"
        >
          <CollapseInner>
            <Inner>
              <List spacing={3} margin="0">
                <ListItem>
                  동일한 내용으로 중복 게시된 청원은 가장 동의수가 많은 청원만
                  남기고 &apos;숨김&apos;처리 또는 삭제될 수 있습니다.
                </ListItem>
                <Divider orientation="horizontal" size="680px" />
                <ListItem>
                  욕설 및 비속어를 사용한 청원은 관리자에 의해 삭제 또는 일부
                  내용 &apos;숨김&apos; 처리될 수 있습니다.
                </ListItem>
                <Divider orientation="horizontal" size="680px" />
                <ListItem>
                  폭력적&sbquo; 선정적&sbquo; 또는 특정 집단에 대한 혐오 표현 등
                  유해한 내용을 담은 청원은 관리자에 의해 삭제될 수 있습니다.
                </ListItem>
                <Divider orientation="horizontal" size="680px" />
                <ListItem>
                  개인정보&sbquo; 허위사실&sbquo; 타인의 명예를 훼손하는 내용이
                  포함된 청원은 관리자에 의해 삭제 또는 일부 내용
                  &apos;숨김&apos; 처리될 수 있습니다.
                </ListItem>
              </List>
            </Inner>
          </CollapseInner>
        </Box>
      </Collapse>

      <Collapse in={rightOpen} animateOpacity>
        <Box p="40px 0" color="white" bg="#616463" shadow="md" display="block">
          <CollapseInner>
            <Inner>
              <List spacing={3} margin="0">
                <ListItem>
                  타인을 악의적으로 비방하거나 명예를 훼손하기 위한 목적으로
                  작성된 청원에는 답변이 어려울 수 있습니다.
                </ListItem>
                <Divider orientation="horizontal" size="680px" />
                <ListItem>
                  청원 주요 내용이 허위사실로 밝혀진 경우 답변이 어려울 수
                  있습니다.
                </ListItem>
                <Divider orientation="horizontal" size="680px" />
                <ListItem>
                  GIST 구성원 공동의 이익과 관련없는 청원의 경우 답변이 어려울
                  수 있습니다.
                </ListItem>
                <Divider orientation="horizontal" size="680px" />
                <ListItem>
                  부패/예산부당집행&sbquo; 인권침해&sbquo; 성희롱&sbquo;
                  괴롭힘&sbquo; 연구관련 부정행위 등의 일반 민원 신고는{' '}
                  <Link
                    as="a"
                    href="https://www.gist.ac.kr/kr/html/sub10/1004.html"
                    rel="noreferrer"
                    target="_blank"
                    style={{ color: '#fdfd96' }}
                  >
                    GIST 공익신고센터
                  </Link>
                  를 이용할 수 있습니다.
                </ListItem>
              </List>
            </Inner>
          </CollapseInner>
        </Box>
      </Collapse>
    </>
  )
}
export default MainPrecaution
