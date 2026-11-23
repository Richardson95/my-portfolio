export type Job = {
  company: string
  role: string
  start: string
  end: string
  kind: 'Contract' | 'Full-time'
  points: string[]
}

export const jobs: Job[] = [
  {
    company: 'InfraCredit',
    role: 'Frontend Developer',
    start: 'Sep 2025',
    end: 'Present',
    kind: 'Contract',
    points: [
      'Built the Professional Development Platform (Next.js 15, TypeScript, Chakra UI) used by 500+ employees for skills assessment, career planning and HR reporting.',
      'Wired Azure AD single sign-on through MSAL and a three-level role model; moving data fetching to TanStack Query cut API calls by about 60%.',
      'Shipped the recruitment portal (admin and candidate apps), the capex pipeline tracker, conflict-of-interest declarations and an internal document Q&A assistant.',
      'Since mid-2026 also building internal products for DREEF: an AI knowledge assistant, a legal desk, InvestPact and a developer onboarding flow.',
    ],
  },
  {
    company: 'HandyPros',
    role: 'Mobile App Developer',
    start: 'May 2025',
    end: 'Sep 2025',
    kind: 'Contract',
    points: [
      'Opened the app to new professional categories so more trades could sign up, and kept it stable past 1,000 active users.',
      'Fixed the profile sync bugs and slow profile loads; built the admin dashboard the ops team uses to manage providers.',
    ],
  },
  {
    company: 'SheCodeAfrica',
    role: 'Frontend Facilitator',
    start: 'Nov 2024',
    end: 'Mar 2025',
    kind: 'Contract',
    points: [
      'Taught HTML, CSS, JavaScript, React, Angular and Next.js to a cohort of 50 women, and wrote the course modules.',
      'Ran code reviews and mentored the cohort’s top project through to submission.',
    ],
  },
  {
    company: 'Wazobia Academy',
    role: 'Mobile Developer',
    start: 'Aug 2024',
    end: 'Jan 2025',
    kind: 'Contract',
    points: [
      'Built the React Native / Expo language-learning app, with text and voice lessons, onboarding and REST + GraphQL data.',
      'Added Jest and React Testing Library coverage around the lesson flows.',
    ],
  },
  {
    company: 'Logiccode Academy',
    role: 'Frontend Developer',
    start: 'Jan 2024',
    end: 'Jun 2024',
    kind: 'Contract',
    points: [
      'Rebuilt the academy site with Tailwind CSS; lazy loading and fewer re-renders brought load times down by around 40%.',
    ],
  },
  {
    company: 'Savertech',
    role: 'Web Developer',
    start: 'Feb 2023',
    end: 'Dec 2023',
    kind: 'Full-time',
    points: [
      'Built the Cardify and Savertech websites, which serve over 5,000 users a month.',
      'Owned the cross-browser bug queue and the performance fixes that came out of it.',
    ],
  },
  {
    company: 'Dezirely',
    role: 'Mobile Developer',
    start: 'Mar 2022',
    end: 'Dec 2022',
    kind: 'Full-time',
    points: [
      'Turned designs into Flutter screens for the Dezirely dating app and handled its Play Store and App Store releases.',
    ],
  },
  {
    company: 'VikkyMore Multi-business',
    role: 'Junior Frontend Developer',
    start: 'Mar 2021',
    end: 'Dec 2021',
    kind: 'Full-time',
    points: [
      'Built the UI of a crypto trading app (2,000+ downloads) and an agriculture investment web platform, both on Redux Toolkit.',
    ],
  },
]
