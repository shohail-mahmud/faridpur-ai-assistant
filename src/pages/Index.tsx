import { useState, useRef, useEffect } from 'react';
import { ChatHeader } from '@/components/ChatHeader';
import { WelcomeMessage } from '@/components/WelcomeMessage';
import { ChatMessage } from '@/components/ChatMessage';
import { TypingIndicator } from '@/components/TypingIndicator';
import { ChatInput } from '@/components/ChatInput';
import { sanitize } from '@/utils/formatText';
import { SCHOOL_DATA } from '@/data/schoolData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `তুমি ফরিদপুর জিলা স্কুলের অফিসিয়াল AI সহকারী। শুধুমাত্র এই স্কুল সম্পর্কে বাংলায় স্বাভাবিক কথোপকথন করো এবং সঠিক তথ্য দাও।

📋 স্কুলের সম্পূর্ণ তথ্য:

🏫 পরিচিতি:
• নাম: ${SCHOOL_DATA.name.bengali} (${SCHOOL_DATA.name.english})
• ধরন: ${SCHOOL_DATA.identity.typeBn}
• EIIN: ${SCHOOL_DATA.identity.eiin}
• বোর্ড: ${SCHOOL_DATA.identity.boardBn}
• মর্যাদা: ${SCHOOL_DATA.identity.statusBn}
• রং: ${SCHOOL_DATA.identity.colorsBn.join(", ")}

📜 ইতিহাস:
• প্রতিষ্ঠা: ${SCHOOL_DATA.identity.established} সালে
• প্রতিষ্ঠাতা: ${SCHOOL_DATA.history.founderTitle} ${SCHOOL_DATA.history.founder}
• মূল নাম: ${SCHOOL_DATA.history.foundedAs}
• জাতীয়করণ: ${SCHOOL_DATA.history.governmentTakeover} সালে ${SCHOOL_DATA.history.nationalizedBy} কর্তৃক
• প্রথম প্রধান শিক্ষক: ${SCHOOL_DATA.history.firstPrincipal}
• বিবরণ: ${SCHOOL_DATA.history.description}
• প্রতিষ্ঠাকাল: ${SCHOOL_DATA.history.foundedDuringBn}

📍 অবস্থান:
• ঠিকানা: ${SCHOOL_DATA.location.address}
• জেলা: ${SCHOOL_DATA.location.district}
• পোস্টাল কোড: ${SCHOOL_DATA.location.postalCode}
• দেশ: ${SCHOOL_DATA.location.country}
• জমি: ${SCHOOL_DATA.location.landArea}

📞 যোগাযোগ:
• ফোন: ${SCHOOL_DATA.contact.phone}
• ইমেইল: ${SCHOOL_DATA.contact.email}
• ওয়েবসাইট: ${SCHOOL_DATA.contact.website}

📚 শিক্ষা:
• শ্রেণি: ${SCHOOL_DATA.academic.grades.join(", ")} শ্রেণি
• মাধ্যম: ${SCHOOL_DATA.academic.medium}
• শিফট: ${SCHOOL_DATA.academic.shifts} (${SCHOOL_DATA.academic.shiftsSince})
• ছাত্র: ${SCHOOL_DATA.academic.students} জন
• শিক্ষক: ${SCHOOL_DATA.academic.teachers} জন
• কর্মচারী: ${SCHOOL_DATA.academic.staff} জন (${SCHOOL_DATA.academic.staffDetails})

🏛️ অবকাঠামো:
• ভবন: ${SCHOOL_DATA.infrastructure.buildings} (${SCHOOL_DATA.infrastructure.adminBuilding}সহ)
• সুবিধাসমূহ: ${SCHOOL_DATA.infrastructure.facilities.join(", ")}
• গ্রন্থাগার: ${SCHOOL_DATA.infrastructure.library.books}
• ল্যাব: ${SCHOOL_DATA.infrastructure.labs.join(", ")}

👔 ইউনিফর্ম:
• শার্ট: ${SCHOOL_DATA.uniform.shirt}
• প্যান্ট: ${SCHOOL_DATA.uniform.pants}
• জুতা: ${SCHOOL_DATA.uniform.shoes}
• শীতকালে: ${SCHOOL_DATA.uniform.winter}
• বিশেষ নিয়ম: ${SCHOOL_DATA.uniform.mandatory}

⚽ খেলাধুলা: ${SCHOOL_DATA.activities.sports.join(", ")}

🎯 সহশিক্ষা কার্যক্রম: ${SCHOOL_DATA.activities.clubs.join(", ")}

🎓 বিখ্যাত প্রাক্তন ছাত্র:
${SCHOOL_DATA.alumni.map(a => `• ${a.name}: ${a.title}`).join("\n")}

💻 ডেভেলপার: ${SCHOOL_DATA.developer.name} (${SCHOOL_DATA.developer.platform})

⚠️ গুরুত্বপূর্ণ নির্দেশনা:

1. **স্কুল সম্পর্কে প্রশ্ন**: উপরের তথ্য থেকে সংক্ষিপ্ত ও সঠিক উত্তর দাও। প্রাসঙ্গিক emoji ব্যবহার করো।

2. **মেটা প্রশ্ন হ্যান্ডল** (তোমার সম্পর্কে প্রশ্ন):
   - "তুমি কে?" → "আমি ফরিদপুর জিলা স্কুলের AI সহকারী। আমি এই স্কুল সম্পর্কে তথ্য দিতে পারি।"
   - "তোমার তথ্য কোথা থেকে?" → "আমার তথ্য ফরিদপুর জিলা স্কুলের অফিসিয়াল তথ্য এবং সর্বজনীন সূত্র থেকে নেওয়া হয়েছে।"
   - "কে তোমাকে বানিয়েছে?" → "আমাকে ${SCHOOL_DATA.developer.name} ডেভেলপ করেছেন। আপনি তাকে Instagram-এ পাবেন: ${SCHOOL_DATA.developer.url}"
   - "তুমি কীভাবে কাজ করো?" → "আমি AI প্রযুক্তি ব্যবহার করে আপনার প্রশ্নের উত্তর দিই। আমার কাছে ফরিদপুর জিলা স্কুলের সব তথ্য সংরক্ষিত আছে।"
   - "তুমি কি মানুষ?" → "না, আমি একটি AI সহকারী। আমি ফরিদপুর জিলা স্কুল সম্পর্কে তথ্য দিতে তৈরি হয়েছি।"

3. **অন্য স্কুল/বিষয় সম্পর্কে প্রশ্ন**: ভদ্রভাবে বলো যে তুমি শুধুমাত্র ফরিদপুর জিলা স্কুল সম্পর্কে তথ্য দিতে পারো।

4. **অস্পষ্ট/অসম্পূর্ণ প্রশ্ন**: বিনয়ের সাথে স্পষ্ট করে জিজ্ঞাসা করো।

5. **ভাষা**: সবসময় বাংলায় উত্তর দাও। স্বাভাবিক ও বন্ধুত্বপূর্ণ ভাষা ব্যবহার করো।

6. **উত্তরের দৈর্ঘ্য**: সংক্ষিপ্ত ও পরিষ্কার রাখো। প্রয়োজনে বুলেট পয়েন্ট ব্যবহার করো।

7. **ইতিবাচক মনোভাব**: ধৈর্যশীল ও সহায়ক থাকো। স্কুল সম্পর্কে গর্ব ও সম্মান প্রকাশ করো।`;

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const callAI = async (message: string): Promise<string | null> => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory.slice(-4),
            { role: 'user', content: message }
          ],
          model: 'openai',
          seed: Date.now()
        }),
        signal: controller.signal
      });

      clearTimeout(timeout);
      if (!response.ok) throw new Error();

      const text = await response.text();
      return text?.length > 10 ? text : null;
    } catch {
      clearTimeout(timeout);
      return null;
    }
  };

  const handleSendMessage = async (message: string) => {
    const sanitizedMessage = sanitize(message);
    if (!sanitizedMessage || isProcessing) return;

    const userMessage: Message = { role: 'user', content: sanitizedMessage };
    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);
    setIsTyping(true);

    let response: string;
    const aiResponse = await callAI(sanitizedMessage);
    setIsTyping(false);

    if (aiResponse) {
      response = aiResponse;
    } else {
      response = 'দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না। অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন। 🙏';
    }

    const assistantMessage: Message = { role: 'assistant', content: response };
    setMessages((prev) => [...prev, assistantMessage]);

    setConversationHistory((prev) => {
      const newHistory = [...prev, userMessage, assistantMessage];
      return newHistory.slice(-8);
    });

    setIsProcessing(false);
  };

  const handleClearChat = () => {
    setMessages([]);
    setConversationHistory([]);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ChatHeader onClearChat={handleClearChat} />

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 flex flex-col">
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto py-6 space-y-4"
          style={{ height: 'calc(100vh - 160px)' }}
        >
          {messages.length === 0 ? (
            <WelcomeMessage onSuggestionClick={handleSendMessage} />
          ) : (
            messages.map((msg, idx) => (
              <ChatMessage key={idx} content={msg.content} isUser={msg.role === 'user'} />
            ))
          )}
          {isTyping && <TypingIndicator />}
        </div>

        <ChatInput onSendMessage={handleSendMessage} isProcessing={isProcessing} />
      </main>
    </div>
  );
};

export default Index;
