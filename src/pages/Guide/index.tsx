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
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const Guide = (): JSX.Element => {
  const t = useTranslate(locale)

  return (
    <Container>
      <Inner>
        <Stack spacing={7}>
          <Heading>{t('about')}</Heading>
          <ContentContainer>
            <h3 className="box-title">{t('slogan')}</h3>
            <div className="box-text">
              <p>
                {t('aboutDesc')}
                {t('develop1')}
                <a href="https://www.gist-petition.com/team">
                  <span className="strong">{t('betterIT')}</span>
                </a>
                {t('develop2')}
                {t('manage1')}
                <span className="strong">{t('graduate')}</span>
                {t('and')}
                <span className="strong">{t('emc')}</span>
                {t('manage2')}
                {t('purpose')}
              </p>
            </div>
          </ContentContainer>
          <ContentContainer>
            <div className="box-title">{t('process')}</div>
            <StepHeadContainer>
              <li>
                <span className="circle">
                  <span className="num">01</span>
                  {t('step1')}
                </span>
              </li>
              <li>
                <span className="circle">
                  <span className="num">02</span>
                  {t('step2')}
                </span>
              </li>
              <li>
                <span className="circle">
                  <span className="num">03</span>
                  {t('step3')}
                </span>
              </li>
              <li>
                <div className="circle">
                  <span className="num">04</span>
                  {t('step4')}
                </div>
              </li>
            </StepHeadContainer>
          </ContentContainer>
          <StepContainer>
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">01</span>
                  <span className="title-text">{t('step1')}</span>
                </div>
              </div>
            </li>
            <li className="step-content">
              <ul className="content-wrap">
                <li>{t('content1')}</li>
              </ul>
            </li>
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">02</span>
                  <span className="title-text">{t('step2')}</span>
                </div>
              </div>
            </li>
            <li className="step-content">
              <div className="content-wrap">
                <div>{t('content2')}</div>
              </div>
            </li>
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">03</span>
                  <span className="title-text">{t('step3')}</span>
                </div>
              </div>
            </li>
            <li className="step-content">
              <div className="content-wrap">
                <div>{t('content3')}</div>
              </div>
            </li>
            <li className="step-title-container">
              <div className="step-title">
                <div className="title">
                  <span className="title-num">04</span>
                  <span className="title-text">{t('step4')}</span>
                </div>
              </div>
            </li>
            <li className="step-content">
              <div className="content-wrap">
                <div>{t('content4')}</div>
              </div>
            </li>
          </StepContainer>
          <ContentContainer>
            <h3 className="box-title">{t('matters')}</h3>
            <div className="box-text">
              <p>{t('content5')}</p>
            </div>
          </ContentContainer>
          <ButtonContainer>
            <button className="write">
              <Link to="/write">{t('petitionBtn')}</Link>
            </button>
            <button className="petitions">
              <Link to="/petitions">{t('listBtn')}</Link>
            </button>
          </ButtonContainer>
        </Stack>
      </Inner>
    </Container>
  )
}

export default Guide
