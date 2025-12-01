import { Plus, Languages, Palette } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useTheme } from '@/hooks/useTheme';
import fzsLogo from '@/assets/fzs-logo.png';

interface ChatHeaderProps {
  onClearChat: () => void;
  language: 'bn' | 'en';
  onLanguageChange: (lang: 'bn' | 'en') => void;
}

export const ChatHeader = ({ onClearChat, language, onLanguageChange }: ChatHeaderProps) => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'dark-green' as const, label: language === 'bn' ? '🌲 সবুজ' : '🌲 Green', color: 'hsl(160 84% 39%)' },
    { value: 'dark' as const, label: language === 'bn' ? '🌑 ডার্ক' : '🌑 Dark', color: 'hsl(0 0% 10%)' },
    { value: 'light' as const, label: language === 'bn' ? '☀️ আলো' : '☀️ Light', color: 'hsl(0 0% 98%)' },
    { value: 'dark-blue' as const, label: language === 'bn' ? '🌊 নীল' : '🌊 Blue', color: 'hsl(210 100% 50%)' },
    { value: 'dark-purple' as const, label: language === 'bn' ? '🌌 বেগুনি' : '🌌 Purple', color: 'hsl(270 80% 55%)' },
    { value: 'dark-orange' as const, label: language === 'bn' ? '🔥 কমলা' : '🔥 Orange', color: 'hsl(25 95% 53%)' },
  ];

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={fzsLogo} 
            alt="FZS Logo" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-sm font-semibold text-foreground">ফরিদপুর জিলা স্কুল</h1>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              AI সহকারী
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2.5 text-xs font-medium"
                title={language === 'bn' ? 'থিম পরিবর্তন করুন' : 'Change theme'}
              >
                <Palette className="w-3.5 h-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              {themes.map((t) => (
                <DropdownMenuItem
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span 
                    className="w-3 h-3 rounded-full border border-border" 
                    style={{ backgroundColor: t.color }}
                  />
                  <span className={theme === t.value ? 'font-semibold' : ''}>
                    {t.label}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            onClick={() => onLanguageChange(language === 'bn' ? 'en' : 'bn')}
            variant="ghost"
            size="sm"
            className="h-8 px-2.5 text-xs font-medium"
            title={language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
          >
            <Languages className="w-3.5 h-3.5 mr-1" />
            {language === 'bn' ? 'EN' : 'বাং'}
          </Button>
          <Button
            onClick={onClearChat}
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            title={language === 'bn' ? 'নতুন চ্যাট' : 'New Chat'}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
