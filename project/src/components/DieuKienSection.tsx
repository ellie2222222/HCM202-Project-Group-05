'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Handshake, Bird, Shield, Heart } from 'lucide-react';

export default function DieuKienSection() {
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showQuizResult, setShowQuizResult] = useState(false);

  const quizQuestions = [
    {
      question: "Tổ chức của bạn có tôn trọng ý kiến của mọi thành viên không?",
      options: ["Luôn luôn", "Thường xuyên", "Thỉnh thoảng", "Hiếm khi", "Không bao giờ"],
      explanation: "Tôn trọng ý kiến là nền tảng của đoàn kết thực sự. Mọi thành viên đều có quyền được lắng nghe và đóng góp."
    },
    {
      question: "Các thành viên có được khuyến khích đóng góp ý kiến không?",
      options: ["Rất tích cực", "Tích cực", "Bình thường", "Ít", "Không"],
      explanation: "Khuyến khích đóng góp tạo ra môi trường sáng tạo và phát triển, giúp tổ chức phát huy sức mạnh tập thể."
    },
    {
      question: "Xung đột trong tổ chức được giải quyết như thế nào?",
      options: ["Thảo luận công khai", "Thảo luận riêng", "Bỏ qua", "Tránh né", "Không giải quyết"],
      explanation: "Giải quyết xung đột một cách minh bạch và công bằng là chìa khóa để duy trì đoàn kết lâu dài."
    },
    {
      question: "Mục tiêu chung của tổ chức có rõ ràng không?",
      options: ["Rất rõ ràng", "Rõ ràng", "Bình thường", "Mơ hồ", "Không có"],
      explanation: "Mục tiêu rõ ràng giúp mọi người cùng hướng về một điểm, tạo nên sức mạnh đoàn kết."
    },
    {
      question: "Các thành viên có tin tưởng lẫn nhau không?",
      options: ["Hoàn toàn tin tưởng", "Tin tưởng", "Bình thường", "Ít tin tưởng", "Không tin tưởng"],
      explanation: "Niềm tin là cầu nối quan trọng nhất trong mối quan hệ giữa các thành viên, tạo nên sự gắn kết bền vững."
    },
    {
      question: "Tổ chức có thường xuyên tổ chức hoạt động tập thể không?",
      options: ["Rất thường xuyên", "Thường xuyên", "Thỉnh thoảng", "Ít", "Không bao giờ"],
      explanation: "Hoạt động tập thể giúp xây dựng tình cảm và hiểu biết lẫn nhau, tăng cường tinh thần đoàn kết."
    },
    {
      question: "Lãnh đạo có lắng nghe và phản hồi ý kiến của nhân viên không?",
      options: ["Luôn luôn", "Thường xuyên", "Thỉnh thoảng", "Hiếm khi", "Không bao giờ"],
      explanation: "Lãnh đạo biết lắng nghe tạo ra môi trường dân chủ, nơi mọi người cảm thấy được tôn trọng và có giá trị."
    }
  ];

  const calculateQuizResult = () => {
    const totalScore = quizAnswers.reduce((sum, answer) => sum + (answer + 1), 0);
    const maxScore = quizQuestions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    
    if (percentage >= 85) {
      return { 
        level: "Xuất sắc", 
        message: "Tổ chức của bạn có tinh thần đoàn kết rất tốt! Đây là mô hình lý tưởng cho các tổ chức khác học hỏi.",
        recommendations: [
          "Tiếp tục duy trì và phát huy những điểm mạnh hiện tại",
          "Chia sẻ kinh nghiệm với các tổ chức khác",
          "Tổ chức các hoạt động nâng cao kỹ năng lãnh đạo"
        ]
      };
    }
    if (percentage >= 70) {
      return { 
        level: "Tốt", 
        message: "Tổ chức có nền tảng đoàn kết vững chắc, chỉ cần cải thiện một số khía cạnh nhỏ.",
        recommendations: [
          "Tăng cường giao tiếp giữa các thành viên",
          "Tổ chức thêm các hoạt động team building",
          "Cải thiện quy trình phản hồi và đóng góp ý kiến"
        ]
      };
    }
    if (percentage >= 50) {
      return { 
        level: "Trung bình", 
        message: "Tổ chức cần nỗ lực nhiều hơn để xây dựng tinh thần đoàn kết thực sự.",
        recommendations: [
          "Tổ chức các buổi họp thường xuyên để thảo luận vấn đề",
          "Xây dựng văn hóa tổ chức tích cực",
          "Đào tạo kỹ năng làm việc nhóm cho các thành viên",
          "Thiết lập cơ chế giải quyết xung đột hiệu quả"
        ]
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
        "Tìm kiếm sự hỗ trợ từ chuyên gia về phát triển tổ chức"
      ]
    };
  };

  const handleQuizSubmit = () => {
    if (quizAnswers.length === quizQuestions.length) {
      setShowQuizResult(true);
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white p-10 rounded-lg">
            <Users className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">Hồ Chí Minh</h3>
            <p className="text-xl italic leading-relaxed">
              "Dễ trăm lần không dân cũng chịu<br />
              Khó vạn lần dân liệu cũng xong."
            </p>
          </div>
        </motion.div>

        {/* 4 điều kiện chính */}
        <div className="space-y-8 mb-20">
          {[
            { 
              number: 'Một là', 
              icon: Handshake, 
              title: 'Lấy lợi ích chung làm điểm quy tụ', 
              desc: 'Lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng các lợi ích khác biệt chính đáng.',
              detail: 'Hồ Chí Minh khẳng định, nếu độc lập mà dân không có tự do, hạnh phúc thì độc lập "cũng chẳng có ý nghĩa gì". Vì vậy, đoàn kết phải xuất phát từ mục tiêu "vì nước, vì dân".'
            },
            { 
              number: 'Hai là', 
              icon: Shield, 
              title: 'Kế thừa truyền thống yêu nước', 
              desc: 'Phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc.',
              detail: 'Sức mạnh đã giúp Việt Nam vượt qua thiên tai, giặc ngoại xâm và giữ vững bản sắc, chủ quyền hàng ngàn năm.'
            },
            { 
              number: 'Ba là', 
              icon: Bird, 
              title: 'Có lòng khoan dung, độ lượng', 
              desc: 'Có lòng khoan dung, độ lượng với con người.',
              detail: '"Năm ngón tay cũng có ngón ngắn ngón dài. Nhưng ngắn dài đều hợp nhau lại nơi bàn tay... Đã là con Lạc cháu Hồng thì ai cũng có ít hay nhiều lòng ái quốc."'
            },
            { 
              number: 'Bốn là', 
              icon: Heart, 
              title: 'Có niềm tin vào nhân dân', 
              desc: 'Phải có niềm tin vào nhân dân.',
              detail: 'Theo Hồ Chí Minh, "Nước lấy dân làm gốc", dân vừa là nền tảng vừa là nguồn sức mạnh vô địch quyết định thắng lợi của cách mạng.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start space-x-6 bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white p-8 rounded-xl"
            >
              <div className="flex-shrink-0">
                <item.icon className="w-16 h-16" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-2xl font-bold text-[#FFD700]">{item.number}</span>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
                <p className="opacity-90 text-lg leading-relaxed mb-3">{item.desc}</p>
                <p className="opacity-80 text-sm italic">{item.detail}</p>
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
          <h3 className="text-2xl font-bold text-center text-[#D32F2F] mb-8">
            "Tổ chức của bạn có đoàn kết thực sự?"
          </h3>
          
            {!showQuizResult ? (
              <div className="space-y-6">
                {quizQuestions.map((question, qIndex) => (
                  <div key={qIndex} className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">{question.question}</h4>
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => (
                        <label key={oIndex} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
                          <input
                            type="radio"
                            name={`question-${qIndex}`}
                            value={oIndex}
                            onChange={(e) => {
                              const newAnswers = [...quizAnswers];
                              newAnswers[qIndex] = oIndex;
                              setQuizAnswers(newAnswers);
                            }}
                            className="text-[#D32F2F] focus:ring-[#D32F2F]"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 italic">{question.explanation}</p>
                    </div>
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
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h4 className="text-3xl font-bold text-[#D32F2F] mb-4">
                    {calculateQuizResult().level}
                  </h4>
                  <p className="text-lg text-gray-700 mb-6">
                    {calculateQuizResult().message}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white p-6 rounded-lg">
                  <h5 className="text-xl font-bold mb-4">📋 Khuyến nghị cải thiện:</h5>
                  <ul className="space-y-2">
                    {calculateQuizResult().recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-[#FFD700]">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setQuizAnswers([]);
                      setShowQuizResult(false);
                    }}
                    className="bg-[#FFD700] text-[#D32F2F] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors mr-4"
                  >
                    Làm lại
                  </button>
                  <button
                    onClick={() => {
                      // Could add sharing functionality here
                      alert("Cảm ơn bạn đã tham gia đánh giá! Hãy chia sẻ kết quả với đồng nghiệp.");
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
