import logo from '../../assets/img/footer_logo.png'
import { Container, Inner, Logo, Text } from './styles'

const Footer = (): JSX.Element => {
  return (
    <Container>
      <Inner>
        <Logo alt="Logo" src={logo}></Logo>
        <Text>
          <span>
            (61005) 광주광역시 북구 첨단과기로 123(오룡동) TEL: 062-715-2074 /
            FAX:062-715-2079
          </span>
          <span>
            E-mail:cert@gist.ac.kr[Section of Information Technology]{' '}
          </span>
        </Text>
      </Inner>
    </Container>
  )
}

export default Footer
