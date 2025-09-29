"use client";

import { motion } from "framer-motion";
import { Target, Shield, Quote } from "lucide-react";

export default function VaiTroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50/30 to-orange-50/30 via-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#D32F2F] mb-8"
        >
          1. Vai trò của đại đoàn kết toàn dân tộc
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="backdrop-blur-sm bg-white/70 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              <Quote className="w-10 h-10 text-red-500 mb-6 mx-auto" />
              &ldquo;Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn&rdquo;
            </p>
            <h4 className="text-lg font-bold mb-6 text-[#D32F2F] mt-5">
              - Hồ Chí Minh -
            </h4>
          </div>
        </motion.div>

        {/* Mô tả tổng quan về đại đoàn kết */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div >
            <p className="text-xl text-black leading-relaxed font-semibold">
              Trong tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc không phải là sách lược hay thủ đoạn chính trị mà là chiến lược lâu dài, nhất quán của cách mạng Việt Nam.
            </p>
          </div>
        </motion.div>

        {/* Vai trò của đại đoàn kết toàn dân tộc */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 1. Vấn đề có ý nghĩa chiến lược */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 border border-red-100 hover:shadow-2xl hover:border-[#D32F2F]/30 space-y-6 relative overflow-hidden h-full">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D32F2F]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                <div className="flex items-start space-x-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-[#D32F2F]/10 to-[#FFD700]/10 rounded-xl">
                      <Target className="w-8 h-8 text-[#D32F2F]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <h5 className="text-xl font-bold text-[#D32F2F] group-hover:text-[#FF6B35] transition-colors">
                        Ý nghĩa chiến lược
                      </h5>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg font-medium">
                      Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-xl p-6 border-l-4 border-[#D32F2F]">
                      <p className="text-gray-600 leading-relaxed text-base">
                        Đại đoàn kết toàn dân tộc là vấn đề <strong className="text-red-600">sống còn</strong>, được duy trì xuyên suốt trong cả cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa. Tùy từng giai đoạn, chính sách và phương pháp tập hợp có thể điều chỉnh, nhưng chủ trương đoàn kết toàn dân tộc không bao giờ thay đổi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Mục tiêu, nhiệm vụ hàng đầu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 border border-red-100 hover:shadow-2xl hover:border-[#D32F2F]/30 space-y-6 relative overflow-hidden h-full">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D32F2F]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                <div className="flex items-start space-x-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-[#D32F2F]/10 to-[#FFD700]/10 rounded-xl">
                      <Shield className="w-8 h-8 text-[#D32F2F]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <h5 className="text-xl font-bold text-[#D32F2F] group-hover:text-[#FF6B35] transition-colors">
                        Mục tiêu hàng đầu
                      </h5>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg font-medium">
                      Đại đoàn kết toàn dân tộc là mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam
                    </p>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-[#D32F2F]">
                      <p className="text-gray-600 leading-relaxed text-base">
                        Đối với Hồ Chí Minh, đại đoàn kết không chỉ là khẩu hiệu mà là mục tiêu lâu dài của cách mạng. Vì Đảng là lực lượng lãnh đạo, đoàn kết toàn dân tộc phải được coi là nhiệm vụ hàng đầu và thấm nhuần trong mọi đường lối, chính sách, hoạt động.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thêm nội dung ý nghĩa thực tiễn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center">
                <h5 className="text-2xl font-bold mb-6">Ý nghĩa thực tiễn trong thời đại mới</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h6 className="text-lg font-semibold mb-2">Phát triển kinh tế</h6>
                    <p className="text-sm text-white/90">Đoàn kết tạo sức mạnh tập thể để phát triển kinh tế bền vững</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h6 className="text-lg font-semibold mb-2">Bảo vệ Tổ quốc</h6>
                    <p className="text-sm text-white/90">Đoàn kết là nền tảng vững chắc để bảo vệ chủ quyền, toàn vẹn lãnh thổ</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                    <h6 className="text-lg font-semibold mb-2">Hội nhập quốc tế</h6>
                    <p className="text-sm text-white/90">Đoàn kết giúp Việt Nam hội nhập quốc tế một cách chủ động, tích cực</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
