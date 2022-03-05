import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div`
  .inner {
    padding: 0 0.5rem;
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
  .head {
    display: none;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: flex;
      padding: 20px 0;
      background: #cccccc82;
      margin-top: 0;
      border: 1px solid #ddd;
    }
    > li {
      flex: 1;
      .circle {
        position: relative;
        border-radius: 50%;
        font-size: 16px;
        text-align: center;
        color: ${theme.color.WHITE};
        background-color: ${theme.color.QUATERNARY_GRAY};
        display: none;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          width: 140px;
          height: 140px;
          margin-left: 30px;
          display: block;
        }
      }
    }
    .num {
      display: block;
      padding: 35px 0 15px;
      font-size: 18px;
      font-weight: 500;
      color: ${theme.color.WHITE};
    }
    .arr {
      position: relative;
      width: 9px;
      height: 15px;
    }
  }

  .cont {
    margin-top: 20px;
    border: 1px solid #ddd;
    position: relative;
    .step-title {
      width: 100%;
      height: 80px;
      position: relative;
    }
    .step-content {
      width: 100%;
      position: relative;
      border-bottom: 1px solid #ddd;
      padding: 15px;
      .content-wrap {
        padding: 29px;
        color: ${theme.color.QUATERNARY_GRAY};
        background: #cccccc82;
        line-height: 1.3;
        > li {
          padding-bottom: 5px;
        }
      }
    }
    .dtist {
      position: absolute;
      top: 30px;
      left: 20px;
    }
    .title {
      height: 100%;
      width: 150px;
      margin: 0;
    }
    .dtitle {
      font-size: 20px;
      font-weight: bold;
      color: #3c3c3c;
      padding-right: 20px;
    }
    .dsc {
      margin-bottom: 15px;
      font-size: 14px;
      line-height: 1.27;
      color: #8a8a8a;
      height: 100%;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        font-size: 18px;
      }
    }
    .step {
      position: relative;
      height: 100%;
      border-bottom: 2px solid #e2e2e2;
    }
    .num {
      font-size: 20px;
      font-weight: bold;
      padding-right: 10px;
    }
  }
  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2em 6em;
    button {
      padding: 0.5em 5em;
      border: 2px solid ${theme.color.LIGHT_GRAY};
      border-radius: 0;
      height: ${theme.size.BUTTON_HEIGHT};
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
      color: ${theme.color.WHTIE};
      margin-bottom: 0;
    }
  }
`
const ContentContainer = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  .box_title {
    padding: 15px 0 20px 20px;
    font-size: 19px;
    line-height: 24px;
    font-weight: bold;
  }
  .box_text {
    padding: 29px;
    color: ${theme.color.QUATERNARY_GRAY};
    background: #cccccc82;
    line-height: 1.3;
  }
`

export { Container, ContentContainer }
