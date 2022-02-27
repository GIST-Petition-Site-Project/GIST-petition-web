import React, { FormEvent, useRef, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { Container, WithdrawalButton } from './styles'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@redux/store'
import { useAppDispatch, useAppSelect } from '@redux/store.hooks'
import UserInput from '@components/UserInput'
import LoadingSpinner from '@components/LoadingSpinner'
import { deleteUserMe } from '@api/userAPI'
import { setLogout } from '@redux/auth/authSlice'

const Withdrawal = (): JSX.Element => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')

  const whichUI = useAppSelect((state: RootState) => state.findPassword)
  const dispatch = useAppDispatch()
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
  }

  const handleDelete = async () => {
    setErrorText('')
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(password)) {
      setErrorText('영문과 숫자를 포함한 8자리 이상의 비밀번호를 설정해주세요')
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="register_form">
        <Stack spacing={4}>
          <span>회원 탈퇴</span>
          <UserInput
            text="비밀번호"
            name="password"
            type="password"
            value={password}
            placeholder="영문과 숫자를 포함한 8자리 이상의 비밀번호를 입력하세요"
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          {!whichUI.isLoading && (
            <WithdrawalButton onClick={handleDelete}>
              회원 탈퇴
            </WithdrawalButton>
          )}
          {whichUI.isLoading && <LoadingSpinner></LoadingSpinner>}
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
    </Container>
  )
}

export default Withdrawal
