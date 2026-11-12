
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const API_BASE_URL = 'http://localhost:8080/api'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or password.')
      }

      if (!data.token) {
        throw new Error(
          'Login response did not contain an authentication token.'
        )
      }

      localStorage.setItem('connectcircle_token', data.token)
      localStorage.setItem('connectcircle_user', JSON.stringify(data))

      const roles = Array.isArray(data.roles) ? data.roles : []
      const selectedRole = String(
        data.role || roles[0] || 'USER'
      ).toUpperCase()

      const roleRoutes = {
        BRAND: 'brand',
        CREATOR: 'influencer',
        INFLUENCER: 'influencer',
        USER: 'consumer',
      }

      const dashboardRole = roleRoutes[selectedRole]

      if (!dashboardRole) {
        throw new Error('Your account role could not be identified.')
      }

      navigate(`/dashboard/${dashboardRole}`)
    } catch (err) {
      setError(err.message || 'Unable to connect to the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-page">

      <Link to="/" className="logo login-logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>

      <section className="login-card">

        <div className="login-heading">
          <span className="eyebrow">WELCOME BACK</span>

          <h1>Log in to ConnectCircle</h1>

          <p>
            Continue building meaningful connections.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>

          <div className="login-field">
            <label htmlFor="login-email">
              Email address
            </label>

            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password">
              Password
            </label>

            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-btn login-submit"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in →'}
          </button>

        </form>

        <div className="login-footer">

          <p>
            Don't have an account?{' '}
            <Link to="/get-started">Create one</Link>
          </p>

          <Link to="/" className="login-back">
            ← Back to homepage
          </Link>

        </div>

        <p className="login-bottom-note">
          CONNECTCIRCLE · BUILT ON TRUST
        </p>

      </section>

    </main>
  )
}

export default Login
