// ফরিদপুর জিলা স্কুল - Complete School Information
export const SCHOOL_DATA = Object.freeze({
  name: Object.freeze({
    english: "Faridpur Zilla School",
    bengali: "ফরিদপুর জিলা স্কুল",
    nickname: "FZS",
    originalName: "English Seminary School",
    originalNameBn: "ইংলিশ সেমিনারি স্কুল"
  }),
  
  identity: Object.freeze({
    type: "Government boys' secondary school",
    typeBn: "সরকারি বালক মাধ্যমিক বিদ্যালয়",
    established: "১৮৪০",
    establishedEn: "1840",
    renamed: "১৮৫১",
    renamedEn: "1851",
    eiin: "108732",
    board: "Board of Intermediate and Secondary Education, Dhaka",
    boardBn: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, ঢাকা",
    colors: ["Black", "White"],
    colorsBn: ["কালো", "সাদা"],
    status: "One of the oldest schools in Bangladesh",
    statusBn: "বাংলাদেশের অন্যতম প্রাচীন বিদ্যালয়"
  }),
  
  history: Object.freeze({
    foundedAs: "ইংলিশ সেমিনারি স্কুল",
    founder: "এডগার এফ লুথার",
    founderTitle: "তৎকালীন জেলা ম্যাজিস্ট্রেট",
    founderEn: "District Magistrate Edgar Ef Luther",
    governmentTakeover: "১৮৫১",
    firstPrincipal: "এস ফ্রানকয়েস লেফেবরা",
    foundedDuring: "British colonial period",
    foundedDuringBn: "ব্রিটিশ ঔপনিবেশিক আমল",
    nationalizedBy: "ব্রিটিশ ইস্ট ইন্ডিয়া কোম্পানি সরকার",
    description: "ফরিদপুর জিলা স্কুল বাংলাদেশের ফরিদপুরে অবস্থিত একটি প্রাচীন ও ঐতিহ্যবাহী শিক্ষাপ্রতিষ্ঠান।"
  }),
  
  location: Object.freeze({
    address: "মুজিব সড়ক, ফরিদপুর",
    addressEn: "Mujib Sarak (Mujib Road), Faridpur",
    district: "ফরিদপুর জেলা",
    districtEn: "Faridpur District",
    postalCode: "7800",
    country: "বাংলাদেশ",
    countryEn: "Bangladesh",
    landArea: "১১ একর",
    landAreaEn: "11 acres"
  }),
  
  contact: Object.freeze({
    phone: "+88 0631-63073",
    email: "faridpurzillaschool@yahoo.com",
    website: "https://faridpurzillaschool.edu.bd/"
  }),
  
  academic: Object.freeze({
    grades: Object.freeze(["৪র্থ", "৫ম", "৬ষ্ঠ", "৭ম", "৮ম", "৯ম", "১০ম"]),
    gradesEn: Object.freeze(["Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"]),
    medium: "বাংলা",
    mediumEn: "Bengali",
    shifts: "প্রভাতী ও দিবা",
    shiftsSince: "১৯৯০ সাল থেকে",
    students: "১৫০০",
    studentsEn: "1500",
    teachers: "৪৮",
    teachersEn: "48",
    staff: "১০",
    staffEn: "10",
    staffDetails: "অফিস সহকারী, এমএলএস ও নৈশ প্রহরী"
  }),

  teachers: Object.freeze({
    headmaster: Object.freeze({
      name: "PRITILOTA SARKAR",
      nameBn: "প্রীতিলতা সরকার",
      designation: "Headmaster",
      designationBn: "প্রধান শিক্ষক",
      shift: "Morning",
      shiftBn: "প্রভাতী"
    }),
    seniorTeachers: Object.freeze([
      Object.freeze({ name: "Nandan Kumar Saha", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "RAJ KUMAR BISWAS", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "APURBA KUMAR DAS", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "REZAUL ISLAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MOHAMMAD TANVIRUL ISLAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "KAZI GOLAM MAWLA", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MOHAMMAD SHAMIM AKTER", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MD NURUL ISLAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD. ALAUDDIN", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MD. MOSHARROF HOSSAIN", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD FOROJ ALI", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "KAZI ABDUL HAQUE", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD. AMINUL HUQ", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MD. SOBAYET HOSSAIN", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD MASUM ALAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MOHAMMAD MASUD RANA", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "KRISHNA KANTA MAZUMDER", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "HOMAYUN KABIR", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MOHAMMAD RAFIQUR RAHMAN", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MUHAMMAD KAMAL SHEIKH", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MD. AKIDUL ISLAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MOHAMMAD SHAWKAT ALI", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "OSHIM KUMER BISWASH", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "H.M RAFIQUL ISLAM", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MUHAMMAD MOSTAFA KAMAL KHAN", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "SHAHIDUL ISLAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "SHAHIDUL ISLAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD. AHSAN HABIB", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "REZVI ALAM MIAH", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MOHAMMAD MONIRUZZAMAN", shift: "Day", shiftBn: "দিবা" })
    ]),
    assistantTeachers: Object.freeze([
      Object.freeze({ name: "SHAIKH MUHAMMAD FAZLE RABBY", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MD. MOFAZZAL HOSSAIN MOLLA", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "NURMUHAMMAD", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD. SHAH NAWEZ", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MD. MASUDUL HASAN", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "RAFIDUL HASAN", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "KHALADA AKTER", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MOHAMMAD IDRIS ALI", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "ABDUR RAHIM", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MD. MONIR BEPARY", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MAHEDI HASAN", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD. MOJIBUL HAQUE", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "MOHAMMAD SAIFUR RAHMAN", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "SABIHA HOSEN TULI", shift: "Morning", shiftBn: "প্রভাতী" }),
      Object.freeze({ name: "GOLAM RABBANI", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "MD. NAZRUL ISLAM", shift: "Day", shiftBn: "দিবা" }),
      Object.freeze({ name: "SAHIDUL ISLAM", shift: "Morning", shiftBn: "প্রভাতী" })
    ])
  }),
  
  infrastructure: Object.freeze({
    buildings: "৮টি পৃথক ভবন",
    adminBuilding: "একটি তিনতলা প্রশাসনিক ভবন",
    facilities: Object.freeze([
      "১টি ছাত্রাবাস",
      "১টি ব্যায়ামাগার",
      "১টি মসজিদ",
      "৩টি খেলার মাঠ",
      "১টি বাস্কেটবল চত্বর",
      "২টি পুকুর"
    ]),
    library: Object.freeze({
      name: "গ্রন্থাগার",
      books: "প্রায় ১০,০০০ বই",
      booksEn: "approximately 10,000 books"
    }),
    labs: Object.freeze([
      "বিজ্ঞানাগার",
      "কম্পিউটার ল্যাব (১০টি কম্পিউটার)"
    ])
  }),
  
  uniform: Object.freeze({
    shirt: "আকাশী বা নীল ফুল হাতা শার্ট",
    pants: "নেভি ব্লু প্যান্ট",
    shoes: "সাদা জুতা",
    winter: "নীল রঙের সোয়েটার",
    mandatory: "শার্টের পকেটে স্কুলের লোগো ও গলায় ফিতাযুক্ত আইডি কার্ড বাধ্যতামূলক"
  }),
  
  activities: Object.freeze({
    sports: Object.freeze(["ক্রিকেট", "ফুটবল", "ব্যাডমিন্টন", "হ্যান্ডবল"]),
    sportsEn: Object.freeze(["Cricket", "Football", "Badminton", "Handball"]),
    clubs: Object.freeze([
      "ফরিদপুর জিলা স্কুল ডিবেটিং ক্লাব (FZSDC)",
      "ফরিদপুর জিলা স্কুল ক্রিকেট দল",
      "বাংলাদেশ স্কাউট",
      "বাংলাদেশ ন্যাশনাল ক্যাডেট কোর (বিএনসিসি)",
      "বাংলাদেশ রেডক্রিসেন্ট"
    ])
  }),
  
  alumni: Object.freeze([
    Object.freeze({ name: "জসীম উদ্‌দীন", title: "পল্লীকবি, গীতিকার, ঔপন্যাসিক ও লেখক" }),
    Object.freeze({ name: "মুস্তফা মনোয়ার", title: "আন্তর্জাতিক খ্যাতিসম্পন্ন চিত্রশিল্পী, একুশে পদকপ্রাপ্ত" }),
    Object.freeze({ name: "এটিএম সামছুল হুদা", title: "বাংলাদেশের প্রধান নির্বাচন কমিশনার" }),
    Object.freeze({ name: "হাসনাত আব্দুল হাই", title: "কথাসাহিত্যিক, একুশে পদক (১৯৯৬) ও বাংলা একাডেমি পুরস্কার (১৯৭৭)" }),
    Object.freeze({ name: "হাবীবুল্লাহ সিরাজী", title: "কবি, একুশে পদক (২০১৬) ও বাংলা একাডেমি পুরস্কার (১৯৯১)" }),
    Object.freeze({ name: "আনিস উদ দৌলা", title: "ব্যবসায়ী ও উদ্যোক্তা, এসিআই গ্রুপের কর্ণধার" }),
    Object.freeze({ name: "রিয়াজ", title: "চলচ্চিত্র ও টেলিভিশন অভিনেতা" }),
    Object.freeze({ name: "মাহমুদুন্নবী", title: "বিখ্যাত কন্ঠশিল্পী" }),
    Object.freeze({ name: "রফিকুল ইসলাম", title: "বীর মুক্তিযোদ্ধা" }),
    Object.freeze({ name: "কাজী দীন মোহাম্মদ", title: "চিকিৎসক, জাতীয় স্নায়ুরোগ ইন্সটিটিউট পরিচালক" }),
    Object.freeze({ name: "সুফি মোতাহার হোসেন", title: "কবি, বাংলা একাডেমি পুরস্কারপ্রাপ্ত" }),
    Object.freeze({ name: "অম্বিকাচরণ মজুমদার", title: "রাজনীতিবিদ, আইনজীবী ও সমাজসেবী" }),
    Object.freeze({ name: "জলধর সেন", title: "লেখক, সাংবাদিক ও পরিব্রাজক" }),
    Object.freeze({ name: "আ.ন.ম বজলুর রশীদ", title: "শিক্ষাবিদ, নাট্যকার ও কবি" })
  ]),
  
  developer: Object.freeze({
    name: "@shohailmahmud09",
    platform: "Instagram",
    url: "https://instagram.com/shohailmahmud09"
  })
});
