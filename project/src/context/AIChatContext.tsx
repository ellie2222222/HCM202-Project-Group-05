"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";

interface Message {
  from: "user" | "AI";
  text: string;
  timestamp: Date;
}

interface AIChatContextType {
  isBubbleOpen: boolean;
  setIsBubbleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  isTyping: boolean;
  openChatAndSendPrompt: (prompt: string) => Promise<void>;
  sendMessageOnly: (inputText: string) => Promise<void>;
  handleClearMessages: () => void;
  // Input can be lifted too, but we'll keep it local in overlay for manual use
}

const AIChatContext = createContext<AIChatContextType | undefined>(undefined);

export function AIChatProvider({ children }: { children: React.ReactNode }) {
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "AI",
      text: "Xin chào, hãy vô tư đặt những câu hỏi liên quan đến chủ nghĩa xã hội khoa học và tôi sẽ giải đáp các thắc mắc của bạn",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (inputText: string) => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      from: "user",
      text: inputText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Bạn là chuyên gia về Tư tưởng Hồ Chí Minh. Trả lời bằng tiếng Việt,
                   rõ ràng, ngắn gọn, dựa trên kiến thức của Tư tưởng Hồ Chí Minh, chi tiết nếu là chương 5: 
                   Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế.
                    Nếu câu hỏi không liên quan trực tiếp thì hãy trả lời câu hỏi kèm theo nhắc 
                    nhở người dùng một cách nhẹ nhàng về chủ đề, câu hỏi từ người dùng: ${inputText}`,
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
      const reply = response.data.candidates[0].content.parts[0].text;
      setMessages((prev) => [
        ...prev,
        { from: "AI", text: reply, timestamp: new Date() },
      ]);
    } catch (error) {
      console.log("API Key exists:", !!process.env.NEXT_PUBLIC_GEMINI_KEY);
      console.log(
        "API Key length:",
        process.env.NEXT_PUBLIC_GEMINI_KEY?.length || 0
      );
      console.log("Error details:", error);

      let errorMessage = "Xin hãy thử lại sau";

      if (axios.isAxiosError(error)) {
        console.log("Status:", error.response?.status);
        console.log("Response data:", error.response?.data);

        if (error.response?.status === 503) {
          errorMessage =
            "Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.";
        } else if (error.response?.status === 401) {
          errorMessage = "Lỗi xác thực API. Vui lòng kiểm tra cấu hình.";
        } else if (error.response?.status === 429) {
          errorMessage = "Đã vượt quá giới hạn sử dụng. Vui lòng thử lại sau.";
        }
      }

      setMessages((prev) => [
        ...prev,
        { from: "AI", text: errorMessage, timestamp: new Date() },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const openChatAndSendPrompt = async (prompt: string) => {
    if (isBubbleOpen) {
      setIsBubbleOpen(false); // Open the overlay
    }
    await handleSend(prompt);
  };

  const sendMessageOnly = async (inputText: string) => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      from: "user",
      text: inputText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Bạn là chuyên gia về Tư tưởng Hồ Chí Minh. Trả lời bằng tiếng Việt,
                   rõ ràng, ngắn gọn, dựa trên kiến thức của Tư tưởng Hồ Chí Minh, chi tiết nếu là chương 5: 
                   Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế.
                    Nếu câu hỏi không liên quan trực tiếp thì hãy trả lời câu hỏi kèm theo nhắc 
                    nhở người dùng một cách nhẹ nhàng về chủ đề, câu hỏi từ người dùng: ${inputText}`,
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
      const reply = response.data.candidates[0].content.parts[0].text;
      setMessages((prev) => [
        ...prev,
        { from: "AI", text: reply, timestamp: new Date() },
      ]);
    } catch (error) {
      console.log("API Key exists:", !!process.env.NEXT_PUBLIC_GEMINI_KEY);
      console.log(
        "API Key length:",
        process.env.NEXT_PUBLIC_GEMINI_KEY?.length || 0
      );
      console.log("Error details:", error);

      let errorMessage = "Xin hãy thử lại sau";

      if (axios.isAxiosError(error)) {
        console.log("Status:", error.response?.status);
        console.log("Response data:", error.response?.data);

        if (error.response?.status === 503) {
          errorMessage =
            "Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.";
        } else if (error.response?.status === 401) {
          errorMessage = "Lỗi xác thực API. Vui lòng kiểm tra cấu hình.";
        } else if (error.response?.status === 429) {
          errorMessage = "Đã vượt quá giới hạn sử dụng. Vui lòng thử lại sau.";
        }
      }

      setMessages((prev) => [
        ...prev,
        { from: "AI", text: errorMessage, timestamp: new Date() },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearMessages = () => {
    setMessages([
      {
        from: "AI",
        text: "Xin chào, hãy vô tư đặt những câu hỏi liên quan đến chủ nghĩa xã hội khoa học và tôi sẽ giải đáp các thắc mắc của bạn",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <AIChatContext.Provider
      value={{
        isBubbleOpen,
        setIsBubbleOpen,
        messages,
        setMessages,
        isTyping,
        openChatAndSendPrompt,
        sendMessageOnly,
        handleClearMessages,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
}

export const useAIChat = () => {
  const context = useContext(AIChatContext);
  if (!context) throw new Error("useAIChat must be used within AIChatProvider");
  return context;
};
