import Inner from '@components/Inner'
import { Container, ContentContainer } from './styles'
import {
  Accordion,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  Divider,
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react'
import GuideModal from '@components/GuideModal'
import WritePrecaution from '@components/WritePrecaution'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Guide = (): JSX.Element => {
  // const [openFirst, setOpenFirst] = useState(false)
  // const [openSecond, setOpenSecond] = useState(false)
  // const [openThird, setOpenThird] = useState(false)
  // const [openFourth, setOpenFourth] = useState(false)
  return (
    <Container>
      <Inner>
        <Stack spacing={5}>
          <Heading>이용안내</Heading>
          <div>
            <ContentContainer>
              <h3 className="box_title">
                학교에 나의 의견을 공식적으로 건의하자!
              </h3>
              <div className="box_text">
                <p>
                  지스트 청원은 학생들이 학교운영과 관련된 의견을 공유하고, 이에
                  대한 요구를 학교 측에 제시하여 직접 답변을 받을 수 있는
                  서비스입니다. 지스트 청원은 학생 개발팀 Better IT 팀과 대학원
                  총학생회에서 관리하고 있으며, 학생과 학교 간의 직접 소통을
                  지향합니다.
                </p>
              </div>
            </ContentContainer>
          </div>
          <ContentContainer>
            <div className="box_title">
              지스트 청원은 다음 과정으로 진행됩니다.
            </div>
            <ul className="head">
              <li>
                <span className="circle">
                  <span className="num">01</span>청원하기
                </span>
              </li>
              <li>
                <span className="circle">
                  <span className="num">02</span>사전동의
                </span>
              </li>
              <li>
                <span className="circle">
                  <span className="num">03</span>청원진행
                </span>
              </li>
              <li>
                <div className="circle">
                  <span className="num">04</span>청원답변
                </div>
              </li>
            </ul>
          </ContentContainer>
          <ul className="cont">
            <li className="step-title">
              <div className="step">
                <div className="dtist">
                  <span className="title">
                    <span className="num">01</span>
                    <span className="dtitle">청원하기</span>
                  </span>
                  <span className="dsc">
                    지스트 이메일로 회원가입을 하여 직접 청원글을 작성할 수
                    있습니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="step-content">
              <ul className="content-wrap">
                <li>
                  지스트 구성원 누구라도 지스트 이메일(gist.ac.kr 혹은
                  gm.gist.ac.kr)로 회원가입을 하여{' '}
                  <span className="strong">청원하기 페이지</span>에서 직접
                  청원글을 작성하실 수 있습니다. 청원을 작성하기 이전에 지스트
                  청원 게시판 운영 원칙과 청원 작성 요령 안내를 확인하신 뒤,
                  이에 유의하여 청원에 참여해주시길 바랍니다.
                </li>
              </ul>
            </li>
            <li className="step-title">
              <div className="step">
                <div className="dtist">
                  <span className="title">
                    <span className="num">02</span>
                    <span className="dtitle">사전동의</span>
                  </span>
                  <span className="dsc">
                    청원이 진행되기 앞서 사전동의 단계를 거칩니다.
                  </span>
                </div>
              </div>
            </li>
            <li className="step-content">
              <ul className="content-wrap">
                <li>
                  지스트 청원은 부적절한 청원의 노출을 최소화하고, 지스트
                  구성원들의 목소리를 효율적으로 청원 페이지에 담아내고자
                  사전동의 절차를 운영합니다. 최초 작성된 청원은 일정 인원
                  이상의 청원 동의가 이루어지면, 관리자의 승인을 거쳐 모든 청원
                  페이지에 게시됩니다.
                </li>
              </ul>
            </li>
            <li className="step-title">
              <div className="step">
                <span className="dtist">
                  <span className="title">
                    <span className="num">03</span>
                    <span className="dtitle">청원진행</span>
                  </span>
                  <span className="dsc">
                    사전동의를 통해 일정 숫자 이상의 동의를 얻은 청원에 대해
                    청원을 진행합니다.
                  </span>
                </span>
              </div>
            </li>
            <li className="step-content">
              <ul className="content-wrap">
                <li>
                  승인된 청원은 <span className="strong">모든 청원 페이지</span>
                  에 공개되어 누구나 열람할 수 있으며, 모든 지스트 구성원은 청원
                  동의에 참여할 수 있습니다. 한 번 청원동의에 참여한다면,{' '}
                  <span className="strong">동의 철회 및 내용 수정이 불가</span>
                  합니다. 이에 유의하여 신중히 참여해주시길 바랍니다.
                </li>
              </ul>
            </li>
            <li className="step-title">
              <div className="step">
                <span className="dtist">
                  <span className="title">
                    <span className="num">04</span>
                    <span className="dtitle">청원답변</span>
                  </span>
                  <span className="dsc">
                    50명 이상의 청원동의를 받은 청원은 원내 관련 부서에서
                    답변합니다.
                  </span>
                </span>
              </div>
            </li>
            <li className="step-content">
              <ul className="content-wrap">
                <li>
                  50명 이상의 청원동의를 받은 청원은 대학원 학생회를 통해 원내
                  관련 부서에 전달됩니다. 청원에 대한 답변은 답변 현황 페이지에
                  게시됩니다.
                </li>
              </ul>
            </li>
          </ul>
          <ContentContainer>
            <h3 className="box_title">청원 유의사항</h3>
            <div className="box_text">
              <p>
                중복, 비방, 욕설, 혐오 표현, 명예훼손 등 부적절한 청원 내용은{' '}
                <span className="strong">지스트 청원 운영 원칙</span>에 따라
                '숨김/삭제' 처리될 수 있습니다. 허위사실을 포함하거나 지스트
                구성원 공동의 이익과 관련없는 청원, 타인을 악의적으로 비방하거나
                명예를 훼손하기 위한 목적으로 작성된 청원에는 답변이 어려울 수
                있습니다.
              </p>
            </div>
          </ContentContainer>
          <div className="button-container">
            <button className="write">
              <a href="/write">청원 바로가기</a>
            </button>
            <button className="petitions">
              <a href="/petitions">청원 목록 보기</a>
            </button>
          </div>
        </Stack>
      </Inner>
    </Container>
  )
}

export default Guide

{
  /* <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    1 청원 작성 안내
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li>
                    지스트 구성원 누구라도 gist.ac.kr 혹은 gm.gist.ac.kr
                    이메일로 회원가입을 하여 직접 청원글을 작성하거나, 진행 중인
                    청원에 동의하실 수 있습니다. 한 번 작성하거나 동의한 청원에
                    대해서는 삭제나 철회하실 수 없습니다.
                  </li>
                  <li>
                    홈페이지에 공개된 청원은 누구나 자유롭게 열람할 수 있습니다.
                  </li>
                  <WritePrecaution />
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    2 청원 동의 안내
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li>
                    청원동의는 사전동의의 단계를 거쳐서 진행됩니다. 사전동의
                    과정에서 일정 숫자 이상의 동의를 얻은 경우 관리자의 승인을
                    통해 청원 사이트에 '모든청원'페이지에 공개됩니다.{' '}
                  </li>
                  <li>
                    청원 동의는 지스트 청원 회원 모두가 자유롭게 참여할 수
                    있습니다. 사전동의중인 청원은 링크 공유를 통해{' '}
                  </li>
                  <div>
                    <GuideModal />
                  </div>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    3 사전동의 안내
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li>
                    청원글 작성 완료 시, 여러분에게 ‘사전동의 링크(URL)’가
                    부여됩니다.
                  </li>
                  <li>
                    30일 이내에 여러분의 청원을 지지하는 100명의 사전 동의를
                    받으셔야 청원게시판에 청원 내용이 공개되어 더 많은 국민께서
                    청원에 동참하실 수 있게 됩니다.
                  </li>
                  <li>
                    ‘사전동의 링크(URL)’를 SNS 등에 공유해 사전 동의를
                    받아주세요. 사전 동의는 제공된 ‘사전동의 링크(URL)’를
                    통해서만 가능합니다. 100명의 사전 동의를 받은 청원은
                    관리자의 검토를 거쳐 청원게시판에 공개됩니다. 단, 국민청원
                    요건에 맞지 않는 청원은 100명의 동의를 받더라도 게시판에
                    공개되지 않거나 관리자에 의해 일부 내용이 '숨김' 처리될 수
                    있습니다.
                  </li>
                  <li>
                    ‘사전동의 링크(URL)’를 잊으셨거나 등록한 청원 동의 수가
                    궁금하시다면 청와대 홈페이지 &gt; 국민청원 &gt; 내 청원
                    보기를 통해 확인하실 수 있습니다.
                  </li>
                  <div>
                    <h5>청원 요건 자세히 보기</h5>
                  </div>
                  <div className="cst_contents">
                    <ul>
                      <li>
                        <span>
                          동일한 내용으로 중복 게시된 청원은 최초 1개 청원만
                          남기고 '숨김'처리 또는 삭제될 수 있습니다.
                        </span>
                      </li>
                      <li>
                        <div className="cst_subject cst_subject_2">
                          욕설 및 비속어를 사용한 청원은 관리자에 의해 삭제 또는
                          일부 내용 '숨김' 처리될 수 있습니다.
                        </div>
                      </li>
                      <li>
                        <div className="cst_subject cst_subject_2">
                          <a href="javascript:void(0);" title="닫힘">
                            폭력적, 선정적, 또는 특정 집단에 대한 혐오 표현 등
                            청소년에게 유해한 내용을 담은 청원은 관리자에 의해
                            삭제될 수 있습니다.
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="cst_subject cst_subject_2">
                          개인정보, 허위사실, 타인의 명예를 훼손하는 내용이
                          포함된 청원은 관리자에 의해 삭제 또는 일부 내용 '숨김'
                          처리될 수 있습니다.
                        </div>
                      </li>
                    </ul>
                  </div>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    4 청원 답변 안내
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul>
                  <li>
                    청와대 홈페이지에 공개된 시점으로부터 30일 이내 20만 명
                    이상의 국민이 동의한 청원에 정부 및 청와대 관계자(각 부처
                    장관, 대통령 수석 비서관, 특별보좌관 등)가 답하겠습니다.
                  </li>
                  <li>
                    다만, 청원 요건에 맞지 않는 경우 답변이 어려울 수 있습니다.
                  </li>
                  <li>
                    공개된 청원 답변은 청와대 홈페이지 &gt; 국민청원 &gt; 답변된
                    청원, 청와대 트위터, 페이스북, 유튜브를 통해 확인하실 수
                    있습니다.
                  </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion> */
}
