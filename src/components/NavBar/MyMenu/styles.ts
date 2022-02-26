import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div`
  .details_overlay {
    margin: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
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
      color: #333;
      box-shadow: 0 2px 4px 0 rgb(33 37 41 / 24%);
      display: flex;
      flex-direction: column;
      width: 8rem;
      border: 1px solid #e0e0e0;
      padding: 8px 0;
      z-index: 1000;
      background-color: #fff;
      ::before {
        top: -19px;
        right: 24px;
        border: 9px solid transparent;
        border-bottom-color: #e0e0e0;
        position: absolute;
        content: '';
      }
      ::after {
        top: -16px;
        right: 25px;
        border: 8px solid transparent;
        border-bottom-color: #fff;
        position: absolute;
        content: '';
      }
      a {
        font-weight: 400;

        padding: 4px 8px 4px 16px;
        margin: 2px 0;
        display: inline-block;
        width: 100%;
        text-align: left;
        font-size: 1rem;
        &:hover {
          text-decoration: underline #d52425;
          text-underline-position: under;
        }
      }
      .dropdown_divider {
        height: 0;
        width: 100%;
        margin: 8px 0;
        border: 0.5px solid #e0e0e0;
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
