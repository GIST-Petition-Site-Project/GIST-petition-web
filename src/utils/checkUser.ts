const checkLoginError = (status: number): string => {
  if (status < 400) return ''
  return '이메일 혹은 패스워드를 확인해주세요'
}

export { checkLoginError }
