import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div`
  .details_overlay {
    margin: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    border: 2px solid transparent;
    text-align: center;
    cursor: pointer;
    display: none;

    @media screen and (min-width: ${theme.breakpoints.md}) {
      display: block;
      font-size: 1.125rem;
      margin: 0px 0px 5px 40px;
      padding: 5px 0px 3px 0px;
    }

    summary {
      list-style: none;
      &::-webkit-details-marker {
        display: none;
      }

      -ms-user-select: none;
      -moz-user-select: -moz-none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      &:hover {
        text-decoration: underline #d52425;
        text-underline-position: under;
      }
      .before_summary {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 80;
        height: 100vh;
        display: none;
        cursor: default;
        content: ' ';
        background: transparent;
      }
    }

    .menu_list {
      position: absolute;
      right: 24px;
      top: 90%;
      background-color: rgb(47, 54, 60);
      color: white;
      border: 2px solid #22272e;
      display: flex;
      flex-direction: column;
      width: 8rem;
      box-shadow: 0px 2px 5px 0.5px #22272e;
      padding: 8px 0;
      z-index: 1000;
      ::before {
        top: -19px;
        right: 16px;
        border: 9px solid transparent;
        border-bottom-color: #22272e;
        position: absolute;
        content: '';
      }
      ::after {
        top: -15px;
        right: 17px;
        border: 8px solid transparent;
        border-bottom-color: rgb(47, 54, 60);
        position: absolute;
        content: '';
      }
      a {
        font-weight: 400;

        padding: 4px 8px 4px 16px;
        display: inline-block;
        width: 100%;
        text-align: left;
        font-size: 1rem;
        &:hover {
          background-color: #316dca;
        }
      }
      .dropdown_divider {
        height: 0;
        width: 100%;
        margin: 8px 0;
        border: 1px solid #22272e;
        box-sizing: border-box;
      }
    }
  }
`

const Before = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 80;
  height: 100vh;
  display: ${props => (props.open ? 'block' : 'none')};
  cursor: default;
  content: ' ';
  background: transparent;
`
const MobileMenu = styled.div`
  display: block;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

export { Container, MobileMenu, Before }
