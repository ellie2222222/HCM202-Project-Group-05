"use client";

import { motion } from "framer-motion";
import { Target, Shield, Quote } from "lucide-react";
import { useState } from "react";

export default function VaiTroSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const toggleExpand = (value: number) => {
    setExpandedItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  return (
    <section className="py-20 bg-gradient-to-b from-red-50/30 to-orange-50/30 via-white">
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
          <div className="backdrop-blur-sm bg-white/70 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              <Quote className="w-10 h-10 text-red-500 mb-6 mx-auto" />
              &ldquo;Trong tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc không
              phải là sách lược hay thủ đoạn chính trị mà là chiến lược lâu dài,
              nhất quán của cách mạng Việt Nam.&rdquo;
            </p>
            <h3 className="text-xl font-bold mb-6 text-[#D32F2F] mt-5">
              - Hồ Chí Minh -
            </h3>
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
            <motion.div>
              <div className="group relative bg-white rounded-3xl shadow-2xl border border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <div onClick={() => toggleExpand(1)}>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            Ý nghĩa chiến lược
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                          Đại đoàn kết toàn dân tộc là vấn đề có{" "}
                          <span className="text-red-600">
                            ý nghĩa chiến lược
                          </span>
                          , quyết định thành công của cách mạng
                        </h3>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                          <p>
                            Đại đoàn kết toàn dân tộc là vấn đề{" "}
                            <strong className="text-red-600">sống còn</strong>,
                            được duy trì xuyên suốt trong cả cách mạng dân tộc
                            dân chủ nhân dân và cách mạng xã hội chủ nghĩa. Tùy
                            từng giai đoạn, chính sách và phương pháp tập hợp có
                            thể điều chỉnh, nhưng chủ trương đoàn kết toàn dân
                            tộc không bao giờ thay đổi.
                          </p>
                        </div>
                        {expandedItems.includes(1) && (
                          <div className="p-6 bg-gradient-to-r from-gray-50 to-red-50/30 rounded-2xl border-l-4 border-red-500">
                            <p className="italic text-gray-800">
                              &ldquo;Đoàn kết là sức mạnh của chúng ta&rdquo;,
                              &ldquo;Đoàn kết là một lực lượng vô địch để khắc
                              phục khó khăn, giành lấy thắng lợi&rdquo;,
                              &ldquo;Đoàn kết là sức mạnh, là then chốt của
                              thành công&rdquo;
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Mục tiêu, nhiệm vụ hàng đầu */}
            <motion.div>
              <div className="group relative rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-orange-500"></div>

                <div className="relative p-8 md:p-12 text-white">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 p-6 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                          Mục tiêu hàng đầu
                        </span>
                      </div>
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
                        onClick={() => toggleExpand(2)}
                      >
                        Đại đoàn kết toàn dân tộc là{" "}
                        <span className="text-yellow-300">
                          mục tiêu, nhiệm vụ hàng đầu
                        </span>{" "}
                        của cách mạng Việt Nam
                      </h3>
                      <div className="space-y-6 text-lg leading-relaxed">
                        <p onClick={() => toggleExpand(2)}>
                          Đối với Hồ Chí Minh, đại đoàn kết không chỉ là khẩu
                          hiệu mà là mục tiêu lâu dài của cách mạng. Vì Đảng là
                          lực lượng lãnh đạo, đoàn kết toàn dân tộc phải được
                          coi là nhiệm vụ hàng đầu và thấm nhuần trong mọi đường
                          lối, chính sách, hoạt động.
                        </p>
                        {expandedItems.includes(2) && (
                          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            <p className="font-semibold text-yellow-200 text-xl">
                              &ldquo;Mục đích của Đảng lao động Việt Nam có thể
                              gồm trong 8 chữ là:{" "}
                              <span className="text-yellow-300 font-bold">
                                ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC
                              </span>
                              &rdquo;
                            </p>
                            <p className="text-sm text-white/80 mt-2">
                              - Ngày 3/3/1951 -
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Famous Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA000] text-[#D32F2F] p-8 rounded-xl max-w-4xl mx-auto">
                <Quote className="w-10 h-10 text-red-500 mb-6 mx-auto" />
                <p className="text-2xl md:text-3xl font-bold italic mb-4">
                  &ldquo;Đoàn kết, đoàn kết, đại đoàn kết
                  <br />
                  <span className="text-[#D32F2F]">
                    Thành công, thành công, đại thành công&rdquo;
                  </span>
                </p>
                <p className="text-lg"> - Hồ Chí Minh -</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
