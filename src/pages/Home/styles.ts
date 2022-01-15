import styled from '@emotion/styled'
import theme from '../../style/theme'
const MainBackgroundImage = styled.div`
  height: 80vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.innerMaxWidth};
  height: 100%;
`

const SearchCurrentPetition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  height: 6.25rem;
  border-radius: 5px;
  background-color: rgba(56, 64, 70, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
const SearchCurrentPetition__Input = styled.input`
  width: 42.5rem;
  height: 3.125rem;
  border: 2px solid ${theme.color.black};
  border-radius: 5px 5px 0px 5px;
  padding: 0 1.25em;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`

const DashBoard = styled.div`
  position: relative;
  text-align: center;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${theme.color.black};
  letter-spacing: 0.1em;
  margin: 3.125em 0;
`

export {
  MainBackgroundImage,
  Inner,
  SearchCurrentPetition,
  SearchCurrentPetition__Input,
  DashBoard,
}
