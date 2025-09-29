'use client';

import Image from 'next/image';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection?: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-1 w-full bg-white shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <button 
                onClick={scrollToTop}
                className="transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-lg p-1"
                aria-label="Scroll to top"
              >
                <Image 
                  src="/Flag_of_Vietnam.svg" 
                  alt="Lá Cờ Việt Nam" 
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {[
                { id: 'vai-tro', label: 'Vai trò' },
                { id: 'luc-luong', label: 'Lực lượng' },
                { id: 'dieu-kien', label: 'Điều kiện' },
                { id: 'mat-tran', label: 'Mặt trận' },
                { id: 'phuong-thuc', label: 'Phương thức' }
              ].map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className={`
                      px-6 py-3 mx-1 rounded-lg transition-all duration-500 font-medium whitespace-nowrap
                      relative overflow-hidden group
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/25 scale-105' 
                        : 'text-gray-700 hover:text-primary-red hover:bg-red-50 hover:-translate-y-0.5'
                      }
                    `}
                  >
                    {/* Active indicator background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg"></div>
                    )}
                    
                    {/* Hover effect background */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg 
                      transition-all duration-500 transform
                      ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-10'}
                    `}></div>
                    
                    {/* Text content */}
                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
