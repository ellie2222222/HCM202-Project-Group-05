'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, X, MapPin, Users, Building, Factory, GraduationCap, Heart, Globe } from 'lucide-react';

export default function VietnamMapGallery() {
  const [selectedMap, setSelectedMap] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const maps = [
    {
      id: 1,
      image: '/vietnam-map-1.jpg',
      title: 'Miền Bắc',
      description: 'Trung tâm chính trị, kinh tế và văn hóa',
      forces: ['Công nhân công nghiệp', 'Trí thức', 'Cán bộ nhà nước', 'Sinh viên']
    },
    {
      id: 2,
      image: '/vietnam-map-2.jpg',
      title: 'Miền Trung',
      description: 'Vùng đất anh hùng, nơi sinh ra nhiều anh hùng dân tộc',
      forces: ['Nông dân', 'Ngư dân', 'Công nhân lâm nghiệp', 'Đồng bào dân tộc thiểu số']
    },
    {
      id: 3,
      image: '/vietnam-map-3.jpg',
      title: 'Miền Nam',
      description: 'Vùng đất trù phú, nơi hội tụ sức mạnh toàn dân',
      forces: ['Doanh nhân', 'Công nhân', 'Nông dân', 'Trí thức']
    },
    {
      id: 4,
      image: '/vietnam-map-4.jpg',
      title: 'Tây Nguyên',
      description: 'Vùng cao nguyên, nơi sinh sống của nhiều dân tộc',
      forces: ['Đồng bào dân tộc thiểu số', 'Nông dân', 'Công nhân lâm nghiệp', 'Trí thức']
    },
    {
      id: 5,
      image: '/vietnam-map-5.jpg',
      title: 'Đồng bằng sông Cửu Long',
      description: 'Vựa lúa của cả nước, nơi sản xuất nông nghiệp chủ yếu',
      forces: ['Nông dân', 'Ngư dân', 'Công nhân chế biến', 'Doanh nhân nông nghiệp']
    },
    {
      id: 6,
      image: '/vietnam-map-6.jpg',
      title: 'Duyên hải Nam Trung Bộ',
      description: 'Vùng biển đảo, nơi có nhiều cảng biển quan trọng',
      forces: ['Ngư dân', 'Công nhân cảng', 'Doanh nhân', 'Công nhân du lịch']
    },
    {
      id: 7,
      image: '/vietnam-map-7.jpg',
      title: 'Toàn quốc',
      description: 'Khối đại đoàn kết toàn dân tộc Việt Nam',
      forces: ['Toàn thể nhân dân Việt Nam', 'Mọi tầng lớp xã hội', 'Các dân tộc anh em', 'Việt kiều yêu nước']
    }
  ];

  const forceIcons = {
    'Công nhân': Factory,
    'Nông dân': Users,
    'Trí thức': GraduationCap,
    'Doanh nhân': Building,
    'Ngư dân': Globe,
    'Đồng bào dân tộc thiểu số': Heart,
    'Cán bộ nhà nước': MapPin,
    'Sinh viên': GraduationCap,
    'Công nhân lâm nghiệp': Factory,
    'Công nhân chế biến': Factory,
    'Doanh nhân nông nghiệp': Building,
    'Công nhân cảng': Factory,
    'Công nhân du lịch': Globe,
    'Toàn thể nhân dân Việt Nam': Users,
    'Mọi tầng lớp xã hội': Users,
    'Các dân tộc anh em': Heart,
    'Việt kiều yêu nước': Globe
  };

  const openFullscreen = (mapId: number) => {
    setSelectedMap(mapId);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedMap(null);
  };

  return (
    <div className="w-full">
      {/* Map Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {maps.map((map, index) => (
          <motion.div
            key={map.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={map.image}
                alt={map.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-1">{map.title}</h3>
                <p className="text-white/90 text-sm">{map.description}</p>
              </div>
              <button
                onClick={() => openFullscreen(map.id)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-4">
              <h4 className="text-[#D32F2F] font-semibold mb-3">Lực lượng chính:</h4>
              <div className="space-y-2">
                {map.forces.map((force, forceIndex) => {
                  const IconComponent = forceIcons[force as keyof typeof forceIcons] || Users;
                  return (
                    <div key={forceIndex} className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{force}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && selectedMap && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={maps[selectedMap - 1].image}
              alt={maps[selectedMap - 1].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-bold text-2xl mb-2">{maps[selectedMap - 1].title}</h3>
              <p className="text-white/90 text-lg mb-4">{maps[selectedMap - 1].description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {maps[selectedMap - 1].forces.map((force, forceIndex) => {
                  const IconComponent = forceIcons[force as keyof typeof forceIcons] || Users;
                  return (
                    <div key={forceIndex} className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                      <IconComponent className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                      <span className="text-white text-sm">{force}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#D32F2F] to-[#FFD700] rounded-xl p-8 text-white text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Khối đại đoàn kết toàn dân tộc</h3>
        <p className="text-lg mb-6">
          Từ miền núi đến đồng bằng, từ biển đảo đến đất liền, 
          toàn thể nhân dân Việt Nam đoàn kết một lòng xây dựng đất nước.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <Users className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">63 tỉnh thành</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Heart className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">54 dân tộc</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Globe className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Toàn dân</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <Building className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Đoàn kết</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
