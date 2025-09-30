"use client";

import { useRef, useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState<string>("");

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

  // Scroll detection to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Check each section to see which one is currently in view
      Object.entries(sections).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
          }
        }
      });

      // If scrolled to top, clear active section
      if (window.scrollY < 50) {
        setActiveSection("");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Progress Bar */}
      <ProgressBar />

      {/* Header */}
      <Header onNavClick={scrollToSection} activeSection={activeSection} />

      {/* Hero Section with Background Image */}
      <div className="py-10">
        <HeroSection onExploreClick={() => scrollToSection("vai-tro")} />
      </div>

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
