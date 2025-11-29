import { SCHOOL_DATA } from '@/data/schoolData';

export function getLocalResponse(query: string): string {
  const q = query.toLowerCase();
  
  // Contact
  if (/যোগাযোগ|ফোন|ইমেইল|ঠিকানা|নম্বর|contact|phone|email|address/.test(q)) {
    return `📞 **যোগাযোগ:**\n\n📍 ${SCHOOL_DATA.location.address}\n📮 পোস্টাল কোড: ${SCHOOL_DATA.location.postalCode}\n☎️ ${SCHOOL_DATA.contact.phone}\n📧 ${SCHOOL_DATA.contact.email}\n🌐 ${SCHOOL_DATA.contact.website}`;
  }
  
  // History
  if (/ইতিহাস|প্রতিষ্ঠা|কবে|কখন|প্রতিষ্ঠিত|history|founded|establish/.test(q)) {
    return `📜 **ইতিহাস:**\n\n${SCHOOL_DATA.identity.established} সালে ${SCHOOL_DATA.history.founderTitle} **${SCHOOL_DATA.history.founder}** "${SCHOOL_DATA.history.foundedAs}" নামে এই বিদ্যালয় প্রতিষ্ঠা করেন।\n\n${SCHOOL_DATA.history.governmentTakeover} সালে ${SCHOOL_DATA.history.nationalizedBy} বিদ্যালয়ের দায়িত্ব নেয় এবং নাম হয় "**ফরিদপুর জিলা স্কুল**"।\n\n👨‍🏫 প্রথম প্রধান শিক্ষক: **${SCHOOL_DATA.history.firstPrincipal}**`;
  }
  
  // Alumni
  if (/প্রাক্তন|ছাত্র|বিখ্যাত|alumni|notable|famous/.test(q)) {
    const list = SCHOOL_DATA.alumni.slice(0, 7).map(a => `• **${a.name}** — ${a.title}`).join('\n');
    return `🎓 **বিখ্যাত প্রাক্তন ছাত্র:**\n\n${list}\n\n_এবং আরও অনেকে..._`;
  }
  
  // Infrastructure
  if (/অবকাঠামো|ভবন|সুবিধা|মাঠ|গ্রন্থাগার|ল্যাব|facility|building|infrastructure/.test(q)) {
    return `🏛️ **অবকাঠামো:**\n\n📐 জমি: ${SCHOOL_DATA.location.landArea}\n🏢 ভবন: ${SCHOOL_DATA.infrastructure.buildings}\n\n**সুবিধা:**\n${SCHOOL_DATA.infrastructure.facilities.map(f => `• ${f}`).join('\n')}\n\n📚 গ্রন্থাগার: ${SCHOOL_DATA.infrastructure.library.books}\n💻 ${SCHOOL_DATA.infrastructure.labs.join(", ")}`;
  }
  
  // Uniform
  if (/পোশাক|ইউনিফর্ম|ড্রেস|শার্ট|uniform|dress/.test(q)) {
    return `👔 **ইউনিফর্ম:**\n\n• শার্ট: ${SCHOOL_DATA.uniform.shirt}\n• প্যান্ট: ${SCHOOL_DATA.uniform.pants}\n• জুতা: ${SCHOOL_DATA.uniform.shoes}\n• শীতকালে: ${SCHOOL_DATA.uniform.winter}\n\n⚠️ ${SCHOOL_DATA.uniform.mandatory}`;
  }
  
  // Academic
  if (/একাডেমিক|শ্রেণি|ক্লাস|ভর্তি|ছাত্র|শিক্ষক|শিফট|academic|class|admission|student|teacher/.test(q)) {
    return `📚 **একাডেমিক তথ্য:**\n\n📖 শ্রেণি: ${SCHOOL_DATA.academic.grades.join(", ")} শ্রেণি\n🗣️ মাধ্যম: ${SCHOOL_DATA.academic.medium}\n⏰ শিফট: ${SCHOOL_DATA.academic.shifts}\n👨‍🎓 ছাত্র: ${SCHOOL_DATA.academic.students} জন\n👨‍🏫 শিক্ষক: ${SCHOOL_DATA.academic.teachers} জন\n📋 EIIN: ${SCHOOL_DATA.identity.eiin}`;
  }
  
  // Activities
  if (/সহশিক্ষা|ক্লাব|স্কাউট|খেলা|ক্রিকেট|ফুটবল|club|sport|activity|scout/.test(q)) {
    return `🎯 **সহশিক্ষা কার্যক্রম:**\n\n**ক্লাব:**\n${SCHOOL_DATA.activities.clubs.map(c => `• ${c}`).join('\n')}\n\n**খেলাধুলা:**\n${SCHOOL_DATA.activities.sports.map(s => `• ${s}`).join('\n')}`;
  }
  
  // Website
  if (/ওয়েবসাইট|সাইট|website|site|link/.test(q)) {
    return `🌐 **অফিসিয়াল ওয়েবসাইট:**\n\n${SCHOOL_DATA.contact.website}`;
  }
  
  // EIIN
  if (/eiin|ইআইআইএন|কোড|code/.test(q)) {
    return `🏫 **স্কুল তথ্য:**\n\n📋 EIIN: ${SCHOOL_DATA.identity.eiin}\n🎓 বোর্ড: ${SCHOOL_DATA.identity.boardBn}`;
  }
  
  // Default
  return `আমি **ফরিদপুর জিলা স্কুল** সম্পর্কে সাহায্য করতে পারি:\n\n• 📜 ইতিহাস\n• 📞 যোগাযোগ\n• 🏛️ অবকাঠামো\n• 📚 একাডেমিক\n• 🎓 প্রাক্তন ছাত্র\n• 👔 ইউনিফর্ম\n• 🎯 সহশিক্ষা\n\nএই বিষয়ে প্রশ্ন করুন!`;
}
