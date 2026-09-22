export type Pillar = {
  name: string;
  short: string;
  description: string;
  color: "coral" | "teal" | "sun" | "lavender" | "leaf";
};

export const pillars: Pillar[] = [
  {
    name: "Cognitive & Early Literacy",
    short: "Think",
    description:
      "Number sense, pattern-finding, problem-solving and early reading built through hands-on discovery, not worksheets.",
    color: "coral",
  },
  {
    name: "Language & Communication",
    short: "Speak",
    description:
      "Vocabulary, storytelling and confident expression, nurtured through songs, conversation and dramatic play.",
    color: "teal",
  },
  {
    name: "Motor & Physical Development",
    short: "Move",
    description:
      "Fine and gross motor skills strengthened through movement, art, music and outdoor play every single day.",
    color: "sun",
  },
  {
    name: "Social-Emotional Growth",
    short: "Feel",
    description:
      "Empathy, self-regulation and friendship skills practiced in circle time, group play and guided reflection.",
    color: "lavender",
  },
  {
    name: "Creativity & Imagination",
    short: "Create",
    description:
      "Open-ended art, pretend play and inquiry projects that let every child's imagination lead the way.",
    color: "leaf",
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
      "Daily, theme-based lesson plans guide play-based learning across all five developmental dots — right inside your classroom.",
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
    stat: "5",
    description:
      "DOT develops all five domains of early childhood — cognitive, language, motor, social-emotional and creative — together, not in isolation.",
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
    tagline: "A whole-child, play-based framework",
    description:
      "Theme-based, age-appropriate lesson plans spanning all five DOT pillars, sequenced week by week so teachers always know what's next.",
    points: [
      "Age bands from playgroup through pre-primary (ages 2–6)",
      "Weekly themes with daily activity plans, songs and stories",
      "Built for play-based, inquiry-led classrooms",
      "Aligned to global early-years learning outcomes",
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
    tagline: "Digital-first — no materials to manage",
    description:
      "Everything teachers and parents need lives in the DOT app: lesson plans, activity guides and progress tracking, with nothing to print, ship or store.",
    points: [
      "Daily lesson plans and activity guides for teachers",
      "Attendance and milestone tracking, digitized",
      "Parent app with real-time updates and messaging",
      "No physical kits or materials — fully digital delivery",
    ],
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
