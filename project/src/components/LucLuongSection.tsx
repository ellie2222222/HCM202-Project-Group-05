"use client";

import { motion } from "framer-motion";
import { Factory, Wheat, Brain, Cross, Globe, Users } from "lucide-react";
import VietnamInteractiveMap from "./VietnamInteractiveMap";

export default function LucLuongSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-8"
        >
          2. Lực lượng của khối đại đoàn kết toàn dân tộc
        </motion.h2>

        {/* Vietnam Interactive Map */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-[#D32F2F] mb-8">
            Bản đồ tương tác các lực lượng theo vùng miền
          </h3>
          <VietnamInteractiveMap />
        </div>

        {/* Các nhóm lực lượng chi tiết */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h3 className="text-2xl font-bold text-center text-[#D32F2F] mb-8">
            Các lực lượng chính
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Giai cấp công nhân",
                desc: "Là lực lượng lãnh đạo cách mạng, có sứ mệnh lịch sử gắn liền với chủ nghĩa xã hội.",
                detail:
                  "Công nhân đoàn kết chặt chẽ với nông dân và trí thức để làm nòng cốt cho khối đại đoàn kết.",
              },
              {
                icon: Wheat,
                title: "Giai cấp nông dân",
                desc: "Chiếm đại đa số dân cư, có lợi ích thống nhất với công nhân trong sự nghiệp giải phóng dân tộc.",
                detail: "Là lực lượng to lớn, cơ bản của khối đoàn kết.",
              },
              {
                icon: Brain,
                title: "Đội ngũ trí thức",
                desc: "Góp phần quan trọng bằng tri thức, văn hóa, khoa học, kỹ thuật.",
                detail:
                  "Hồ Chí Minh đánh giá cao vai trò trí thức trong việc nâng cao dân trí, phát triển đất nước.",
              },
              {
                icon: Users,
                title: "Các tầng lớp lao động khác",
                desc: "Bao gồm tiểu thương, tiểu chủ, doanh nhân yêu nước...",
                detail:
                  "Họ có quyền lợi gắn bó với dân tộc, nên đều được tập hợp trong khối đoàn kết.",
              },
              {
                icon: Cross,
                title: "Các dân tộc anh em",
                desc: 'Hồ Chí Minh khẳng định: "Nước ta có nhiều dân tộc, mà dân tộc nào cũng là con cháu Lạc Hồng."',
                detail:
                  "Đại đoàn kết phải gắn liền với đoàn kết dân tộc Kinh – Thượng, không phân biệt lớn nhỏ.",
              },
              {
                icon: Globe,
                title: "Người Việt Nam ở nước ngoài",
                desc: "Dù ở xa Tổ quốc nhưng luôn là một bộ phận máu thịt của dân tộc.",
                detail:
                  'HCM nhiều lần kêu gọi kiều bào "đoàn kết, giúp đỡ đồng bào trong nước".',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 border border-red-100 hover:shadow-xl hover:-translate-y-1 space-y-4"
              >
                <div className="flex justify-center items-center w-full">
                  <item.icon className="w-16 h-16 text-[#D32F2F]" />
                </div>
                <h4 className="text-xl font-bold text-[#D32F2F] text-center">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-gray-600 text-center text-xs italic">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
