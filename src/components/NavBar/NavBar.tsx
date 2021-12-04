import logo from '../../assets/img/logo_example.png'
import styled from '@emotion/styled'

const Header = styled.header`
  height: 100px;
  position: sticky; /* 모바일 환경에선 sticky를 없애거나 헤더를 줄이기 */
  top: 0;
  margin-bottom: -100px;
  background-color: rgba(35, 37, 36, 0.7);
  //#5a5e5d, rgba로 opacity를 먹여야 children 요소가 투명해지지 않습니다.
`
const Logo = styled.img`
  width: 268px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;

  margin: auto;
`
const Menu = styled.ul`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`
const ItemName = styled.div`
  margin: 5px 20px;
  padding: 5px 0px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #d52425;
    /* text-decoration: underline #d52425; */
    /* text-underline-position: under; firefox, opera, safari 적용 X */
  }
`

const NavBar = (): JSX.Element => {
  return (
    <Header>
      <a href="/">
        <Logo alt="logo" src={logo} />
      </a>
      <Menu>
        <li className="item">
          <ItemName className="item__menu">청원하기</ItemName>
        </li>
        <li className="item">
          <ItemName className="item__menu">모든 청원</ItemName>
        </li>
        <li className="item">
          <ItemName className="item__menu">나의 청원</ItemName>
        </li>
        <li className="item">
          <ItemName className="item__menu">로그인</ItemName>
        </li>
      </Menu>
    </Header>
  )
}

export default NavBar
