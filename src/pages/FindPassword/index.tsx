import React, { FormEvent, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { FindPasswordBtn, Container } from './styles'
import { useNavigate } from 'react-router-dom'
import {
  postConfirmVerificationCodeForPassword,
  postCreateVerificationCodeForPassword,
  putResetPassword,
} from '@api/verificationAPI'

import UserInput from '@components/UserInput'
import LoadingSpinner from '@components/LoadingSpinner'
import EmailAndVerification from '@components/EmailAndVerification'
import Email from '@components/Email'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const FindingPassword = (): JSX.Element => {
  const t = useTranslate(locale)

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
  const [btnUI, setBtnUI] = useState('Default')
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
      setErrorText(t('useGistEmail'))
      return
    }
    setBtnUI('Loading')
    const response = await postCreateVerificationCodeForPassword({
      username: input.username,
    })
    const status = response?.status
    const message = response?.data.message
    if (message === '존재하지 않는 회원입니다.') {
      setErrorText(t('notUser'))
      setInput({ ...input, username: '' })
      setBtnUI('Default')
    } else if (status < 400) {
      setContentUI('CodeVerification')
      setBtnUI('CodeRequested')
      setErrorText(`${input.username}${t('codeSent')}`)
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
        setErrorText(t('notCode'))
        setInput({ ...input, verificationCode: '' })
        break
      }
      case '만료된 인증 코드입니다.': {
        setErrorText(t('expiredCode'))
        setInput({ ...input, verificationCode: '' })
        setContentUI('Email')
        setBtnUI('Expired')
        break
      }
      case undefined: {
        throw Error('API 호출에 실패했습니다')
      }
    }
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
      setErrorText(t('formatPwd'))
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
          title: t('success'),
          description: t('pwdChanged'),
          isClosable: true,
        })
        navigate('/login')
      } else {
        setBtnUI('Invalid')
      }
    } else {
      setErrorText(t('diffPwd'))
    }
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="register_form">
        <Stack spacing={4}>
          <span>{t('findPassword')}</span>
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
                name="password"
                type="password"
                value={input.password}
                placeholder={t('newPwd')}
                onChange={handleChange}
                disabled={false}
                onPassword={true}
              ></UserInput>
              <UserInput
                name="passwordConfirm"
                type="password"
                value={input.passwordConfirm}
                placeholder={t('confirmPwd')}
                onChange={handleChange}
                disabled={false}
                onPassword={true}
              ></UserInput>
            </>
          )}
          {btnUI === 'Loading' && <LoadingSpinner></LoadingSpinner>}
          {btnUI === 'Default' && (
            <FindPasswordBtn type="button" onClick={handleCreateCode}>
              {t('codeBtn')}
            </FindPasswordBtn>
          )}
          {btnUI === 'Expired' && (
            <FindPasswordBtn type="button" onClick={handleResendCode}>
              {t('reCodeBtn')}
            </FindPasswordBtn>
          )}
          {btnUI === 'CodeRequested' && (
            <FindPasswordBtn type="button" onClick={handleConfirmCode}>
              {t('verifyBtn')}
            </FindPasswordBtn>
          )}
          {btnUI === 'Invalid' && (
            <FindPasswordBtn type="button" onClick={handleReverify}>
              {t('reVerifyBtn')}
            </FindPasswordBtn>
          )}
          {btnUI === 'Valid' && (
            <FindPasswordBtn type="submit" className="submit__btn">
              {t('changePwdBtn')}
            </FindPasswordBtn>
          )}
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
    </Container>
  )
}

export default FindingPassword
