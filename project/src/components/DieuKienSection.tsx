"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Handshake,
  Bird,
  Shield,
  Heart,
  ChevronDown,
  ChevronRight,
  Quote,
} from "lucide-react";
import axios from "axios";

export default function DieuKienSection() {
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [aiResult, setAiResult] = useState<any>(null);
  const [isLoadingResult, setIsLoadingResult] = useState(false);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const quizQuestions = [
    {
      question: "Tổ chức của bạn có tôn trọng ý kiến của mọi thành viên không?",
      options: [
        "Luôn luôn",
        "Thường xuyên",
        "Thỉnh thoảng",
        "Hiếm khi",
        "Không bao giờ",
      ],
      explanation:
        "Tôn trọng ý kiến là nền tảng của đoàn kết thực sự. Mọi thành viên đều có quyền được lắng nghe và đóng góp.",
    },
    {
      question: "Các thành viên có được khuyến khích đóng góp ý kiến không?",
      options: ["Rất tích cực", "Tích cực", "Bình thường", "Ít", "Không"],
      explanation:
        "Khuyến khích đóng góp tạo ra môi trường sáng tạo và phát triển, giúp tổ chức phát huy sức mạnh tập thể.",
    },
    {
      question: "Xung đột trong tổ chức được giải quyết như thế nào?",
      options: [
        "Thảo luận công khai",
        "Thảo luận riêng",
        "Bỏ qua",
        "Tránh né",
        "Không giải quyết",
      ],
      explanation:
        "Giải quyết xung đột một cách minh bạch và công bằng là chìa khóa để duy trì đoàn kết lâu dài.",
    },
    {
      question: "Mục tiêu chung của tổ chức có rõ ràng không?",
      options: ["Rất rõ ràng", "Rõ ràng", "Bình thường", "Mơ hồ", "Không có"],
      explanation:
        "Mục tiêu rõ ràng giúp mọi người cùng hướng về một điểm, tạo nên sức mạnh đoàn kết.",
    },
    {
      question: "Các thành viên có tin tưởng lẫn nhau không?",
      options: [
        "Hoàn toàn tin tưởng",
        "Tin tưởng",
        "Bình thường",
        "Ít tin tưởng",
        "Không tin tưởng",
      ],
      explanation:
        "Niềm tin là cầu nối quan trọng nhất trong mối quan hệ giữa các thành viên, tạo nên sự gắn kết bền vững.",
    },
    {
      question: "Tổ chức có thường xuyên tổ chức hoạt động tập thể không?",
      options: [
        "Rất thường xuyên",
        "Thường xuyên",
        "Thỉnh thoảng",
        "Ít",
        "Không bao giờ",
      ],
      explanation:
        "Hoạt động tập thể giúp xây dựng tình cảm và hiểu biết lẫn nhau, tăng cường tinh thần đoàn kết.",
    },
    {
      question: "Lãnh đạo có lắng nghe và phản hồi ý kiến của nhân viên không?",
      options: [
        "Luôn luôn",
        "Thường xuyên",
        "Thỉnh thoảng",
        "Hiếm khi",
        "Không bao giờ",
      ],
      explanation:
        "Lãnh đạo biết lắng nghe tạo ra môi trường dân chủ, nơi mọi người cảm thấy được tôn trọng và có giá trị.",
    },
  ];

  const calculateQuizResult = () => {
    const totalScore = quizAnswers.reduce(
      (sum, answer) => sum + (answer + 1),
      0
    );
    const maxScore = quizQuestions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    // Return synchronous fallback result
    if (percentage >= 85) {
      return {
        level: "Xuất sắc",
        message:
          "Tổ chức của bạn có tinh thần đoàn kết rất tốt! Đây là mô hình lý tưởng cho các tổ chức khác học hỏi.",
        recommendations: [
          "Tiếp tục duy trì và phát huy những điểm mạnh hiện tại",
          "Chia sẻ kinh nghiệm với các tổ chức khác",
          "Tổ chức các hoạt động nâng cao kỹ năng lãnh đạo",
        ],
      };
    }
    if (percentage >= 70) {
      return {
        level: "Tốt",
        message:
          "Tổ chức có nền tảng đoàn kết vững chắc, chỉ cần cải thiện một số khía cạnh nhỏ.",
        recommendations: [
          "Tăng cường giao tiếp giữa các thành viên",
          "Tổ chức thêm các hoạt động team building",
          "Cải thiện quy trình phản hồi và đóng góp ý kiến",
        ],
      };
    }
    if (percentage >= 50) {
      return {
        level: "Trung bình",
        message:
          "Tổ chức cần nỗ lực nhiều hơn để xây dựng tinh thần đoàn kết thực sự.",
        recommendations: [
          "Tổ chức các buổi họp thường xuyên để thảo luận vấn đề",
          "Xây dựng văn hóa tổ chức tích cực",
          "Đào tạo kỹ năng làm việc nhóm cho các thành viên",
          "Thiết lập cơ chế giải quyết xung đột hiệu quả",
        ],
      };
    }
    return {
      level: "Cần cải thiện",
      message: "Tổ chức cần thay đổi căn bản để xây dựng đoàn kết thực sự.",
      recommendations: [
        "Đánh giá lại cơ cấu tổ chức và vai trò của từng thành viên",
        "Tổ chức các buổi đào tạo về tinh thần đoàn kết",
        "Xây dựng lại niềm tin giữa các thành viên",
        "Thiết lập các quy tắc và giá trị chung rõ ràng",
        "Tìm kiếm sự hỗ trợ từ chuyên gia về phát triển tổ chức",
      ],
    };
  };

  const getOptionColor = (oIndex: number, isSelected = false) => {
    const colors = [
      {
        bg: "bg-green-100",
        border: "border-green-300",
        text: "text-green-800",
        radio: "text-green-600",
      },
      {
        bg: "bg-lime-100",
        border: "border-lime-300",
        text: "text-lime-800",
        radio: "text-lime-600",
      },
      {
        bg: "bg-yellow-100",
        border: "border-yellow-300",
        text: "text-yellow-800",
        radio: "text-yellow-600",
      },
      {
        bg: "bg-orange-100",
        border: "border-orange-300",
        text: "text-orange-800",
        radio: "text-orange-600",
      },
      {
        bg: "bg-red-100",
        border: "border-red-300",
        text: "text-red-800",
        radio: "text-red-600",
      },
    ];

    if (isSelected) {
      return {
        bg: colors[oIndex].bg,
        border: colors[oIndex].border,
        text: colors[oIndex].text,
        radio: colors[oIndex].radio,
      };
    }

    return {
      bg: "bg-white",
      border: "border-gray-200",
      text: "text-gray-700",
      radio: "text-[#D32F2F]",
    };
  };

  const handleQuizSubmit = () => {
    if (quizAnswers.length === quizQuestions.length) {
      setShowQuizResult(true);
      getAIResult();
    }
  };

  const getAIResult = async () => {
    setIsLoadingResult(true);
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Bạn là chuyên gia về Tư tưởng Hồ Chí Minh. Trả lời bằng tiếng Việt,
                   rõ ràng, ngắn gọn, dựa trên kiến thức của Tư tưởng Hồ Chí Minh, chi tiết nếu là chương 5: ${quizQuestions
                     .map((question) => question.question)
                     .join(", ")} và đáp án của bạn là: ${quizAnswers
                    .map((answer) => answer + 1)
                    .join(
                      ", "
                    )}, dựa trên các mức độ của điểm mà hãy trả về response dưới dạng json theo cấu trúc sau: {level: string, message: string, recommendations: string[]} ngoài ra không kèm theo thông tin nào khác`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": process.env.NEXT_PUBLIC_GEMINI_KEY,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        try {
          let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

          const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
          if (jsonMatch) {
            responseText = jsonMatch[1];
          }
          const parsedResult = JSON.parse(responseText);
          setAiResult(parsedResult);
        } catch (parseError) {
          console.log("[v0] Failed to parse AI result, using fallback");
          setAiResult(null);
        }
      }
    } catch (error) {
      console.log("[v0] AI request failed, using fallback result");
      setAiResult(null);
    } finally {
      setIsLoadingResult(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-8"
        >
          3. Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc
        </motion.h2>

        {/* Phần mở đầu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="backdrop-blur-sm bg-white/70 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <Quote className="w-10 h-10 text-red-500 mb-6 mx-auto" />
              <p className="text-2xl italic leading-relaxed text-gray-700">
                &quot;Dễ trăm lần không dân cũng chịu
                <br />
                Khó vạn lần dân liệu cũng xong.&quot;
              </p>
              <h3 className="text-xl font-bold mb-6 text-[#D32F2F] mt-5">
                - Hồ Chí Minh -
              </h3>
            </div>
          </div>
        </motion.div>

        {/* 4 điều kiện chính */}
        <div className="space-y-8 mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-12">
            Điều kiện
          </h3>
          {[
            {
              number: "Một là,",
              icon: Handshake,
              title: "lấy lợi ích chung làm điểm quy tụ",
              desc: "Lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng các lợi ích khác biệt chính đáng.",
              color: "from-[#D32F2F] to-[#D67600]",
              detail:
                'Hồ Chí Minh khẳng định, nếu độc lập mà dân không có tự do, hạnh phúc thì độc lập "cũng chẳng có ý nghĩa gì". Vì vậy, đoàn kết phải xuất phát từ mục tiêu "vì nước, vì dân".',
            },
            {
              number: "Hai là,",
              icon: Shield,
              title: "kế thừa truyền thống yêu nước",
              color: "from-[#D32F2F] to-[#D67600]",
              desc: "Phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc.",
              detail:
                "Sức mạnh đã giúp Việt Nam vượt qua thiên tai, giặc ngoại xâm và giữ vững bản sắc, chủ quyền hàng ngàn năm.",
            },
            {
              number: "Ba là,",
              icon: Bird,
              title: "có lòng khoan dung, độ lượng",
              desc: "Có lòng khoan dung, độ lượng với con người.",
              color: "from-[#D32F2F] to-[#D67600]",
              detail:
                '"Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều hợp nhau lại nơi bàn tay... Đã là con Lạc cháu Hồng thì ai cũng có ít hay nhiều lòng ái quốc."',
            },
            {
              number: "Bốn là,",
              icon: Heart,
              title: "có niềm tin vào nhân dân",
              desc: "Phải có niềm tin vào nhân dân.",
              color: "from-[#D32F2F] to-[#D67600]",
              detail:
                'Theo Hồ Chí Minh, "Nước lấy dân làm gốc", dân vừa là nền tảng vừa là nguồn sức mạnh vô địch quyết định thắng lợi của cách mạng.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:border-[#D32F2F]/30 relative overflow-hidden">
                {/* Background decoration - matching CQ7 style */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-100/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10">
                  <div
                    className={`flex items-start space-x-6 ${
                      item.detail ? "cursor-pointer" : ""
                    }`}
                    onClick={() => item.detail && toggleItem(index)}
                  >
                    {/* Icon container with gradient background */}
                    <div className="flex-shrink-0">
                      <div
                        className={`p-4 bg-gradient-to-br ${
                          item.color || "from-[#D32F2F] to-[#FF6B35]"
                        } rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <div className="text-white">
                          <item.icon />
                        </div>
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="flex-1">
                      {/* Header with number and title */}
                      <div className="flex items-center space-x-4 mb-4">
                        <span
                          className={`text-3xl font-bold bg-gradient-to-r ${
                            item.color || "from-[#D32F2F] to-[#D67600]"
                          } bg-clip-text text-transparent`}
                        >
                          {item.number}
                        </span>
                        <h4 className="text-2xl font-bold text-[#D32F2F] group-hover:text-[#FF6B35] transition-colors">
                          {item.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Expand/Collapse indicator */}
                    {item.detail && (
                      <div className="flex-shrink-0 pt-8">
                        <motion.div
                          animate={{
                            rotate: expandedItems.includes(index) ? 90 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="p-2 rounded-full bg-gray-100 group-hover:bg-[#D32F2F]/10 transition-colors"
                        >
                          {item.detail && expandedItems.includes(index) ? (
                            <ChevronDown className="w-6 h-6 text-[#D32F2F]" />
                          ) : (
                            <ChevronRight className="w-6 h-6 text-[#D32F2F]" />
                          )}
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Expanded detail section - matching CQ7 style */}
                  {item.detail && expandedItems.includes(index) && (
                    <motion.div
                      initial={false}
                      animate={{
                        height:
                          item.detail && expandedItems.includes(index)
                            ? "auto"
                            : 0,
                        opacity:
                          item.detail && expandedItems.includes(index) ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 ml-22">
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-[#D32F2F]">
                          <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-600 leading-relaxed italic"
                          >
                            {item.detail}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quiz tương tác */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-8 rounded-lg"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-8">
            &ldquo;Tổ chức của bạn có đoàn kết thực sự?&rdquo;
          </h3>
          <div className="space-y-6">
            {quizQuestions.map((question, qIndex) => (
              <div key={qIndex} className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">
                  {question.question}
                </h4>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => {
                    const isSelected = quizAnswers[qIndex] === oIndex;
                    const shouldShowColor = showQuizResult && isSelected;
                    const colorClasses = shouldShowColor
                      ? getOptionColor(oIndex, true)
                      : getOptionColor(oIndex, false);

                    return (
                      <label
                        key={oIndex}
                        className={`flex items-center space-x-3 cursor-pointer p-3 rounded-lg border transition-all duration-300 ${
                          shouldShowColor
                            ? `${colorClasses.bg} ${colorClasses.border} ${colorClasses.text}`
                            : "hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={oIndex}
                          checked={isSelected}
                          onChange={() => {
                            if (!showQuizResult) {
                              const newAnswers = [...quizAnswers];
                              newAnswers[qIndex] = oIndex;
                              setQuizAnswers(newAnswers);
                            }
                          }}
                          disabled={showQuizResult}
                          className={`${
                            shouldShowColor
                              ? colorClasses.radio
                              : "text-[#D32F2F]"
                          } focus:ring-[#D32F2F] ${
                            showQuizResult ? "cursor-not-allowed" : ""
                          }`}
                        />
                        <span
                          className={
                            shouldShowColor
                              ? colorClasses.text
                              : "text-gray-700"
                          }
                        >
                          {option}
                        </span>
                        {shouldShowColor && (
                          <span
                            className={`ml-auto px-2 py-1 rounded-full text-xs font-semibold ${
                              oIndex === 0
                                ? "bg-green-200 text-green-800"
                                : oIndex === 1
                                ? "bg-lime-200 text-lime-800"
                                : oIndex === 2
                                ? "bg-yellow-200 text-yellow-800"
                                : oIndex === 3
                                ? "bg-orange-200 text-orange-800"
                                : "bg-red-200 text-red-800"
                            }`}
                          >
                            {oIndex === 0
                              ? "Xuất sắc"
                              : oIndex === 1
                              ? "Tốt"
                              : oIndex === 2
                              ? "Trung bình"
                              : oIndex === 3
                              ? "Kém"
                              : "Rất kém"}
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
                {showQuizResult && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800 italic">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={handleQuizSubmit}
                disabled={quizAnswers.length !== quizQuestions.length}
                className="bg-[#D32F2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B71C1C] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Xem kết quả phân tích
              </button>
            </div>
          </div>

          {showQuizResult && (
            <div className="space-y-6">
              <div className="text-center">
                {isLoadingResult ? (
                  <p className="text-sm text-gray-500 italic">
                    Đang phân tích chi tiết với AI...
                  </p>
                ) : (
                  <>
                    <div className="text-6xl mb-4">🎯</div>
                    <h4 className="text-3xl font-bold text-[#D32F2F] mb-4">
                      {(aiResult || calculateQuizResult()).level}
                    </h4>
                    <p className="text-lg text-gray-700 mb-6">
                      {(aiResult || calculateQuizResult()).message}
                    </p>
                  </>
                )}
              </div>

              <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white p-6 rounded-lg">
                <h5 className="text-xl font-bold mb-4">
                  📋 Khuyến nghị cải thiện:
                </h5>
                <ul className="space-y-2">
                  {(aiResult || calculateQuizResult()).recommendations.map(
                    (rec: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-[#D67600]">•</span>
                        <span>{rec}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setQuizAnswers([]);
                    setShowQuizResult(false);
                    setAiResult(null); // Reset AI result
                  }}
                  className="bg-[#D32F2F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors mr-4"
                >
                  Làm lại
                </button>
                <button
                  onClick={() => {
                    // Could add sharing functionality here
                    alert(
                      "Cảm ơn bạn đã tham gia đánh giá! Hãy chia sẻ kết quả với đồng nghiệp sau khi tính năng này được hoàn thiện."
                    );
                  }}
                  className="bg-white text-[#D32F2F] border-2 border-[#D32F2F] px-6 py-3 rounded-lg font-semibold hover:bg-[#D32F2F] hover:text-white transition-colors"
                >
                  Chia sẻ kết quả
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
