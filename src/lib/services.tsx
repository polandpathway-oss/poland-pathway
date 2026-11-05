import type { ReactNode } from "react";

export type ServiceItem = { title: string; text: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  /** Short name used on cards, menus and breadcrumbs */
  name: string;
  cardText: string;
  icon: ReactNode;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Highlight: string;
  lead: string;
  includesTitle: string;
  includes: ServiceItem[];
  steps: ServiceItem[];
  /** Advice for the two situations our clients are usually in */
  situations: { workPermit: string; jobSeeker: string };
  faqs: ServiceFaq[];
};

/** European countries where our non-EU clients typically live and work before moving to Poland */
export const EUROPE_COUNTRIES = [
  "Sweden",
  "Germany",
  "Finland",
  "Denmark",
  "Norway",
  "Netherlands",
  "Belgium",
  "Ireland",
  "United Kingdom",
  "France",
  "Italy",
  "Spain",
  "Portugal",
  "Austria",
  "Malta",
];

export const services: Service[] = [
  {
    slug: "university-course-selection",
    name: "University & Course Selection",
    cardText:
      "A shortlist of Polish universities and English-taught courses that fit your work background, budget and next career move.",
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
    metaTitle: "Move to Poland from Europe: Choose a University | Poland Pathway",
    metaDescription:
      "Working in Europe on a non-EU permit and want to move to Poland? Get a free shortlist of Polish universities and English-taught courses that suit your career and budget.",
    eyebrow: "Move to Poland · Study Route",
    h1: "Moving to Poland from Europe? Start with the",
    h1Highlight: "Right Course",
    lead:
      "Studying is one of the clearest legal routes for non-EU nationals in Europe to move to Poland. We match your work experience, past education and budget to English-taught programmes that keep your career moving.",
    includesTitle: "What's Included in Your Course Selection",
    includes: [
      { title: "Profile & Residence Check", text: "We review your education, work history and current permit in Europe to confirm the study route suits you." },
      { title: "Career-Matched Shortlist", text: "Courses that build on your experience — IT, business, logistics, engineering, management and more." },
      { title: "English-Taught Programmes", text: "No Polish needed to study: we shortlist bachelor's and master's courses taught fully in English." },
      { title: "Full Cost Breakdown", text: "Tuition, rent and living costs side by side, so you know your real budget before you leave your job." },
      { title: "Intake & Deadline Plan", text: "A calendar for the October and February intakes, timed around your notice period and permit dates." },
      { title: "Entry Requirement Check", text: "Diploma, transcript and English requirements confirmed for every course on your list." },
    ],
    steps: [
      { title: "Free Consultation", text: "Tell us where you live, your current permit and your goals." },
      { title: "Profile Review", text: "We check your documents and eligibility for each programme." },
      { title: "Your Shortlist", text: "Receive a written shortlist with costs, deadlines and our recommendation." },
      { title: "Decide & Apply", text: "Choose your universities and move straight into admissions." },
    ],
    situations: {
      workPermit:
        "If you're still working on a valid permit, you have time to plan. We pick an intake that lets you finish your contract, save for tuition and apply for the Polish visa while your current residence is still valid.",
      jobSeeker:
        "If you're on a job-seeker visa or your permit is ending soon, timing matters most. We prioritise universities with open deadlines and fast admission decisions so you can apply before your status runs out.",
    },
    faqs: [
      { q: "Can I move to Poland from another European country as a non-EU citizen?", a: "Yes, but you need your own Polish permission to live there — a residence permit from another EU country doesn't let you settle or work in Poland. Studying full-time is one of the most practical routes, and we help you plan it end to end." },
      { q: "Do I need to speak Polish to study in Poland?", a: "No. Polish universities offer many bachelor's and master's programmes taught entirely in English. Learning some Polish helps with daily life and jobs, but it isn't required for admission to English-taught courses." },
      { q: "Is there an age limit to study in Poland?", a: "There's no general age limit. Many of our clients are working professionals in their late 20s and 30s. What matters is a genuine study plan that makes sense with your background." },
      { q: "How much does it cost to study in Poland?", a: "Tuition for English-taught programmes starts from around €1,500 per year, and living costs are typically 40–60% lower than in Western or Northern Europe. Your shortlist shows exact figures for each course." },
    ],
  },
  {
    slug: "admission-documentation",
    name: "Admission & Documentation",
    cardText:
      "SOP guidance, apostille and translation support, and step-by-step coaching to file your own university application.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </>
    ),
    metaTitle: "Polish University Admission for Non-EU Residents | Poland Pathway",
    metaDescription:
      "Get admitted to a Polish university while living and working in Europe. We coach you through your SOP, apostilles, sworn translations and the full application.",
    eyebrow: "Admissions · Documents",
    h1: "Get Your Polish University Admission —",
    h1Highlight: "While You Still Work",
    lead:
      "We coach you step by step to prepare and file your own application: statement of purpose, apostilles, sworn translations and every upload the university asks for — all online, around your working hours.",
    includesTitle: "How We Support Your Application",
    includes: [
      { title: "Document Checklist", text: "A tailored list of everything each university needs, so nothing holds up your admission." },
      { title: "SOP That Explains Your Career", text: "Coaching to write a statement of purpose that clearly links your work experience to your study plan." },
      { title: "Apostille & Legalisation Guidance", text: "How to get diplomas from your home country apostilled or legalised while you live elsewhere in Europe." },
      { title: "Sworn Translations", text: "We point you to sworn translators and check translations meet university standards." },
      { title: "Application Review", text: "A second pair of eyes on every form before you submit, to avoid costly errors." },
      { title: "Online Interview Prep", text: "Practice for any admission interviews or entrance tests your programme requires." },
    ],
    steps: [
      { title: "Checklist", text: "Get the exact document list for each university on your shortlist." },
      { title: "Prepare", text: "Gather, apostille and translate your documents with our guidance." },
      { title: "Review & Submit", text: "We review your application, then you submit it with confidence." },
      { title: "Admission Letter", text: "Receive your acceptance letter — the key document for your visa." },
    ],
    situations: {
      workPermit:
        "Use your current stable status to get documents in order early. Requesting apostilles and transcripts from your home country can take weeks, so we start those first.",
      jobSeeker:
        "If your time in your current country is limited, we fast-track the application: we focus on universities that accept scanned documents first and send originals later.",
    },
    faqs: [
      { q: "What documents do I need to apply to a Polish university?", a: "Usually a passport, your diploma and transcripts (apostilled or legalised), sworn translations, proof of English, a CV and a statement of purpose. Requirements vary by university, so we give you an exact list." },
      { q: "I finished my studies years ago — can I still apply?", a: "Yes. A study gap is common among our clients. Your statement of purpose should explain what you've done since and why this course is the logical next step — we coach you on exactly that." },
      { q: "Do you submit the application for me?", a: "We coach you to prepare and file your own application, reviewing each step so nothing is missed. That keeps you in control of your account and communication with the university." },
      { q: "Do I need IELTS to study in Poland?", a: "Many universities accept IELTS, TOEFL or Cambridge certificates, and some accept previous study in English or their own online test. We check what each programme on your list accepts." },
    ],
  },
  {
    slug: "poland-study-visa",
    name: "Poland Study Visa from Europe",
    cardText:
      "National visa (Type D) for studies, filed from your country of residence in Europe — documents, proof of funds and interview prep.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h6" />
      </>
    ),
    metaTitle: "Poland Study Visa for Non-EU Residents in Europe | Poland Pathway",
    metaDescription:
      "On a work or job-seeker permit in Sweden, Germany or elsewhere in Europe? Get help applying for a Polish Type D study visa — documents, proof of funds and mock interviews.",
    eyebrow: "Study Visa · Type D",
    h1: "Your Polish Study Visa,",
    h1Highlight: "Filed from Europe",
    lead:
      "If you legally live in another European country, you usually apply for the Polish national visa (Type D) at the Polish consulate there — not back home. We prepare your file, proof of funds and interview so you walk in ready.",
    includesTitle: "What Our Visa Support Covers",
    includes: [
      { title: "Right Consulate & Route", text: "We confirm which Polish consulate handles your case based on where you legally reside." },
      { title: "Visa Document File", text: "Admission letter, tuition proof, insurance, accommodation and every form, organised the way consulates expect." },
      { title: "Proof of Funds Strategy", text: "How to present your salary history, savings or sponsorship clearly and convincingly." },
      { title: "Explaining Your Career Switch", text: "Interview coaching so you can clearly explain why you're moving from work to study in Poland." },
      { title: "Rejected Before? Rebuild Your File", text: "We review the reasons for a previous refusal and help you strengthen a new application." },
      { title: "Moving Checklist", text: "What to sort out before leaving your current country, and what to carry when you travel." },
    ],
    steps: [
      { title: "Status Check", text: "We review your current permit and confirm the right consulate." },
      { title: "Build Your File", text: "Prepare documents, financial proof and insurance with our checklist." },
      { title: "Interview Coaching", text: "Practise until you can explain your study plan with confidence." },
      { title: "Decision & Travel", text: "Collect your visa and plan your move to Poland." },
    ],
    situations: {
      workPermit:
        "Apply while your work permit is still valid — consulates generally expect you to hold legal residence in the country where you file. Payslips and savings records from your job can also strengthen your proof of funds.",
      jobSeeker:
        "If you're on a job-seeker visa, check how long it's valid before booking your appointment. We plan your admission and visa file so you can apply in time, and explain your options if your status is close to ending.",
    },
    faqs: [
      { q: "Can I live in Poland with a residence permit from another EU country?", a: "No. A residence permit from another Schengen country lets you visit Poland for short stays, but not live, work or study there long-term. You need a Polish visa or residence permit of your own." },
      { q: "Can I apply for a Polish study visa from Sweden, Germany or another EU country?", a: "Usually yes, if you legally reside there. Polish consulates handle visa applications from people living in their area, so you apply where you live rather than in your home country." },
      { q: "How much bank balance is required for a Poland study visa?", a: "You must show enough money to cover living costs for your stay and a return journey, on top of tuition. The required amounts are set by Polish regulations and can change, so we confirm the current figure for your case." },
      { q: "Can I work in Poland on a study visa?", a: "Full-time students holding a Polish national visa for studies or a temporary residence card for studies can generally work without a separate work permit — useful for keeping an income while you study." },
      { q: "How long does the Polish study visa take?", a: "Most of our clients receive their visa within 4–8 weeks of starting the process. Consulate decision times vary, so we recommend applying 2–3 months before your semester begins." },
    ],
  },
  {
    slug: "accommodation-arrival",
    name: "Accommodation & Moving to Poland",
    cardText: "Dormitory or private housing options, airport pickup and a city orientation on day one.",
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
    metaTitle: "Moving to Poland from Europe: Housing & Arrival | Poland Pathway",
    metaDescription:
      "Relocating to Poland from elsewhere in Europe? We line up student dorms or private flats in Warsaw, Kraków and more, plus airport pickup and help in your first week.",
    eyebrow: "Housing · Relocation",
    h1: "Relocate to Poland Smoothly —",
    h1Highlight: "Home Ready Before You Land",
    lead:
      "Moving countries again is a big step. We line up safe, affordable housing near your campus, help you plan the move from your current country and meet you at the airport on day one.",
    includesTitle: "Your Relocation Package",
    includes: [
      { title: "Dorms & Private Flats", text: "University halls or vetted shared flats and studios in Warsaw, Kraków, Wrocław, Poznań, Gdańsk and more." },
      { title: "Rental Contract Check", text: "We review your contract so deposits, bills and notice periods are clear." },
      { title: "Accommodation Proof for Your Visa", text: "Paperwork you can use in your visa file and later in your residence card application." },
      { title: "Move-Out Checklist", text: "What to close or transfer in your current country — lease, bank, deregistration — before you leave." },
      { title: "Airport Pickup", text: "Someone waiting when you land, so your first hours in Poland are stress-free." },
      { title: "First-Week Orientation", text: "PESEL, bank account, SIM card, public transport and the essentials of daily life." },
    ],
    steps: [
      { title: "Housing Preferences", text: "Tell us your budget, city and whether you prefer a dorm or flat." },
      { title: "Options & Booking", text: "Receive shortlisted options and secure the one you like." },
      { title: "Plan the Move", text: "Share your travel dates and we arrange your pickup." },
      { title: "Welcome to Poland", text: "Move in and get a guided start in your new city." },
    ],
    situations: {
      workPermit:
        "Plan your move-in around your notice period so you don't pay rent in two countries for long. We time your housing to start just before your semester.",
      jobSeeker:
        "If you need to move quickly, we look for flexible options — dorm rooms or short-term rentals you can secure fast and swap later for a longer lease.",
    },
    faqs: [
      { q: "How much does accommodation cost in Poland?", a: "University dormitories are usually the cheapest option, while private rooms and studios cost more — especially in Warsaw and Kraków. Prices vary by city and season, so we share current options within your budget." },
      { q: "Which Polish city is best to move to?", a: "Warsaw has the most jobs and international companies, Kraków and Wrocław have big tech and business-services sectors, and Poznań and Gdańsk offer a lower cost of living. We help you choose based on your course and career plans." },
      { q: "Can I drive or take my belongings to Poland from another European country?", a: "Many clients move by car, ferry or train from elsewhere in Europe, which makes bringing belongings easier than flying from home. We help you plan the move and your first address in Poland." },
      { q: "Do you provide airport pickup?", a: "Yes. Once you share your travel details, we arrange pickup and help you get to your accommodation." },
    ],
  },
  {
    slug: "residence-permit-work-rights",
    name: "Residence Card & Work Rights",
    cardText:
      "Temporary residence card (TRC) filing, working while you study and post-study career routes in Poland.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    metaTitle: "Poland Residence Card (TRC) & Work Rights | Poland Pathway",
    metaDescription:
      "Get your Polish temporary residence card (karta pobytu) for studies, work while you study, and plan your stay after graduation. Guidance for non-EU nationals moving from Europe.",
    eyebrow: "Residence Card · Work",
    h1: "Stay, Work & Build Your Future in Poland —",
    h1Highlight: "Residence Card Support",
    lead:
      "Once you've arrived, we help you file your temporary residence card (TRC), understand your right to work while studying and plan your next steps after graduation — from job search to a work-based permit.",
    includesTitle: "How We Help You Stay in Poland",
    includes: [
      { title: "TRC Application", text: "Guidance on preparing and filing your temporary residence card for studies before your visa expires." },
      { title: "Office Appointment Prep", text: "What to bring for your fingerprint and document appointment at the voivodeship office." },
      { title: "Working While You Study", text: "Your rights as a full-time student worker and how to find jobs that fit your schedule." },
      { title: "Permit Renewals", text: "Reminders and help when your card needs extending for the next year of study." },
      { title: "Job Search After Graduation", text: "Options to stay after your degree, including a residence permit to look for work in Poland." },
      { title: "Switching to a Work Permit", text: "How to move to a work-based permit or EU Blue Card once you have a job offer." },
    ],
    steps: [
      { title: "Timeline Check", text: "We calculate when to file based on your visa and study dates." },
      { title: "Prepare Documents", text: "University certificate, insurance, address and funds — all in order." },
      { title: "File & Attend", text: "Submit your application and attend your office appointment." },
      { title: "Receive Your Card", text: "Collect your residence card and plan your next steps." },
    ],
    situations: {
      workPermit:
        "Used to working in Europe? With a Polish study visa or residence card as a full-time student, you can generally keep earning without a separate work permit — we help you understand the rules from day one.",
      jobSeeker:
        "If you came to Europe to find work, Poland's post-study job-search permit and work-permit routes give you a second, stronger chance — with a Polish degree on your CV.",
    },
    faqs: [
      { q: "What is a temporary residence card (TRC) in Poland?", a: "The karta pobytu is a residence card that lets non-EU nationals stay in Poland beyond their visa. For students, it usually covers the length of the programme and lets you travel within the Schengen area." },
      { q: "When should I apply for my residence card?", a: "You must apply while your current visa is still valid. Because processing can take time, we recommend applying well before your visa expires." },
      { q: "Can I work full-time in Poland while studying?", a: "Full-time students with a valid Polish study visa or residence card can generally work without a separate work permit. Your studies still need to come first, and we explain the rules that apply to your status." },
      { q: "Can I stay in Poland after graduation?", a: "Graduates of Polish universities can apply for a temporary residence permit to look for work, and can later move to a work-based permit or an EU Blue Card if they find a qualifying job." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
