import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Collapse, ListItem, Divider } from '@chakra-ui/react'

import {
  StyledDiv3,
  CollapseInner,
  Precaution,
  PrecautionText,
  PrecautionBtns,
  PrecautionLeftBtn,
  PrecautionMessage,
  PrecautionRightBtn,
  PrecautionIcon,
  LeftBox,
  RightBox,
  PrecautionLink,
  Inner,
  PrecautionList,
  ButtonInner,
  MainPetitionBtn,
} from './styles'

const MainPrecaution = (): JSX.Element => {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const petitionNavigate = useNavigate()
  const onPetitionBtn = () => {
    petitionNavigate('/write')
  }

  return (
    <Precaution>
      <PrecautionBtns>
        <ButtonInner>
          <PrecautionLeftBtn
            onClick={() => {
              if (rightOpen === true) {
                setRightOpen(!rightOpen)
              }
              setLeftOpen(leftOpen => !leftOpen)
            }}
            // 왼쪽 패딩 역시 900px에 맞추기 위해 0으로 설정했습니다.
          >
            <PrecautionText>
              이런 청원은 삭제·숨김 처리될 수 있습니다
            </PrecautionText>
            <PrecautionIcon></PrecautionIcon>
          </PrecautionLeftBtn>
          <PrecautionRightBtn
            onClick={() => {
              if (leftOpen === true) {
                setLeftOpen(!leftOpen)
              }
              setRightOpen(rightOpen => !rightOpen)
            }}
          >
            <PrecautionText>
              이런 청원은 답변이 어려울 수 있습니다
            </PrecautionText>
            <PrecautionIcon></PrecautionIcon>
          </PrecautionRightBtn>
        </ButtonInner>
      </PrecautionBtns>
      <PrecautionMessage>
        <Collapse in={leftOpen}>
          <LeftBox>
            <Inner>
              <StyledDiv3>
                <CollapseInner>
                  <PrecautionList spacing={3} margin="0">
                    <ListItem>
                      동일한 내용으로 중복 게시된 청원은 가장 동의수가 많은
                      청원만 남기고 &apos;숨김&apos;처리 또는 삭제될 수
                      있습니다.
                    </ListItem>
                    <Divider orientation="horizontal" size="680px" />
                    <ListItem>
                      욕설 및 비속어를 사용한 청원은 관리자에 의해 삭제 또는
                      일부 내용 &apos;숨김&apos; 처리될 수 있습니다.
                    </ListItem>
                    <Divider orientation="horizontal" size="680px" />
                    <ListItem>
                      폭력적&sbquo; 선정적&sbquo; 또는 특정 집단에 대한 혐오
                      표현 등 유해한 내용을 담은 청원은 관리자에 의해 삭제될 수
                      있습니다.
                    </ListItem>
                    <Divider orientation="horizontal" size="680px" />
                    <ListItem>
                      개인정보&sbquo; 허위사실&sbquo; 타인의 명예를 훼손하는
                      내용이 포함된 청원은 관리자에 의해 삭제 또는 일부 내용
                      &apos;숨김&apos; 처리될 수 있습니다.
                    </ListItem>
                  </PrecautionList>
                </CollapseInner>
              </StyledDiv3>
            </Inner>
          </LeftBox>
        </Collapse>
        <Collapse in={rightOpen}>
          <RightBox>
            <Inner>
              <StyledDiv3>
                <CollapseInner>
                  <PrecautionList spacing={3} margin="0" fontSize={'70%'}>
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
                      GIST 구성원 공동의 이익과 관련없는 청원의 경우 답변이
                      어려울 수 있습니다.
                    </ListItem>
                    <Divider orientation="horizontal" size="680px" />
                    <ListItem>
                      부패/예산부당집행&sbquo; 인권침해&sbquo; 성희롱&sbquo;
                      괴롭힘&sbquo; 연구관련 부정행위 등의 일반 민원 신고는{' '}
                      <PrecautionLink
                        as="a"
                        href="https://www.gist.ac.kr/kr/html/sub10/1004.html"
                        rel="noreferrer"
                        target="_blank"
                      >
                        GIST 공익신고센터
                      </PrecautionLink>
                      를 이용할 수 있습니다.
                    </ListItem>
                  </PrecautionList>
                </CollapseInner>
              </StyledDiv3>
            </Inner>
          </RightBox>
        </Collapse>
      </PrecautionMessage>
      <MainPetitionBtn onClick={onPetitionBtn}>청원하러 가기</MainPetitionBtn>
    </Precaution>
  )
}
export default MainPrecaution
