import { Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import MyInfoItem from './MyInfoitem'
import { Link } from 'react-router-dom'

const MyInfo = (): JSX.Element => {
  return (
    <Container className="register">
      <Stack spacing={4}>
        <span className="title">회원 정보 변경 </span>
        <ul className="MyInfo_List">
          <Link to="/changepassword">
            <MyInfoItem text="비밀번호 변경"></MyInfoItem>
          </Link>
          <Link to="/withdrawal">
            <MyInfoItem text="회원 탈퇴"></MyInfoItem>
          </Link>
        </ul>
      </Stack>
    </Container>
  )
}

export default MyInfo
