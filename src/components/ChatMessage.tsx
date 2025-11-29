import { GraduationCap, Bot } from 'lucide-react';
import { formatText } from '@/utils/formatText';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

export const ChatMessage = ({ content, isUser }: ChatMessageProps) => {
  if (isUser) {
    return (
      <div className="message-enter flex gap-3 justify-end">
        <div className="max-w-[80%] bg-chat-user rounded-2xl rounded-br-sm px-4 py-2.5">
          <p 
            className="text-white text-sm"
            dangerouslySetInnerHTML={{ __html: formatText(content) }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="message-enter flex gap-3">
      <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div 
        className="flex-1 max-w-[85%] text-foreground text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: formatText(content) }}
      />
    </div>
  );
};
