interface User {
  username: string
  password: string
}

// interface loginUser extends Omit<User, 'username' | 'password'> {
//   username: string | null
//   password: string | null
// }

interface Register {
  username: string
  password: string
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

// 회원 가입 UI 관련
interface WhichUI {
  isAgreed: boolean
  isCodeRequested: boolean
  isLoading: boolean
  isExpired: boolean
  isVerificated: boolean
  isValid: boolean
}

interface RegisterAgree {
  service: boolean
  private: boolean
}

interface AgreeAttribute {
  isClicked: boolean
}

interface TermOfUseList {
  onClick: any
}

// 회원 가입 UI 관련

interface FindPasswordWhichUI {
  isCodeRequested: boolean
  isLoading: boolean
  isExpired: boolean
  isVerificated: boolean
  isValid: boolean
}
// 비밀번호찾기 UI 관련
