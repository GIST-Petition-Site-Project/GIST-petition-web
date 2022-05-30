import React, { FormEvent, useState } from 'react'
import { Stack, useToast } from '@chakra-ui/react'
import { ChangePwdButton, Container } from './styles'
import UserInput from '@components/UserInput'
import { putPasswordMe } from '@api/userAPI'
import { useNavigate } from 'react-router'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

interface ChangePassword {
  prevPassword: string
  newPassword: string
  newPasswordConfirm: string
}

const ChangePassword = (): JSX.Element => {
  const t = useTranslate(locale)

  const navigate = useNavigate()
  const [input, setInput] = useState<ChangePassword>({
    prevPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  })
  const toast = useToast({
    variant: 'toast',
  })
  const [errorText, setErrorText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorText('')
    const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/
    if (!passwordRegex.test(input.newPassword)) {
      setErrorText(t('formatPwd'))
      return
    }

    if (input.newPassword !== input.newPasswordConfirm) {
      setErrorText(t('diffPwd'))
      return
    }

    if (input.newPassword === input.newPasswordConfirm) {
      if (input.prevPassword === input.newPassword) {
        setErrorText(t('samePwd'))
        return
      }

      const response = await putPasswordMe({
        newPassword: input.newPassword,
        originPassword: input.prevPassword,
      })

      const status = response.status
      const message = response.data.message

      if (status >= 400) {
        setErrorText(t('notCurrentPwd'))
        return
      }

      if (status < 400) {
        toast({
          status: 'success',
          duration: 3000,
          title: t('success'),
          description: t('pwdChanged'),
          isClosable: true,
        })
        navigate('/myinfo')
      }
    }
  }

  return (
    <Container className="register">
      <form onSubmit={handleSubmit} className="register_form">
        <Stack spacing={4}>
          <span>{t('changePwd')}</span>
          <UserInput
            name="prevPassword"
            type="password"
            value={input.prevPassword}
            placeholder={t('currentPwd')}
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          <UserInput
            name="newPassword"
            type="password"
            value={input.newPassword}
            placeholder={t('newPwd')}
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          <UserInput
            name="newPasswordConfirm"
            type="password"
            value={input.newPasswordConfirm}
            placeholder={t('confirmPwd')}
            onChange={handleChange}
            disabled={false}
            onPassword={true}
          ></UserInput>
          <ChangePwdButton type="submit" className="submit__btn">
            {t('changeBtn')}
          </ChangePwdButton>
          <span className="err_msg">{errorText}</span>
        </Stack>
      </form>
    </Container>
  )
}

export default ChangePassword
