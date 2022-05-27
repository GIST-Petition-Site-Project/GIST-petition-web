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
            <div>
              <span>Better IT 팀 소개 페이지</span>
            </div>
          </a>
          <a href="https://open.kakao.com/o/s7Qprk3d">
            <button>
              <div>
                <span>오픈 채팅방</span>
                <RiKakaoTalkFill />
              </div>
            </button>
          </a>
          <p>
            <div>
              <span>대학원 총학생회</span>
              <span>haeinjung@gm.gist.ac.kr</span>
            </div>
            <div>
              <span>비상대책위원회 소통국</span>
              <span> heejupark@gm.gist.ac.kr</span>
            </div>
            <div>
              <span>Better IT 대표</span>
              <span> rjsgh7943@gist.ac.kr</span>
            </div>
          </p>
        </Text>
      </Inner>
    </FooterContainer>
  )
}

export default Footer
