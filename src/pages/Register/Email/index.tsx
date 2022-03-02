import UserInput from '@components/UserInput'
import React from 'react'

interface Iprops {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const Email = ({ value, onChange, disabled }: Iprops) => {
  return (
    <UserInput
      text="이메일"
      name="username"
      type="email"
      value={value}
      placeholder="지스트 이메일을 입력하세요."
      onChange={onChange}
      disabled={disabled}
      onPassword={false}
    ></UserInput>
  )
}
export default Email
