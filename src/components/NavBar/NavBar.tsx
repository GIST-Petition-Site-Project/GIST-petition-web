import logo from '../../assets/img/logo_light.png'
import styled from '@emotion/styled'

const Header = styled.header`
  height: 60px;
  width: 100%;
  position: fixed; /* 모바일 환경에선 sticky를 없애거나 헤더를 줄이기 */ /* fixed -> display: block 자동 적용 */
  top: 0;
  z-index: 1000;
  background-color: rgba(47, 54, 60, 0.9);
  //#384046, rgba로 opacity를 먹여야 children 요소가 투명해지지 않습니다.
`
const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
`

const Logo = styled.div``

const Logo__Image = styled.img`
  width: 128px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`
const Menu = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`
const ItemName = styled.div`
  margin: 0px 0px 5px 40px;
  padding: 5px 0px 3px 0px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #d52425;
  }
`

const NavBar = (): JSX.Element => {
  return (
    <Header>
      <Inner>
        <Logo>
          <a href="/">
            <Logo__Image alt="logo" src={logo} />
          </a>
        </Logo>
        <Menu>
          <li className="item">
            <ItemName className="item__menu">청원하기</ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">
              <a href="/posts">모든 청원</a>
            </ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">나의 청원</ItemName>
          </li>
          <li className="item">
            <ItemName className="item__menu">
              <a href="/login">로그인</a>
            </ItemName>
          </li>
        </Menu>
      </Inner>
    </Header>
  )
}

export default NavBar
