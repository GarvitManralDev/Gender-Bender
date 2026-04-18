import { useNavigate } from 'react-router-dom'

const page = {
  minHeight: '100svh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 1.5rem',
  boxSizing: 'border-box',
  background: '#0c0c0c',
  color: '#d4d4d4',
  textAlign: 'center',
  fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
}

const heading = {
  margin: '0 0 0.75rem',
  fontSize: 'clamp(1.75rem, 5vw, 2.25rem)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: '#e5e5e5',
}

const description = {
  margin: '0 0 2.5rem',
  maxWidth: '22rem',
  fontSize: '1rem',
  lineHeight: 1.55,
  color: '#9ca3af',
}

const stack = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  width: '100%',
  maxWidth: '16rem',
}

const buttonBase = {
  appearance: 'none',
  padding: '0.65rem 1rem',
  fontSize: '0.95rem',
  fontWeight: 500,
  color: '#d4d4d4',
  background: '#141414',
  border: '1px solid #2a2a2a',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background 0.15s ease, border-color 0.15s ease',
}

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main style={page}>
      <h1 style={heading}>Gender Bender</h1>
      <p style={description}>
        A quiz app to revise contextualising gender assignments
      </p>
      <div style={stack}>
        <button
          type="button"
          style={buttonBase}
          onClick={() => navigate('/quiz')}
        >
          Start Quiz
        </button>
        <button
          type="button"
          style={buttonBase}
          onClick={() => navigate('/resources')}
        >
          Learning resources
        </button>
        <button
          type="button"
          style={buttonBase}
          onClick={() => navigate('/tips')}
        >
          Tips and Tricks
        </button>
      </div>
    </main>
  )
}
