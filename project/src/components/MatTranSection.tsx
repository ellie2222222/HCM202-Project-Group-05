"use client";

import { motion } from "framer-motion";
import { Handshake, Globe, Heart, Star } from "lucide-react";
import Image from "next/image";

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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#D32F2F] mb-8"
        >
          4. Hình thức, nguyên tắc tổ chức của khối đại đoàn kết toàn dân tộc
          - Mặt trận dân tộc thống nhất
        </motion.h3>

        {/* Timeline - No Framer Motion */}
        <div className="py-16">
          <h4 className="text-2xl md:text-3xl font-bold text-center text-[#D32F2F] mb-12">
            Lịch sử phát triển các Mặt trận
          </h4>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#FFD700] mx-auto rounded-full mb-12"></div>

          <div className="max-w-8xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D32F2F] to-[#FFD700] rounded-full"></div>

              {timelineItems.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot with year */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#D32F2F] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg mb-2">
                      {item.title.split(' - ')[0]}
                    </div>
                    <div className="w-6 h-6 bg-[#D32F2F] rounded-full border-4 border-white shadow-lg mx-auto"></div>
                  </div>

                  {/* Content card */}
                  <div className={`w-6/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      <div className="flex flex-col lg:flex-row h-full">
                        {/* Image section - Side by side */}
                        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                          <Image
                            src={item.media?.source?.url || '/placeholder-timeline.jpg'}
                            alt={item.cardTitle}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Content section */}
                        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                          <div className="mb-4">
                            <h5 className="text-xl font-bold text-[#D32F2F] mb-2">{item.cardTitle}</h5>
                            <p className="text-sm text-gray-600 font-medium">{item.cardSubtitle}</p>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm mb-4">
                            {item.cardDetailedText}
                          </p>
                          <div className="text-xs text-[#D32F2F] font-semibold">
                            {item.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nguyên tắc tổ chức */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h4 className="text-2xl md:text-3xl font-bold text-center text-[#D32F2F] mb-12">
            Nguyên tắc tổ chức
          </h4>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D32F2F] to-[#FFD700] mx-auto rounded-full mb-12"></div>

          {/* Mô tả tổng quan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-black leading-relaxed">
                Hồ Chí Minh đề ra một số nguyên tắc cơ bản để Mặt trận hoạt động hiệu quả,
                đảm bảo sự đoàn kết bền vững và phát huy sức mạnh toàn dân tộc.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                number: "1",
                icon: Handshake,
                title: "Hiệp thương dân chủ",
                subtitle: "Bàn bạc, thỏa thuận công khai",
                points: [
                  "Các thành viên trong Mặt trận bàn bạc, thỏa thuận công khai trên cơ sở bình đẳng, tôn trọng lẫn nhau.",
                  "Mọi quyết định quan trọng đều phải xuất phát từ ý chí và nguyện vọng của nhân dân."
                ],
                color: "from-blue-500 to-cyan-500"
              },
              {
                number: "2",
                icon: Globe,
                title: "Đoàn kết rộng rãi, lâu dài",
                subtitle: "Chiến lược lâu dài, bền vững",
                points: [
                  "Đoàn kết không phải nhất thời mà là chiến lược, lâu dài.",
                  "Đoàn kết phải rộng rãi, bao gồm mọi lực lượng có thể đoàn kết được, kể cả những người từng lầm đường nhưng biết quay về với dân tộc."
                ],
                color: "from-green-500 to-emerald-500"
              },
              {
                number: "3",
                icon: Heart,
                title: "Đoàn kết trên cơ sở lợi ích dân tộc, quyền lợi nhân dân",
                subtitle: "Lợi ích tối cao của dân tộc",
                points: [
                  "Lợi ích tối cao là độc lập, tự do, thống nhất, hạnh phúc của nhân dân.",
                  "Các thành phần, giai cấp trong Mặt trận đều bình đẳng về quyền lợi và nghĩa vụ trước dân tộc."
                ],
                color: "from-red-500 to-pink-500"
              },
              {
                number: "4",
                icon: Star,
                title: "Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam",
                subtitle: "Đảng vừa là thành viên, vừa là lực lượng lãnh đạo",
                points: [
                  "Đảng vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận.",
                  "Nguyên tắc này đảm bảo cho Mặt trận có đường lối đúng đắn, giữ được khối đoàn kết vững chắc và định hướng cách mạng."
                ],
                color: "from-yellow-500 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      <div className="flex-shrink-0 p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg">
                        <item.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                            Nguyên tắc {item.number}
                          </span>
                        </div>
                        <h6 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                          {item.title}
                        </h6>
                        <p className="text-lg text-red-600 font-semibold mb-6">
                          {item.subtitle}
                        </p>
                        <div className="space-y-4">
                          {item.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                              <p className="text-gray-700 leading-relaxed text-lg">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

