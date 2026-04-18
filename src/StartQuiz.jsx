import { Link, useLocation, useNavigate } from 'react-router-dom'

const page = {
  minHeight: '100svh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1.5rem 3rem',
  boxSizing: 'border-box',
  background: '#0c0c0c',
  color: '#d4d4d4',
  textAlign: 'center',
  fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
}

const backLink = {
  alignSelf: 'flex-start',
  marginBottom: '1.5rem',
  fontSize: '0.9rem',
  color: '#9ca3af',
  textDecoration: 'none',
}

const heading = {
  margin: '0 0 1.75rem',
  fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: '#e5e5e5',
}

const stack = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.65rem',
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

const weekButtons = [
  { label: 'All Weeks', param: 'all' },
  ...Array.from({ length: 12 }, (_, i) => ({
    label: `Week ${i + 1}`,
    param: String(i + 1),
  })),
]

export default function StartQuiz() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isDataVeta = pathname.startsWith('/data')
  const quizBase = isDataVeta ? '/data/quiz' : '/quiz'

  return (
    <main style={page}>
      <Link to="/" style={backLink}>
        ← Back
      </Link>
      <h1 style={heading}>
        {isDataVeta
          ? 'Data Veta — select week'
          : 'Select week to revise'}
      </h1>
      <div style={stack}>
        {weekButtons.map(({ label, param }) => (
          <button
            key={param}
            type="button"
            style={buttonBase}
            onClick={() => navigate(`${quizBase}/${param}`)}
          >
            {label}
          </button>
        ))}
      </div>
    </main>
  )
}
