import { useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { login } from '../../api/user'

// const useLogin = () => {
//   const [ user, setUser ] = useState({
//     email: '11',
//     password: '22'
//   })
//   return {
//     user,
//     setUser
//   }
// }

export default function LoginPage () {
  const location = useLocation()

  const isLogin = useMemo(
    () => {
      return location.pathname === '/login'
    },
    [ location ]
  )

  const formTitle = useMemo(
    () => {
      return isLogin ? 'Sign in' : 'Sign up'
    },
    [ isLogin ]
  )

  const [ user, setUser ] = useState({
    email: 'lpzmail@163.com',
    password: '12345678'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await login({ user })
      console.log('登录成功', data)
    } catch (err) {
      window.alert('登录失败')
    }
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{formTitle}</h1>
            <p className="text-xs-center">
              {!isLogin ? <Link to="/login">Have an account?</Link> : <Link to="/register">Need an account?</Link>}
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Your Name" />
                </fieldset>
              )}
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setUser({ email: e.target.value, password: user.password })}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({ email: user.email, password: e.target.value })}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">{formTitle}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
