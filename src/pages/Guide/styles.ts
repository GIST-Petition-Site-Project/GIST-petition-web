import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div`
  .inner {
    padding: 0 0.5rem;
    width: 100%;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 0 2rem;
    }
    > .chakra-stack {
      position: relative;
      margin: 6rem 0;
      h2 {
        font-size: 20px;
      }
    }
  }
  .strong {
    font-weight: bold;
  }
`
const ContentContainer = styled.div`
  padding: 0.65em;
  border: 1px solid #ddd;
  .box-title {
    padding: 0.5em 0 1em 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: 20px;
    }
  }
  .box-text {
    padding: 29px;
    color: ${theme.color.QUATERNARY_GRAY};
    background: #cccccc82;
    line-height: 1.3;
    a {
      text-decoration: underline;
    }
  }
`
const StepHeadContainer = styled.ul`
  display: grid;
  padding: 20px 0;
  background: #cccccc82;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 2fr);
  @media screen and (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  > li {
    margin: auto;
    .circle {
      margin: 20px 0;
      position: relative;
      border-radius: 50%;
      font-size: 1rem;
      text-align: center;
      color: ${theme.color.WHITE};
      background-color: ${theme.color.QUATERNARY_GRAY};
      width: 120px;
      height: 120px;
      display: block;
      white-space: pre-line;
      @media screen and (min-width: ${theme.breakpoints.sm}) {
        margin: 0;
        width: 140px;
        height: 140px;
      }
      .num {
        display: block;
        padding: 35px 0 15px;
        font-size: 18px;
        font-weight: 500;
        color: ${theme.color.WHITE};
      }
    }
  }
`

const StepContainer = styled.ul`
  margin-top: 20px;
  border: 1px solid #ddd;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  .step-title-container {
    width: 100%;
    height: 80px;
    position: relative;
    border-bottom: 2px solid #e2e2e2;
    .step-title {
      display: inline-flex;
      width: 100%;
      /* justify-content: center; */
      align-items: center;
      height: 100%;
      padding: 0 15px;
      .title {
        font-size: 16px;
        min-width: 110px;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          font-size: 20px;
        }
        .title-num {
          font-weight: bold;
          padding-right: 5px;
          @media screen and (min-width: ${theme.breakpoints.md}) {
            padding-right: 10px;
          }
        }
        .title-text {
          font-weight: bold;
          color: #3c3c3c;
          padding-right: 20px;
        }
      }
      .content {
        font-size: 14px;
        line-height: 1.27;
        text-align: left;
        color: #8a8a8a;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          font-size: 18px;
        }
      }
    }
  }
  .step-content {
    width: 100%;
    position: relative;
    border-bottom: 1px solid #ddd;
    padding: 15px;
    .content-wrap {
      padding: 29px;
      color: #333;
      background: #cccccc82;
      line-height: 1.3;
      > li {
        padding-bottom: 5px;
      }
    }
  }
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  button {
    border: 2px solid ${theme.color.LIGHT_GRAY};
    border-radius: 0;
    height: ${theme.size.BUTTON_HEIGHT};
    font-size: 1rem;
    color: ${theme.color.WHTIE};
    min-width: 33.33333%;
    a {
      display: inline-block;
      height: 100%;
      width: 100%;
      line-height: 35px;
    }
  }
`

export {
  Container,
  ContentContainer,
  StepContainer,
  ButtonContainer,
  StepHeadContainer,
}
