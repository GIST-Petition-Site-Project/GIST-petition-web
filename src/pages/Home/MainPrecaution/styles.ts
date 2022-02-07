import styled from '@emotion/styled'
import theme from '../../../style/theme'
import { Button, Box, Link, Text, List } from '@chakra-ui/react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

const Precaution = styled.div`
  background: ${theme.color.WHITE};
  padding: 1em;
  display: flex;
  flex-direction: column;
  /* 반은 빨간색, 반은 회색으로 설정해줍니다. */
  /* 이 방식이 제일 간단한 것 같아요! */
  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding: 0;
    margin-top: 0;
  } ;
`

const Inner = styled.div`
  max-width: ${theme.space.INNER_MAXWIDTH};
  margin: auto;
`

const PrecautionText = styled(Text)`
  color: ${theme.color.BLACK};
  font-size: 1.3rem;

  @media screen and (min-width: ${theme.breakpoints.md}) {
    color: ${theme.color.WHITE};
  }
`

const PrecautionBtns = styled.div`
  @media screen and (min-width: ${theme.breakpoints.md}) {
    background: linear-gradient(
      90deg,
      ${theme.color.SECONDARY_RED} 50%,
      ${theme.color.QUATERNARY_GRAY} 50%
    );
  }
`

const ButtonInner = styled.div`
  max-width: ${theme.space.BUTTON_INNER_MAXWIDTH};
  margin: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
  }
`

const PrecautionLeftBtn = styled(Button)`
  flex: 1 1 50%;
  background-color: ${theme.color.WHITE};
  padding: 0.5em 1em;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  border-radius: 0;
  height: ${theme.size.BUTTON_HEIGHT}
  display: inline-flex;
  margin-bottom: 0.5em;
  color: ${theme.color.WHTIE};
  @media screen and (min-width: ${theme.breakpoints.md}) {
    background-color: ${theme.color.SECONDARY_RED};
    color: ${theme.color.WHTIE};
    padding-left: 0;
    margin-bottom: 0;
    border: none;
    justify-content: flex-start;
    :hover {
      background-color: ${theme.color.SECONDARY_RED};
      outline: none;
      box-shadow: none;
    }
    :focus {
      background-color: ${theme.color.SECONDARY_RED};
      outline: none;
      box-shadow: none;
    }
    :active {
      background-color: ${theme.color.SECONDARY_RED};
      outline: none;
      box-shadow: none;
    }
  }
`

const PrecautionRightBtn = styled(Button)`
  flex: 1 1 50%;
  background-color: ${theme.color.WHITE};
  padding: 0.5em 1em;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  border-radius: 0;
  height: ${theme.size.BUTTON_HEIGHT}
  display: inline-flex;
  margin-bottom: 0.5em;
  outline: none;
  :focus {
    outline: none;
  }

  @media screen and (min-width: ${theme.breakpoints.md}) {
    color: ${theme.color.WHTIE};
    padding-right: 0;
    margin-bottom: 0;
    border: none;
    background-color: ${theme.color.QUATERNARY_GRAY};
    justify-content: flex-end;
    :hover {
      background-color: ${theme.color.QUATERNARY_GRAY};
      outline: none;
      box-shadow: none;
    }
    :focus {
      background-color: ${theme.color.QUATERNARY_GRAY};
      outline: none;
      box-shadow: none;
    }
    :active {
      background-color: ${theme.color.QUATERNARY_GRAY};
      outline: none;
      box-shadow: none;
    }
  }
`

const PrecautionIcon = styled(IoMdArrowDropdownCircle)`
  margin-left: 0.5em;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    color: ${theme.color.WHITE};
  } ;
`

const PrecautionMessage = styled.div``
const LeftBox = styled(Box)`
  padding: 1em 2em;
  background-color: ${theme.color.WHITE};
  display: block;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  @media screen and (min-width: ${theme.breakpoints.md}) {
    background-color: ${theme.color.SECONDARY_RED};
    border: 0;
  } ;
`

const RightBox = styled(Box)`
  padding: 1em 2em;
  background-color: ${theme.color.WHITE};
  display: block;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  @media screen and (min-width: ${theme.breakpoints.md}) {
    background-color: ${theme.color.QUATERNARY_GRAY};
    border: 0;
  } ;
`

const StyledDiv3 = styled.div`
  padding: 1rem 0;
  margin-top: 0;
  color: ${theme.color.BLACK};
  background-color: ${theme.SECONDARY_RED}
  /* shadow: md; */
  position: relative;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    color: ${theme.color.WHITE};
  } ;
`
const CollapseInner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 62.5rem;
  height: 100%;
  transition: 0.5s 0.5s;
`

const PrecautionLink = styled(Link)`
  color: ${theme.color.SECONDARY_RED};
  @media screen and (min-width: ${theme.breakpoints.md}) {
    color: rgb(253, 253, 150);
  } ;
`

const PrecautionList = styled(List)`
  font-size: 0.9rem;
  @media screen and (min-width: ${theme.breakpoints.sm}) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: ${theme.breakpoints.md}) {
    font-size: 1.2rem;
  } ;
`

const MainPetitionBtn = styled(Button)`
  background-color: ${theme.color.SECONDARY_RED};
  color: ${theme.color.WHITE};
  padding:0.5em 0;
  border: 2px solid ${theme.color.LIGHT_GRAY};
  border-radius: 0;
  height: ${theme.size.BUTTON_HEIGHT}
  display: inline-flex;
  outline: none;
  font-size: 1.3rem;
  width:100%;
  transition: all 300ms ease-in;
  :hover {
    background-color: ${theme.color.SECONDARY_RED};
    }
  :focus {
    outline: none;
    box-shadow: none;
    }
  :active {
    outline: none;
    box-shadow: none;
  }
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display:none;
  }
`

export {
  StyledDiv3,
  CollapseInner,
  Precaution,
  PrecautionText,
  PrecautionBtns,
  PrecautionLeftBtn,
  PrecautionRightBtn,
  PrecautionIcon,
  PrecautionMessage,
  LeftBox,
  RightBox,
  PrecautionLink,
  Inner,
  PrecautionList,
  ButtonInner,
  MainPetitionBtn,
}
