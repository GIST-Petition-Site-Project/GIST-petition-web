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
import LoadingSpinner from '@components/LoadingSpinner'

const ChangeMyInfo = (): JSX.Element => {
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const verificationRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
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
    if (name === 'verificationCode') {
      if (value.length > 6) {
        return
      }
      setInput({ ...input, [name]: value.toUpperCase() })
      return
    }
    setInput({ ...input, [name]: value })
  }

  const handleCreateCode = async () => {
    const emailRegex = /@(gm.)?gist.ac.kr$/
    if (!emailRegex.test(input.username)) {
      setErrorText('지스트 메일을 이용해주세요')
      return
    }
    dispatch(setFindPasswordWhichInfo('Loading'))
    const response = await postCreateVerificationCodeForPassword({
      username: input.username,
    })
    const status = response?.status
    const message = response?.data.message
    setErrorText(message)
    if (status > 400) {
      setInput({ ...input, username: '' })
      emailRef.current && emailRef.current.focus()
      dispatch(setFindPasswordWhichInfo('Loading'))
    } else if (status < 400) {
      dispatch(setFindPasswordWhichInfo('Loading'))
      dispatch(setFindPasswordWhichInfo('CodeRequested'))
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleConfirmCode = async () => {
    const response = await postConfirmVerificationCodeForPassword({
      username: input.username,
      verificationCode: input.verificationCode,
    })
    const status = response?.status
    const message = response?.data.message
    if (status < 400) {
      dispatch(setFindPasswordWhichInfo('Verificated'))
      dispatch(setFindPasswordWhichInfo('Valid'))
      return
    }
    switch (message) {
      case '존재하지 않는 인증 정보입니다.': {
        setInput({ ...input, verificationCode: '' })
        verificationRef.current && verificationRef.current.focus()
        break
      }
      case '만료된 인증 코드입니다.': {
        setInput({ ...input, verificationCode: '' })
        dispatch(setFindPasswordWhichInfo('Expired'))
        break
      }
      case undefined: {
        throw Error('API 호출에 실패했습니다')
      }
    }
    setErrorText(message)
  }

  const handleResendCode = async () => {
    dispatch(setFindPasswordWhichInfo('Loading'))
    setErrorText('')
    const response = await postCreateVerificationCodeForPassword({
      username: input.username,
    })
    const status = response.status
    if (status < 400) {
      dispatch(setFindPasswordWhichInfo('Expired'))
      dispatch(setFindPasswordWhichInfo('Loading'))
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
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
      passwordRef.current && passwordRef.current.focus()
      setErrorText('비밀번호가 일치하지 않습니다')
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }

  const handleReverify = () => {
    setInput({
      ...input,
      verificationCode: '',
      password: '',
      passwordConfirm: '',
    })
    setErrorText('')
    dispatch(setFindPasswordWhichInfo('Verificated'))
    dispatch(setFindPasswordWhichInfo('CodeRequested'))
  }

  const handleWithdrawal = async () => {
    return
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="changeUserInfo_form">
        <Stack spacing={4}>
          <span>내 정보 변경</span>
          {
            <UserInput
              text="이메일"
              name="username"
              type="email"
              value={input.username}
              placeholder="지스트 메일을 입력하세요"
              onChange={handleChange}
              disabled={whichUI.isCodeRequested}
              onPassword={false}
            ></UserInput>
          }

          {whichUI.isCodeRequested && !whichUI.isExpired && (
            <UserInput
              text="인증 코드"
              name="verificationCode"
              type="text"
              value={input.verificationCode}
              placeholder="이메일로 온 인증 코드를 입력하세요"
              onChange={handleChange}
              disabled={whichUI.isVerificated}
              onPassword={false}
            ></UserInput>
          )}
          {whichUI.isVerificated && (
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
          )}
          {whichUI.isVerificated && (
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
          )}
          {!whichUI.isCodeRequested &&
            !whichUI.isLoading &&
            !whichUI.isExpired && (
              <RegisterButton onClick={handleCreateCode}>
                인증 코드 전송
              </RegisterButton>
            )}
          {whichUI.isExpired && (
            <RegisterButton onClick={handleResendCode}>
              인증코드 재전송
            </RegisterButton>
          )}

          {whichUI.isLoading && <LoadingSpinner></LoadingSpinner>}

          {whichUI.isCodeRequested &&
            !whichUI.isVerificated &&
            !whichUI.isExpired && (
              <RegisterButton onClick={handleConfirmCode}>인증</RegisterButton>
            )}
          {!whichUI.isExpired && whichUI.isVerificated && !whichUI.isValid && (
            <RegisterButton onClick={handleReverify}>
              다시 인증하기
            </RegisterButton>
          )}
          {whichUI.isVerificated && whichUI.isValid && (
            <RegisterButton onClick={handleReset} className="submit__btn">
              비밀번호 재설정
            </RegisterButton>
          )}
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
      <WithdrawalButton>회원 탈퇴</WithdrawalButton>
    </Container>
  )
}

export default ChangeMyInfo
