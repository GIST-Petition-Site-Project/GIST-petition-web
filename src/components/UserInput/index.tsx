import {
  chakra,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { memo, useRef, useState } from 'react'
import { FaCheck, FaLock, FaUserAlt } from 'react-icons/fa'
import theme from '@style/theme'
import { RegisterText } from './styles'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { MdPassword } from 'react-icons/md'

interface IProps {
  page: string
  text: string
  name: string
  type: string
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  viewPassword: boolean
  onClick: () => void
}

const UserInput = memo(
  ({
    page,
    text,
    name,
    type,
    value,
    placeholder,
    onChange,
    disabled,
    viewPassword,
    onClick,
  }: IProps) => {
    let WhichIcon
    switch (name) {
      case 'username':
        WhichIcon = chakra(FaUserAlt)
        break
      case 'verificationCode':
        WhichIcon = chakra(MdPassword)
        break
      case 'password':
        WhichIcon = chakra(FaLock)
        break
      case 'passwordConfirm':
        WhichIcon = chakra(FaCheck)
        break
      default:
        throw Error('you sent wrong input name')
    }

    let onPassword = false
    let inputType = type
    if (page === 'findPassword' && name === 'password') {
      onPassword = true
      if (viewPassword) {
        inputType = 'text'
      }
    }

    return (
      <>
        <FormControl isRequired>
          <RegisterText>{text}</RegisterText>
          <InputGroup borderColor={`${theme.color.ligthGray}`}>
            <InputLeftElement>
              {<WhichIcon color="gray.300"></WhichIcon>}
            </InputLeftElement>
            <Input
              type={inputType}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              disabled={disabled}
              borderRadius="0"
            ></Input>
            {onPassword && (
              <InputRightElement>
                <IconButton
                  color="gray.300"
                  aria-label="view password"
                  variant="password"
                  icon={viewPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={onClick}
                ></IconButton>
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
      </>
    )
  },
)

export default UserInput
