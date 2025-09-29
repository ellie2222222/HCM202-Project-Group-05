"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Users,
  Link,
  CheckCircle,
  Smartphone,
  Monitor,
  MessageCircle,
} from "lucide-react";

export default function PhuongThucSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#D32F2F] mb-12"
        >
          5. Phương thức xây dựng khối đại đoàn kết dân tộc
        </motion.h3>

        {/* Phương thức xây dựng */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h4 className="text-3xl font-bold text-[#D32F2F] mb-4">
              Phương thức xây dựng
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#FFD700] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Những phương pháp cơ bản để xây dựng và củng cố khối đại đoàn kết
              toàn dân tộc
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                number: "Một là",
                icon: Megaphone,
                title: "Làm tốt công tác vận động quần chúng",
                desc: "Hồ Chí Minh coi đoàn kết là mục tiêu, nhiệm vụ hàng đầu của Đảng, muốn vậy phải vận động nhân dân để thu hút, giáo dục, giúp họ hiểu rõ quyền lợi và nghĩa vụ với Tổ quốc.",
                detail:
                  'Người căn dặn: "cần phải chịu khó tìm đủ cách giải thích cho họ hiểu rằng: những việc đó là vì ích lợi của họ mà phải làm." Mọi phương pháp tiếp cận phải xuất phát từ tâm tư, nguyện vọng, phong tục, tập quán và đặc thù từng địa phương.',
              },
              {
                number: "Hai là",
                icon: Users,
                title: "Thành lập các đoàn thể, tổ chức quần chúng phù hợp",
                desc: "Với từng đối tượng như Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ…",
                detail:
                  "Các tổ chức này có nhiệm vụ tập hợp, giáo dục, động viên nhân dân tham gia cách mạng, bảo vệ quyền lợi của mình và ngày càng trở thành hạt nhân vững chắc của khối đại đoàn kết.",
              },
              {
                number: "Ba là",
                icon: Link,
                title:
                  "Tập hợp các đoàn thể, tổ chức quần chúng trong Mặt trận dân tộc thống nhất",
                desc: "Theo Hồ Chí Minh, Mặt trận càng rộng rãi, chặt chẽ thì đại đoàn kết càng bền vững.",
                detail:
                  'Người khẳng định: "Những đoàn thể ấy là tổ chức của dân, phấn đấu cho dân, bênh vực quyền của dân, liên lạc mật thiết nhân dân với Chính phủ." Vì vậy, Mặt trận dân tộc thống nhất cùng các đoàn thể có vai trò to lớn trong việc tập hợp mọi giai cấp, dân tộc, tôn giáo, đảng phái vào sự nghiệp chung trên tinh thần "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 border border-red-100 hover:shadow-2xl hover:border-[#D32F2F]/30 space-y-6 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D32F2F]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="relative"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-[#D32F2F]/10 to-[#FFD700]/10 rounded-xl">
                          <item.icon className="w-8 h-8 text-[#D32F2F]" />
                        </div>
                        <h5 className="text-xl font-bold text-[#D32F2F] group-hover:text-[#FF6B35] transition-colors">
                          {item.number} - {item.title}
                        </h5>
                      </div>
                      <p className="text-gray-700 mb-6 leading-relaxed text-lg font-medium">
                        {item.desc}
                      </p>
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-[#D32F2F]">
                        <p className="text-gray-600 leading-relaxed text-base">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Phương thức hiện đại */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h4 className="text-3xl font-bold text-[#D32F2F] mb-4">
              Phương thức hiện đại
            </h4>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#FFD700] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Ứng dụng công nghệ hiện đại để tăng cường hiệu quả xây dựng khối
              đại đoàn kết
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Kết nối qua mạng xã hội",
                desc: "Sử dụng công nghệ để kết nối mọi người",
                features: [
                  "Facebook, Zalo, TikTok",
                  "Truyền thông đa phương tiện",
                  "Tương tác trực tiếp",
                ],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Monitor,
                title: "Họp trực tuyến minh bạch",
                desc: "Tổ chức họp trực tuyến công khai, minh bạch",
                features: [
                  "Zoom, Teams, Google Meet",
                  "Ghi hình và lưu trữ",
                  "Bình đẳng tham gia",
                ],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: MessageCircle,
                title: "Cơ chế phản biện công khai",
                desc: "Tạo không gian thảo luận, phản biện",
                features: [
                  "Diễn đàn trực tuyến",
                  "Bình luận công khai",
                  "Phản hồi tức thời",
                ],
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:border-[#D32F2F]/30 text-center space-y-6 relative overflow-hidden">
                  {/* Background decoration */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-10 rounded-full -translate-y-12 translate-x-12`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl mb-6 shadow-lg`}
                    >
                      <item.icon className="w-12 h-12 text-white" />
                    </div>

                    <h5 className="text-xl font-bold text-[#D32F2F] mb-4 group-hover:text-[#FF6B35] transition-colors">
                      {item.title}
                    </h5>

                    <p className="text-gray-700 mb-6 text-lg font-medium">
                      {item.desc}
                    </p>

                    <div className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center justify-center space-x-2 text-sm text-gray-600"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}
                          ></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
