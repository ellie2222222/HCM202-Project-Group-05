"use client";

import { motion } from "framer-motion";
import { Handshake, Globe, Heart, Star } from "lucide-react";

import { Chrono } from "react-chrono";

export default function MatTranSection() {
  const timelineItems = [
    {
      title: "1930 - Hội Phản đế đồng minh",
      cardTitle: "Hội Phản đế đồng minh",
      cardSubtitle: "Tiền thân của Mặt trận dân tộc thống nhất",
      cardDetailedText:
        "Tập hợp các lực lượng yêu nước chống thực dân Pháp. Đây là bước đầu tiên trong việc xây dựng khối đại đoàn kết toàn dân tộc. Hội được thành lập với mục đích tập hợp mọi tầng lớp nhân dân yêu nước, từ công nhân, nông dân đến trí thức, tiểu tư sản, tư sản dân tộc và các tầng lớp khác có tinh thần chống thực dân Pháp. Đây là nền tảng quan trọng cho việc hình thành các mặt trận thống nhất sau này.",
      media: {
        type: "IMAGE",
        source: {
          url: "/hoi-phan-de-dong-minh.jpg",
        },
      },
    },
    {
      title: "1936 - Mặt trận Dân chủ Đông Dương",
      cardTitle: "Mặt trận Dân chủ Đông Dương",
      cardSubtitle: "Mở rộng lực lượng đấu tranh",
      cardDetailedText:
        "Tập hợp đông đảo quần chúng nhân dân trong cuộc đấu tranh đòi dân sinh, dân chủ, chống phát xít. Mặt trận này được thành lập trong bối cảnh quốc tế có nhiều thay đổi, với sự xuất hiện của chủ nghĩa phát xít đe dọa hòa bình thế giới. Mặt trận đã tập hợp được đông đảo các tầng lớp nhân dân, từ công nhân, nông dân đến trí thức, tiểu tư sản, tư sản dân tộc, thậm chí cả một bộ phận địa chủ yêu nước. Đây là bước phát triển quan trọng trong việc mở rộng khối đại đoàn kết toàn dân tộc.",
      media: {
        type: "IMAGE",
        source: {
          url: "/mat-tran-dan-chu-dong-duong.jpg",
        },
      },
    },
    {
      title: "1941 - Mặt trận Việt Minh",
      cardTitle: "Mặt trận Việt Minh",
      cardSubtitle: "Đoàn kết chống Pháp",
      cardDetailedText:
        "Lãnh đạo cuộc kháng chiến chống thực dân Pháp, chuẩn bị cho Cách mạng Tháng Tám 1945. Mặt trận Việt Minh được thành lập trong bối cảnh Chiến tranh thế giới thứ hai đang diễn ra ác liệt, thực dân Pháp và phát xít Nhật đều đang đô hộ nước ta. Mặt trận đã tập hợp được toàn thể dân tộc Việt Nam, từ Bắc chí Nam, từ miền xuôi đến miền ngược, từ các dân tộc Kinh đến các dân tộc thiểu số, tạo thành một khối đoàn kết vững chắc để tiến hành cuộc kháng chiến giành độc lập dân tộc.",
      media: {
        type: "IMAGE",
        source: {
          url: "/mat-tran-viet-minh.jpg",
        },
      },
    },
    {
      title: "1946 - Mặt trận Liên Việt",
      cardTitle: "Mặt trận Liên Việt",
      cardSubtitle: "Mở rộng lực lượng",
      cardDetailedText:
        "Tập hợp mọi tầng lớp nhân dân yêu nước, củng cố chính quyền dân chủ nhân dân. Mặt trận Liên Việt được thành lập sau Cách mạng Tháng Tám thành công, trong bối cảnh nước ta vừa giành được độc lập nhưng vẫn phải đối mặt với nhiều thách thức. Mặt trận đã tập hợp được đông đảo các tầng lớp nhân dân, từ công nhân, nông dân, trí thức đến các tầng lớp khác, tạo thành một khối đoàn kết vững chắc để bảo vệ thành quả cách mạng và xây dựng chế độ mới.",
      media: {
        type: "IMAGE",
        source: {
          url: "/mat-tran-lien-viet.jpg",
        },
      },
    },
    {
      title: "1955 - Mặt trận Tổ quốc Việt Nam",
      cardTitle: "Mặt trận Tổ quốc Việt Nam",
      cardSubtitle: "Xây dựng đất nước",
      cardDetailedText:
        "Phát triển cho đến nay, tập hợp toàn dân xây dựng chủ nghĩa xã hội. Mặt trận Tổ quốc Việt Nam được thành lập sau khi miền Bắc được giải phóng hoàn toàn, trong bối cảnh đất nước bị chia cắt thành hai miền. Mặt trận đã tập hợp được toàn thể nhân dân Việt Nam, từ miền Bắc đến miền Nam, từ các dân tộc Kinh đến các dân tộc thiểu số, tạo thành một khối đoàn kết vững chắc để xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh thống nhất đất nước.",
      media: {
        type: "IMAGE",
        source: {
          url: "/mat-tran-to-quoc-viet-nam.jpg",
        },
      },
    },
  ];

  return (
    <>
      <style jsx global>{`
        .custom-chrono-media img {
          width: 100% !important;
          height: 200px !important;
          object-fit: cover !important;
        }
        .custom-chrono-card {
          max-width: 600px !important;
        }
      `}</style>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-8"
          >
            4. Hình thức, nguyên tắc tổ chức của khối đại đoàn kết toàn dân tộc
            - Mặt trận dân tộc thống nhất
          </motion.h2>

          {/* React Chrono Timeline */}
          <div className="py-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-12">
              Lịch sử phát triển các Mặt trận
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#FFD700] mx-auto rounded-full mb-12"></div>
            <div className="max-w-6xl mx-auto">
              <Chrono
                disableToolbar={true} // Hides the toolbar
                items={timelineItems}
                mode="VERTICAL_ALTERNATING"
                theme={{
                  primary: "#D32F2F",
                  secondary: "#FFD700",
                  cardBgColor: "#ffffff",
                  cardForeColor: "#333333",
                  titleColor: "#D32F2F",
                  titleColorActive: "#D32F2F",
                }}
                cardHeight={300}
                cardWidth={600}
                hideControls={true}
                allowDynamicUpdate={true}
                scrollable={{ scrollbar: true }}
                fontSizes={{
                  cardSubtitle: "1rem",
                  cardText: "0.9rem",
                  cardTitle: "1.2rem",
                  title: "1.1rem",
                }}
                classNames={{
                  card: "custom-chrono-card",
                  cardMedia: "custom-chrono-media",
                  cardSubTitle: "custom-chrono-subtitle",
                  cardText: "custom-chrono-text",
                  cardTitle: "custom-chrono-title",
                  controls: "custom-chrono-controls",
                  title: "custom-chrono-main-title",
                }}
              />
            </div>
          </div>

          {/* Nguyên tắc tổ chức */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-12">
              Nguyên tắc tổ chức
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#FFD700] mx-auto rounded-full mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  number: "01",
                  icon: Handshake,
                  title: "Hiệp thương dân chủ",
                  desc: "Bàn bạc, thỏa thuận công khai trên cơ sở bình đẳng, tôn trọng lẫn nhau",
                },
                {
                  number: "02",
                  icon: Globe,
                  title: "Đoàn kết rộng rãi",
                  desc: "Lâu dài, bền vững, bao gồm mọi lực lượng có thể đoàn kết được",
                },
                {
                  number: "03",
                  icon: Heart,
                  title: "Lợi ích dân tộc trên hết",
                  desc: "Độc lập, tự do, thống nhất, hạnh phúc của toàn thể nhân dân",
                },
                {
                  number: "04",
                  icon: Star,
                  title: "Lãnh đạo của Đảng Cộng sản Việt Nam",
                  desc: "Đảng vừa là thành viên, vừa là lực lượng lãnh đạo chính trị",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 border border-red-100 hover:shadow-xl hover:border-[#D32F2F]/30 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D32F2F]/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>

                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-2 bg-gradient-to-br from-[#D32F2F]/10 to-[#FFD700]/10 rounded-lg">
                          <item.icon className="w-6 h-6 text-[#D32F2F]" />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-[#D32F2F] mb-4 group-hover:text-[#FF6B35] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
