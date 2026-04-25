import { useState } from 'react'

const LETTERS = ['A', 'B', 'C', 'D']

const card = {
  width: '100%',
  maxWidth: '26rem',
  padding: '1.5rem',
  boxSizing: 'border-box',
  background: '#141414',
  border: '1px solid #2a2a2a',
  borderRadius: '10px',
  textAlign: 'left',
  fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
  color: '#d4d4d4',
}

const label = {
  margin: '0 0 0.5rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#9ca3af',
}

const questionText = {
  margin: '0 0 1.25rem',
  fontSize: '1.05rem',
  lineHeight: 1.5,
  fontWeight: 500,
  color: '#e5e5e5',
}

const optionList = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
}

const optionBtn = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  width: '100%',
  padding: '0.7rem 0.85rem',
  boxSizing: 'border-box',
  fontSize: '0.95rem',
  lineHeight: 1.45,
  textAlign: 'left',
  color: '#d4d4d4',
  background: '#0c0c0c',
  border: '1px solid #2a2a2a',
  borderRadius: '6px',
  cursor: 'pointer',
}

const badge = {
  flexShrink: 0,
  width: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.8rem',
  fontWeight: 600,
  color: '#a3a3a3',
  background: '#1a1a1a',
  borderRadius: '4px',
  border: '1px solid #333',
}

/**
 * @param {object} props
 * @param {string} props.question
 * @param {[string, string, string, string]} props.options — four answer strings
 * @param {(letter: 'A' | 'B' | 'C' | 'D') => void} [props.onAnswer] — fired when the user picks an option; parent can advance to the next question
 */
export default function Card({ question, options, onAnswer }) {
  const safeOptions = Array.isArray(options) ? options.slice(0, 4) : []
  const [selectedLetter, setSelectedLetter] = useState(null)

  function handlePick(letter) {
    if (selectedLetter) return
    setSelectedLetter(letter)
    window.setTimeout(() => {
      onAnswer?.(letter)
      setSelectedLetter(null)
    }, 180)
  }

  return (
    <article style={card} aria-labelledby="card-question">
      <p style={label}>Question</p>
      <h2 id="card-question" style={questionText}>
        {question}
      </h2>
      <p style={{ ...label, marginBottom: '0.65rem' }}>Options</p>
      <ul style={optionList} role="list">
        {LETTERS.map((letter, i) => {
          const text = safeOptions[i] ?? ''
          return (
            <li key={letter}>
              <button
                type="button"
                style={
                  selectedLetter === letter
                    ? {
                        ...optionBtn,
                        color: '#fdba74',
                        border: '1px solid #c2410c',
                        background: '#1f1307',
                      }
                    : optionBtn
                }
                onClick={() => handlePick(letter)}
                disabled={Boolean(selectedLetter)}
              >
                <span style={badge} aria-hidden="true">
                  {letter}
                </span>
                <span>{text}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
