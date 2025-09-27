"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  Shield,
  Heart,
  Wrench,
} from "lucide-react";

export default function CQ7() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (value: number) => {
    if (expanded.includes(value)) {
      setExpanded(expanded.filter((index) => index !== value));
    } else {
      setExpanded([...expanded, value]);
    }
  };

  const sections = [
    {
      title: "Vấn đề hiện tại",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      items: [
        {
          main: 'Thực trạng: "Đoàn kết" đôi khi bị bóp méo thành công cụ để giữ ổn định bề ngoài, che giấu mâu thuẫn, hạn chế phản biện.',
          explanation: null,
        },
        {
          main: "Nguy cơ: Làm suy yếu sức mạnh nội tại, kìm hãm đa dạng ý kiến, gây mất lòng tin tập thể.",
          explanation: null,
        },
      ],
    },
    {
      title: "Quan điểm Hồ Chí Minh về đoàn kết",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      items: [
        {
          main: 'Đoàn kết là "một truyền thống cực kỳ quý báu của dân tộc ta".',
          explanation: [
            "Người khẳng định đây là di sản lịch sử, giúp dân tộc vượt qua bao cuộc xâm lăng, thiên tai.",
            'Truyền thống ấy không tự nhiên mà có, mà được bồi đắp bởi tinh thần "thương người như thể thương thân", "lá lành đùm lá rách".',
          ],
        },
        {
          main: "Phải dựa trên dân chủ, tự nguyện, hiệp thương; lấy lợi ích dân tộc tối cao làm nền tảng.",
          explanation: [
            'Hồ Chí Minh coi dân chủ là "chìa khóa" để tập hợp mọi tầng lớp nhân dân.',
            "Đoàn kết không thể áp đặt bằng quyền lực, mà phải được xây dựng từ sự đồng thuận tự giác, có bàn bạc, có thuyết phục.",
          ],
        },
        {
          main: "Mâu thuẫn là tất yếu → phải giải quyết bằng biện chứng, không che đậy.",
          explanation: [
            "Người nhìn nhận mâu thuẫn giữa giai cấp, dân tộc, tôn giáo, cá nhân… là hiện tượng khách quan.",
            "Thay vì trấn áp, Hồ Chí Minh nhấn mạnh cần phân tích, tìm điểm tương đồng, và biến khác biệt thành động lực để phát triển.",
          ],
        },
        {
          main: 'Mặt trận dân tộc thống nhất phải "thảo luận dân chủ, thống nhất hành động".',
          explanation: [
            "Đây là hình thức tổ chức cụ thể để thực hiện đoàn kết.",
            'Nguyên tắc vận hành: dân chủ trong thảo luận, nhưng sau đó phải thống nhất hành động vì lợi ích chung, tránh "nói một đằng, làm một nẻo".',
          ],
        },
      ],
    },
    {
      title: "Hậu quả của đoàn kết giả tạo",
      icon: AlertTriangle,
      color: "from-orange-500 to-red-500",
      items: [
        {
          main: "Mất lòng tin của nhân dân",
          explanation: [
            "Khi đoàn kết chỉ mang tính hình thức, khẩu hiệu sẽ mất giá trị.",
          ],
        },
        {
          main: "Khối đại đoàn kết bị suy yếu",
          explanation: ["Nội bộ bị chia rẽ ngầm, tổ chức mất sức mạnh."],
        },
        {
          main: "Ổn định bề mặt nhưng nguy cơ khủng hoảng tiềm ẩn",
          explanation: [
            "Không giải quyết mâu thuẫn thì mâu thuẫn sẽ tích tụ, bùng nổ lớn hơn.",
          ],
        },
      ],
    },
    {
      title: "Điều kiện xây dựng đoàn kết vững chắc (theo Hồ Chí Minh)",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      items: [
        {
          main: "Lợi ích dân tộc là điểm quy tụ",
          explanation: [
            '"Đoàn kết phải trên cơ sở lợi ích tối cao của dân tộc", đặt lợi ích chung lên trên lợi ích cục bộ.',
          ],
        },
        {
          main: "Kế thừa truyền thống nhân nghĩa",
          explanation: [
            'Hồ Chí Minh nhiều lần nhắc lại đạo lý dân gian như "lá lành đùm lá rách" để minh họa.',
            "Đây là cơ sở văn hóa – tinh thần để đoàn kết trở thành giá trị bền vững, không chỉ là khẩu hiệu chính trị.",
          ],
        },
        {
          main: "Khoan dung, độ lượng, cảm hóa cả người từng lầm đường",
          explanation: [
            'Người chủ trương không loại trừ, mà khuyến khích mở lòng, "lấy chí nhân để thay cường bạo".',
            "Nhờ đó, khối đoàn kết có thể mở rộng, thu hút cả những lực lượng từng đối lập.",
          ],
        },
        {
          main: "Niềm tin sâu sắc vào nhân dân",
          explanation: [
            'Hồ Chí Minh tin rằng nhân dân có "bản chất tốt đẹp", từ đó đặt nền móng cho đoàn kết dựa trên sự tự giác, chứ không phải cưỡng chế.',
          ],
        },
      ],
    },
    {
      title: "Cách khắc phục trong thực tiễn",
      icon: Wrench,
      color: "from-green-500 to-emerald-500",
      items: [
        {
          main: "Xây dựng liên minh công – nông – trí thức làm nòng cốt",
          explanation: [
            "Đây là lực lượng cơ bản, nền tảng của khối đại đoàn kết.",
          ],
        },
        {
          main: "Mở rộng đoàn kết ra toàn dân tộc, không phân biệt tầng lớp, tôn giáo, chính kiến",
          explanation: [
            'Hồ Chí Minh khẳng định: miễn là "yêu nước, cùng chống kẻ thù chung" thì đều có thể đứng trong hàng ngũ.',
          ],
        },
        {
          main: "Khuyến khích tranh luận, phản biện dân chủ",
          explanation: [
            "Tranh luận không phải là chia rẽ, mà là cách để tìm ra chân lý và sự thống nhất thực chất.",
          ],
        },
        {
          main: "Lãnh đạo bằng dân chủ, thuyết phục, giáo dục thay vì áp đặt",
          explanation: [
            "Đảng giữ vai trò lãnh đạo, nhưng là lãnh đạo bằng niềm tin và sự thuyết phục, không phải mệnh lệnh hành chính.",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
      {/* Background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-12"
        >
          CQ7
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#FFD700] mx-auto rounded-full"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-10 my-20"
        >
          <div className="backdrop-blur-sm bg-white/70 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Trong một số tổ chức hoặc cộng đồng, khi xuất hiện mâu thuẫn hoặc
              ý kiến trái chiều, lời kêu gọi{" "}
              <span className="font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                &quot;giữ gìn đoàn kết&quot;
              </span>
              ,{" "}
              <span className="font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                &quot;tránh chia rẽ&quot;
              </span>{" "}
              thường được sử dụng như một công cụ để hướng tới sự ổn định bề
              mặt. Tuy nhiên, không ít trường hợp, khẩu hiệu đoàn kết bị lợi
              dụng như một cách để né tránh tranh luận dân chủ, áp đặt sự im
              lặng và hạn chế phản biện nhằm bảo vệ lợi ích của một nhóm thiểu
              số có quyền lực.
            </p>
          </div>
        </motion.div>

        {sections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
            whileHover={{ scale: 1.01, y: -5 }}
            className="mb-8 group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:border-[#D32F2F]/30 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-100/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                {/* Section Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div
                    className={`p-3 bg-gradient-to-br ${section.color} rounded-xl shadow-lg`}
                  >
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#D32F2F] group-hover:text-[#FF6B35] transition-colors">
                    {section.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const itemId = sectionIndex * 100 + itemIndex;
                    const isExpanded = expanded.includes(itemId);
                    const hasExplanation =
                      item.explanation && item.explanation.length > 0;

                    return (
                      <div key={itemIndex}>
                        <div
                          className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                            hasExplanation
                              ? "cursor-pointer hover:bg-gray-50 hover:shadow-md border border-transparent hover:border-gray-200"
                              : ""
                          }`}
                          onClick={() => hasExplanation && toggleExpand(itemId)}
                        >
                          <div
                            className={`flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-r ${section.color} mt-2`}
                          ></div>
                          <div className="flex-1">
                            <p className="text-gray-700 leading-relaxed font-medium">
                              {item.main}
                            </p>
                          </div>
                          {hasExplanation && (
                            <div className="flex-shrink-0">
                              {isExpanded ? (
                                <ChevronDown className="w-5 h-5 text-[#D32F2F] transition-transform" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-[#D32F2F] transition-transform" />
                              )}
                            </div>
                          )}
                        </div>

                        {/* Explanation Section */}
                        {hasExplanation && (
                          <motion.div
                            initial={false}
                            animate={{
                              height: isExpanded ? "auto" : 0,
                              opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden ml-7"
                          >
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mt-2 border-l-4 border-[#D32F2F] space-y-3">
                              {item.explanation.map((explanation, expIndex) => (
                                <motion.div
                                  key={expIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: expIndex * 0.1,
                                  }}
                                  className="flex items-start space-x-3"
                                >
                                  <div
                                    className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${section.color} mt-2`}
                                  ></div>
                                  <p className="text-gray-600 leading-relaxed flex-1">
                                    {explanation}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
