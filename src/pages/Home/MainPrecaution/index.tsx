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
import { FaChevronDown } from 'react-icons/fa'
import { useTranslate } from '@hooks/useTranslate'
import locale from './locale'

const MainPrecaution = (): JSX.Element => {
  const t = useTranslate(locale)

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
            <span>{t('title1')}</span>
            <FaChevronDown className="icon" />
          </button>
          <button className="right_btn" onClick={rightToggle}>
            <span>{t('title2')}</span>
            <FaChevronDown className="icon" />
          </button>
        </Inner>
      </PrecautionBtns>
      <PrecautionContents leftOpen={leftOpen} rightOpen={rightOpen}>
        <div className="left_box box">
          <Inner>
            <ul className="petition_list">
              <li>{t('content1_1')}</li>
              <Divider orientation="horizontal" />
              <li>{t('content1_2')}</li>
              <Divider orientation="horizontal" />
              <li>{t('content1_3')}</li>
              <Divider orientation="horizontal" />
              <li>{t('content1_4')}</li>
            </ul>
          </Inner>
        </div>
        <div className="right_box box">
          <Inner>
            <ul className="petition_list">
              <li>{t('content2_1')}</li>
              <Divider orientation="horizontal" size="680px" />
              <li>{t('content2_2')}</li>
              <Divider orientation="horizontal" size="680px" />
              <li>{t('content2_3')}</li>
              <Divider orientation="horizontal" size="680px" />
              <li>
                {t('content2_4_1')}
                <a
                  href="https://www.gist.ac.kr/kr/html/sub10/1004.html"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t('center')}
                </a>
                {t('content2_4_2')}
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
