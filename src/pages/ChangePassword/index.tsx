import React, { FormEvent, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { ChangePwdButton, Container } from './styles'
import UserInput from '@components/UserInput'
import { putPasswordMe } from '@api/userAPI'
import { useNavigate } from 'react-router'

interface ChangePassword {
  prevPassword: string
  newPassword: string
  newPasswordConfirm: string
}

const ChangePassword = (): JSX.Element => {
  const navigate = useNavigate()
  const [input, setInput] = useState<ChangePassword>({
    prevPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  })
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorText('')
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(input.newPassword)) {
      setErrorText('영문과 숫자를 포함한 8자리 이상의 비밀번호를 설정해주세요')
      return
    }

    if (input.newPassword !== input.newPasswordConfirm) {
      setErrorText('비밀번호가 일치하지 않습니다')
      return
    }

    if (input.newPassword === input.newPasswordConfirm) {
      if (input.prevPassword === input.newPassword) {
        setErrorText('현재 비밀번호와 다른 새로운 비밀번호를 입력해주세요')
        return
      }

      const response = await putPasswordMe({
        newPassword: input.newPassword,
        originPassword: input.prevPassword,
      })

      const status = response.status
      const message = response.data.message

      if (status >= 400) {
        setErrorText(message)
        return
      }

      if (status < 400) {
        toast({
          status: 'success',
          duration: 3000,
          title: '비밀번호 재설정',
          description: '비밀번호가 재설정되었습니다',
          isClosable: true,
        })
        navigate('/myinfo')
      }
    }
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="register_form">
        <Stack spacing={4}>
          <span>비밀번호 변경</span>
          <UserInput
            text="현재 비밀번호"
            name="prevPassword"
            type="password"
            value={input.prevPassword}
            placeholder="현재 비밀번호를 입력하세요"
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          <UserInput
            text="새로운 비밀번호"
            name="newPassword"
            type="password"
            value={input.newPassword}
            placeholder="영문, 숫자 혼합 8자 이상의 비밀번호 입력하세요"
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          <UserInput
            text="새로운 비밀번호 확인"
            name="newPasswordConfirm"
            type="password"
            value={input.newPasswordConfirm}
            placeholder="비밀번호를 재입력하세요"
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          <ChangePwdButton type="submit" className="submit__btn">
            비밀번호 재설정
          </ChangePwdButton>
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
    </Container>
  )
}

export default ChangePassword
