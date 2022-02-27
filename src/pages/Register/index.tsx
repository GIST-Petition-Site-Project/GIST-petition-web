import React, { FormEvent, useEffect, useState } from 'react'
import {
  postConfirmVerificationCode,
  postCreateVerificationCode,
} from '@api/verificationAPI'
import { postRegister } from '@api/userAPI'
import { Text, useToast } from '@chakra-ui/react'
import { RegisterStack, RegisterButton, ErrorText } from './styles'
import { useNavigate } from 'react-router-dom'
import TermsOfUse from './TermsOfUse'
import { setWhichInfo } from '../../redux/register/registerSlice'
import LoadingSpinner from '../../components/LoadingSpinner'
import UserInput from '../../components/UserInput'
import { useAppDispatch, useAppSelect } from '@redux/store.hooks'

const Register = (): JSX.Element => {
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
  const dispatch = useAppDispatch()
  const whichUI = useAppSelect(state => state.register)
  const [errorText, setErrorText] = useState('')

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
      dispatch(setWhichInfo('Agreed'))
      return
    }
    setErrorText('모든 약관에 동의해주세요')
  }

  const handleCreateCode = async () => {
    const emailRegex = /@(gm.)?gist.ac.kr$/
    if (!emailRegex.test(input.username)) {
      setErrorText('지스트 메일을 이용해주세요')
      return
    }
    dispatch(setWhichInfo('Loading'))
    const response = await postCreateVerificationCode({
      username: input.username,
    })
    const status = response?.status
    const message = response?.data.message
    setErrorText(message)
    if (message === '이미 존재하는 회원입니다.') {
      setInput({ ...input, username: '' })
      dispatch(setWhichInfo('Loading'))
    } else if (status < 400) {
      dispatch(setWhichInfo('Loading'))
      dispatch(setWhichInfo('CodeRequested'))
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
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
      dispatch(setWhichInfo('Verificated'))
      dispatch(setWhichInfo('Valid'))
      return
    }
    switch (message) {
      case '존재하지 않는 인증 정보입니다.': {
        setInput({ ...input, verificationCode: '' })
        break
      }
      case '만료된 인증 코드입니다.': {
        setInput({ ...input, verificationCode: '' })
        dispatch(setWhichInfo('Expired'))
        break
      }
      case undefined: {
        throw Error('API 호출에 실패했습니다')
      }
    }
    setErrorText(message)
  }

  const handleResendCode = async () => {
    dispatch(setWhichInfo('Loading'))
    setErrorText('')
    const response = await postCreateVerificationCode({
      username: input.username,
    })
    const status = response.status
    if (status < 400) {
      dispatch(setWhichInfo('Expired'))
      dispatch(setWhichInfo('Loading'))
      setErrorText(`${input.username}으로 인증 코드가 전송되었습니다`)
    }
  }

  const handleRegister = async () => {
    setErrorText('')
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(input.password)) {
      setErrorText('영문과 숫자를 포함한 8자리 이상의 비밀번호를 설정해주세요')
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
          description: '회원가입이 완료되었습니다',
          title: '계정 생성완료',
          isClosable: true,
        })
        navigate('/login')
      } else {
        dispatch(setWhichInfo('Valid'))
      }
    } else {
      // passwordRef.current && passwordRef.current.focus()
      setErrorText('비밀번호가 일치하지 않습니다')
    }
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleReverify = () => {
    setInput({
      ...input,
      verificationCode: '',
      password: '',
      passwordConfirm: '',
    })
    setErrorText('')
    dispatch(setWhichInfo('Verificated'))
    dispatch(setWhichInfo('CodeRequested'))
  }

  const auth = useAppSelect(select => select.auth.isAuthorized)
  useEffect(() => {
    if (auth) {
      window.history.back()
    }
  }, [useAppSelect(select => select.auth.isAuthorized)])

  return (
    <section className="register">
      <form onSubmit={handleSubmit} className="register__form">
        <RegisterStack spacing={4}>
          <span>회원가입</span>
          {!whichUI.isAgreed && (
            <>
              <TermsOfUse
                agreeInfo={agreeInfo}
                onAgree={handleAgreeBtnClick}
              ></TermsOfUse>
              <RegisterButton onClick={handleAgreeBtn}>
                다음 단계
              </RegisterButton>
              <Text align="center">
                이미 가입하셨나요?{' '}
                <a href="/login" style={{ textDecoration: 'underline' }}>
                  로그인
                </a>
              </Text>
            </>
          )}
          {whichUI.isAgreed && (
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
          )}

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
            <>
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
            </>
          )}
          {whichUI.isAgreed &&
            !whichUI.isCodeRequested &&
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
            <RegisterButton onClick={handleRegister} className="submit__btn">
              회원가입
            </RegisterButton>
          )}
          <ErrorText>{errorText}</ErrorText>
        </RegisterStack>
      </form>
    </section>
  )
}
export default Register
