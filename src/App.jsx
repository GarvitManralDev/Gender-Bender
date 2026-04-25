import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import LearningResources from './LearningResources.jsx'
import TipsAndTricks from './TipsAndTricks.jsx'
import StartQuiz from './StartQuiz.jsx'
import QuizPage from './QuizPage.jsx'

function QuizPageRoute() {
  const { week } = useParams()
  return <QuizPage key={week} />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<LearningResources />} />
        <Route path="/tips" element={<TipsAndTricks />} />
        <Route path="/quiz" element={<StartQuiz />} />
        <Route path="/quiz/:week" element={<QuizPageRoute />} />
        <Route path="/data/quiz" element={<StartQuiz />} />
        <Route path="/data/quiz/:week" element={<QuizPageRoute />} />
        <Route path="/iot/quiz" element={<StartQuiz />} />
        <Route path="/iot/quiz/:week" element={<QuizPageRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
