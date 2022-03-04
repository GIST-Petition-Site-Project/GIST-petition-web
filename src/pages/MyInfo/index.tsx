import { Stack } from '@chakra-ui/react'
import { Container } from './styles'
import MyInfoItem from './MyInfoItem'

const MyInfo = (): JSX.Element => {
  return (
    <Container className="register">
      <Stack spacing={4}>
        <span className="title">회원 정보 변경 </span>
        <ul className="my_info_list">
          <MyInfoItem link="changepassword" text="비밀번호 변경" />
          <MyInfoItem link="withdrawal" text="회원 탈퇴" />
        </ul>
      </Stack>
    </Container>
  )
}

export default MyInfo
