import styled from '@emotion/styled'
import theme from '@style/theme'

const Container = styled.div``

const PetitionBoard = styled.div`
  position: relative;
  margin-top: 6rem;
  .petition_type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    span {
      font-size: 20px;
      font-weight: bold;
    }
    .selects {
      width: 224px;
      display: flex;
      justify-content: space-between;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        width: 268px;
      }
      .select_wrapper {
        position: relative;
        select {
          width: 108px;
          @media screen and (min-width: ${theme.breakpoints.md}) {
            width: 128px;
          }
          padding: 0 32px 0 16px;
          padding-inline-start: 1rem;
          padding-inline-end: 2em;
          -webkit-appearance: none;
          appearance: none;
          background-color: transparent;
          height: 32px;
          border: 1px solid #ccc;
          word-wrap: break-word;
          :focus-visible {
            outline: none;
          }
        }
        ::after {
          position: absolute;
          content: '⌵';
          font-weight: bold;
          font-size: 1.2rem;
          top: 2px;
          right: 14px;
        }
      }
    }
  }
  .chakra-tabs {
    .chakra-tabs__tablist {
      border-color: #ccc;
      font-size: 12px;
      color: #8e8e8e;

      .chakra-tabs__tab {
        font-size: 1rem;
        font-weight: bold;
        :focus {
          outline: none;
          box-shadow: none;
        }
        :active {
          background: unset;
        }

        @media screen and (min-width: ${theme.breakpoints.md}) {
          font-size: 1.1rem;
        }
      }
    }
    .chakra-tabs__tab-panel {
      padding: 0 0 1rem 0;
      text-align: center;
    }
  }
`

export { PetitionBoard, Container }
