import { Tag } from '@chakra-ui/react'
import theme from '@style/theme'
import styled from '@emotion/styled'

const PetitionsHead = styled.div`
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
    display: flex;

    .head_status {
      display: flex;
      width: 100px;
      padding-left: 10px;
    }
    .head_category {
      display: flex;
      width: 100px;
    }
    .head_subject {
      margin-left: 220px;
      margin-right: 220px;
      display: flex;
    }
    .head_date {
      position: absolute;
      display: flex;
      top: 0;
      right: 90px;
      width: 80px;
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
const PetitionStatus = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  bottom: 0%;
  padding-bottom: 15px;
  padding-left: 3px;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    position: absolute;
    font-size: 12px;
    padding-bottom: 0;
    padding-left: 5px;
  }
`
const PetitionCategory = styled.div`
  color: #8a8a8a;
  width: 130px;
  display: flex;
  align-items: center;
  bottom: 0%;
  margin: 0;
  font-size: 12px;
  padding-left: 5px;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    position: absolute;
    left: 100px;
    bottom: 0;
    top: 0;
    height: 1rem;
    margin: auto;
    font-size: 1rem;
    padding-left: 0;
  }
`
const PetitionTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PetitionStatusTag = styled(Tag)`
  border-radius: 0;
  font-size: 10px;
  background-color: ${props =>
    props.open
      ? `${theme.color.QUATERNARY_GRAY}`
      : `${theme.color.SECONDARY_RED}`};
  color: white;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 12px;
  }
`

export {
  PetitionsUl,
  PetitionsHead,
  PetitionStatus,
  PetitionCategory,
  PetitionStatusTag,
  PetitionTagWrapper,
}
