import Inner from '@components/Inner'
import {
  ButtonContainer,
  Container,
  ContentContainer,
  StepContainer,
  StepHeadContainer,
} from './styles'
import { Stack, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Guide = (): JSX.Element => {
  return (
    <Container>
      <Inner>
        <Stack spacing={7}>
          <Heading>이용안내</Heading>
          <ContentContainer>
            <h3 className="box-title">
              학교에 나의 의견을 공식적으로 건의하자!
            </h3>
            <div className="box-text">
              <p>
                지스트 청원은 학생들이 학교운영과 관련된 의견을 공유하고, 이에
                대한 요구를 학교 측에 제시하여 직접 답변을 받을 수 있는
                서비스입니다. 지스트 청원의 개발은{' '}
                <a href="https://www.gist-petition.com/team">
                  <span className="strong">Better IT팀</span>
                </a>
                이 맡고 있고, 게시판 운영은{' '}
                <span className="strong">대학원 총학생회</span>와{' '}
                <span className="strong">비상대책위원회 소통국</span>에서
                관리하고 있으며, 학생과 학교 간의 직접 소통을 지향합니다.
              </p>
            </div>
          </ContentContainer>
          <ContentContainer>
            <div className="box-title">
              지스트 청원은 다음 과정으로 진행됩니다.
            </div>
            <StepHeadContainer>
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
            </StepHeadContainer>
          </ContentContainer>
          <StepContainer>
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">01</span>
                  <span className="title-text">청원하기</span>
                </div>
                <div className="content">
                  지스트 이메일로 회원가입 하여 직접 청원글을 작성할 수
                  있습니다.
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
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">02</span>
                  <span className="title-text">사전동의</span>
                </div>
                <div className="content">
                  청원이 진행되기 앞서 사전동의 단계를 거칩니다.
                </div>
              </div>
            </li>
            <li className="step-content">
              <div className="content-wrap">
                <div>
                  지스트 청원은 부적절한 청원의 노출을 최소화하고, 지스트
                  구성원들의 목소리를 효율적으로 청원 페이지에 담아내고자
                  사전동의 절차를 운영합니다. 최초 작성된 청원은 일정 인원
                  이상의 청원 동의가 이루어지면, 관리자의 승인을 거쳐 모든 청원
                  페이지에 게시됩니다.
                </div>
              </div>
            </li>
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">03</span>
                  <span className="title-text">청원진행</span>
                </div>
                <div className="content">
                  사전동의를 통해 일정 숫자 이상의 동의를 얻은 청원에 대해
                  청원을 진행합니다.
                </div>
              </div>
            </li>
            <li className="step-content">
              <div className="content-wrap">
                <div>
                  승인된 청원은 <span className="strong">모든 청원 페이지</span>
                  에 공개되어 누구나 열람할 수 있으며, 모든 지스트 구성원은 청원
                  동의에 참여할 수 있습니다. 한 번 청원동의에 참여한다면,{' '}
                  <span className="strong">동의 철회 및 내용 수정이 불가</span>
                  합니다. 이에 유의하여 신중히 참여해주시길 바랍니다.
                </div>
              </div>
            </li>
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">04</span>
                  <span className="title-text">청원답변</span>
                </div>
                <div className="content">
                  50명 이상의 청원동의를 받은 청원은 원내 관련 부서에서
                  답변합니다.
                </div>
              </div>
            </li>
            <li className="step-content">
              <div className="content-wrap">
                <div>
                  50명 이상의 청원동의를 받은 청원은 대학원 총학생회를 통해 원내
                  관련 부서에 전달됩니다. 청원에 대한 답변은 답변 현황 페이지에
                  게시됩니다.
                </div>
              </div>
            </li>
          </StepContainer>
          <ContentContainer>
            <h3 className="box-title">청원 유의사항</h3>
            <div className="box-text">
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
          <ButtonContainer>
            <button className="write">
              <Link to="/write">청원 바로가기</Link>
            </button>
            <button className="petitions">
              <Link to="/petitions">청원 목록 보기</Link>
            </button>
          </ButtonContainer>
        </Stack>
      </Inner>
    </Container>
  )
}

export default Guide
