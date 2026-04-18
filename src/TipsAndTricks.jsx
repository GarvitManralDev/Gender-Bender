import { Link } from 'react-router-dom'

const page = {
  minHeight: '100svh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1.5rem 3rem',
  boxSizing: 'border-box',
  background: '#0c0c0c',
  color: '#d4d4d4',
  fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
}

const backLink = {
  alignSelf: 'flex-start',
  marginBottom: '1.25rem',
  fontSize: '0.9rem',
  color: '#9ca3af',
  textDecoration: 'none',
}

const content = {
  width: '100%',
  maxWidth: '32rem',
  textAlign: 'left',
}

const pageTitle = {
  margin: '0 0 1.5rem',
  fontSize: 'clamp(1.35rem, 4vw, 1.65rem)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: '#e5e5e5',
  textAlign: 'center',
}

const sectionTitle = {
  margin: '0 0 0.75rem',
  fontSize: '1.05rem',
  fontWeight: 600,
  color: '#e5e5e5',
}

const subTitle = {
  margin: '1.25rem 0 0.5rem',
  fontSize: '0.95rem',
  fontWeight: 600,
  color: '#d4d4d4',
}

const muted = {
  margin: '0 0 0.65rem',
  fontSize: '0.9rem',
  lineHeight: 1.55,
  color: '#9ca3af',
}

const list = {
  margin: '0 0 1.25rem',
  paddingLeft: '1.25rem',
  color: '#d4d4d4',
  lineHeight: 1.6,
  fontSize: '0.95rem',
}

const li = { marginBottom: '0.5rem' }

const block = {
  margin: '0 0 1rem',
  fontSize: '0.95rem',
  lineHeight: 1.6,
  color: '#d4d4d4',
}

const divider = {
  border: 'none',
  borderTop: '1px solid #2a2a2a',
  margin: '1.75rem 0',
}

export default function TipsAndTricks() {
  return (
    <main style={page}>
      <Link to="/" style={backLink}>
        ← Home
      </Link>
      <div style={content}>
        <h1 style={pageTitle}>Tips and tricks</h1>

        <section>
          <h2 style={sectionTitle}>
            Section 1 — Preparation strategy (last minute)
          </h2>
          <ol style={list}>
            <li style={li}>Pray paper is out of assignments only.</li>
            <li style={li}>
              Go through the resource docs and try to remember only right
              answers; don’t even look at wrong options in the beginning —
              might confuse you later.
            </li>
            <li style={li}>
              Practice the shit out of the quiz till you’re confident.
            </li>
          </ol>
        </section>

        <hr style={divider} />

        <section>
          <h2 style={sectionTitle}>
            Section 2 — Analysis of assignments
          </h2>
          <p style={muted}>
            Analysis of assignments (prepared by ChatGPT). Useful only if exam
            questions match assignment wording with the same option order and
            you are unsure about answers.
          </p>

          <h3 style={subTitle}>Key pattern</h3>
          <ul style={list}>
            <li style={li}>
              <strong style={{ color: '#e5e5e5' }}>B</strong> — most frequent
            </li>
            <li style={li}>
              <strong style={{ color: '#e5e5e5' }}>C</strong> — second most
            </li>
            <li style={li}>
              <strong style={{ color: '#e5e5e5' }}>A</strong> — moderate
            </li>
            <li style={li}>
              <strong style={{ color: '#e5e5e5' }}>D</strong> — least used
            </li>
          </ul>
          <p style={block}>
            <strong style={{ color: '#e5e5e5' }}>Trend:</strong> B &gt; C &gt; A
            &gt; D
          </p>

          <h3 style={subTitle}>How to guess smartly</h3>
          <ul style={list}>
            <li style={li}>No idea → choose B.</li>
            <li style={li}>Confused → pick the longer / more detailed option.</li>
            <li style={li}>
              Prefer answers that sound conceptual, academic, and less absolute
              (avoid “always”, “only”).
            </li>
          </ul>

          <h3 style={subTitle}>Quick elimination — avoid</h3>
          <ul style={list}>
            <li style={li}>Very simple or obvious options.</li>
            <li style={li}>Extreme statements.</li>
            <li style={li}>
              Random-looking distractors (often D).
            </li>
          </ul>

          <h3 style={subTitle}>Condition</h3>
          <p style={block}>Works only if:</p>
          <ul style={list}>
            <li style={li}>Questions are repeated from assignments.</li>
            <li style={li}>Option order is unchanged.</li>
          </ul>

          <h3 style={subTitle}>Bottom line — when unsure</h3>
          <ul style={list}>
            <li style={li}>Eliminate obvious wrong answers.</li>
            <li style={li}>Prefer B → C → A → D.</li>
            <li style={li}>
              Choose the option that looks most conceptually correct.
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
