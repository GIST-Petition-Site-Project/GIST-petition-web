import styled from '@emotion/styled'

const NotFoundSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 10rem;

  .message {
    padding: 4rem 0 0 2rem;
    font-weight: 500;
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
    .previous-btn {
      display: inline-block;
      width: 100px;
      height: 36px;
      text-align: center;

      color: #df3127;
      border: 2px solid #df3127;
      font-size: 1rem;
      user-select: none;
      position: relative;

      margin-right: 10px;
    }
    .previous-btn::before {
      content: '이전 페이지';
      position: absolute;
      line-height: 32px;
      left: 1px;
      top: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
    }
    .main-btn {
      display: inline-block;
      width: 100px;
      height: 36px;
      text-align: center;

      color: white;
      border: 2px solid #df3127;
      background-color: #df3127;
      font-size: 1rem;
      user-select: none;
      position: relative;
    }
    .main-btn::before {
      content: '메인 페이지';
      position: absolute;
      line-height: 32px;
      left: 1px;
      top: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
    }
  }
`

export { NotFoundSection }
