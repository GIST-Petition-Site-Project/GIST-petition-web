import {
  chakra,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { memo, useRef } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa'
import theme from '../../style/theme'
import { RegisterText } from './styles'

const UserInput = memo(
  ({ text, name, type, value, placeholder, onChange, disabled }: any) => {
    const CFaUserAlt = chakra(FaUserAlt)
    const CFaLock = chakra(FaLock)
    const inputRef = useRef(null)
    return (
      <>
        <FormControl isRequired>
          <RegisterText>{text}</RegisterText>
          <InputGroup borderColor={`${theme.color.ligthGray}`}>
            <InputLeftElement>
              {text === '이메일' ? (
                <CFaUserAlt color="gray.300" />
              ) : (
                <CFaLock color="gray.300" />
              )}
            </InputLeftElement>
            <Input
              ref={inputRef}
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              disabled={disabled}
              borderRadius="0"
            ></Input>
          </InputGroup>
        </FormControl>
      </>
    )
  },
)

export default UserInput
