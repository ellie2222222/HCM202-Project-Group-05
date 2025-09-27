'use client';

import { motion } from 'framer-motion';
import { Handshake, Globe, Heart, Star } from 'lucide-react';
import { Chrono } from 'react-chrono';

export default function MatTranSection() {

  const timelineItems = [
    {
      title: '1930 - Hội Phản đế đồng minh',
      cardTitle: 'Hội Phản đế đồng minh',
      cardSubtitle: 'Tiền thân của Mặt trận dân tộc thống nhất',
      cardDetailedText: 'Tập hợp các lực lượng yêu nước chống thực dân Pháp. Đây là bước đầu tiên trong việc xây dựng khối đại đoàn kết toàn dân tộc. Hội được thành lập với mục đích tập hợp mọi tầng lớp nhân dân yêu nước, từ công nhân, nông dân đến trí thức, tiểu tư sản, tư sản dân tộc và các tầng lớp khác có tinh thần chống thực dân Pháp. Đây là nền tảng quan trọng cho việc hình thành các mặt trận thống nhất sau này.',
      media: {
        type: 'IMAGE',
        source: {
          url: '/hoi-phan-de-dong-minh.jpg'
        }
      }
    },
    {
      title: '1936 - Mặt trận Dân chủ Đông Dương',
      cardTitle: 'Mặt trận Dân chủ Đông Dương',
      cardSubtitle: 'Mở rộng lực lượng đấu tranh',
      cardDetailedText: 'Tập hợp đông đảo quần chúng nhân dân trong cuộc đấu tranh đòi dân sinh, dân chủ, chống phát xít. Mặt trận này được thành lập trong bối cảnh quốc tế có nhiều thay đổi, với sự xuất hiện của chủ nghĩa phát xít đe dọa hòa bình thế giới. Mặt trận đã tập hợp được đông đảo các tầng lớp nhân dân, từ công nhân, nông dân đến trí thức, tiểu tư sản, tư sản dân tộc, thậm chí cả một bộ phận địa chủ yêu nước. Đây là bước phát triển quan trọng trong việc mở rộng khối đại đoàn kết toàn dân tộc.',
      media: {
        type: 'IMAGE',
        source: {
          url: '/mat-tran-dan-chu-dong-duong.jpg'
        }
      }
    },
    {
      title: '1941 - Mặt trận Việt Minh',
      cardTitle: 'Mặt trận Việt Minh',
      cardSubtitle: 'Đoàn kết chống Pháp',
      cardDetailedText: 'Lãnh đạo cuộc kháng chiến chống thực dân Pháp, chuẩn bị cho Cách mạng Tháng Tám 1945. Mặt trận Việt Minh được thành lập trong bối cảnh Chiến tranh thế giới thứ hai đang diễn ra ác liệt, thực dân Pháp và phát xít Nhật đều đang đô hộ nước ta. Mặt trận đã tập hợp được toàn thể dân tộc Việt Nam, từ Bắc chí Nam, từ miền xuôi đến miền ngược, từ các dân tộc Kinh đến các dân tộc thiểu số, tạo thành một khối đoàn kết vững chắc để tiến hành cuộc kháng chiến giành độc lập dân tộc.',
      media: {
        type: 'IMAGE',
        source: {
          url: '/mat-tran-viet-minh.jpg'
        }
      }
    },
    {
      title: '1946 - Mặt trận Liên Việt',
      cardTitle: 'Mặt trận Liên Việt',
      cardSubtitle: 'Mở rộng lực lượng',
      cardDetailedText: 'Tập hợp mọi tầng lớp nhân dân yêu nước, củng cố chính quyền dân chủ nhân dân. Mặt trận Liên Việt được thành lập sau Cách mạng Tháng Tám thành công, trong bối cảnh nước ta vừa giành được độc lập nhưng vẫn phải đối mặt với nhiều thách thức. Mặt trận đã tập hợp được đông đảo các tầng lớp nhân dân, từ công nhân, nông dân, trí thức đến các tầng lớp khác, tạo thành một khối đoàn kết vững chắc để bảo vệ thành quả cách mạng và xây dựng chế độ mới.',
      media: {
        type: 'IMAGE',
        source: {
          url: '/mat-tran-lien-viet.jpg'
        }
      }
    },
    {
      title: '1955 - Mặt trận Tổ quốc Việt Nam',
      cardTitle: 'Mặt trận Tổ quốc Việt Nam',
      cardSubtitle: 'Xây dựng đất nước',
      cardDetailedText: 'Phát triển cho đến nay, tập hợp toàn dân xây dựng chủ nghĩa xã hội. Mặt trận Tổ quốc Việt Nam được thành lập sau khi miền Bắc được giải phóng hoàn toàn, trong bối cảnh đất nước bị chia cắt thành hai miền. Mặt trận đã tập hợp được toàn thể nhân dân Việt Nam, từ miền Bắc đến miền Nam, từ các dân tộc Kinh đến các dân tộc thiểu số, tạo thành một khối đoàn kết vững chắc để xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh thống nhất đất nước.',
      media: {
        type: 'IMAGE',
        source: {
          url: '/mat-tran-to-quoc-viet-nam.jpg'
        }
      }
    }
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#D32F2F] mb-8"
        >
          4. Hình thức, nguyên tắc tổ chức của khối đại đoàn kết toàn dân tộc - Mặt trận dân tộc thống nhất
        </motion.h2>
        

        {/* React Chrono Timeline */}
        <div className="py-16">
          <h3 className="text-2xl font-bold text-center text-[#D32F2F] mb-12">Lịch sử phát triển các Mặt trận</h3>
          
          <div className="max-w-6xl mx-auto">
            <Chrono
              items={timelineItems}
              mode="VERTICAL_ALTERNATING"
              theme={{
                primary: '#D32F2F',
                secondary: '#FFD700',
                cardBgColor: '#ffffff',
                cardForeColor: '#333333',
                titleColor: '#D32F2F',
                titleColorActive: '#D32F2F',
              }}
              cardHeight={300}
              cardWidth={600}
              hideControls={true}
              allowDynamicUpdate={true}
              scrollable={{ scrollbar: true }}
              fontSizes={{
                cardSubtitle: '1rem',
                cardText: '0.9rem',
                cardTitle: '1.2rem',
                title: '1.1rem',
              }}
              classNames={{
                card: 'custom-chrono-card',
                cardMedia: 'custom-chrono-media',
                cardSubTitle: 'custom-chrono-subtitle',
                cardText: 'custom-chrono-text',
                cardTitle: 'custom-chrono-title',
                controls: 'custom-chrono-controls',
                title: 'custom-chrono-main-title',
              }}
              showToolbar={false}
            />
          </div>
        </div>

        {/* Nguyên tắc tổ chức */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-[#D32F2F] mb-12">Nguyên tắc tổ chức</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Hiệp thương dân chủ', 
                desc: 'Bàn bạc, thỏa thuận công khai trên cơ sở bình đẳng',
                icon: Handshake,
                bg: 'bg-white',
                border: 'border-2 border-[#D32F2F]'
              },
              { 
                title: 'Đoàn kết rộng rãi', 
                desc: 'Lâu dài, bao gồm mọi lực lượng có thể đoàn kết',
                icon: Globe,
                bg: 'bg-[#D32F2F]',
                border: 'border-2 border-[#D32F2F]'
              },
              { 
                title: 'Lợi ích dân tộc', 
                desc: 'Độc lập, tự do, thống nhất, hạnh phúc của nhân dân',
                icon: Heart,
                bg: 'bg-white',
                border: 'border-2 border-[#D32F2F]'
              },
              { 
                title: 'Lãnh đạo của Đảng', 
                desc: 'Đảng vừa là thành viên, vừa là lực lượng lãnh đạo',
                icon: Star,
                bg: 'bg-[#D32F2F]',
                border: 'border-2 border-[#D32F2F]'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bg} ${item.border} rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center space-y-4`}
              >
                <div className="flex justify-center">
                  <item.icon className={`w-12 h-12 ${item.bg === 'bg-white' ? 'text-[#D32F2F]' : 'text-white'}`} />
                </div>
                <h4 className={`text-lg font-bold ${item.bg === 'bg-white' ? 'text-[#D32F2F]' : 'text-white'}`}>{item.title}</h4>
                <p className={`text-sm ${item.bg === 'bg-white' ? 'text-gray-700' : 'text-white opacity-90'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}