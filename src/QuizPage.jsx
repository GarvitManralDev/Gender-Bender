import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from './components/Card.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

const weekFiles = import.meta.glob('./questions/week*.json', { eager: true })

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
  marginBottom: '1rem',
  fontSize: '0.9rem',
  color: '#9ca3af',
  textDecoration: 'none',
}

const muted = { color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1rem' }

const summaryBox = {
  width: '100%',
  maxWidth: '28rem',
  textAlign: 'left',
  background: '#141414',
  border: '1px solid #2a2a2a',
  borderRadius: '10px',
  padding: '1.25rem',
  boxSizing: 'border-box',
}

const wrongItem = {
  marginTop: '1rem',
  paddingTop: '1rem',
  borderTop: '1px solid #2a2a2a',
  fontSize: '0.9rem',
  lineHeight: 1.5,
}

function weekNumFromPath(path) {
  const m = path.match(/week(\d+)\.json/)
  return m ? parseInt(m[1], 10) : 0
}

function getWeekData(weekNum) {
  for (const [path, mod] of Object.entries(weekFiles)) {
    if (weekNumFromPath(path) === weekNum) return mod.default
  }
  return null
}

function normalizeEntry(raw, id) {
  const opts = raw.options || {}
  const optionTexts = LETTERS.map((L) => String(opts[L] ?? ''))
  let correctLetter = null
  for (const L of LETTERS) {
    if (opts[L] === raw.correctOption) {
      correctLetter = L
      break
    }
  }
  if (!correctLetter) return null
  return {
    id,
    question: raw.question,
    options: optionTexts,
    correctLetter,
    correctText: raw.correctOption,
  }
}

function buildQuestionList(weekKey) {
  const out = []
  if (weekKey === 'all') {
    for (let w = 1; w <= 12; w++) {
      const data = getWeekData(w)
      if (!data) continue
      for (const [qid, entry] of Object.entries(data)) {
        const q = normalizeEntry(entry, `${w}-${qid}`)
        if (q) out.push(q)
      }
    }
  } else {
    const w = parseInt(weekKey, 10)
    if (w >= 1 && w <= 12) {
      const data = getWeekData(w)
      if (data) {
        for (const [qid, entry] of Object.entries(data)) {
          const q = normalizeEntry(entry, `${w}-${qid}`)
          if (q) out.push(q)
        }
      }
    }
  }
  return out
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuizPage() {
  const { week } = useParams()
  const questions = useMemo(() => shuffle(buildQuestionList(week)), [week])

  const [index, setIndex] = useState(0)
  const [records, setRecords] = useState([])

  const current = questions[index]
  const finished = questions.length > 0 && index >= questions.length

  function handleAnswer(letter) {
    if (!current || finished) return
    const li = LETTERS.indexOf(letter)
    const userText = current.options[li] ?? ''
    const isCorrect = letter === current.correctLetter
    setRecords((prev) => [
      ...prev,
      {
        question: current.question,
        userLetter: letter,
        userText,
        correctLetter: current.correctLetter,
        correctText: current.correctText,
        isCorrect,
      },
    ])
    setIndex((i) => i + 1)
  }

  const correctCount = records.filter((r) => r.isCorrect).length
  const wrongOnes = records.filter((r) => !r.isCorrect)

  return (
    <main style={page}>
      <Link to="/quiz" style={backLink}>
        ← Weeks
      </Link>

      {questions.length === 0 && (
        <p style={muted}>No questions for this week.</p>
      )}

      {!finished && current && (
        <>
          <p style={muted}>
            Question {index + 1} of {questions.length}
          </p>
          <Card
            question={current.question}
            options={current.options}
            onAnswer={handleAnswer}
          />
        </>
      )}

      {finished && (
        <div style={summaryBox}>
          <h1
            style={{
              margin: '0 0 0.5rem',
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#e5e5e5',
            }}
          >
            Quiz complete
          </h1>
          <p style={{ margin: 0, color: '#d4d4d4' }}>
            You got{' '}
            <strong style={{ color: '#e5e5e5' }}>
              {correctCount}
            </strong>{' '}
            out of{' '}
            <strong style={{ color: '#e5e5e5' }}>{records.length}</strong>{' '}
            correct.
          </p>

          {wrongOnes.length > 0 ? (
            <>
              <h2
                style={{
                  margin: '1.25rem 0 0.5rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#9ca3af',
                }}
              >
                Incorrect ({wrongOnes.length})
              </h2>
              {wrongOnes.map((r, i) => (
                <div key={i} style={wrongItem}>
                  <p style={{ margin: '0 0 0.5rem', color: '#e5e5e5' }}>
                    {r.question}
                  </p>
                  <p style={{ margin: 0, color: '#fca5a5' }}>
                    Your answer: {r.userLetter}) {r.userText}
                  </p>
                  <p style={{ margin: '0.35rem 0 0', color: '#86efac' }}>
                    Correct: {r.correctLetter}) {r.correctText}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <p style={{ margin: '1rem 0 0', color: '#86efac' }}>
              Perfect — no mistakes.
            </p>
          )}

          <Link
            to="/quiz"
            style={{
              ...backLink,
              display: 'inline-block',
              marginTop: '1.5rem',
              marginBottom: 0,
            }}
          >
            ← Back to week selection
          </Link>
        </div>
      )}
    </main>
  )
}
