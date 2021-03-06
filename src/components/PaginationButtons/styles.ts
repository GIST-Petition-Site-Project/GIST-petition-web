import { PaginationContainer } from '@ajna/pagination'
import theme from '@style/theme'
import styled from '@emotion/styled'

const SPaginationContainer = styled(PaginationContainer)`
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    flex-wrap: nowrap;
    justify-content: center;
  }

  > button {
    background-color: ${theme.color.WHITE};
    border: 1px solid ${theme.color.LIGHT_GRAY};
    border-radius: 0;
    font-size: 12px;
    height: 30px;
    width: 4rem;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: 1rem;
      height: 40px;
      width: 5.75rem;
    }
    :focus {
      box-shadow: none;
    }
  }

  ol {
    justify-content: center;
    /* w={{ base: '', md: '100%' }} */
    @media screen and (min-width: ${theme.breakpoints.md}) {
      width: 100%;
    }
    .pagination-page {
      width: 30px;
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 0;
      font-size: 12px;
      @media screen and (min-width: ${theme.breakpoints.md}) {
        width: 40px;
        height: 40px;
        font-size: 1rem;
      }
      :hover {
        background-color: #2f363c;
        color: #fff;
        border: none;
      }
      :focus {
        box-shadow: none;
      }
    }
    [aria-current='true'] {
      background-color: #2f363c;
      color: #fff;
    }
    [aria-current='false'] {
      background-color: #fff;
    }
  }
  .pagination-separator {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0;
    font-size: 1rem;
    width: 22.5px;
    height: 30px;
    margin: 0 3px;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      width: 30px;
      height: 40px;
      margin: 0 10px;
    }
    :focus {
      box-shadow: none;
    }
    :active {
      background-color: #fff;
    }
  }
`

export { SPaginationContainer }
