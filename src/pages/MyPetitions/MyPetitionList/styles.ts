import theme from '@style/theme'
import styled from '@emotion/styled'

interface Status {
  isAnswered: boolean
  isExpired: boolean
}

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

    .head_status {
      position: absolute;
      top: 0;
      width: 100px;
    }
    .head_category {
      position: absolute;
      top: 0;
      left: 90px;
      width: 130px;
      text-align: center;
    }
    .head_subject {
      margin-left: 220px;
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
  min-height: 570px;

  li {
    position: relative;
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    :hover {
      background-color: #f8f8f8;
    }
    display: block;

    .category {
      color: #8a8a8a;
      bottom: 0%;
      margin: 0;
      font-size: 12px;
      padding-left: 5px;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        position: absolute;
        left: 133px;
        bottom: 0;
        top: 0;
        height: 1rem;
        margin: auto;
        font-size: 1rem;
        padding-left: 0;
      }
    }
    .subject {
      text-align: left;
      display: block;
      word-break: break-all;
      padding-bottom: 10px;
      padding-left: 5px;
      margin: 5px 0 20px 0;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        padding-left: 0;
        padding-bottom: 0;
        margin: 0 220px 0 220px;
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
      padding-left: 5px;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        right: 90px;
        width: 130px;
        bottom: 0;
        top: 0;
        height: 16px;
        margin: auto;
        padding-left: 0;
      }
    }
    .agreements {
      text-align: center;
      bottom: 20px;
      position: absolute;
      right: 0;
      color: #df3127;
      padding-right: 5px;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        width: 90px;
        bottom: 0;
        top: 0;
        height: 1rem;
        margin: auto;
        padding-right: 0;
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

const Status = styled.div<Status>`
  height: 100%;
  display: flex;
  align-items: center;
  bottom: 0%;
  padding-bottom: 10px;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    position: absolute;
    font-size: 12px;
    padding-bottom: 0;
  }
  .status_box {
    margin-left: 3px;
    border-radius: 2px;
    font-size: 0.5rem;
    padding: 0.5em;
    color: white;
    background-color: ${props =>
      props.isAnswered || props.isExpired
        ? `${theme.color.QUATERNARY_GRAY}`
        : `${theme.color.SECONDARY_RED}`};

    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: 0.8rem;
      margin-left: 5px;
    }
  }
`
export { PetitionsUl, PetitionsHead, Status }
