import { useNavigate } from 'react-router-dom'

const page = {
  minHeight: '100svh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2.5rem',
  padding: '2.5rem 1.5rem 3rem',
  boxSizing: 'border-box',
  background: '#0c0c0c',
  color: '#d4d4d4',
  textAlign: 'center',
  fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
}

const section = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '24rem',
}

const sectionDivider = {
  width: '100%',
  maxWidth: '20rem',
  height: '1px',
  background: '#2a2a2a',
  border: 'none',
  margin: 0,
}

const sectionHeading = {
  margin: '0 0 0.75rem',
  fontSize: 'clamp(1.35rem, 4vw, 1.65rem)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: '#e5e5e5',
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

const dataVetaDescription = {
  margin: '0 0 1.75rem',
  maxWidth: '22rem',
  fontSize: '0.95rem',
  lineHeight: 1.55,
  color: '#9ca3af',
}

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <main style={page}>
      <section style={section} aria-labelledby="gender-bender-heading">
        <h1 id="gender-bender-heading" style={heading}>
          Gender Bender
        </h1>
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
      </section>

      <hr style={sectionDivider} />

      <section style={section} aria-labelledby="data-veta-heading">
        <h2 id="data-veta-heading" style={sectionHeading}>
          Data Veta
        </h2>
        <p style={dataVetaDescription}>
          Weekly quizzes for revising data analytics with Python.
        </p>
        <div style={stack}>
          <button
            type="button"
            style={buttonBase}
            onClick={() => navigate('/data/quiz')}
          >
            Start Quiz
          </button>
        </div>
      </section>
    </main>
  )
}
