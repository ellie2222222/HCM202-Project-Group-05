"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Factory,
  Users,
  GraduationCap,
  Building,
  Heart,
  Globe,
  X,
} from "lucide-react";
import Image from "next/image";

export default function VietnamInteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      id: "north",
      name: "Miền Bắc",
      position: { x: 51, y: 21 },
      color: "#D32F2F",
      forces: [
        {
          name: "Công nhân công nghiệp",
          icon: Factory,
          fact: "Lực lượng tiên phong trong cách mạng",
        },
        {
          name: "Trí thức",
          icon: GraduationCap,
          fact: "Đóng góp tri thức và văn hóa",
        },
        {
          name: "Cán bộ nhà nước",
          icon: Building,
          fact: "Xây dựng bộ máy chính quyền",
        },
        { name: "Sinh viên", icon: GraduationCap, fact: "Thế hệ trẻ yêu nước" },
      ],
      description: "Trung tâm chính trị, kinh tế và văn hóa của cả nước",
    },
    {
      id: "central",
      name: "Miền Trung",
      position: { x: 57, y: 41 },
      color: "#FF6B35",
      forces: [
        {
          name: "Nông dân",
          icon: Users,
          fact: "Lực lượng cơ bản của cách mạng",
        },
        { name: "Ngư dân", icon: Globe, fact: "Bảo vệ chủ quyền biển đảo" },
        {
          name: "Công nhân lâm nghiệp",
          icon: Factory,
          fact: "Khai thác tài nguyên rừng",
        },
        {
          name: "Đồng bào dân tộc thiểu số",
          icon: Heart,
          fact: "Đoàn kết các dân tộc anh em",
        },
      ],
      description: "Vùng đất anh hùng, nơi sinh ra nhiều anh hùng dân tộc",
    },
    {
      id: "highlands",
      name: "Tây Nguyên",
      position: { x: 67, y: 59 },
      color: "#9C27B0",
      forces: [
        {
          name: "Đồng bào dân tộc thiểu số",
          icon: Heart,
          fact: "Giữ gìn bản sắc văn hóa",
        },
        { name: "Nông dân", icon: Users, fact: "Canh tác cây công nghiệp" },
        {
          name: "Công nhân lâm nghiệp",
          icon: Factory,
          fact: "Bảo vệ rừng và môi trường",
        },
        {
          name: "Trí thức",
          icon: GraduationCap,
          fact: "Giáo dục và y tế vùng cao",
        },
      ],
      description: "Vùng cao nguyên, nơi sinh sống của nhiều dân tộc anh em",
    },
    {
      id: "coastal",
      name: "Duyên hải Nam Trung Bộ",
      position: { x: 75, y: 67 },
      color: "#2196F3",
      forces: [
        { name: "Ngư dân", icon: Globe, fact: "Đánh bắt hải sản xa bờ" },
        {
          name: "Công nhân cảng",
          icon: Factory,
          fact: "Vận chuyển hàng hóa quốc tế",
        },
        { name: "Doanh nhân", icon: Building, fact: "Phát triển kinh tế biển" },
        {
          name: "Công nhân du lịch",
          icon: Globe,
          fact: "Phát triển du lịch biển đảo",
        },
      ],
      description: "Vùng biển đảo, nơi có nhiều cảng biển quan trọng",
    },
    {
      id: "south",
      name: "Miền Nam",
      position: { x: 61, y: 76 },
      color: "#4CAF50",
      forces: [
        {
          name: "Doanh nhân",
          icon: Building,
          fact: "Phát triển kinh tế thị trường",
        },
        { name: "Công nhân", icon: Factory, fact: "Lực lượng sản xuất chính" },
        {
          name: "Nông dân",
          icon: Users,
          fact: "Sản xuất nông nghiệp hàng hóa",
        },
        {
          name: "Trí thức",
          icon: GraduationCap,
          fact: "Nghiên cứu khoa học kỹ thuật",
        },
      ],
      description: "Vùng đất trù phú, nơi hội tụ sức mạnh toàn dân",
    },
    {
      id: "mekong",
      name: "Đồng bằng sông Cửu Long",
      position: { x: 50, y: 81 },
      color: "#FF9800",
      forces: [
        { name: "Nông dân", icon: Users, fact: "Sản xuất lúa gạo chủ yếu" },
        { name: "Ngư dân", icon: Globe, fact: "Khai thác thủy sản phong phú" },
        {
          name: "Công nhân chế biến",
          icon: Factory,
          fact: "Chế biến nông thủy sản",
        },
        {
          name: "Doanh nhân nông nghiệp",
          icon: Building,
          fact: "Phát triển nông nghiệp công nghệ cao",
        },
      ],
      description: "Vựa lúa của cả nước, nơi sản xuất nông nghiệp chủ yếu",
    },
  ];

  return (
    <div className="w-full h-full">
      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        {/* Interactive Map */}
        <div className="lg:w-3/5 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden h-full">
          <div className="relative w-full h-full rounded-xl overflow-hidden flex justify-center items-center">
            {/* Vietnam Map Background - Full Background */}
            <div className="relative w-full h-full">
              <Image
                src="/vietnam-map-1.jpg"
                alt="Bản đồ Việt Nam"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
              {/* Clean overlay to make pins visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>

              {/* Decorative Elements */}
              <div className="absolute top-6 left-6 text-3xl font-bold text-white drop-shadow-lg">
                VIỆT NAM
              </div>
              <div className="absolute bottom-6 right-6 text-lg text-white drop-shadow-lg font-medium">
                Khối đại đoàn kết toàn dân tộc
              </div>

              {/* Region Pins */}
              {regions.map((region, index) => (
                <motion.div
                  key={region.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${region.position.x}%`,
                    top: `${region.position.y}%`,
                    zIndex: 10 + index,
                  }}
                  whileHover={{}}
                >
                  <div className="relative">
                    {/* Pin Shadow */}
                    <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-black/20 rounded-full blur-sm"></div>
                    {/* Main Pin */}
                    <div className="relative bg-white rounded-full p-1.5 shadow-lg border-2 border-white">
                      <MapPin
                        className="w-5 h-5"
                        style={{ color: region.color }}
                      />
                    </div>
                    {/* Pulsing Ring */}
                    <div className="absolute -top-1 -left-1 w-7 h-7 border-2 border-white rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Enhanced Tooltip with Forces */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" style={{ zIndex: 9999 }}>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-gray-200 min-w-[280px] max-w-[320px]">
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        {region.name}
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {region.description}
                      </div>

                      {/* Forces List */}
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-700 mb-2">
                          Lực lượng chính:
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {region.forces.map((force, index) => (
                            <div key={index} className="flex items-center space-x-2 text-xs">
                              <force.icon className="w-4 h-4 text-[#D32F2F] flex-shrink-0" />
                              <span className="text-gray-600">{force.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95 mx-auto"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Historical Summary Sidebar */}
        <div className="lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#D32F2F] to-[#FFD700] rounded-2xl p-6 text-white h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-center mb-6">
              Khối đại đoàn kết toàn dân tộc
            </h3>
            <p className="text-lg text-center mb-8 opacity-90">
              Từ miền núi đến đồng bằng, từ biển đảo đến đất liền, toàn thể nhân dân
              Việt Nam đoàn kết một lòng xây dựng đất nước.
            </p>

            <div className="space-y-4 flex-1">
              <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                <Users className="w-10 h-10 mx-auto mb-3" />
                <div className="text-lg font-bold mb-1">Toàn quốc</div>
                <div className="text-sm opacity-90">Từ Bắc chí Nam</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                <Heart className="w-10 h-10 mx-auto mb-3" />
                <div className="text-lg font-bold mb-1">Đa dân tộc</div>
                <div className="text-sm opacity-90">Anh em một nhà</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                <Globe className="w-10 h-10 mx-auto mb-3" />
                <div className="text-lg font-bold mb-1">Toàn dân</div>
                <div className="text-sm opacity-90">Một lòng yêu nước</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                <Building className="w-10 h-10 mx-auto mb-3" />
                <div className="text-lg font-bold mb-1">Đoàn kết</div>
                <div className="text-sm opacity-90">Sức mạnh vô địch</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Region Details Modal */}
      <AnimatePresence>
        {selectedRegion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedRegion(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const region = regions.find((r) => r.id === selectedRegion);
                if (!region) return null;

                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {region.name}
                        </h3>
                        <p className="text-lg text-gray-600">
                          {region.description}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedRegion(null)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-500" />
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">
                          Lực lượng chính
                        </h4>
                        <div className="space-y-3">
                          {region.forces.map((force, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <force.icon className="w-6 h-6 text-[#D32F2F] mt-1 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="font-medium text-gray-800 mb-1">
                                  {force.name}
                                </div>
                                <div className="text-sm text-gray-600 leading-relaxed">
                                  {force.fact}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">
                          Đặc điểm lịch sử
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-[#D32F2F] to-[#FFD700] rounded-lg p-6 text-white">
                            <div className="text-lg font-bold mb-2">
                              Vai trò lịch sử
                            </div>
                            <div className="text-sm opacity-90 leading-relaxed">
                              {region.id === "north" &&
                                "Miền Bắc là cái nôi của cách mạng Việt Nam, nơi Chủ tịch Hồ Chí Minh khởi xướng phong trào giải phóng dân tộc."}
                              {region.id === "central" &&
                                "Miền Trung là vùng đất anh hùng, nơi sinh ra nhiều vị tướng tài ba và các phong trào yêu nước."}
                              {region.id === "south" &&
                                "Miền Nam là vùng đất trù phú, nơi hội tụ sức mạnh toàn dân trong cuộc kháng chiến chống Mỹ."}
                              {region.id === "highlands" &&
                                "Tây Nguyên là vùng đất của các dân tộc anh em, nơi gìn giữ bản sắc văn hóa đa dạng."}
                              {region.id === "mekong" &&
                                "Đồng bằng sông Cửu Long là vựa lúa của cả nước, đóng góp quan trọng cho an ninh lương thực."}
                              {region.id === "coastal" &&
                                "Duyên hải Nam Trung Bộ là vùng biển đảo quan trọng, bảo vệ chủ quyền quốc gia."}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-blue-50 rounded-lg p-4 text-center">
                              <div className="text-lg font-bold text-blue-600 mb-1">
                                {region.forces.length}
                              </div>
                              <div className="text-xs text-blue-800">
                                Nhóm lực lượng
                              </div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                              <div className="text-lg font-bold text-green-600 mb-1">
                                Đoàn kết
                              </div>
                              <div className="text-xs text-green-800">
                                Tinh thần chung
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
