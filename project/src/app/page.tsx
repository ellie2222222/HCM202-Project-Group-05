"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import HeroSection from "@/components/HeroSection";
import VaiTroSection from "@/components/VaiTroSection";
import LucLuongSection from "@/components/LucLuongSection";
import DieuKienSection from "@/components/DieuKienSection";
import MatTranSection from "@/components/MatTranSection";
import PhuongThucSection from "@/components/PhuongThucSection";
import Footer from "@/components/Footer";
import CQ7 from "@/components/CQ7";

export default function Home() {
  const sections = {
    "vai-tro": useRef<HTMLDivElement>(null),
    "luc-luong": useRef<HTMLDivElement>(null),
    "dieu-kien": useRef<HTMLDivElement>(null),
    "mat-tran": useRef<HTMLDivElement>(null),
    "phuong-thuc": useRef<HTMLDivElement>(null),
    cq7: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    const section = sections[sectionId as keyof typeof sections];
    if (section?.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Progress Bar */}
      <ProgressBar />

      {/* Header */}
      <Header onNavClick={scrollToSection} />

      {/* Hero Section with Background Image */}
      <HeroSection onExploreClick={() => scrollToSection("vai-tro")} />

      {/* Vai trò Section */}
      <div ref={sections["vai-tro"]}>
        <VaiTroSection />
      </div>

      {/* Lực lượng Section */}
      <div ref={sections["luc-luong"]}>
        <LucLuongSection />
      </div>

      {/* Điều kiện Section */}
      <div ref={sections["dieu-kien"]}>
        <DieuKienSection />
      </div>

      {/* Mặt trận Section */}
      <div ref={sections["mat-tran"]}>
        <MatTranSection />
      </div>

      {/* Phương thức Section */}
      <div ref={sections["phuong-thuc"]}>
        <PhuongThucSection />
      </div>

      <div ref={sections["cq7"]}>
        <CQ7 />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
