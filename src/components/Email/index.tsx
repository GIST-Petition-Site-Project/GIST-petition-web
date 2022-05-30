import UserInput from '@components/UserInput'
import React from 'react'
import locale from './locale'
import { useTranslate } from '@hooks/useTranslate'

interface Iprops {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled: boolean
}

const Email = ({ value, onChange, disabled }: Iprops) => {
  const t = useTranslate(locale)

  return (
    <UserInput
      name="username"
      type="email"
      value={value}
      placeholder={t('email')}
      onChange={onChange}
      disabled={disabled}
      onPassword={false}
    ></UserInput>
  )
}
export default Email
