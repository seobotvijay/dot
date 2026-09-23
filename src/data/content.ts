export type BrandColor =
  | "coral"
  | "teal"
  | "sun"
  | "lavender"
  | "leaf"
  | "rose"
  | "sky"
  | "steel";

export type LearningArea = {
  name: string;
  description: string;
  color: BrandColor;
};

export const learningAreas: LearningArea[] = [
  {
    name: "Language and Communication",
    description:
      "Vocabulary, listening and confident self-expression built through conversation, storytelling and dramatic play.",
    color: "coral",
  },
  {
    name: "Literacy and Phonics",
    description:
      "Sound awareness, letter recognition and early reading and writing skills, built step by step.",
    color: "teal",
  },
  {
    name: "Numeracy and Maths",
    description:
      "Number sense, counting, patterns and early problem-solving through hands-on, playful exploration.",
    color: "sun",
  },
  {
    name: "Me and My World",
    description:
      "Awareness of self, family, community and environment — helping children make sense of the world around them.",
    color: "lavender",
  },
  {
    name: "Social and Emotional Learning",
    description:
      "Empathy, self-regulation, sharing and friendship skills practiced through circle time and guided play.",
    color: "leaf",
  },
  {
    name: "Art and Creative Expression",
    description:
      "Open-ended art, music, and imaginative play that let every child's creativity lead the way.",
    color: "rose",
  },
  {
    name: "Movement and Coordination",
    description:
      "Fine and gross motor skills strengthened daily through movement, games and structured physical play.",
    color: "sky",
  },
  {
    name: "Health and Safety",
    description:
      "Everyday habits and awareness around hygiene, nutrition and personal safety, built into routines.",
    color: "steel",
  },
];

export const nepAlignment = {
  badge: "Aligned to NEP 2020 & NCF",
  headline: "Built on India's own early-years framework",
  description:
    "The DOT curriculum is designed in line with the National Education Policy (NEP) 2020 and the National Curriculum Framework for Foundational Stage (NCF), so schools get play-based, whole-child learning that also maps cleanly to national early-years guidelines.",
};

export type ProgramLevel = {
  grade: string;
  dotName: string;
  ageRange: string;
  description: string;
  color: BrandColor;
};

export const programLevels: ProgramLevel[] = [
  {
    grade: "LKG",
    dotName: "Little Dot",
    ageRange: "Ages 3–4",
    description: "First steps into structured play-based learning — building comfort, curiosity and classroom routines.",
    color: "coral",
  },
  {
    grade: "UKG",
    dotName: "Big Dot",
    ageRange: "Ages 4–5",
    description: "Deeper exploration across all 8 areas of learning, building the foundation for formal literacy and numeracy.",
    color: "teal",
  },
  {
    grade: "Std 1",
    dotName: "Tiny Dot",
    ageRange: "Ages 5–6",
    description: "A gentle bridge into primary school — strengthening reading, writing and number skills through continued play.",
    color: "sun",
  },
  {
    grade: "Std 2",
    dotName: "Mighty Dot",
    ageRange: "Ages 6–7",
    description: "Building independence and confidence as children apply foundational skills to more complex, guided tasks.",
    color: "lavender",
  },
];

export type Step = {
  title: string;
  description: string;
};

export const howItWorks: Step[] = [
  {
    title: "Discover & Assess",
    description:
      "We start with your school's classrooms, age groups and goals to map DOT to your existing setup — no rebuild required.",
  },
  {
    title: "Train & Certify Teachers",
    description:
      "Every educator completes DOT's certification workshops and gets ongoing mentorship from our early-years specialists.",
  },
  {
    title: "Deliver the Curriculum",
    description:
      "Daily, theme-based lesson plans guide play-based learning across all 8 areas of learning — right inside your classroom.",
  },
  {
    title: "Engage Parents at Home",
    description:
      "Parents get simple, guided activities and real-time updates through the DOT app, turning home into an extension of the classroom.",
  },
  {
    title: "Track Growth & Insights",
    description:
      "Teachers and school leaders see milestone tracking and classroom insights, so growth is visible, not just assumed.",
  },
];

export type WhyPoint = {
  stat: string;
  description: string;
};

export const whyEarlyYears: WhyPoint[] = [
  {
    stat: "90%",
    description: "of a child's brain develops before age five, making these the highest-leverage years in education.",
  },
  {
    stat: "1:1",
    description:
      "Play-based, one-concept-at-a-time learning builds attention and executive function far better than rote instruction.",
  },
  {
    stat: "3x",
    description:
      "Children with active parent involvement show significantly stronger language and social outcomes by kindergarten.",
  },
  {
    stat: "8",
    description:
      "DOT develops all 8 areas of early learning — language, literacy, numeracy and more — together, not in isolation.",
  },
];

export type Offering = {
  title: string;
  tagline: string;
  description: string;
  points: string[];
  color: "coral" | "teal" | "sun" | "lavender";
};

export const offerings: Offering[] = [
  {
    title: "Curriculum",
    tagline: "A whole-child, hands-on activity framework",
    description:
      "Theme-based, age-appropriate weekly plans spanning all 8 areas of learning, packed with hands-on activities, worksheets and original stories so teachers always know what's next.",
    points: [
      "4 program levels: Little Dot, Big Dot, Tiny Dot & Mighty Dot",
      "30+ weekly plans (LKG) and 32+ weekly plans (UKG) each year",
      "2,500+ hands-on activities and 500+ worksheets every year",
      "Aligned to NEP 2020 and the NCF for Foundational Stage",
    ],
    color: "coral",
  },
  {
    title: "Teacher Training",
    tagline: "Certified educators, ongoing mentorship",
    description:
      "Every DOT teacher completes structured onboarding and certification, then continues learning through refreshers and classroom coaching.",
    points: [
      "Foundational certification workshop before rollout",
      "Termly refresher and skill-building sessions",
      "1:1 classroom mentorship from early-years specialists",
      "Practical, activity-first training — not just theory",
    ],
    color: "teal",
  },
  {
    title: "Parent Engagement Program",
    tagline: "Home becomes part of the classroom",
    description:
      "Structured touchpoints and simple guided activities that help parents reinforce learning at home, without adding pressure.",
    points: [
      "Weekly take-home activities tied to classroom themes",
      "Parent orientation workshops each term",
      "Milestone updates shared in parent-friendly language",
      "Community events that build a parent support circle",
    ],
    color: "sun",
  },
  {
    title: "Teacher & Parent App",
    tagline: "Your daily companion, in class and at home",
    description:
      "The DOT app guides teachers through daily lesson plans and hands-on activities, and keeps parents connected with real-time updates and a built-in progress tracker — working hand-in-hand with DOT's storybooks, worksheets and workbooks.",
    points: [
      "Daily lesson plans and activity guides for teachers",
      "Built-in progress tracking across all 8 areas of learning",
      "Parent app with real-time updates and messaging",
      "Pairs with DOT's story books, worksheets and workbooks",
    ],
    color: "lavender",
  },
];

export type MaterialItem = {
  value?: number;
  suffix?: string;
  label: string;
};

export const materialsIncluded: MaterialItem[] = [
  { value: 30, suffix: "+", label: "Weekly plans for Little Dots (LKG)" },
  { value: 32, suffix: "+", label: "Weekly plans for Big Dots (UKG)" },
  { value: 2500, suffix: "+", label: "Hands-on activities per year" },
  { value: 500, suffix: "+", label: "Worksheets per year" },
  { value: 100, suffix: "+", label: "Original story books" },
  { value: 300, suffix: "+", label: "Original rhymes" },
  { label: "Age-appropriate workbooks" },
  { value: 20, suffix: "+", label: "Decodable readers" },
  { label: "Theme books and phonics books" },
  { label: "Parent workshops" },
  { label: "Teacher app and guide" },
  { label: "Interactive teaching and learning materials" },
];

export const progressTracking = {
  headline: "Every child, tracked across every area of learning",
  description:
    "The DOT program comes with a built-in progress tracking system that regularly tracks each child's learning and progress in developmental skills and across all 8 areas of learning. The goal is to catch gaps early, not after they've become setbacks.",
  steps: [
    {
      title: "Track",
      description: "Teachers log observations and milestones against developmental skills and all 8 areas of learning, on a regular cadence.",
    },
    {
      title: "Assess Gaps",
      description: "The tracker surfaces exactly where a child is progressing well and where they may be falling behind.",
    },
    {
      title: "Teachers Intervene",
      description: "Teachers get clear, actionable signals so they can step in early with the right support for that child.",
    },
    {
      title: "No Child Falls Behind",
      description: "Parents and school leaders see the same picture, so progress — and gaps — are visible to everyone, together.",
    },
  ],
};

export type BenefitGroup = {
  audience: string;
  color: BrandColor;
  benefits: string[];
};

export const benefits: BenefitGroup[] = [
  {
    audience: "For Schools",
    color: "coral",
    benefits: [
      "A ready-made, NEP 2020 & NCF-aligned curriculum — no in-house curriculum design needed",
      "Certified, trained teachers with ongoing mentorship, reducing dependence on any one hire",
      "A stronger enrollment pitch with a structured, outcomes-driven early-years program",
      "Built-in progress tracking gives leadership visibility into classroom outcomes",
      "A full set of hands-on materials included — story books, worksheets, workbooks and more",
    ],
  },
  {
    audience: "For Teachers",
    color: "teal",
    benefits: [
      "Ready-to-use daily lesson plans across all 8 areas of learning — less prep time",
      "Structured certification plus ongoing mentorship from early-years specialists",
      "A simple app to plan, track and report — no paperwork-heavy processes",
      "Clear visibility into each child's progress, making interventions easier to plan",
      "A genuine growth path within a structured, well-supported program",
    ],
  },
  {
    audience: "For Parents",
    color: "sun",
    benefits: [
      "Real-time visibility into what their child is learning, day to day",
      "Simple, guided activities to extend learning at home — no guesswork",
      "Regular, easy-to-understand updates on their child's developmental progress",
      "A direct line to teachers through the DOT app",
      "Confidence that gaps are caught early, not discovered too late",
    ],
  },
  {
    audience: "For Children",
    color: "lavender",
    benefits: [
      "Joyful, play-based learning instead of rote instruction",
      "Whole-child development across language, numeracy, social-emotional skills and more",
      "Consistent, extra support the moment they need it — never left to fall behind",
      "A gentle, confident bridge from pre-primary into primary school",
      "A classroom environment built around how young children actually learn",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  color: BrandColor;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "DOT gave us a structured, NEP-aligned early-years program without having to build a curriculum team of our own. Parent enquiries about our pre-primary section have gone up noticeably since we partnered.",
    name: "Principal",
    role: "DOT Partner School",
    color: "coral",
  },
  {
    quote:
      "The daily lesson plans save me hours every week, and the progress tracker makes it so easy to spot which child needs extra support — I don't have to guess anymore.",
    name: "Pre-Primary Teacher",
    role: "DOT Certified Educator",
    color: "teal",
  },
  {
    quote:
      "I finally know what my daughter is learning each day, not just at the term-end report. The home activities are simple enough that we actually do them together.",
    name: "Parent",
    role: "Big Dot (UKG) Family",
    color: "sun",
  },
  {
    quote:
      "My son used to dread structured activities. With DOT's play-based approach he asks to do his 'DOT time' at home now — that shift alone was worth it for us.",
    name: "Parent",
    role: "Little Dot (LKG) Family",
    color: "lavender",
  },
];

export type ImpactStat = {
  label: string;
  value: number;
  suffix: string;
  description: string;
};

export const impactStats: ImpactStat[] = [
  {
    label: "Partner Schools",
    value: 150,
    suffix: "+",
    description: "Pre-primary schools running the DOT program",
  },
  {
    label: "Children Benefited",
    value: 25000,
    suffix: "+",
    description: "Children learning through DOT classrooms each year",
  },
  {
    label: "Teachers Trained",
    value: 1200,
    suffix: "+",
    description: "Educators certified on the DOT curriculum",
  },
  {
    label: "Cities Reached",
    value: 40,
    suffix: "+",
    description: "Cities with an active DOT partner school",
  },
];

export const growthByYear: { year: string; schools: number }[] = [
  { year: "2020", schools: 12 },
  { year: "2021", schools: 38 },
  { year: "2022", schools: 68 },
  { year: "2023", schools: 102 },
  { year: "2024", schools: 128 },
  { year: "2025", schools: 150 },
];

export const parentSatisfaction = 96;

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is the DOT program?",
    answer:
      "DOT is a play-based early years program that pre-primary schools adopt as their curriculum. It covers 8 areas of learning across four program levels — Little Dot, Big Dot, Tiny Dot and Mighty Dot — and pairs the curriculum with teacher training, a parent engagement program and a teacher & parent app.",
  },
  {
    question: "Is DOT aligned with NEP 2020 and NCF?",
    answer:
      "Yes. The DOT curriculum is designed in line with India's National Education Policy (NEP) 2020 and the National Curriculum Framework for Foundational Stage (NCF), so schools get play-based, whole-child learning that also maps to national early-years guidelines.",
  },
  {
    question: "What grades and ages does the DOT program cover?",
    answer:
      "DOT covers four program levels: Little Dot for LKG (ages 3–4), Big Dot for UKG (ages 4–5), Tiny Dot for Std 1 (ages 5–6), and Mighty Dot for Std 2 (ages 6–7).",
  },
  {
    question: "What are DOT's 8 Areas of Learning?",
    answer:
      "The 8 areas are Language and Communication, Literacy and Phonics, Numeracy and Maths, Me and My World, Social and Emotional Learning, Art and Creative Expression, Movement and Coordination, and Health and Safety.",
  },
  {
    question: "What learning materials come with the DOT program?",
    answer:
      "DOT includes a full set of hands-on learning materials: 30+ weekly plans for Little Dots (LKG) and 32+ for Big Dots (UKG), 2,500+ hands-on activities and 500+ worksheets every year, 100+ original story books, 300+ original rhymes, age-appropriate workbooks, 20+ decodable readers, theme and phonics books, and interactive teaching and learning materials — plus the teacher app and guide and regular parent workshops.",
  },
  {
    question: "How does DOT's progress tracking system work?",
    answer:
      "The DOT app includes a built-in progress tracker that regularly records each child's learning and progress in developmental skills and across all 8 areas of learning. It's designed to surface gaps early, so teachers can step in with the right support before a child falls behind.",
  },
  {
    question: "What training do DOT teachers receive?",
    answer:
      "Every DOT teacher completes a foundational certification workshop before rollout, then continues with termly refresher sessions and ongoing 1:1 classroom mentorship from early-years specialists.",
  },
  {
    question: "How are parents involved in the DOT program?",
    answer:
      "Through DOT's Parent Engagement Program, parents get weekly take-home activities tied to classroom themes, termly orientation workshops, real-time updates through the DOT app, and community events with other DOT families.",
  },
  {
    question: "How can a school partner with DOT?",
    answer:
      "Schools can fill out the partnership form on this site. A DOT partnership specialist will then walk through curriculum, teacher training and rollout, typically starting with a free classroom demo before the school commits.",
  },
];
