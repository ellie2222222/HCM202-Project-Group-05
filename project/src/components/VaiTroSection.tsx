'use client';

import { motion } from 'framer-motion';
import { Target, Shield, Heart, Users, Handshake, Star, Globe } from 'lucide-react';

export default function VaiTroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-8"
        >
          1. Vai trò của đại đoàn kết toàn dân tộc
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-lg md:text-xl italic leading-relaxed mb-4">
              "Trong tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc không phải là sách lược hay thủ đoạn chính trị mà là chiến lược lâu dài, nhất quán của cách mạng Việt Nam."
            </p>
            <p className="text-sm opacity-90">— Hồ Chí Minh</p>
          </div>
        </motion.div>

        {/* Vai trò của đại đoàn kết toàn dân tộc */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="space-y-12">
            {/* 1. Vấn đề có ý nghĩa chiến lược */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#D32F2F]">
              <div className="flex items-start space-x-6">
                <Target className="w-16 h-16 text-[#D32F2F] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-[#D32F2F] mb-4">Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Đại đoàn kết toàn dân tộc là vấn đề sống còn, được duy trì xuyên suốt trong cả cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa. Tùy từng giai đoạn, chính sách và phương pháp tập hợp có thể điều chỉnh, nhưng chủ trương đoàn kết toàn dân tộc không bao giờ thay đổi vì nó quyết định sự thành bại của cách mạng.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Từ thực tiễn xây dựng khối đại đoàn kết toàn dân tộc, Hồ Chí Minh đã khái quát thành nhiều luận điểm mang tính chân lý về vai trò và sức mạnh của khối đại đoàn kết toàn dân tộc: "Đoàn kết là sức mạnh của chúng ta", "Đoàn kết là một lực lượng vô địch của chúng ta để khắc phục khó khăn, giành lấy thắng lợi", "Đoàn kết là sức mạnh, đoàn kết là thắng lợi", "Đoàn kết là sức mạnh, là then chốt của thành công", "Bây giờ còn một điểm rất quan trọng, cũng là điểm mẹ. Điểm này mà thực hiện tốt thì đẻ ra con cháu đều tốt: Đó là đoàn kết".
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Mục tiêu, nhiệm vụ hàng đầu */}
            <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-6">
                <Shield className="w-16 h-16 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Đại đoàn kết toàn dân tộc là một mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam</h3>
                  <p className="text-lg text-white leading-relaxed mb-4">
                    Đối với Hồ Chí Minh, đại đoàn kết không chỉ là khẩu hiệu mà là mục tiêu lâu dài của cách mạng. Vì Đảng là lực lượng lãnh đạo, đoàn kết toàn dân tộc phải được coi là nhiệm vụ hàng đầu và thấm nhuần trong mọi đường lối, chính sách, hoạt động. Ngày 3/3/1951, Người khẳng định: "Mục đích của Đảng lao động Việt Nam có thể gồm trong 8 chữ là: ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC."
                  </p>
                  <p className="text-lg text-white leading-relaxed">
                    Cách mạng là sự nghiệp của quần chúng, bởi nếu không đoàn kết thì chính họ sẽ thất bại trong cuộc đấu tranh vì lợi ích của mình. Vì vậy, Đảng phải thức tỉnh, tập hợp, hướng dẫn nhân dân, biến nhu cầu tự giác thành hành động có tổ chức, tạo sức mạnh tổng hợp cho độc lập dân tộc, tự do và hạnh phúc con người.
                  </p>
                </div>
              </div>
            </div>

            {/* Famous Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA000] text-[#D32F2F] p-8 rounded-xl max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold italic mb-4">
                  "Đoàn kết, đoàn kết, đại đoàn kết<br />
                  <span className="text-[#D32F2F]">Thành công, thành công, đại thành công"</span>
                </p>
                <p className="text-lg">— Hồ Chí Minh</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}