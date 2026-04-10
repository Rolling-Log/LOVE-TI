import { motion } from 'motion/react';
import { HeartCrack } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-zinc-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center space-y-8"
      >
        <div className="flex justify-center">
          <div className="relative">
            <HeartCrack className="w-20 h-20 text-rose-500" strokeWidth={1.5} />
            <motion.div 
              className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold px-2 py-1 rotate-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              MEME ED.
            </motion.div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="font-display text-5xl font-black tracking-tight uppercase leading-none">
            Love<br />Personality<br />Test
          </h1>
          <p className="text-xl font-medium text-zinc-500">
            全网最扎心的恋爱人格测试
          </p>
        </div>

        <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left space-y-4">
          <p className="font-medium">⚠️ 警告 / WARNING:</p>
          <ul className="text-sm text-zinc-600 space-y-2 list-disc list-inside">
            <li>本测试包含大量互联网梗</li>
            <li>可能会对你的恋爱观造成暴击</li>
            <li>测试结果仅供娱乐，破防概不负责</li>
          </ul>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="w-full bg-black text-white font-display font-bold text-xl py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(244,63,94,1)] hover:shadow-[2px_2px_0px_0px_rgba(244,63,94,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          START QUIZ / 开始测试
        </motion.button>
        
        <p className="text-xs text-zinc-400 font-mono">
          Takes ~2 mins. No signup required.
        </p>
      </motion.div>
    </div>
  );
}
