import React, { FormEvent, useRef, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { RegisterButton, Container, WithdrawalButton } from './styles'
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

const ChangeMyInfo = (): JSX.Element => {
  const navigate = useNavigate()
  const [input, setInput] = useState<RegisterForm>({
    username: '',
    password: '',
    verificationCode: '',
    passwordConfirm: '',
  })

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
        // dispatch(setFindPasswordWhichInfo('Valid'))
      }
    } else {
      setErrorText('비밀번호가 일치하지 않습니다')
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChangePassword = () => {
    return
  }

  const handleWithdrawal = async () => {
    return
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="changeUserInfo_form">
        <Stack spacing={4}>
          <section className="changeUserInfo_section">
            <span className="title">내 정보 변경</span>
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
            <UserInput
              text="비밀번호 확인"
              name="passwordConfirm"
              type="password"
              value={input.passwordConfirm}
              placeholder="비밀번호를 재입력하세요"
              onChange={handleChange}
              disabled={false}
              onPassword={true}
            ></UserInput>
            <RegisterButton onClick={handleReset} className="submit__btn">
              비밀번호 변경
            </RegisterButton>
            <span className="err_msg">{errorText}</span>
          </section>
          <section className="changeUserInfo_section">
            <span className="title">회원 탈퇴</span>
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
            <WithdrawalButton onClick={handleReset} className="submit__btn">
              회원 탈퇴
            </WithdrawalButton>
            <span className="err_msg">{errorText}</span>
          </section>
        </Stack>
      </form>
    </Container>
  )
}

export default ChangeMyInfo
