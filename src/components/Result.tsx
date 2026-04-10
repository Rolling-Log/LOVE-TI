import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Share2 } from 'lucide-react';
import { personalities } from '../data/personalities';

interface ResultProps {
  scores: Record<string, number>;
  onRestart: () => void;
}

export default function Result({ scores, onRestart }: ResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const type = [
    scores.A >= scores.P ? 'A' : 'P',
    scores.C >= scores.D ? 'C' : 'D',
    scores.R >= scores.E ? 'R' : 'E',
    scores.S >= scores.O ? 'S' : 'O',
  ].join('');

  const personality = personalities[type] || personalities['ACES'];

  const handleShare = async () => {
    const text = `我是 ${personality.code} (${personality.chineseName}) 👻\n“${personality.slogan}”\n\n测测你的恋爱人格：${window.location.href}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const randomPercent = Math.floor(Math.random() * 40) + 50;

  return (
    <div className="min-h-screen py-12 px-6 bg-zinc-50 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-6"
      >
        <div 
          ref={resultRef}
          className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 text-9xl opacity-5 font-display font-black select-none">
            {personality.code}
          </div>

          <div className="relative z-10 space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold font-display">
                你的恋爱人格
              </div>
              
              <div>
                <h1 className="text-5xl font-black font-display tracking-tight text-rose-500">
                  {personality.code}
                </h1>
                <h2 className="text-2xl font-bold mt-1">
                  {personality.chineseName}
                </h2>
              </div>

              <div className="flex justify-center py-2">
                <div className="w-48 h-48 bg-[#e5e5e5] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                  <img 
                    src={`/avatars/${personality.code}.png`} 
                    alt={personality.code} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to dicebear if local image is not found
                      (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/shapes/svg?seed=${personality.code}&backgroundColor=e5e5e5`;
                    }}
                  />
                </div>
              </div>

              <p className="text-xl font-bold text-zinc-800 italic bg-rose-100 px-4 py-3 border-l-4 border-rose-500 text-left">
                "{personality.slogan}"
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {personality.tags.map((tag, i) => (
                <span key={i} className="text-xs font-bold font-mono bg-zinc-100 border border-black px-2 py-1">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="border-t-2 border-black pt-4 space-y-4">
              <div className="space-y-2">
                <p className="text-sm leading-relaxed font-medium text-zinc-700">
                  {personality.analysis}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-bold font-display border-t-2 border-black pt-4">
              <div>TYPE: {type}</div>
              <div>BEAT {randomPercent}% USERS</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <Share2 className="w-4 h-4" />
            {copied ? '已复制！' : '复制结果'}
          </button>

          <button
            onClick={onRestart}
            className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 border-2 border-black hover:bg-zinc-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            重新测试
          </button>
        </div>
      </motion.div>
    </div>
  );
}
