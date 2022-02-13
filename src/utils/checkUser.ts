const checkLoginError = (status: number): string => {
  if (status < 400) return ''
  else if (status == 600) return 'CapsLock이 켜져 있습니다.'
  return '이메일 혹은 패스워드를 확인해주세요'
}

export { checkLoginError }
