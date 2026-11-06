
import { Link, useParams } from 'react-router-dom'

function Register() {
  const { role } = useParams()

  const roleNames = {
    brand: 'Brand',
    influencer: 'Creator',
    consumer: 'Consumer',
  }

  const roleName = roleNames[role]

  if (!roleName) {
    return (
      <main className="role-page">
        <h1>Role not found</h1>
        <Link to="/get-started">Choose your role</Link>
      </main>
    )
  }

  return (
    <main className="role-page">
      <Link to="/get-started" className="back-link">
        ← Change role
      </Link>

      <section className="register-card">
        <Link to="/" className="logo register-logo">
          <span className="logo-icon">C</span>
          ConnectCircle
        </Link>

        <span className="eyebrow">CREATE YOUR ACCOUNT</span>
        <h1>Join as a {roleName}</h1>
        <p>Start building meaningful connections.</p>

        <form onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          {role === 'brand' && (
            <>
              <label htmlFor="brandName">Brand name</label>
              <input
                id="brandName"
                name="brandName"
                placeholder="Enter your brand name"
                required
              />
            </>
          )}

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create a password"
            minLength={8}
            required
          />

          <button type="submit" className="primary-btn register-submit">
            Create account →
          </button>
        </form>

        <p className="register-footer">
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  )
}

export default Register
