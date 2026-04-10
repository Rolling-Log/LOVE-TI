import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions as originalQuestions, Option } from '../data/questions';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface QuizProps {
  onComplete: (answers: Record<number, Option>) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [questions, setQuestions] = useState(originalQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Option>>({});

  useEffect(() => {
    setQuestions(shuffleArray(originalQuestions));
  }, []);

  const question = questions[currentIndex];

  const handleOptionClick = (option: Option) => {
    const newAnswers = { ...answers, [question.id]: option };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
    } else {
      if (Object.keys(newAnswers).length === questions.length) {
        onComplete(newAnswers);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
    else if (Object.keys(answers).length === questions.length) onComplete(answers);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  if (!question) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-zinc-50">
      <div className="max-w-md w-full space-y-8">
        
        {/* 30 Dots Progress */}
        <div className="space-y-4">
          <div className="flex justify-between text-sm font-display font-bold text-zinc-400">
            <span>Q {currentIndex + 1}</span>
            <span>{questions.length}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 justify-center">
            {questions.map((q, idx) => {
              const isAnswered = !!answers[q.id];
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={clsx(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    isCurrent ? "bg-rose-500 scale-125" : isAnswered ? "bg-black" : "bg-zinc-300"
                  )}
                />
              );
            })}
          </div>
        </div>

        {/* Question Area */}
        <div className="min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={question.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold leading-snug">
                {question.text}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = answers[question.id]?.text === option.text;
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleOptionClick(option)}
                      className={clsx(
                        "w-full text-left p-4 border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-medium",
                        isSelected 
                          ? "bg-black text-white border-black" 
                          : "bg-white border-black hover:shadow-[4px_4px_0px_0px_rgba(244,63,94,1)] hover:border-rose-500 text-black"
                      )}
                    >
                      <span className={clsx(
                        "inline-block w-6 font-display font-bold",
                        isSelected ? "text-rose-400" : "text-zinc-400"
                      )}>
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option.text}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 border-2 border-black bg-white disabled:opacity-50 hover:bg-zinc-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:shadow-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1 && Object.keys(answers).length < questions.length}
            className="p-3 border-2 border-black bg-white disabled:opacity-50 hover:bg-zinc-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:shadow-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}
