import styled from '@emotion/styled'
import theme from '../../style/theme'
import { Box, Button, List } from '@chakra-ui/react'

const Header = styled.header`
  height: 3.75rem;
  width: 100%;
  position: fixed; /* 모바일 환경에선 sticky를 없애거나 헤더를 줄이기 */ /* fixed -> display: block 자동 적용 */
  top: 0;
  z-index: 1000;
  background-color: rgba(47, 54, 60, 0.9);
  //#384046, rgba로 opacity를 먹여야 children 요소가 투명해지지 않습니다.
`
const Inner = styled(Box)`
  position: relative;
  margin: 0 auto;
  max-width: ${theme.space.INNER_MAXWIDTH};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  height: 100%;
`

const Logo__Image = styled.img`
  display: flex;
  width: ${theme.size.LOGO_SIZE};
  /* position: absolute;
  top: 0;
  bottom: 0; */
  margin: auto 0;
  height: 3.75rem;
`
const TopMenu = styled(List)`
  /* position: absolute;
  right: 0;
  bottom: 0; */
  display: flex;
  background-color: rgba(47, 54, 60, 0.94);
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    display: flex;
    background-color: transparent;
    width: inherit;
    height: auto;
  }
`
const ItemName = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  border: 2px solid transparent;
  text-align: center;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #d52425;
  }
  @media screen and (min-width: ${theme.breakpoints.md}) {
    margin: 0px 0px 5px 40px;
    font-size: 1.125rem;
    padding: 5px 0px 3px 0px;
  }
`

const MobMenuButton = styled(Button)`
  border-radius: 0;
  position: absolute;
  right: 0;
  height: 100%;
  transform: ${props => (props.open ? 'rotate(-90deg)' : 'none')};
`

export { Header, Inner, Logo, Logo__Image, TopMenu, ItemName, MobMenuButton }
