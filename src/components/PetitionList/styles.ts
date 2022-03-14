import styled from '@emotion/styled'
import theme from '@style/theme'

const PetitionsHead = styled.div`
  text-align: center;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  align-items: center;
  display: none;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }

  .head_wrap {
    position: relative;
    width: 100%;
    .head_category {
      position: absolute;
      top: 0;
      width: 150px;
    }
    .head_subject {
      margin-left: 200px;
      margin-right: 220px;
    }
    .head_date {
      position: absolute;
      top: 0;
      right: 90px;
      width: 130px;
      text-align: center;
    }
    .head_agreements {
      position: absolute;
      right: 0;
      top: 0;
      width: 90px;
      text-align: center;
    }
  }
`

const PetitionsUl = styled.ul`
  margin-left: 0;

  .empty_message {
    text-align: center;
    margin: 12em 0;
    span {
      font-size: 1.2em;
      font-weight: 600;
    }
  }
  li {
    position: relative;
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    :hover {
      background-color: #f8f8f8;
    }
    display: block;

    .category {
      font-size: 14px;
      position: absolute;
      color: #8a8a8a;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        position: absolute;
        left: 10px;
        bottom: 0;
        top: 0;
        height: 16px;
        margin: auto;
        font-size: 1rem;
      }
    }
    .subject {
      text-align: left;
      display: block;
      word-break: break-all;
      padding-bottom: 10px;
      margin: 25px 0 20px 0;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        padding-bottom: 0;
        margin: 0 220px 0 200px;
      }
      :hover {
        text-decoration: underline;
      }
      > a {
        display: inline-block;
        width: 100%;
      }
    }
    .date {
      bottom: 20px;
      position: absolute;
      color: #8a8a8a;
      font-weight: 300;
      text-align: center;

      @media screen and (min-width: ${theme.breakpoints.md}) {
        right: 90px;
        width: 130px;
        bottom: 0;
        top: 0;
        height: 16px;
        margin: auto;
      }
    }
    .agreements {
      text-align: center;
      bottom: 20px;
      position: absolute;
      right: 0;
      color: #df3127;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        width: 90px;
        bottom: 0;
        top: 0;
        height: 1rem;
        margin: auto;
      }

      > span {
        display: inline-block;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          display: none;
        }
      }
    }
  }
`

export { PetitionsHead, PetitionsUl }
