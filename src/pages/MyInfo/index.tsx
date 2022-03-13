import { Stack } from '@chakra-ui/react'
import { Container, List } from './styles'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const MyInfo = (): JSX.Element => {
  return (
    <Container className="register">
      <Stack spacing={4}>
        <span className="title">회원 정보 관리 </span>
        <ul className="my_info_list">
          <List>
            <Link to="/myinfo/changepassword">
              <span className="text">비밀번호 변경</span>
              <IconButton
                className="button"
                aria-label="naviagate"
                icon={<ArrowForwardIcon />}
              />
            </Link>
          </List>
          {/* <List>
            <Link to="/myinfo/withdrawal">
              <span className="text">회원 탈퇴</span>
              <IconButton
                className="button"
                aria-label="naviagate"
                icon={<ArrowForwardIcon />}
              />
            </Link>
          </List> */}
        </ul>
      </Stack>
    </Container>
  )
}

export default MyInfo
