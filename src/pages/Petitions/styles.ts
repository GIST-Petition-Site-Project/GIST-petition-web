import styled from '@emotion/styled'
import theme from '../../style/theme'

const Container = styled.div``

const PetitionBoard = styled.div`
  position: relative;
  margin-top: 9.375rem;
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
      width: 268px;
      display: flex;
      justify-content: space-between;

      .chakra-select__wrapper {
        display: inline-block;
        max-width: 128px;
        .chakra-select {
          width: 100%;
          height: 32px;
          border-radius: 0;
          border-color: #ccc;
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
