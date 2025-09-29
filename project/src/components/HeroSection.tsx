"use client";

import { motion, cubicBezier } from "framer-motion";
import { ChevronDown, Flag, Users, Heart, Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Background Image Layer */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: "url(/intro.jpg)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/70 to-red-700/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 py-8 max-w-7xl mx-auto w-full h-full flex flex-col justify-center"
      >
        {/* Decorative Top Element */}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-yellow-400/30">
            <span className="text-yellow-300 font-semibold text-sm tracking-wider uppercase">
              Tư tưởng Hồ Chí Minh
            </span>
          </div>
        </motion.div>

        {/* Main Title with Enhanced Typography */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none mb-4">
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-2xl">
              Đại Đoàn Kết
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-4 drop-shadow-lg">
              Nền Tảng Sức Mạnh Dân Tộc
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex justify-center mt-6">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light">
            Khám phá{" "}
            <span className="text-yellow-300 font-semibold">
              tư tưởng Hồ Chí Minh
            </span>{" "}
            về đoàn kết toàn dân tộc và{" "}
            <br />
            <span className="text-red-200 font-semibold">
              bài học cho hiện tại
            </span>
          </p>
        </motion.div>

        {/* Redesigned Historical Quote */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="relative max-w-5xl mx-auto">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-400/20 rounded-2xl blur-xl"></div>

            {/* Quote Container */}
            <div className="relative bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-xs rounded-2xl p-6 md:p-8 border-2 border-yellow-400/40 shadow-2xl">
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center border-2 border-yellow-400/40">
                  <Quote className="text-yellow-500 w-7 h-7"></Quote>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-center">
                <p className="text-xl md:text-3xl font-bold mb-3 leading-tight">
                  <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    &ldquo;Đoàn kết, đoàn kết, đại đoàn kết
                  </span>
                  <br />
                  <span className="text-white text-lg md:text-2xl">
                    Thành công, thành công, đại thành công&rdquo;
                  </span>
                </p>

                {/* Author Attribution */}
                <div className="flex justify-center items-center gap-3 mt-4">
                  <div className="w-8 h-0.5 bg-yellow-400"></div>
                  <div className="px-6 py-2 bg-yellow-400/10 rounded-full border border-yellow-400/30">
                    <p className="text-white font-semibold text-lg">
                      Hồ Chí Minh
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-yellow-400"></div>
                </div>
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6"
        >

          {/* Scroll Indicator */}
          <motion.div
            className="mt-4 flex flex-col items-center gap-2 text-white/70 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={onExploreClick}
          >
            <span className="text-sm font-medium">Cuộn xuống để khám phá</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}
