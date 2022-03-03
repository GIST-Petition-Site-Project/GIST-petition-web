import styled from '@emotion/styled'
import theme from '@style/theme'

const SharingPetition = styled.div`
  margin: 5rem 0;
  .share-url {
    height: 2rem;
    margin: 1rem 0;
    .url-box {
      width: 82%;
      height: 100%;
      border: 1px solid #ccc;
      float: left;

      overflow: hidden;
      word-break: break-all;

      div:last-child {
      }
      div:first-of-type {
        width: 10rem;
        background-color: #ccc;
        float: left;
        display: none;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          display: block;
        }
      }
      div {
        line-height: 1.8rem;
        text-align: center;
        height: 100%;
      }
    }

    .copy-btn {
      min-width: 16%;

      height: 100%;
      margin-left: 5px;
      float: right;
      button {
        width: 100%;
        height: 100%;
        background-color: #131618;
        color: white;
        svg {
          margin: auto;

          color: #fff;
          font-size: 24px;
          @media screen and (min-width: ${theme.breakpoints.sm}) {
            display: none;
          }
        }
      }
      button::before {
        font-family: xeicon;
        content: '';
        color: white;
        @media screen and (min-width: ${theme.breakpoints.sm}) {
          content: '복사';
          font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
            Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
            'Noto Sans KR', 'Malgun Gothic', sans-serif;
        }
      }
    }
  }
  .share-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      font-weight: 600;
    }

    .sns {
      display: flex;
      width: 7rem;
      justify-content: space-around;
      margin-top: 1rem;
      li {
        button {
          width: 45px;
          height: 45px;
          border-radius: 100px;
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      li:nth-of-type(1) {
        button {
          color: #3b1e1e;
          background-color: #f9e000;
        }
      }
      li:nth-of-type(2) {
        button {
          color: #ffffff;
          background-color: #4267b2;
        }
      }
    }
  }
`

const HeadSection = styled.div`
  color: #333;
  .info {
    font-size: 1.25rem;
    text-align: center;
    .progress {
      font-weight: bold;
      display: inline-block;
    }
    .duration {
    }
  }
  .title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    div {
      margin: 0 1.25em;
    }
  }
  .current_agree {
    text-align: center;
    font-size: 1.25em;
    .num_of_agree {
      > span {
        color: #df3127;
        font-weight: bold;
      }
    }
  }
`

const DescriptionSection = styled.div`
  color: #333;
  margin: 20px 0;
  .chakra-stack {
    > span {
      font-size: 20px;
      font-weight: bold;
    }
    div > .content {
      white-space: pre-line;
      .description {
        line-height: 1.5em;
        text-align: justify;
      }
    }
  }
`

const AnswerSection = styled.div`
  color: #333;
  margin: 20px 0;
  .chakra-stack {
    > span {
      font-size: 20px;
      font-weight: bold;
    }
    div > .content {
      white-space: pre-line;
      .answer {
        line-height: 1.5em;
        text-align: justify;
      }
    }
  }
`

const AgreementsSection = styled.div`
  .num_of_agree {
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    padding: 0.5em 0;
    > span {
      color: #ff0000;
    }
  }
`

export {
  HeadSection,
  DescriptionSection,
  AnswerSection,
  SharingPetition,
  AgreementsSection,
}
