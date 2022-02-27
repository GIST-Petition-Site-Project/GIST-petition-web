import { ArrowForwardIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { List } from './styles'

interface Iprops {
  text: string
}

const MyInfoItem = ({ text }: Iprops) => {
  return (
    <List>
      <span className="text">{text}</span>
      <IconButton
        className="button"
        aria-label="naviagate"
        icon={<ArrowForwardIcon />}
      ></IconButton>
    </List>
  )
}

export default MyInfoItem
