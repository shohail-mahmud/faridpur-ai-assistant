import { Bot } from 'lucide-react';

export const TypingIndicator = () => {
  return (
    <div className="message-enter flex gap-3">
      <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="flex gap-1 items-center px-3 py-2">
        <div className="w-2 h-2 bg-typing-dot rounded-full typing-dot"></div>
        <div className="w-2 h-2 bg-typing-dot rounded-full typing-dot"></div>
        <div className="w-2 h-2 bg-typing-dot rounded-full typing-dot"></div>
      </div>
    </div>
  );
};
