
import { useNavigate, Link } from 'react-router-dom'

const roles = [
  {
    id: 'brand',
    icon: '🏢',
    title: 'Brand',
    description: 'Discover creators and manage campaigns.',
  },
  {
    id: 'influencer',
    icon: '📸',
    title: 'Creator',
    description: 'Find partnerships and grow your audience.',
  },
  {
    id: 'consumer',
    icon: '♡',
    title: 'Consumer',
    description: 'Share your opinions in our Trust Lab.',
  },
]

function RoleSelection() {
  const navigate = useNavigate()

  return (
    <main className="role-page">
      <Link to="/" className="logo">
        <span className="logo-icon">C</span>
        ConnectCircle
      </Link>

      <section className="role-content">
        <span className="eyebrow">YOUR NEXT CONNECTION STARTS HERE</span>
        <h1>Let's get you connected.</h1>
        <p>How would you like to use ConnectCircle?</p>

        <div className="role-grid">
          {roles.map((role) => (
            <button
              className="role-card"
              key={role.id}
              onClick={() => navigate(`/register/${role.id}`)}
            >
              <span className="role-icon">{role.icon}</span>
              <h2>{role.title}</h2>
              <p>{role.description}</p>
              <span className="role-arrow">Continue →</span>
            </button>
          ))}
        </div>

        <p className="existing-account">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  )
}

export default RoleSelection
