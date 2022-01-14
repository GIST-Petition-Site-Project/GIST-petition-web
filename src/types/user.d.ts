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

// 로그인 모달 띄우기 관련
interface Disclosure {
  disclosure: {
    isOpen: boolean
    onClose: () => void
  }
}

// 로그인 모달 띄우기 관련
