import React, { FormEvent, useEffect, useState } from 'react'
import {
  postConfirmVerificationCode,
  postCreateVerificationCode,
} from '@api/verificationAPI'
import { Text, useToast } from '@chakra-ui/react'
import { postDelete, postRegister } from '@api/userAPI'
import {
  RegisterStack,
  RegisterButton,
  ErrorText,
  DeleteBtn,
  Title,
} from './styles'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import { postDelete } from '../../utils/api/user/userDelete'
import TermsOfUse from './TermsOfUse'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setWhichInfo } from '../../redux/register/registerSlice'
=======

import TermsOfUse from './TermsOfUse'
import { setWhichInfo } from '../../redux/register/registerSlice'
import LoadingSpinner from '../../components/LoadingSpinner'
import UserInput from '../../components/UserInput'
import { useAppDispatch, useAppSelect } from '@redux/store.hooks'
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831

const Register = (): JSX.Element => {
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
<<<<<<< HEAD
  const dispatch = useDispatch()
  const whichUI = useSelector((state: RootState) => state.register.whichUI)
  const agreeInfo = useSelector((state: RootState) => state.register.agreeInfo)
=======
  const dispatch = useAppDispatch()
  const whichUI = useAppSelect(state => state.register.whichUI)
  const agreeInfo = useAppSelect(state => state.register.agreeInfo)
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
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

  const handleAgreeBtn = () => {
    if (agreeInfo.private === true && agreeInfo.service === true) {
<<<<<<< HEAD
      // dispatch({ type: 'register/setIsAgreed', payload: true })
=======
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
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
<<<<<<< HEAD
    // dispatch({ type: 'register/setIsLoading', payload: true })
=======
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
    dispatch(setWhichInfo('Loading'))
    const response = await postCreateVerificationCode({
      username: input.username,
    })
    const status = response?.status
    const message = response?.data.message
    setErrorText(message)
    if (message === '이미 존재하는 회원입니다.') {
      setInput({ ...input, username: '' })
<<<<<<< HEAD
      emailRef.current && emailRef.current.focus()
=======
      // emailRef.current && emailRef.current.focus()
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
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
<<<<<<< HEAD
    console.log(response)
=======
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
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
        // verificationRef.current && verificationRef.current.focus()
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
<<<<<<< HEAD
    dispatch({ type: 'register/setIsLoading', payload: true })
=======
    dispatch(setWhichInfo('Loading'))
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
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

  const handleDelete = async () => {
    const response = await postDelete({ username: input.username })
    if (response?.status < 400) {
      toast({
        status: 'success',
        duration: 2000,
        description: '계정 삭제완료',
        isClosable: true,
      })
    }
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
        <RegisterStack>
          <DeleteBtn onClick={handleDelete}>삭제</DeleteBtn>
<<<<<<< HEAD
          <Text fontSize="4xl" fontWeight="bold">
            회원가입
          </Text>
=======
          <Title>회원가입</Title>
>>>>>>> bb3fbec4e16321a2899ab3ef82cf68196de05831
          {!whichUI.isAgreed && <TermsOfUse></TermsOfUse>}
          {whichUI.isAgreed && (
            <UserInput
              text="이메일"
              name="username"
              type="email"
              value={input.username}
              placeholder="지스트 메일을 입력하세요"
              onChange={handleChange}
              disabled={whichUI.isCodeRequested}
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
            ></UserInput>
          )}
          {!whichUI.isAgreed && (
            <RegisterButton onClick={handleAgreeBtn}>다음 단계</RegisterButton>
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
          <Text mt="1em" align="center">
            이미 가입하셨나요?{' '}
            <a href="/login" style={{ textDecoration: 'underline' }}>
              로그인
            </a>
          </Text>
        </RegisterStack>
      </form>
    </section>
  )
}

export default Register
