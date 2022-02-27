import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Divider } from '@chakra-ui/react'
import Inner from '@components/Inner'
import {
  PrecautionSection,
  PrecautionBtns,
  PrecautionContents,
  MainPetitionBtn,
} from './styles'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

const MainPrecaution = (): JSX.Element => {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const navigate = useNavigate()
  const onPetitionBtn = () => {
    navigate('/write')
  }

  const leftToggle = () => {
    if (rightOpen === true) {
      setRightOpen(!rightOpen)
    }
    setLeftOpen(leftOpen => !leftOpen)
  }

  const rightToggle = () => {
    if (leftOpen === true) {
      setLeftOpen(!leftOpen)
    }
    setRightOpen(rightOpen => !rightOpen)
  }

  return (
    <PrecautionSection>
      <PrecautionBtns>
        <Inner>
          <button className="left_btn" onClick={leftToggle}>
            <span>이런 청원은 삭제·숨김 처리될 수 있습니다</span>
            <IoMdArrowDropdownCircle className="icon"></IoMdArrowDropdownCircle>
          </button>
          <button className="right_btn" onClick={rightToggle}>
            <span>이런 청원은 답변이 어려울 수 있습니다</span>
            <IoMdArrowDropdownCircle className="icon"></IoMdArrowDropdownCircle>
          </button>
        </Inner>
      </PrecautionBtns>
      <PrecautionContents leftOpen={leftOpen} rightOpen={rightOpen}>
        <div className="left_box box">
          <Inner>
            <ul className="petition_list">
              <li>
                동일한 내용으로 중복 게시된 청원은 가장 동의수가 많은 청원만
                남기고 &apos;숨김&apos;처리 또는 삭제될 수 있습니다.
              </li>
              <Divider orientation="horizontal" />
              <li>
                욕설 및 비속어를 사용한 청원은 관리자에 의해 삭제 또는 일부 내용
                &apos;숨김&apos; 처리될 수 있습니다.
              </li>
              <Divider orientation="horizontal" />
              <li>
                폭력적&sbquo; 선정적&sbquo; 또는 특정 집단에 대한 혐오 표현 등
                유해한 내용을 담은 청원은 관리자에 의해 삭제될 수 있습니다.
              </li>
              <Divider orientation="horizontal" />
              <li>
                개인정보&sbquo; 허위사실&sbquo; 타인의 명예를 훼손하는 내용이
                포함된 청원은 관리자에 의해 삭제 또는 일부 내용 &apos;숨김&apos;
                처리될 수 있습니다.
              </li>
            </ul>
          </Inner>
        </div>
        <div className="right_box box">
          <Inner>
            <ul className="petition_list">
              <li>
                타인을 악의적으로 비방하거나 명예를 훼손하기 위한 목적으로
                작성된 청원에는 답변이 어려울 수 있습니다.
              </li>
              <Divider orientation="horizontal" size="680px" />
              <li>
                청원 주요 내용이 허위사실로 밝혀진 경우 답변이 어려울 수
                있습니다.
              </li>
              <Divider orientation="horizontal" size="680px" />
              <li>
                GIST 구성원 공동의 이익과 관련없는 청원의 경우 답변이 어려울 수
                있습니다.
              </li>
              <Divider orientation="horizontal" size="680px" />
              <li>
                부패/예산부당집행&sbquo; 인권침해&sbquo; 성희롱&sbquo;
                괴롭힘&sbquo; 연구관련 부정행위 등의 일반 민원 신고는{' '}
                <a
                  href="https://www.gist.ac.kr/kr/html/sub10/1004.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  GIST 공익신고센터
                </a>
                를 이용할 수 있습니다.
              </li>
            </ul>
          </Inner>
        </div>
      </PrecautionContents>
      <MainPetitionBtn onClick={onPetitionBtn}>청원하기</MainPetitionBtn>
    </PrecautionSection>
  )
}
export default MainPrecaution
