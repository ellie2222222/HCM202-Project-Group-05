'use client';

import { motion } from 'framer-motion';
import { Flag } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/intro.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative z-10 text-center px-6 py-20 max-w-6xl mx-auto w-full">
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FFD700] mb-8 leading-tight tracking-wide drop-shadow-2xl text-center"
        >
          Đại Đoàn Kết – Nền Tảng Sức Mạnh Dân Tộc
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-white mb-16 max-w-4xl mx-auto leading-relaxed font-light italic drop-shadow-lg text-center"
        >
          Khám phá tư tưởng Hồ Chí Minh về đoàn kết toàn dân tộc và bài học cho hiện tại
        </motion.p>
        
        {/* Historical Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mb-16"
        >
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-[#FFD700] border-opacity-40 text-center">
            <p className="text-lg md:text-xl text-[#FFD700] font-semibold italic leading-relaxed mb-4">
              "Đoàn kết, đoàn kết, đại đoàn kết<br />
              <span className="text-white">Thành công, thành công, đại thành công."</span>
            </p>
            <p className="text-base text-white opacity-90">
              — Hồ Chí Minh
            </p>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={onExploreClick}
          className="bg-[#FFD700] text-[#D32F2F] px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-[#FFD700] hover:border-yellow-400"
        >
          Khám phá ngay
        </motion.button>
      </div>
    </section>
  );
}
