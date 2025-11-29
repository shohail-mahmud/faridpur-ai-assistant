import { GraduationCap, Plus } from 'lucide-react';
import { Button } from './ui/button';

interface ChatHeaderProps {
  onClearChat: () => void;
}

export const ChatHeader = ({ onClearChat }: ChatHeaderProps) => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground">ফরিদপুর জিলা স্কুল</h1>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              AI সহকারী
            </p>
          </div>
        </div>
        <Button
          onClick={onClearChat}
          variant="ghost"
          size="icon"
          className="h-9 w-9"
          title="নতুন চ্যাট"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};
