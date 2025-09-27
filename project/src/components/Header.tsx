'use client';

import Image from 'next/image';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  return (
    <nav className="fixed top-1 w-full bg-white shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <Image 
                src="/Flag_of_Vietnam.svg" 
                alt="Lá Cờ Việt Nam" 
                width={48}
                height={48}
                className="w-12 h-12"
              />
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
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className="px-6 py-3 mx-1 rounded-lg transition-all duration-300 font-medium whitespace-nowrap text-gray-700 hover:text-primary-red hover:bg-red-50 hover:-translate-y-0.5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
