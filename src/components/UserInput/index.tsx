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
  text: string
  name: string
  type: string
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
  onPassword: boolean
}

const UserInput = memo(
  ({
    text,
    name,
    type,
    value,
    placeholder,
    onChange,
    disabled,
    onPassword,
  }: IProps) => {
    const [viewPassword, setViewPassword] = useState<boolean>(false)
    const [inputType, setInputType] = useState<string>(type)
    const handleShowClick = () => {
      if (!viewPassword) {
        setInputType('text')
      } else {
        setInputType('password')
      }
      setViewPassword(!viewPassword)
    }

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
              borderColor={'#ccc'}
            ></Input>
            {onPassword && (
              <InputRightElement>
                <IconButton
                  color="gray.300"
                  aria-label="view password"
                  variant="password"
                  icon={viewPassword ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={handleShowClick}
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
