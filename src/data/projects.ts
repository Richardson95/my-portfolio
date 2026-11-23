export type Platform = 'web' | 'mobile'

export type ProjectLink = { label: string; href: string }

export type Project = {
  name: string
  blurb: string
  platforms: Platform[]
  stack: string[]
  year: number
  /** Screenshot in /public/work. Leave empty to fall back to `tile`. */
  image?: string
  /** For mobile-only work: an app icon shown on a coloured tile instead of a screenshot. */
  tile?: { icon?: string; screens?: string[]; bg: string; fg?: string }
  links: ProjectLink[]
  /** Only featured projects get the long write-up. */
  notes?: string[]
  phone?: string
}

// The big ones. Order matters: this is the order they appear on the page.
export const featured: Project[] = [
  {
    name: 'Kudi9ja',
    blurb: 'Savings, business credit and Ajo circles for Nigerians: one product across a web app, a Flutter app and a marketing site.',
    platforms: ['web', 'mobile'],
    stack: ['React', 'TypeScript', 'TanStack Query', 'Flutter', 'Next.js', 'Spring Boot'],
    year: 2026,
    image: '/work/kudi9ja.webp',
    links: [
      { label: 'kudi9ja.com', href: 'https://www.kudi9ja.com/' },
      { label: 'Landing page', href: 'https://kudi9jalandingpage.vercel.app' },
    ],
    notes: [
      'Fixed savings at 17% a year with interest paid the day you lock, plus credit of up to ₦5M with a repayment plan you can read at a glance.',
      'Rates and limits are editable from the admin panel and apply across the app immediately, because every calculation goes through a single finance module.',
      'I built the web app, the Flutter app and the landing page, and work on the Spring Boot API behind them.',
    ],
  },
  {
    name: 'HajjPath',
    blurb: 'A pilgrimage companion for Nigerian Muslims: Shariah-compliant Hajj savings, then live guidance once you land in Makkah.',
    platforms: ['web', 'mobile'],
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Flutter'],
    year: 2026,
    image: '/work/hajjpath.webp',
    phone: '/work/hajjpath-app-home.webp',
    links: [{ label: 'Live demo', href: 'https://hajj-project-iota.vercel.app' }],
    notes: [
      'Five-step KYC onboarding, savings plans with a funding tracker, a day-by-day rites planner and a verified Makkah marketplace.',
      'An SOS network lets pilgrims flag that they need help, and their group sees where they were last seen.',
      'The Flutter app mirrors the web app feature for feature, redesigned for one-handed use in a crowd. Golden tests cover every screen.',
    ],
  },
  {
    name: 'BRG Prime',
    blurb: 'Real-estate marketplace for Billionaire Realtors: buy, sell, rent, lease or shortlet property anywhere in Nigeria.',
    platforms: ['web', 'mobile'],
    stack: ['Vue 3', 'Pinia', 'Socket.IO', 'Flutter', 'Express', 'Prisma'],
    year: 2026,
    image: '/work/brg-prime.webp',
    links: [{ label: 'brgprime.com', href: 'https://brgprime.com/' }],
    notes: [
      'Listings, viewing bookings, Free/Silver/Bronze/Gold subscriptions, a community forum and real-time notifications over Socket.IO.',
      'Wrote the Express + Prisma API it runs on, and ported the whole web app to Flutter from a screen-by-screen spec.',
    ],
  },
  {
    name: 'Formation Exceptionelle',
    blurb: 'Career development platform: a full LMS for corporate, legal and finance training, plus a jobs and internships board.',
    platforms: ['web'],
    stack: ['Vue 3', 'Pinia', 'Tailwind CSS', 'Express', 'MongoDB', 'S3'],
    year: 2026,
    image: '/work/formation.webp',
    links: [{ label: 'formationexceptionelle.com', href: 'https://formationexceptionelle.com/' }],
    notes: [
      'Course authoring, cart and checkout, instructor applications, learner progress and an admin side with analytics and payments.',
      'The Node API handles uploads to S3 with presigned URLs and generates PDFs server-side.',
    ],
  },
  {
    name: 'BuildQ AI',
    blurb: 'Quantity surveying for Nigerian construction: upload drawings, get a bill of quantities and a Naira cost estimate in minutes.',
    platforms: ['web'],
    stack: ['Vue 3', 'Pinia', 'Chart.js', 'Tailwind CSS'],
    year: 2026,
    image: '/work/buildq.webp',
    links: [{ label: 'Live', href: 'https://brgprime.com/boq/' }],
  },
  {
    name: 'Elpers',
    blurb: 'An operating system for small companies: people, customers, projects, money and documents, tied together by approvals and automations.',
    platforms: ['web'],
    stack: ['Next.js 16', 'TypeScript', 'Zustand', 'Recharts'],
    year: 2026,
    image: '/work/elpers.webp',
    links: [{ label: 'Live demo', href: 'https://elpers-sage.vercel.app' }],
  },
]

export const more: Project[] = [
  {
    name: 'Kudi9ja Pro',
    blurb: 'Pay for Netflix, tuition, car auctions and 40+ other international services in Naira, without a dollar card.',
    platforms: ['web'],
    stack: ['React', 'TypeScript', 'Paystack'],
    year: 2025,
    image: '/work/kudi9ja-pro.webp',
    links: [{ label: 'Live', href: 'https://kudi9ja-pro.vercel.app' }],
  },
  {
    name: 'Quadilateral IT',
    blurb: 'Marketing site for an IT consultancy covering software, AI, data and its training academy.',
    platforms: ['web'],
    stack: ['Next.js 15', 'Framer Motion', 'Tailwind CSS'],
    year: 2026,
    image: '/work/quadilateral.webp',
    links: [{ label: 'quadilateral.org', href: 'https://quadilateral.org' }],
  },
  {
    name: 'HomeEase',
    blurb: 'Lagos rentals with verified listings, inspection booking, escrow-protected rent and rent financing.',
    platforms: ['web'],
    stack: ['React', 'TypeScript', 'Zustand'],
    year: 2026,
    image: '/work/homeease.webp',
    links: [{ label: 'Live', href: 'https://home-ease-indol.vercel.app' }],
  },
  {
    name: 'HarviMoney',
    blurb: 'Corporate lending for salary earners and organisations, from application to disbursement.',
    platforms: ['web'],
    stack: ['TypeScript', 'Vite'],
    year: 2026,
    image: '/work/harvimoney.webp',
    links: [{ label: 'Live', href: 'https://harvi-money.vercel.app' }],
  },
  {
    name: 'SchoolIQ',
    blurb: 'School platform for parents, students, teachers and admins. React Native app, a web port and the company website.',
    platforms: ['mobile', 'web'],
    stack: ['React Native', 'Expo', 'React'],
    year: 2026,
    image: '/work/schooliq.webp',
    links: [],
  },
  {
    name: 'ParentFocus',
    blurb: 'Parent–school mobile app, plus the owner console that runs every school on the platform.',
    platforms: ['mobile', 'web'],
    stack: ['React Native', 'React', 'Recharts'],
    year: 2026,
    image: '/work/parentfocus-admin.webp',
    links: [{ label: 'Admin console', href: 'https://parentfocus-administrative.vercel.app' }],
  },
  {
    name: 'RentMate',
    blurb: 'Flatmate and property finder, built with a small team.',
    platforms: ['web'],
    stack: ['React', 'TypeScript', 'styled-components', '.NET'],
    year: 2026,
    image: '/work/rentmate.webp',
    links: [{ label: 'Live', href: 'https://rent-mate-blue.vercel.app' }],
  },
  {
    name: 'Light',
    blurb: 'Book consultations with verified Christian, Islamic and traditional practitioners, with a marketplace alongside.',
    platforms: ['web'],
    stack: ['Next.js', 'TypeScript'],
    year: 2026,
    image: '/work/spiritual.webp',
    links: [{ label: 'Live', href: 'https://spiritual-consult.vercel.app' }],
  },
  {
    name: 'FPA Food Ordering',
    blurb: 'Meal ordering for staff and students of Federal Polytechnic Ayede, with no more queues at the cafeteria.',
    platforms: ['web'],
    stack: ['JavaScript', 'HTML', 'CSS'],
    year: 2026,
    image: '/work/edepoly.webp',
    links: [{ label: 'Live', href: 'https://edepoly.vercel.app' }],
  },
  {
    name: 'Mini-Fashionistas',
    blurb: 'Online store for kids’ fashion and toys, ages 4 to 12.',
    platforms: ['web'],
    stack: ['React', 'TypeScript'],
    year: 2026,
    image: '/work/minifashion.webp',
    links: [{ label: 'Live', href: 'https://minifashionistas.vercel.app' }],
  },
  {
    name: 'Sunday Stars',
    blurb: 'Sunday-school and Bible-study app for Nigerian churches, with separate experiences for children, adults, teachers and church admins.',
    platforms: ['mobile'],
    stack: ['React Native', 'Expo Router', 'Reanimated'],
    year: 2026,
    tile: { icon: '/work/icon-sunday-stars.webp', bg: '#2b2470' },
    links: [],
  },
  {
    name: 'SafeDeal',
    blurb: 'Escrow for online commerce: the money waits in the middle until both buyer and seller are happy.',
    platforms: ['mobile'],
    stack: ['Flutter', 'Dart'],
    year: 2026,
    tile: { bg: '#123a8c', screens: ['/work/safedeal-home.webp', '/work/safedeal-deals.webp'] },
    links: [],
  },
  {
    name: 'DeyCovered',
    blurb: 'A spending allowance (not a cash loan) for fuel, food and groceries, spent by scanning a QR at accredited vendors.',
    platforms: ['mobile'],
    stack: ['Flutter', 'Dart'],
    year: 2026,
    tile: { bg: '#0f3d30', screens: ['/work/deycovered-offer.webp', '/work/deycovered-sample.webp'] },
    links: [],
  },
  {
    name: 'LearnPath',
    blurb: 'Personalised learning for US micro-schools (grades 2–5), with student, teacher, parent and admin roles.',
    platforms: ['mobile'],
    stack: ['Flutter', 'Dart'],
    year: 2026,
    tile: { bg: '#1f4f8f', fg: '#eef4fb' },
    links: [{ label: 'Code', href: 'https://github.com/Richardson95/LearningPath' }],
  },
  {
    name: 'Cue Sports Nigeria',
    blurb: 'Membership, competitions, live scoring and rankings for the Cue Sports Association of Nigeria.',
    platforms: ['web'],
    stack: ['Angular 21', 'Signals'],
    year: 2026,
    tile: { bg: '#0b5d3b', fg: '#e8f5ee' },
    links: [{ label: 'Code', href: 'https://github.com/Richardson95/Cue-Sport' }],
  },
  {
    name: 'Lawvee',
    blurb: 'JAMB, WAEC and NECO prep with 30,000+ past questions, on iOS and Android.',
    platforms: ['mobile', 'web'],
    stack: ['Flutter', 'Dart'],
    year: 2025,
    image: '/work/lawvee.webp',
    links: [{ label: 'lawvee.com', href: 'https://lawvee.com/' }],
  },
  {
    name: 'AnyWorkX',
    blurb: 'Find a vetted artisan or service provider in seconds, anywhere in Africa.',
    platforms: ['mobile'],
    stack: ['React Native'],
    year: 2025,
    image: '/work/anyworkx.webp',
    links: [{ label: 'anyworkx.africa', href: 'https://anyworkx.africa/' }],
  },
  {
    name: 'SNAP Admin',
    blurb: 'Operations dashboard for a delivery service: orders, riders, customers and revenue.',
    platforms: ['web'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    year: 2026,
    image: '/work/snap-admin.webp',
    links: [{ label: 'Live', href: 'https://snap-admin-five.vercel.app' }],
  },
  {
    name: 'Pennidrop',
    blurb: 'Finance dashboard with transactions, client records, projection reports and an “Ask Penni” assistant.',
    platforms: ['web'],
    stack: ['React', 'Chart.js'],
    year: 2025,
    image: '/work/pennidrop.webp',
    links: [{ label: 'Live', href: 'https://pennidrop-beryl.vercel.app' }],
  },
  {
    name: 'LogicCode Academy',
    blurb: 'Site for a tech academy: courses, free classes and the affiliate programme.',
    platforms: ['web'],
    stack: ['Vue', 'Tailwind CSS'],
    year: 2024,
    image: '/work/logiccode.webp',
    links: [{ label: 'Live', href: 'https://logiccode.vercel.app/' }],
  },
  {
    name: 'VikkyMore',
    blurb: 'Multi-business platform behind a crypto trading app and an agriculture investment product.',
    platforms: ['web', 'mobile'],
    stack: ['React', 'Redux'],
    year: 2021,
    image: '/work/vikkymore.webp',
    links: [{ label: 'vikkymore.com', href: 'https://www.vikkymore.com/home' }],
  },
  {
    name: 'BabyBloom',
    blurb: 'Track a baby’s growth and milestones from birth to two years.',
    platforms: ['web'],
    stack: ['React', 'TypeScript'],
    year: 2025,
    image: '/work/babybloom.webp',
    links: [{ label: 'Live', href: 'https://baby-boom-ochre.vercel.app/' }],
  },
  {
    name: 'Arena',
    blurb: 'A small browser battle game: pick a warrior and fight.',
    platforms: ['web'],
    stack: ['JavaScript'],
    year: 2026,
    image: '/work/arena.webp',
    links: [{ label: 'Play', href: 'https://game-battle-ivory.vercel.app' }],
  },
]

// Work that lives behind a company login. No links, just what it is.
export const internal: { org: string; items: { name: string; what: string }[] }[] = [
  {
    org: 'InfraCredit',
    items: [
      { name: 'Professional Development Platform', what: 'Skills assessment, career plans and HR analytics for 500+ staff' },
      { name: 'Recruitment portal', what: 'Separate admin and candidate apps, Azure AD sign-in' },
      { name: 'Capex pipeline', what: 'Tracks capital projects, sites and equipment' },
      { name: 'Conflict of interest declarations', what: 'Role-based declaration and review workflow' },
      { name: 'DI report system', what: 'Data entry and reporting with Playwright end-to-end tests' },
      { name: 'Document Q&A', what: 'Chat over internal documents' },
    ],
  },
  {
    org: 'DREEF',
    items: [
      { name: 'DREEF AI', what: 'Answers staff questions from the internal policy library' },
      { name: 'LegalDesk', what: 'Legal matters, documents and approvals' },
      { name: 'InvestPact', what: 'Investor-facing platform for renewable energy projects' },
      { name: 'Origination', what: 'Onboarding for project developers' },
    ],
  },
]

// Older and smaller things, kept because people still ask about them.
export const archive: ProjectLink[] = [
  { label: 'Dezirely (Flutter, Play Store)', href: 'https://play.google.com/store/apps/details?id=com.nayric.dezirely.dezirely&hl=en' },
  { label: 'Movie database', href: 'https://movie-db-react-inky.vercel.app/' },
  { label: 'Wardrobe manager', href: 'https://wardrobe-manager-vue-js.vercel.app/' },
  { label: 'Wristwatch store', href: 'https://wristwatch-typescrpt-project.vercel.app/' },
  { label: 'Realtime chat', href: 'https://chat-rel.vercel.app/' },
  { label: 'Fashion Street', href: 'https://fashion-street-teal.vercel.app' },
  { label: 'E-commerce filters', href: 'https://e-commerce-filtering-react-project.vercel.app' },
]
