import { Stack } from '@chakra-ui/react'
import { Container, List } from './styles'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useTranslate } from '@hooks/useTranslate'
import locale from './locale'

const MyInfo = (): JSX.Element => {
  const t = useTranslate(locale)

  return (
    <Container className="register">
      <Stack spacing={4}>
        <span className="title">{t('manage')}</span>
        <ul className="my_info_list">
          <List>
            <Link to="/myinfo/changepassword">
              <span className="text">{t('changePwd')}</span>
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
