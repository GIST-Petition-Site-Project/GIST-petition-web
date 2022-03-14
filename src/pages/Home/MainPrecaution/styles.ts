import styled from '@emotion/styled'
import theme from '@style/theme'

interface Open {
  leftOpen: boolean
  rightOpen: boolean
}

const PrecautionSection = styled.section`
  padding: 1em 2rem;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    padding: 0;
    margin-top: 0;
  } ;
`

const PrecautionBtns = styled.div`
  @media screen and (min-width: ${theme.breakpoints.md}) {
    background: linear-gradient(
      90deg,
      ${theme.color.SECONDARY_RED} 50%,
      ${theme.color.QUATERNARY_GRAY} 50%
    );
  }
  > .inner {
    display: flex;
    flex-direction: column;
    padding: 0;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      padding: 0 2rem;
    }
    button {
      background-color: ${theme.color.WHITE};
      padding: 0.5em 1em;
      border: 2px solid ${theme.color.LIGHT_GRAY};
      border-radius: 0;
      height: ${theme.size.BUTTON_HEIGHT};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5em;
      flex: 1 1 50%;
      transition: background-color 300ms ease-in;
      font-weight: 600;
      position: relative;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        color: ${theme.color.WHTIE};
        margin-bottom: 0;
        border: none;
      }

      > span {
        color: ${theme.color.BLACK};
        font-size: 0.8rem;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          color: ${theme.color.WHITE};
          font-size: 1rem;
        }
      }

      .icon {
        right: 1rem;
        position: absolute;
        font-size: 0.8em;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          color: ${theme.color.WHITE};
          margin-left: 0.5em;
          position: unset;
          font-size: 1em;
        }
      }
    }

    .left_btn {
      @media screen and (min-width: ${theme.breakpoints.md}) {
        background-color: ${theme.color.SECONDARY_RED};
        padding-left: 2px;
        justify-content: flex-start;
      }
    }

    .right_btn {
      @media screen and (min-width: ${theme.breakpoints.md}) {
        background-color: ${theme.color.QUATERNARY_GRAY};
        padding-right: 2px;
        justify-content: flex-end;
      }
    }
  }
`

const PrecautionContents = styled.div<Open>`
  position: relative;
  .box {
    padding: 1em 0;
    background-color: ${theme.color.WHITE};
    display: block;
    border: 2px solid ${theme.color.LIGHT_GRAY};
    margin-bottom: 1rem;
    overflow: hidden;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      margin-bottom: 0;
      position: absolute;
      border: 0;
      height: 0;
      width: 100%;
    }

    transition: height 200ms ease, z-index 200ms ease 200ms, padding 200ms ease;
  }
  .left_box {
    z-index: ${props => (props.leftOpen ? 10 : 20)};
    padding: ${props => (props.leftOpen ? '1em 0' : 0)};
    height: ${props => (props.leftOpen ? '100%' : 0)};
    display: ${props => (props.leftOpen ? 'block' : 'none')};
    @media screen and (min-width: ${theme.breakpoints.md}) {
      background-color: ${theme.color.SECONDARY_RED};
      height: ${props => (props.leftOpen ? '214px' : 0)};
      display: block;
    }
  }
  .right_box {
    z-index: ${props => (props.rightOpen ? 10 : 20)};
    padding: ${props => (props.rightOpen ? '1em 0' : 0)};
    height: ${props => (props.rightOpen ? '100%' : 0)};
    display: ${props => (props.rightOpen ? 'block' : 'none')};
    @media screen and (min-width: ${theme.breakpoints.md}) {
      background-color: ${theme.color.QUATERNARY_GRAY};
      height: ${props => (props.rightOpen ? '214px' : 0)};
      display: block;
    }
  }
  .inner {
    padding: 1rem 2rem;
    .petition_list {
      font-size: 70%;
      font-size: 0.8rem;
      height: 100%;
      @media screen and (min-width: ${theme.breakpoints.sm}) {
        font-size: 0.9rem;
      }
      @media screen and (min-width: ${theme.breakpoints.md}) {
        font-size: 1rem;
        color: ${theme.color.WHITE};
      }
      li:nth-of-type(1) {
        margin-top: 0;
      }
      li {
        margin-top: 12px;
        a {
          color: ${theme.color.SECONDARY_RED};
          @media screen and (min-width: ${theme.breakpoints.md}) {
            color: rgb(253, 253, 150);
          }
        }
      }
      hr {
        color: #ccc;
        margin-top: 12px;
        @media screen and (min-width: ${theme.breakpoints.md}) {
          color: white;
        }
      }
    }
  }
`

const MainPetitionBtn = styled.button`
  background-color: ${theme.color.SECONDARY_RED};
  color: ${theme.color.WHITE};
  padding: 0.5em 0;
  border-radius: 0;
  height: 2rem;
  font-size: 1rem;
  transition: all 300ms ease-in;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export {
  PrecautionSection,
  PrecautionBtns,
  PrecautionContents,
  MainPetitionBtn,
}
