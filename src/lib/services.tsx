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
  europe: { eu: string; nonEu: string };
  faqs: ServiceFaq[];
};

export const EUROPE_COUNTRIES = [
  "United Kingdom",
  "Ireland",
  "Germany",
  "Netherlands",
  "Belgium",
  "France",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Italy",
  "Spain",
  "Portugal",
  "Austria",
  "Switzerland",
];

export const services: Service[] = [
  {
    slug: "university-selection",
    name: "University & Course Selection",
    cardText:
      "Personalized shortlists from 40+ ranked Polish universities matched to your grades, budget and career goals.",
    icon: (
      <>
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
      </>
    ),
    metaTitle: "Study in Poland: University & Course Selection | Poland Pathway",
    metaDescription:
      "Living in Europe and want to study in Poland? Get a free, personalised shortlist of Polish universities and English-taught courses matched to your grades and budget.",
    eyebrow: "Study in Poland · Course Matching",
    h1: "Choose the Right University in Poland —",
    h1Highlight: "Matched to You",
    lead:
      "Whether you live in the UK, Germany, Sweden or anywhere else in Europe, we compare Polish universities, English-taught programmes, tuition and city costs so you apply only where you fit best.",
    includesTitle: "What's Included in Your Course Selection",
    includes: [
      { title: "Profile Evaluation", text: "We review your grades, qualifications and goals to see which programmes you can realistically get into." },
      { title: "Personalised Shortlist", text: "A ranked list of universities and English-taught courses in Warsaw, Kraków, Wrocław, Poznań, Gdańsk and more." },
      { title: "Cost Comparison", text: "Tuition, rent and living costs side by side, so you know your full budget before you apply." },
      { title: "Intake & Deadline Plan", text: "A clear calendar of application windows for the October and February intakes." },
      { title: "Career-Focused Advice", text: "Course choices that line up with the jobs you want in Poland, the EU or back home." },
      { title: "Entry Requirement Check", text: "We confirm language, diploma and subject requirements for every course on your list." },
    ],
    steps: [
      { title: "Free Consultation", text: "Tell us your background, budget and goals in a short online call." },
      { title: "Profile Review", text: "We assess your documents and eligibility for each programme." },
      { title: "Your Shortlist", text: "Receive a written shortlist with costs, deadlines and our recommendation." },
      { title: "Decide & Apply", text: "Pick your universities and move straight into the admission stage." },
    ],
    europe: {
      eu: "EU/EEA and Swiss citizens study in Poland on the same terms as Polish students — Polish-taught courses at public universities are usually tuition-free, and English-taught courses often have lower fees for EU students. We factor this into your shortlist.",
      nonEu: "Living in Europe on a residence permit (for example in the UK, Germany or Sweden)? We check which universities accept your qualifications and plan your timeline around the student visa you'll need.",
    },
    faqs: [
      { q: "Can I study in Poland in English?", a: "Yes. Polish universities offer hundreds of English-taught bachelor's and master's programmes, including medicine, engineering, business and computer science. We only shortlist courses taught in a language you're comfortable with." },
      { q: "How much does it cost to study in Poland?", a: "Tuition for English-taught programmes starts from around €1,500 per year, and living costs are typically 40–60% lower than in Western Europe. Medicine and some private universities cost more — your shortlist shows the exact figures." },
      { q: "Is studying in Poland worth it for students from Europe?", a: "For many students, yes: degrees follow the Bologna process and are recognised across the EU, costs are lower than in the UK or Western Europe, and Poland's cities are safe and well connected to the rest of Europe." },
      { q: "When should I start choosing a university?", a: "Ideally 8–10 months before your intended start date. Most programmes start in October, with application windows opening in spring; some offer a February intake." },
    ],
  },
  {
    slug: "admission-documentation",
    name: "Admission & Documentation",
    cardText:
      "SOP guidance, document attestation, translation and complete application filing — error-free and on time.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 15l2 2 4-4" />
      </>
    ),
    metaTitle: "Polish University Admission & Document Help | Poland Pathway",
    metaDescription:
      "Get admitted to a Polish university from anywhere in Europe. We coach you through your SOP, apostille, sworn translations and the full application — step by step.",
    eyebrow: "Admissions · Documents",
    h1: "Get Admitted to a Polish University —",
    h1Highlight: "Without the Paperwork Stress",
    lead:
      "We coach you step by step to prepare and file your own application: statement of purpose, apostilles, sworn translations and every upload the university asks for.",
    includesTitle: "How We Support Your Application",
    includes: [
      { title: "Document Checklist", text: "A tailored list of everything each university needs — no guessing, no last-minute surprises." },
      { title: "SOP & CV Coaching", text: "Feedback on your statement of purpose and CV until they're clear, honest and convincing." },
      { title: "Apostille & Legalisation Guidance", text: "We explain how to get your diplomas apostilled in your country of study, including across EU member states." },
      { title: "Sworn Translations", text: "We point you to sworn translators and check translations meet university standards." },
      { title: "Application Review", text: "A second pair of eyes on every form before you submit, to avoid costly errors." },
      { title: "Entrance Exam & Interview Prep", text: "Practice for any entrance tests or online interviews your programme requires." },
    ],
    steps: [
      { title: "Checklist", text: "Get the exact document list for each university on your shortlist." },
      { title: "Prepare", text: "Gather, apostille and translate your documents with our guidance." },
      { title: "Review & Submit", text: "We review your application, then you submit it with confidence." },
      { title: "Admission Letter", text: "Receive your acceptance letter — the key document for the next step." },
    ],
    europe: {
      eu: "If your diploma was issued in an EU country, it is generally recognised in Poland, and an apostille is usually all you need. We confirm what your chosen university accepts.",
      nonEu: "If your diploma is from outside the EU but you now live in Europe, you may need an apostille or legalisation from the issuing country and sometimes recognition (nostrification). We map out the route before deadlines arrive.",
    },
    faqs: [
      { q: "What documents do I need to apply to a Polish university?", a: "Typically a passport, your secondary or bachelor's diploma with transcripts (apostilled or legalised), sworn translations, proof of English or Polish, a CV and statement of purpose, and a photo. Requirements vary by university, so we give you an exact list." },
      { q: "Do you submit the application for me?", a: "We coach you to prepare and file your own application, reviewing each step so nothing is missed. That keeps you in control of your account and communication with the university." },
      { q: "Do I need IELTS to study in Poland?", a: "Many universities accept IELTS, TOEFL or Cambridge certificates, and some accept previous study in English or their own online test. We check what each programme on your list accepts." },
      { q: "How long does admission take?", a: "Most universities reply within 2–6 weeks of a complete application. Applying early gives you more time for the visa or registration stage." },
    ],
  },
  {
    slug: "poland-student-visa",
    name: "Visa Filing & Interview Prep",
    cardText:
      "National visa (Type D) preparation, financial proof strategy and mock interviews with visa officers' insights.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 9h10M7 13h6" />
      </>
    ),
    metaTitle: "Poland Student Visa (Type D) Help in Europe | Poland Pathway",
    metaDescription:
      "Applying for a Polish national student visa (Type D) from the UK or elsewhere in Europe? Get help with documents, proof of funds and mock interviews. 98% visa success rate.",
    eyebrow: "Student Visa · Type D",
    h1: "Your Poland Student Visa,",
    h1Highlight: "Prepared Properly",
    lead:
      "Non-EU students living in Europe apply at the Polish consulate for their country of residence. We prepare your national visa (Type D) file, proof of funds and interview so you walk in ready.",
    includesTitle: "What Our Visa Support Covers",
    includes: [
      { title: "Visa Document File", text: "Admission letter, tuition proof, insurance, accommodation and every form, organised the way consulates expect." },
      { title: "Proof of Funds Strategy", text: "Guidance on how much to show and how to present bank statements or sponsorship clearly." },
      { title: "Consulate Appointment Help", text: "We help you book the right Polish consulate for your country of residence in Europe." },
      { title: "Mock Visa Interviews", text: "One-on-one practice sessions based on the questions students are commonly asked." },
      { title: "Rejected Before? Rebuild Your File", text: "We review the reasons for a previous refusal and help you strengthen a new application." },
      { title: "Travel & Entry Checklist", text: "What to carry when you travel to Poland and what to do in your first weeks." },
    ],
    steps: [
      { title: "Visa Eligibility Check", text: "Confirm you need a visa and which consulate handles your application." },
      { title: "Build Your File", text: "Prepare documents, financial proof and insurance with our checklist." },
      { title: "Interview Coaching", text: "Practise until you can explain your study plan with confidence." },
      { title: "Decision & Travel", text: "Collect your visa and get ready for arrival in Poland." },
    ],
    europe: {
      eu: "EU/EEA and Swiss citizens don't need a student visa for Poland. If you stay longer than three months, you register your residence at the local voivodeship office — we explain how.",
      nonEu: "If you hold a residence permit in another European country (for example the UK, Germany or Sweden), you normally apply for the Polish Type D visa at the Polish consulate responsible for where you legally live, not in your home country.",
    },
    faqs: [
      { q: "How much bank balance is required for a Poland student visa?", a: "You must show enough money to cover living costs for your stay plus a return journey, on top of tuition. The required amounts are set by Polish regulations and can change, so we confirm the current figure for your case before you apply." },
      { q: "Can I work in Poland on a student visa?", a: "Full-time students holding a Polish national visa for studies or a temporary residence card for studies can generally work without a separate work permit — useful for part-time jobs alongside your degree." },
      { q: "Does Poland allow dependents on a student visa?", a: "There is no automatic dependent visa for students. Family members usually need to apply separately on their own grounds. We explain the options for your situation during consultation." },
      { q: "How long does the Poland student visa process take?", a: "Most of our students receive their visa within 4–8 weeks of starting the process. Consulate decision times vary, so we recommend applying 2–3 months before your semester begins." },
      { q: "Can I apply for a Polish student visa from the UK?", a: "Yes, if you legally reside in the UK you can usually apply at the Polish consulate in the UK. We help you prepare the file and book the right appointment." },
    ],
  },
  {
    slug: "scholarships-poland",
    name: "Scholarships & Funding",
    cardText: "Access to Poland's NAWA programs, university merit scholarships and education loan assistance.",
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    metaTitle: "Scholarships to Study in Poland: NAWA & Merit | Poland Pathway",
    metaDescription:
      "Find scholarships to study in Poland from Europe — NAWA programmes, university merit awards, tuition discounts and Erasmus+ options. Free eligibility check.",
    eyebrow: "Scholarships · Funding",
    h1: "Study in Poland for Less with",
    h1Highlight: "Scholarships & Funding",
    lead:
      "Poland is already one of Europe's most affordable study destinations. We help you find the scholarships, tuition discounts and funding you're actually eligible for — and apply for them on time.",
    includesTitle: "Funding Options We Help You Explore",
    includes: [
      { title: "NAWA Programmes", text: "Government scholarships from Poland's National Agency for Academic Exchange — eligibility depends on your nationality and programme." },
      { title: "University Merit Scholarships", text: "Rector's scholarships and merit awards for high-achieving students, usually from your second year." },
      { title: "Tuition Discounts", text: "Early-payment, sibling and academic discounts offered by many Polish universities." },
      { title: "Erasmus+ & EU Mobility", text: "Exchange and mobility funding for students already enrolled at European universities." },
      { title: "Education Loan Guidance", text: "How to prepare documents if you're funding your studies through a loan or sponsor." },
      { title: "Budget Planning", text: "A realistic monthly budget so your scholarship and savings stretch further." },
    ],
    steps: [
      { title: "Eligibility Check", text: "We match your profile against current scholarship options." },
      { title: "Funding Plan", text: "Combine scholarships, discounts and savings into one clear plan." },
      { title: "Application Coaching", text: "Get feedback on motivation letters and supporting documents." },
      { title: "Award & Budget", text: "Plan your finances around the funding you secure." },
    ],
    europe: {
      eu: "As an EU/EEA or Swiss citizen you can study Polish-taught programmes at public universities free of charge, and may qualify for Erasmus+ mobility funding. We show you how to make the most of these rights.",
      nonEu: "Non-EU students living in Europe can still access university merit scholarships, tuition discounts and some NAWA programmes. We check which ones match your nationality and course.",
    },
    faqs: [
      { q: "Can I study in Poland for free?", a: "EU/EEA and Swiss citizens can study Polish-taught programmes at public universities without tuition fees. English-taught programmes usually charge fees, but scholarships and discounts can reduce the cost significantly." },
      { q: "What is a NAWA scholarship?", a: "NAWA is Poland's National Agency for Academic Exchange. It runs scholarship programmes for international students and researchers, with eligibility that depends on nationality, level of study and the specific call." },
      { q: "When should I apply for scholarships in Poland?", a: "Many deadlines fall months before the academic year starts, often alongside or before admission. Starting early — ideally 8–12 months ahead — gives you the most options." },
      { q: "Can international students get merit scholarships in Poland?", a: "Yes. Many universities offer rector's scholarships to their best students regardless of nationality, typically after the first year of study." },
    ],
  },
  {
    slug: "student-accommodation-poland",
    name: "Accommodation & Arrival",
    cardText: "Guaranteed dormitory or private housing options, airport pickup and a city-orientation on day one.",
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
    metaTitle: "Student Accommodation in Poland & Arrival Help | Poland Pathway",
    metaDescription:
      "Moving to Poland from elsewhere in Europe? We arrange student dorms or private flats in Warsaw, Kraków and more, plus airport pickup and a day-one city orientation.",
    eyebrow: "Housing · Arrival",
    h1: "Student Accommodation in Poland,",
    h1Highlight: "Sorted Before You Land",
    lead:
      "From university dormitories to shared private flats, we line up safe, affordable housing near your campus — then meet you at the airport and help you settle in on day one.",
    includesTitle: "Your Arrival Package",
    includes: [
      { title: "Dormitory Applications", text: "Help applying for university halls (akademik), often the most affordable option for first-year students." },
      { title: "Private Flats & Rooms", text: "Vetted shared flats and studios near your campus in Warsaw, Kraków, Wrocław, Poznań, Gdańsk and more." },
      { title: "Rental Contract Check", text: "We review your contract so deposits, bills and notice periods are clear." },
      { title: "Airport Pickup", text: "Someone waiting when you land, so your first hours in Poland are stress-free." },
      { title: "City Orientation", text: "Public transport, SIM cards, banking and the essentials in your first week." },
      { title: "Accommodation Proof for Visa", text: "Documentation you can use in your visa or residence application." },
    ],
    steps: [
      { title: "Housing Preferences", text: "Tell us your budget, city and whether you prefer a dorm or flat." },
      { title: "Options & Booking", text: "Receive shortlisted options and secure the one you like." },
      { title: "Travel Plan", text: "Share your flight details and we arrange your pickup." },
      { title: "Welcome to Poland", text: "Move in and get a guided start in your new city." },
    ],
    europe: {
      eu: "Travelling from within the EU is simple — many students come by budget flight, train or even car. We time your move-in with your semester start and help with residence registration if you stay over three months.",
      nonEu: "If you're coming from elsewhere in Europe on a visa, confirmed accommodation can strengthen your application. We provide the paperwork you need and plan your arrival around your visa dates.",
    },
    faqs: [
      { q: "How much does student accommodation cost in Poland?", a: "University dormitories are usually the cheapest option, while private rooms and studios cost more — especially in Warsaw and Kraków. Prices vary by city and season, so we share current options within your budget." },
      { q: "Is it better to live in a dorm or a private flat?", a: "Dorms are affordable and a great way to meet people in your first year. Private flats offer more privacy and choice. Many students start in a dorm and move to a flat later." },
      { q: "Which Polish cities are best for students?", a: "Warsaw, Kraków, Wrocław, Poznań and Gdańsk are the most popular, each with strong universities, large international communities and good connections to the rest of Europe." },
      { q: "Do you provide airport pickup?", a: "Yes. Once you share your flight details, we arrange pickup and help you get to your accommodation." },
    ],
  },
  {
    slug: "residence-permit-poland",
    name: "Residence Permit & Beyond",
    cardText:
      "TRC (temporary residence card) filing, part-time work guidance and post-study career pathways in the EU.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    metaTitle: "Poland Residence Permit (TRC) for Students | Poland Pathway",
    metaDescription:
      "Help with your Polish temporary residence card (karta pobytu) for studies, EU registration, part-time work rules and post-study career options in Poland and the EU.",
    eyebrow: "Residence Card · Careers",
    h1: "Stay, Work & Build Your Future —",
    h1Highlight: "Residence Permit Support",
    lead:
      "Once you're studying in Poland, we help you file your temporary residence card (TRC), understand your right to work and plan your next steps after graduation in Poland or elsewhere in the EU.",
    includesTitle: "How We Help You Stay in Poland",
    includes: [
      { title: "TRC Application", text: "Guidance on preparing and filing your temporary residence card for studies before your visa expires." },
      { title: "Voivodeship Office Appointment", text: "What to bring for your fingerprint and document appointment, and how to follow up." },
      { title: "EU Citizen Registration", text: "Step-by-step help registering your stay if you're an EU/EEA or Swiss citizen." },
      { title: "Part-Time Work Guidance", text: "Your rights as a student worker and how to find part-time jobs." },
      { title: "Permit Renewals", text: "Reminders and help when your card needs extending for the next year of study." },
      { title: "Post-Study Pathways", text: "Options to stay after graduation, including a permit to look for work in Poland." },
    ],
    steps: [
      { title: "Timeline Check", text: "We calculate when to file based on your visa and study dates." },
      { title: "Prepare Documents", text: "University certificate, insurance, address and funds — all in order." },
      { title: "File & Attend", text: "Submit your application and attend your office appointment." },
      { title: "Receive Your Card", text: "Collect your residence card and plan your next steps." },
    ],
    europe: {
      eu: "EU/EEA and Swiss citizens don't need a residence card. If you stay in Poland longer than three months, you register your stay at the voivodeship office — a simpler process we walk you through.",
      nonEu: "Non-EU students usually arrive on a Type D visa and then apply for a temporary residence card for studies, which lets you stay for your whole programme and travel within the Schengen area.",
    },
    faqs: [
      { q: "What is a temporary residence card (TRC) in Poland?", a: "The karta pobytu is a residence card that lets non-EU students stay in Poland for the length of their studies, beyond the validity of their visa. It's issued by the voivodeship office in the region where you live." },
      { q: "When should I apply for my residence card?", a: "You must apply while your current visa is still valid. Because processing can take time, we recommend applying well before your visa expires." },
      { q: "Can I work in Poland while studying?", a: "Full-time students with a valid Polish study visa or residence card can generally work without a separate work permit. We explain the rules that apply to your status." },
      { q: "Can I stay in Poland after graduation?", a: "Graduates of Polish universities can apply for a temporary residence permit to look for work, and can later move to a work-based permit or an EU Blue Card if they find a qualifying job." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
