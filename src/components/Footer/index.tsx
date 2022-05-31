import logo from '@assets/img/footer_logo.png'
import { FooterContainer, Text } from './styles'
import Inner from '../Inner'
import { RiKakaoTalkFill } from 'react-icons/ri'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const Footer = (): JSX.Element => {
  const t = useTranslate(locale)

  return (
    <FooterContainer>
      <Inner>
        <img className="logo" alt="Logo" src={logo}></img>
        <Text>
          <a className="teamLink" href="https://www.gist-petition.com/team">
            <div>
              <span>{t('aboutTeam')}</span>
            </div>
          </a>
          <a href="https://open.kakao.com/o/s7Qprk3d">
            <button>
              <div>
                <span>{t('openChat')}</span>
                <RiKakaoTalkFill />
              </div>
            </button>
          </a>
          <div>
            <div>
              <span>{t('contact')}</span>
            </div>
            <div>
              <span>{t('graduate')}</span>
              <span>gsa@gist.ac.kr</span>
            </div>
            <div>
              <span>{t('emc')}</span>
              <span>giststu2022@gmail.com</span>
            </div>
            <div>
              <span>{t('betterIT')}</span>
              <span>rjsgh7943@gist.ac.kr</span>
            </div>
          </div>
        </Text>
      </Inner>
    </FooterContainer>
  )
}

export default Footer
