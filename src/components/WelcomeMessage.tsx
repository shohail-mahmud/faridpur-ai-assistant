import { Bot, Landmark, Phone, Users, Building } from 'lucide-react';
import { Button } from './ui/button';

interface WelcomeMessageProps {
  onSuggestionClick: (suggestion: string) => void;
  language: 'bn' | 'en';
}

export const WelcomeMessage = ({ onSuggestionClick, language }: WelcomeMessageProps) => {
  const suggestions = language === 'bn' 
    ? [
        { icon: Landmark, text: 'স্কুলের ইতিহাস', color: 'text-primary' },
        { icon: Phone, text: 'যোগাযোগের তথ্য', color: 'text-blue-400' },
        { icon: Users, text: 'বিখ্যাত প্রাক্তন ছাত্র', color: 'text-purple-400' },
        { icon: Building, text: 'অবকাঠামো ও সুবিধা', color: 'text-amber-400' }
      ]
    : [
        { icon: Landmark, text: 'School History', color: 'text-primary' },
        { icon: Phone, text: 'Contact Information', color: 'text-blue-400' },
        { icon: Users, text: 'Notable Alumni', color: 'text-purple-400' },
        { icon: Building, text: 'Infrastructure & Facilities', color: 'text-amber-400' }
      ];

  return (
    <div className="message-enter">
      <div className="flex gap-3">
        <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 space-y-3">
          <div className="text-foreground text-sm leading-relaxed">
            <p className="mb-2">{language === 'bn' ? 'আসসালামু আলাইকুম! 👋' : 'Assalamu Alaikum! 👋'}</p>
            <p className="text-muted-foreground">
              {language === 'bn' 
                ? <>আমি <span className="text-primary font-medium">ফরিদপুর জিলা স্কুলের</span> AI সহকারী। ১৮৪০ সালে প্রতিষ্ঠিত এই ঐতিহ্যবাহী বিদ্যালয় সম্পর্কে আমাকে প্রশ্ন করুন।</>
                : <>I am the AI assistant for <span className="text-primary font-medium">Faridpur Zilla School</span>. Ask me about this prestigious institution established in 1840.</>
              }
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => {
              const Icon = suggestion.icon;
              return (
                <Button
                  key={index}
                  onClick={() => onSuggestionClick(suggestion.text)}
                  variant="outline"
                  size="sm"
                  className="h-auto px-3 py-1.5 text-xs font-normal bg-secondary/60 hover:bg-secondary border-border/50"
                >
                  <Icon className={`w-3 h-3 mr-1.5 ${suggestion.color}`} />
                  {suggestion.text}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
