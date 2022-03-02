import UserInput from '@components/UserInput'
import React from 'react'
import Email from '../Email'

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
  return (
    <>
      <Email value={emailValue} onChange={onChange} disabled={true}></Email>
      <UserInput
        text="인증 코드"
        name="verificationCode"
        type="text"
        value={verificationValue}
        placeholder="이메일로 온 인증 코드를 입력하세요."
        onChange={onChange}
        disabled={disabled}
        onPassword={false}
      ></UserInput>
    </>
  )
}

export default EmailAndVerification
