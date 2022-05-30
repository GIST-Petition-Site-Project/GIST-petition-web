import React, { FormEvent, useEffect, useState } from 'react'
import {
  postConfirmVerificationCode,
  postCreateVerificationCode,
} from '@api/verificationAPI'
import { postRegister } from '@api/userAPI'
import { useToast } from '@chakra-ui/react'
import { RegisterStack, RegisterButton, ErrorText } from './styles'
import { useNavigate } from 'react-router-dom'
import TermsOfUse from './TermsOfUse'
import LoadingSpinner from '@components/LoadingSpinner'
import UserInput from '@components/UserInput'
import { useAppSelect } from '@redux/store.hooks'
import Email from '../../components/Email'
import EmailAndVerification from '../../components/EmailAndVerification'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

const Register = (): JSX.Element => {
  const t = useTranslate(locale)

  const navigate = useNavigate()

  const [input, setInput] = useState<RegisterForm>({
    username: '',
    password: '',
    verificationCode: '',
    passwordConfirm: '',
  })

  const [agreeInfo, setAgreeInfo] = useState<RegisterAgree>({
    service: false,
    private: false,
  })
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')
  const [btnUI, setBtnUI] = useState('')
  const [contentUI, setContentUI] = useState('TermsOfUse')

  const auth = useAppSelect(select => select.auth.isAuthorized)
  useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [useAppSelect(select => select.auth.isAuthorized)])

  const handleAgree = (value: string) => {
    switch (value) {
      case 'total':
        if (agreeInfo.private && agreeInfo.service) {
          setAgreeInfo({ ...agreeInfo, service: false, private: false })
          return
        }
        setAgreeInfo({ ...agreeInfo, service: true, private: true })
        return
      case 'service':
        setAgreeInfo({ ...agreeInfo, service: !agreeInfo.service })
        return
      case 'private':
        setAgreeInfo({ ...agreeInfo, private: !agreeInfo.private })
        return
      default:
        throw Error('Clicked Wrong Btn')
    }
  }

  const handleAgreeBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget
    const value = target.dataset.value
    value && handleAgree(value)
  }

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

  const handleAgreeBtn = () => {
    if (agreeInfo.private === true && agreeInfo.service === true) {
      setBtnUI('Agreed')
      setContentUI('Email')
      setErrorText('')
      return
    }
    setErrorText('모든 약관에 동의해주세요')
  }

  const handleCreateCode = async () => {
    setErrorText('')
    const emailRegex = /@(gm.)?gist.ac.kr$/
    if (!emailRegex.test(input.username)) {
      setErrorText(t('useGistEmail'))
      return
    }
    setBtnUI('Loading')
    try {
      const response = await postCreateVerificationCode({
        username: input.username,
      })
      const status = response?.status
      const message = response?.data.message
      setErrorText(message)
      if (status < 400) {
        setContentUI('CodeVerification')
        setBtnUI('CodeRequested')
        setErrorText(`${input.username}${t('codeSent')}`)
      } else {
        setInput({ ...input, username: '' })
        setBtnUI('Agreed')
      }
    } catch (error) {
      setErrorText('오류가 발생했습니다. 다시 시도해주세요')
      setBtnUI('Agreed')
    }
  }

  const handleConfirmCode = async () => {
    const response = await postConfirmVerificationCode({
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
    const response = await postCreateVerificationCode({
      username: input.username,
    })
    const status = response.status
    if (status < 400) {
      setBtnUI('CodeRequested')
      setContentUI('CodeVerification')
      setErrorText(`${input.username}${t('codeSent')}`)
    }
  }

  // const handleRegister = async () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (contentUI === 'Password') {
      setErrorText('')
      const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
      if (!passwordRegex.test(input.password)) {
        setErrorText(t('formatPwd'))
        return
      }
      if (input.password === input.passwordConfirm) {
        const response = await postRegister({
          username: input.username,
          verificationCode: input.verificationCode,
          password: input.password,
        })
        const status = response.status
        const message = response.data.message
        setErrorText(message)

        if (status < 400) {
          toast({
            status: 'success',
            duration: 3000,
            description: t('success'),
            title: t('registered'),
            isClosable: true,
          })
          navigate(
            { pathname: '/login', hash: location.hash },
            { replace: true },
          )
        } else {
          setBtnUI('Invalid')
        }
      } else {
        // passwordRef.current && passwordRef.current.focus()
        setErrorText(t('diffPwd'))
      }
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
    setBtnUI('Agreed')
  }
  return (
    <section className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <RegisterStack spacing={4}>
          <span>{t('signup')}</span>
          {contentUI === 'TermsOfUse' && (
            <>
              <TermsOfUse
                agreeInfo={agreeInfo}
                onAgree={handleAgreeBtnClick}
              ></TermsOfUse>
              <RegisterButton onClick={handleAgreeBtn}>
                {t('nextBtn')}
              </RegisterButton>
            </>
          )}
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
                placeholder={t('password')}
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
          {btnUI === 'Agreed' && (
            <RegisterButton type="button" onClick={handleCreateCode}>
              {t('codeBtn')}
            </RegisterButton>
          )}
          {btnUI === 'Expired' && (
            <RegisterButton type="button" onClick={handleResendCode}>
              {t('reCodeBtn')}
            </RegisterButton>
          )}
          {btnUI === 'CodeRequested' && (
            <RegisterButton type="button" onClick={handleConfirmCode}>
              {t('verifyBtn')}
            </RegisterButton>
          )}
          {btnUI === 'Invalid' && (
            <RegisterButton type="button" onClick={handleReverify}>
              {t('reVerifyBtn')}
            </RegisterButton>
          )}
          {btnUI === 'Valid' && (
            <RegisterButton type="submit" className="submit__btn">
              {t('signup')}
            </RegisterButton>
          )}
          <span className="login_link">
            {t('already')}{' '}
            <a
              onClick={_e => {
                navigate(
                  { pathname: '/login', hash: location.hash },
                  { replace: true },
                )
              }}
            >
              {t('signin')}
            </a>
          </span>

          <ErrorText>{errorText}</ErrorText>
        </RegisterStack>
      </form>
    </section>
  )
}
export default Register
