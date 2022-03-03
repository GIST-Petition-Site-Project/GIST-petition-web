import { ArrowForwardIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { List } from './styles'

interface Iprops {
  link: string
  text: string
}

const MyInfoItem = ({ link, text }: Iprops) => {
  return (
    <List>
      <Link to={`/myinfo/${link}`}>
        <span className="text">{text}</span>
        <IconButton
          className="button"
          aria-label="naviagate"
          icon={<ArrowForwardIcon />}
        ></IconButton>
      </Link>
    </List>
  )
}

export default MyInfoItem
