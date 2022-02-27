import React, { FormEvent, useRef, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { Container, WithdrawalButton } from './styles'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@redux/store'
import {
  postConfirmVerificationCodeForPassword,
  postCreateVerificationCodeForPassword,
  putResetPassword,
} from '@api/verificationAPI'
import { setFindPasswordWhichInfo } from '@redux/findPassword/findPasswordSlice'
import { useAppDispatch, useAppSelect } from '@redux/store.hooks'
import UserInput from '@components/UserInput'
import LoadingSpinner from '@components/LoadingSpinner'

const Withdrawal = (): JSX.Element => {
  const navigate = useNavigate()
  const [input, setInput] = useState<RegisterForm>({
    username: '',
    password: '',
    verificationCode: '',
    passwordConfirm: '',
  })

  const whichUI = useAppSelect((state: RootState) => state.findPassword)
  const dispatch = useAppDispatch()
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleReset = async () => {
    setErrorText('')
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(input.password)) {
      setErrorText('영문과 숫자를 포함한 8자리 이상의 비밀번호를 설정해주세요')
      return
    }
    if (input.password === input.passwordConfirm) {
      const response = await putResetPassword({
        password: input.password,
        username: input.username,
        verificationCode: input.verificationCode,
      })
      const status = response.status
      const message = response.data.message
      setErrorText(message)

      if (status < 400) {
        toast({
          status: 'success',
          duration: 3000,
          description: '비밀번호 재설정',
          title: '비밀번호가 재설정되었습니다',
          isClosable: true,
        })
        navigate('/login')
      } else {
        dispatch(setFindPasswordWhichInfo('Valid'))
      }
    } else {
      // passwordRef.current && passwordRef.current.focus()
      setErrorText('비밀번호가 일치하지 않습니다')
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
            value={input.password}
            placeholder="영문과 숫자를 포함한 8자리 이상의 비밀번호를 입력하세요"
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          {!whichUI.isLoading && <WithdrawalButton>회원 탈퇴</WithdrawalButton>}
          {whichUI.isLoading && <LoadingSpinner></LoadingSpinner>}
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
    </Container>
  )
}

export default Withdrawal
