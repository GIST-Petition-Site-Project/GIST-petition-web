import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../app/slices/user/userSlice'

const Login = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Fake
  const dispatch = useDispatch()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      login({
        email: email,
        password: password,
        // loggedIn: true,
      }),
    )
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={e => handleSubmit(e)}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
