import { useState, FormEvent, KeyboardEvent } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
  language?: 'bn' | 'en';
}

export const ChatInput = ({ onSendMessage, isProcessing, language = 'bn' }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage && !isProcessing) {
      onSendMessage(trimmedMessage);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent pt-4 pb-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-chat-input border border-chat-input-border rounded-xl focus-within:border-chat-input-focus transition-colors">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={language === 'bn' ? 'প্রশ্ন লিখুন...' : 'Ask a question...'}
            className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-muted-foreground"
            maxLength={500}
            autoComplete="off"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!message.trim() || isProcessing}
            className="m-1.5 h-9 w-9 bg-primary hover:bg-primary/90 disabled:bg-muted"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 text-[10px] sm:text-xs text-muted-foreground flex-nowrap whitespace-nowrap overflow-x-auto scrollbar-hide">
        <span className="whitespace-nowrap">
          {language === 'bn' ? 'তৈরি করেছেন' : 'Developed by'}{' '}
          <a
            href="https://instagram.com/shohailmahmud09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            @shohailmahmud09
          </a>
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="text-muted-foreground/70 whitespace-nowrap">
          🔒 {language === 'bn' ? 'কোনো তথ্য সংরক্ষিত হয় না' : 'No data stored'}
        </span>
      </div>
    </div>
  );
};
