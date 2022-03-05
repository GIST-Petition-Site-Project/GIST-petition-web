import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { FindPasswordBtn, Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { RootState } from '@redux/store'
import {
  postConfirmVerificationCodeForPassword,
  postCreateVerificationCodeForPassword,
  putResetPassword,
} from '@api/verificationAPI'

import { useAppDispatch, useAppSelect } from '@redux/store.hooks'
import UserInput from '@components/UserInput'
import LoadingSpinner from '@components/LoadingSpinner'
import { setWhichInfo } from '@redux/userInfo/userInfoSlice'
import EmailAndVerification from '@components/EmailAndVerification'
import Email from '@components/Email'

const FindingPassword = (): JSX.Element => {
  const navigate = useNavigate()
  const [input, setInput] = useState<RegisterForm>({
    username: '',
    password: '',
    verificationCode: '',
    passwordConfirm: '',
  })

  const whichUI = useAppSelect((state: RootState) => state.userInfo)
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')
  const [btnUI, setBtnUI] = useState('')
  const [contentUI, setContentUI] = useState('Email')

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
    setErrorText('')
    const emailRegex = /@(gm.)?gist.ac.kr$/
    if (!emailRegex.test(input.username)) {
      setErrorText('지스트 메일을 이용해주세요')
      return
    }
    setBtnUI('Loading')
    const response = await postCreateVerificationCodeForPassword({
      username: input.username,
    })
    const status = response?.status
    const message = response?.data.message
    setErrorText(message)
    if (message === '이미 존재하는 회원입니다.') {
      setInput({ ...input, username: '' })
      setBtnUI('Default')
    } else if (message === '존재하지 않는 회원입니다.') {
      setInput({ ...input, username: '' })
      setBtnUI('Default')
    } else if (status < 400) {
      setContentUI('CodeVerification')
      setBtnUI('CodeRequested')
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
      setContentUI('Password')
      setBtnUI('Valid')
      return
    }
    switch (message) {
      case '존재하지 않는 인증 정보입니다.': {
        setInput({ ...input, verificationCode: '' })
        break
      }
      case '만료된 인증 코드입니다.': {
        setInput({ ...input, verificationCode: '' })
        setContentUI('Email')
        setBtnUI('Expired')
        break
      }
      case undefined: {
        throw Error('API 호출에 실패했습니다')
      }
    }
    setErrorText(message)
  }

  const handleResendCode = async () => {
    setBtnUI('Loading')
    setErrorText('')
    const response = await postCreateVerificationCodeForPassword({
      username: input.username,
    })
    const status = response.status
    if (status < 400) {
      setBtnUI('CodeRequested')
      setContentUI('CodeVerification')
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleReverify = () => {
    setInput({
      ...input,
      verificationCode: '',
      password: '',
      passwordConfirm: '',
    })
    setErrorText('')
    setContentUI('Email')
    setBtnUI('Default')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        setBtnUI('Invalid')
      }
    } else {
      setErrorText('비밀번호가 일치하지 않습니다')
    }
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="register_form">
        <Stack spacing={4}>
          <span>비밀번호 찾기</span>
          {contentUI === 'Email' && (
            <Email
              value={input.username}
              onChange={handleChange}
              disabled={false}
            ></Email>
          )}

          {contentUI === 'CodeVerification' && (
            <EmailAndVerification
              emailValue={input.username}
              verificationValue={input.verificationCode}
              disabled={false}
              onChange={handleChange}
            ></EmailAndVerification>
          )}
          {contentUI === 'Password' && (
            <>
              <EmailAndVerification
                emailValue={input.username}
                verificationValue={input.verificationCode}
                disabled={true}
                onChange={handleChange}
              ></EmailAndVerification>
              <UserInput
                text="비밀번호"
                name="password"
                type="password"
                value={input.password}
                placeholder="영문, 숫자 혼합 8자 이상의 비밀번호 입력하세요"
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
            </>
          )}

          {whichUI.isLoading && <LoadingSpinner></LoadingSpinner>}

          {btnUI === 'Loading' && <LoadingSpinner></LoadingSpinner>}
          {btnUI === 'Default' && (
            <FindPasswordBtn type="button" onClick={handleCreateCode}>
              인증 코드 전송
            </FindPasswordBtn>
          )}
          {btnUI === 'Expired' && (
            <FindPasswordBtn type="button" onClick={handleResendCode}>
              인증코드 재전송
            </FindPasswordBtn>
          )}
          {btnUI === 'CodeRequested' && (
            <FindPasswordBtn type="button" onClick={handleConfirmCode}>
              인증
            </FindPasswordBtn>
          )}
          {btnUI === 'Invalid' && (
            <FindPasswordBtn type="button" onClick={handleReverify}>
              다시 인증하기
            </FindPasswordBtn>
          )}
          {btnUI === 'Valid' && (
            <FindPasswordBtn type="submit" className="submit__btn">
              비밀번호 재설정
            </FindPasswordBtn>
          )}
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
    </Container>
  )
}

export default FindingPassword
