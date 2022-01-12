interface User {
  username: string
  password: string
}

interface Register extends User {
  verificationCode: string
}

interface RegisterForm extends Register {
  passwordConfirm: string
}
