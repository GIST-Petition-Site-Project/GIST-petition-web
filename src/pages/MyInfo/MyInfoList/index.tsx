import { ArrowForwardIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { List } from './styles'

interface Iprops {
  text: string
  onNavigate: (text: string) => void
}

const MyInfoItem = ({ text, onNavigate }: Iprops) => {
  const handleClick = () => {
    onNavigate(text)
  }
  return (
    <List>
      <span className="text">{text}</span>
      <IconButton
        className="button"
        aria-label="naviagate"
        onClick={handleClick}
        icon={<ArrowForwardIcon />}
      ></IconButton>
    </List>
  )
}

export default MyInfoItem
