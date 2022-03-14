import logo from '@assets/img/footer_logo.png'
import { FooterContainer, Text } from './styles'
import Inner from '../Inner'
import { RiKakaoTalkFill } from 'react-icons/ri'

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <Inner>
        <img className="logo" alt="Logo" src={logo}></img>
        <Text>
          <a className="teamLink" href="https://www.gist-petition.com/team">
            <span> 팀페이지로 가기</span>
          </a>
          <a href="https://open.kakao.com/o/s7Qprk3d">
            <button>
              <span>Open 채팅방</span> <RiKakaoTalkFill />
            </button>
          </a>
          <span>대표 이메일: rjsgh7943@gist.ac.kr</span>
        </Text>
      </Inner>
    </FooterContainer>
  )
}

export default Footer
