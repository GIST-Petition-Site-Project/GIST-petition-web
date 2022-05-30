import UserInput from '@components/UserInput'
import React from 'react'
import Email from '../Email'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

interface Iprops {
  emailValue: string
  verificationValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const EmailAndVerification = ({
  emailValue,
  verificationValue,
  onChange,
  disabled,
}: Iprops) => {
  const t = useTranslate(locale)

  return (
    <>
      <Email value={emailValue} onChange={onChange} disabled={true}></Email>
      <UserInput
        name="verificationCode"
        type="text"
        value={verificationValue}
        placeholder={t('emailVerification')}
        onChange={onChange}
        disabled={disabled}
        onPassword={false}
      ></UserInput>
    </>
  )
}

export default EmailAndVerification
