import styled from '@emotion/styled'
import theme from '../../style/theme'

const NotFoundSection = styled.section`
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 200000;
  padding: 0 2rem;

  @media screen and (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
  }

  .message {
    padding: 2rem 0 0 0;
    font-weight: 500;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      padding: 1rem 0 0 2rem;
    }
    h1 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 1.4rem;
    }
    a {
      font-size: 1.4rem;
    }

    .err-btn {
      display: inline-block;
      width: 100%;
      height: 48px;
      text-align: center;

      font-size: 1rem;
      user-select: none;
      position: relative;

      border: 2px solid #df3127;

      @media screen and (min-width: ${theme.breakpoints.md}) {
        width: 100px;
        height: 36px;
      }
    }

    .previous-btn {
      color: #df3127;
      margin-bottom: 10px;

      @media screen and (min-width: ${theme.breakpoints.md}) {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }

    .main-btn {
      color: white;
      background-color: #df3127;
    }

    .err-btn::before {
      position: absolute;
      line-height: 42px;
      left: 1px;
      top: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      @media screen and (min-width: ${theme.breakpoints.md}) {
        line-height: 32px;
      }
    }
    .previous-btn::before {
      content: '이전 페이지';
    }
    .main-btn::before {
      content: '메인 페이지';
    }
  }
`

export { NotFoundSection }
