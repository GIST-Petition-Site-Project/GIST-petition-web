import React, { FormEvent, useRef, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { Container, WithdrawalButton } from './styles'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@redux/store.hooks'
import UserInput from '@components/UserInput'
import { deleteUserMe } from '@api/userAPI'
import { setLogout } from '@redux/auth/authSlice'

const Withdrawal = (): JSX.Element => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = prompt(
      '정말 탈퇴하시겠습니까?\n탈퇴를 원하시면 "탈퇴합니다"를 입력해주세요.',
      '',
    )
    if (input !== '탈퇴합니다') {
      return
    }
    setErrorText('')
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(password)) {
      setErrorText('영문, 숫자 혼합 8자 이상의 비밀번호 입력하세요.')
      return
    }
    const response = await deleteUserMe({
      password: password,
    })
    const status = response.status
    const message = response.data.message
    setErrorText(message)

    if (status < 400) {
      toast({
        status: 'success',
        duration: 3000,
        title: '회원 탈퇴',
        description: '계정이 삭제되었습니다',
        isClosable: true,
      })
      navigate('/login')
      dispatch(setLogout())
    }
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="register_form">
        <Stack spacing={4}>
          <span>회원 탈퇴</span>
          <UserInput
            name="password"
            type="password"
            value={password}
            placeholder="현재 비밀번호를 입력하세요"
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          <WithdrawalButton>회원 탈퇴</WithdrawalButton>
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
    </Container>
  )
}

export default Withdrawal
