import { useState } from 'react';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { Option } from './data/questions';

type AppState = 'landing' | 'quiz' | 'result';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleStart = () => {
    setAppState('quiz');
  };

  const handleComplete = (answers: Record<number, Option>) => {
    const newScores: Record<string, number> = {
      A: 0, P: 0, C: 0, D: 0, R: 0, E: 0, S: 0, O: 0
    };
    Object.values(answers).forEach(opt => {
      newScores[opt.axis]++;
    });
    setScores(newScores);
    setAppState('result');
  };

  const handleRestart = () => {
    setScores({});
    setAppState('landing');
  };

  return (
    <main className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {appState === 'landing' && <Landing onStart={handleStart} />}
      {appState === 'quiz' && <Quiz onComplete={handleComplete} />}
      {appState === 'result' && <Result scores={scores} onRestart={handleRestart} />}
    </main>
  );
}
