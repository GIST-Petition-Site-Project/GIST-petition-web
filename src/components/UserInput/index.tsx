import {
  chakra,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { memo, useState } from 'react'
import { FaCheck, FaLock, FaUserAlt } from 'react-icons/fa'
import theme from '@style/theme'
import { SUserInput } from './styles'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { MdPassword } from 'react-icons/md'

interface IProps {
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
      case 'prevPassword':
      case 'newPassword':
        WhichIcon = chakra(FaLock)
        break
      case 'passwordConfirm':
      case 'newPasswordConfirm':
        WhichIcon = chakra(FaCheck)
        break
      default:
        throw Error('you sent wrong input name')
    }

    return (
      <SUserInput>
        <FormControl isRequired>
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
      </SUserInput>
    )
  },
)

export default UserInput
