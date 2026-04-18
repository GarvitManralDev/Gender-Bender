import { Link } from 'react-router-dom'

const ASSIGNMENTS_DOC =
  'https://docs.google.com/document/d/1suBEw7cZTKXeWV8y4uHbKvngv4FEO4quzPgpELJHqLc/edit?usp=sharing'
const QUICK_REVISE_DOC =
  'https://docs.google.com/document/d/12H9noACd6b6dY7OUZ7MmCXi-NaIEnEoBvKRl7-VshVw/edit?tab=t.0#heading=h.dhpi86kr30mh'

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
  marginBottom: '1.5rem',
  fontSize: '0.9rem',
  color: '#9ca3af',
  textDecoration: 'none',
}

const heading = {
  margin: '0 0 1.5rem',
  width: '100%',
  maxWidth: '24rem',
  fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  color: '#e5e5e5',
  textAlign: 'center',
}

const list = {
  width: '100%',
  maxWidth: '24rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  margin: 0,
  padding: 0,
  listStyle: 'none',
}

const resourceLink = {
  display: 'block',
  padding: '0.85rem 1rem',
  fontSize: '0.95rem',
  fontWeight: 500,
  lineHeight: 1.45,
  color: '#d4d4d4',
  background: '#141414',
  border: '1px solid #2a2a2a',
  borderRadius: '6px',
  textDecoration: 'none',
  textAlign: 'left',
  boxSizing: 'border-box',
}

const resourceTitle = {
  display: 'block',
  marginBottom: '0.35rem',
  color: '#e5e5e5',
}

const resourceHint = {
  display: 'block',
  fontSize: '0.8rem',
  fontWeight: 400,
  color: '#9ca3af',
}

const items = [
  {
    title: 'Assignments with answers doc',
    hint: 'Google Doc — opens in a new tab',
    href: ASSIGNMENTS_DOC,
  },
  {
    title: 'Quick Revise doc',
    hint: 'Gender contextualisation memory table — new tab',
    href: QUICK_REVISE_DOC,
  },
]

export default function LearningResources() {
  return (
    <main style={page}>
      <Link to="/" style={backLink}>
        ← Home
      </Link>
      <h1 style={heading}>Learning resources</h1>
      <ul style={list}>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={resourceLink}
            >
              <span style={resourceTitle}>{item.title}</span>
              <span style={resourceHint}>{item.hint}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
