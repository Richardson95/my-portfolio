import { useState, useEffect } from 'react'

interface Project {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  type: 'web' | 'mobile'
}

interface Experience {
  company: string
  role: string
  period: string
  description: string[]
  type: 'contract' | 'full-time'
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = {
    frontend: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'Redux', 'Context API'],
    mobile: ['React Native', 'Expo', 'Flutter', 'Redux Toolkit'],
    styling: ['Tailwind CSS', 'Material UI', 'CSS3', 'Responsive Design'],
    backend: ['Firebase', 'REST APIs', 'GraphQL'],
    tools: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'Jira', 'Figma', 'Postman']
  }

  const experiences: Experience[] = [
    {
      company: 'InfraCredit',
      role: 'Frontend Developer',
      period: 'September 2025 - Present',
      type: 'contract',
      description: [
        'Built enterprise-grade Professional Development Platform using Next.js 15, TypeScript, and Chakra UI, serving 500+ employees',
        'Integrated Microsoft Azure AD for SSO authentication, implemented advanced state management with TanStack Query reducing API calls by 60%',
        'Architected role-based access control system with three user levels and optimized performance through strategic caching and lazy loading',
        'Engineered comprehensive HR platform featuring employee management, skills assessment, career planning, and analytics reporting'
      ]
    },
    {
      company: 'HandyPros',
      role: 'Mobile App Developer',
      period: 'May 2025 - September 2025',
      type: 'contract',
      description: [
        'Expanded support for multiple professional categories, allowing users to register under new roles and increasing engagement across broader user types',
        'Contributed to scaling efforts as the app reached 1,000+ active users, ensuring stability and performance under growing traffic',
        'Optimized app performance by reducing profile load times and fixing data synchronization issues related to user profile updates'
      ]
    },
    {
      company: 'SheCodeAfrica',
      role: 'Front End Developer Facilitator',
      period: 'November 2024 - March 2025',
      type: 'contract',
      description: [
        'Mentored, tutored, and guided over 50 women in mastering core frontend technologies, including JavaScript, ReactJS, and Next.js, HTML & CSS',
        'Mentored the top-performing student in their project submission, conducting code reviews and mentoring to enhance development practices',
        'Designed and delivered engaging and practical learning curriculum and modules tailored to frontend development'
      ]
    },
    {
      company: 'Wazobia Academy',
      role: 'Front End (Mobile) Developer',
      period: 'August 2024 - January 2025',
      type: 'contract',
      description: [
        'Developed and deployed cross-platform mobile applications using ReactNative and Expo, creating a seamless onboarding experience for 10,000 projected Western learners',
        'Integrated RESTful and GraphQL APIs to optimize data fetching and app performance',
        'Conducted unit and integration testing using Jest and React Testing Library, improving app reliability',
        'Collaborated closely with backend developers and UX/UI designers to create a seamless text and voice learning experience'
      ]
    },
    {
      company: 'Logiccode Academy',
      role: 'Front End Web Developer',
      period: 'January 2024 - June 2024',
      type: 'contract',
      description: [
        'Designed and maintained Vue.js with Tailwind CSS styling web applications, reducing load times by 40%',
        'Increased website page load time by 10% by implementing lazy loading and reducing unnecessary re-renders',
        'Implemented interactive learning features using responsive design principles to ensure web applications were accessible and visually appealing'
      ]
    },
    {
      company: 'Savertech',
      role: 'Web Developer',
      period: 'February 2023 - December 2023',
      type: 'full-time',
      description: [
        'Spearheaded troubleshooting processes to address cross-browser compatibility issues, improved application functionality',
        'Led debugging efforts to resolve cross-browser inconsistencies, enhanced application functionality, and boosted performance',
        'Developed the Cardify and Savertech websites, which have over 5,000 monthly users and extensive functionalities and dynamic features'
      ]
    },
    {
      company: 'Dezirely',
      role: 'Front End Mobile Developer',
      period: 'March 2022 - December 2022',
      type: 'full-time',
      description: [
        'Collaborated with UX/UI designers to transform design mockups into responsive web pages, ensuring a seamless user experience',
        'Managed app deployment and updates on Google Play Store & Apple App Store',
        'Led debugging efforts to resolve cross-browser inconsistencies, enhanced application functionality'
      ]
    },
    {
      company: 'VikkyMore Multi-business',
      role: 'Junior Front End Developer',
      period: 'March 2021 - December 2021',
      type: 'full-time',
      description: [
        'Developed the user interface for a crypto trading mobile app with over 2000 downloads',
        'Implemented Redux Toolkit for efficient state management in both web and mobile apps',
        'Developed the web application for an agriculture investment platform, making the UI responsive and interactive using React.js, CSS, and Material UI'
      ]
    }
  ]

  const projects: Project[] = [
    {
      title: 'Kudi9ja Pro',
      description: 'Advanced financial technology platform dashboard with comprehensive analytics, transaction management, and reporting features.',
      image: '/kudi9ja_logo_greywordmark_transparent.png',
      link: 'https://www.kudi9ja.com/',
      tags: ['React.js', 'TypeScript', 'FinTech'],
      type: 'web'
    },
    {
      title: 'Lawvee - JAMB Prep',
      description: 'Comprehensive mobile application for JAMB examination preparation. Available on both iOS and Android with interactive study materials.',
      image: '/lawvee.png',
      link: 'https://lawvee.com/',
      tags: ['Flutter', 'Dart', 'Mobile', 'Education'],
      type: 'mobile'
    },
    {
      title: 'Spiritual Consult',
      description: 'Nigerian digital platform connecting users with verified spiritual practitioners across Christian, Islamic, and traditional faith traditions. Features secure consultations, a spiritual marketplace, and herbal medicine services.',
      image: '/spiritual-consult.png',
      link: 'https://spiritual-consult.vercel.app/',
      tags: ['React.js', 'TypeScript', 'Marketplace'],
      type: 'web'
    },
    {
      title: 'Logiccode Academy',
      description: 'Educational platform built with Vue.js and Tailwind CSS. Improved load times by 40% and enhanced user experience with interactive learning features.',
      image: '/logic.jpg',
      link: 'https://logiccode.vercel.app/',
      tags: ['Vue.js', 'Tailwind CSS', 'Education'],
      type: 'web'
    },
    {
      title: 'VikkyMore',
      description: 'Multi-business platform including crypto trading and agriculture investment with over 2000+ downloads and active user base.',
      image: '/vikkymore.png',
      link: 'https://www.vikkymore.com/home',
      tags: ['React.js', 'Redux', 'FinTech'],
      type: 'web'
    },
    {
      title: 'AnyWorkX',
      description: 'Mobile application connecting skilled artisans and service providers to users across Africa. Streamlining the service booking process.',
      image: '/anyworkX.jpg',
      link: 'https://anyworkx.africa/',
      tags: ['React Native', 'Mobile', 'Services'],
      type: 'mobile'
    },
    {
      title: 'Pennidrop',
      description: 'Modern financial services platform offering seamless payment solutions with intuitive UI and secure transaction processing.',
      image: '/Pennidrop-Logo.jpg',
      link: 'https://pennidrop-beryl.vercel.app/',
      tags: ['Next.js', 'TypeScript', 'FinTech'],
      type: 'web'
    },
    {
      title: 'Wazobia Academy',
      description: 'Cross-platform language learning mobile application built with React Native and Expo, featuring text and voice learning experiences for 10,000+ projected Western learners.',
      image: '',
      link: '#',
      tags: ['React Native', 'Expo', 'Mobile', 'Education'],
      type: 'mobile'
    },
    {
      title: 'Dezirely',
      description: 'Flutter dating platform mobile application deployed on Google Play Store and Apple App Store, connecting users with seamless matchmaking experience.',
      image: '',
      link: 'https://play.google.com/store/apps/details?id=com.nayric.dezirely.dezirely&hl=en',
      tags: ['Flutter', 'Dart', 'Mobile', 'Social'],
      type: 'mobile'
    },
    {
      title: 'Real-time Chat App',
      description: 'Modern chat application with real-time messaging, online status, typing indicators, and Firebase backend integration.',
      image: '',
      link: 'https://chat-rel.vercel.app/',
      tags: ['Vue.js', 'Firebase', 'Real-time'],
      type: 'web'
    },
    {
      title: 'Wardrobe Manager',
      description: 'Elegant Vue.js application for managing personal wardrobe, outfit planning, and style recommendations with visual organization.',
      image: '',
      link: 'https://wardrobe-manager-vue-js.vercel.app/',
      tags: ['Vue.js', 'Tailwind CSS', 'Lifestyle'],
      type: 'web'
    },
    {
      title: 'Wristwatch Store',
      description: 'E-commerce platform with TypeScript featuring extensive product catalog, shopping cart, secure checkout, and order management.',
      image: '',
      link: 'https://wristwatch-typescrpt-project.vercel.app/',
      tags: ['TypeScript', 'React.js', 'E-commerce'],
      type: 'web'
    },
    {
      title: 'Movie Database',
      description: 'Feature-rich movie browsing application with advanced search, filtering, ratings, reviews, and detailed movie information.',
      image: '',
      link: 'https://movie-db-react-inky.vercel.app/',
      tags: ['React.js', 'API Integration', 'Entertainment'],
      type: 'web'
    },
    {
      title: 'BabyBloom',
      description: 'Baby development tracking application that helps parents monitor and record their child\'s growth and developmental milestones with an intuitive and friendly interface.',
      image: '/babybloom.png',
      link: 'https://baby-boom-ochre.vercel.app/',
      tags: ['React.js', 'TypeScript', 'Health'],
      type: 'web'
    }
  ]

  const handleResumeDownload = () => {
    window.open('https://docs.google.com/document/d/19gmuUQnGjGio77CjziKZxUoVhyaSCCWNNFvh9j4ee0U/edit?tab=t.b9dgv945hfbi', '_blank')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Main floating circles */}
        <div className="floating-circle w-64 h-64 top-10 -left-32 opacity-20" style={{ animationDelay: '0s' }}></div>
        <div className="floating-circle w-96 h-96 top-1/3 -right-48 opacity-15" style={{ animationDelay: '2s' }}></div>
        <div className="floating-circle w-48 h-48 bottom-20 left-1/4 opacity-18" style={{ animationDelay: '4s' }}></div>
        <div className="floating-circle w-80 h-80 bottom-0 right-1/4 opacity-12" style={{ animationDelay: '1s' }}></div>

        {/* Additional small floating circles */}
        <div className="floating-circle w-32 h-32 top-1/4 left-1/3 opacity-10" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
        <div className="floating-circle w-40 h-40 top-2/3 right-1/3 opacity-12" style={{ animationDelay: '5s', animationDuration: '10s' }}></div>
        <div className="floating-circle w-24 h-24 top-1/2 left-1/4 opacity-8" style={{ animationDelay: '2.5s', animationDuration: '7s' }}></div>
        <div className="floating-circle w-56 h-56 bottom-1/3 -left-20 opacity-14" style={{ animationDelay: '1.5s', animationDuration: '9s' }}></div>
        <div className="floating-circle w-36 h-36 top-3/4 right-1/4 opacity-10" style={{ animationDelay: '4.5s', animationDuration: '11s' }}></div>

        {/* Tiny accent circles */}
        <div className="floating-circle w-20 h-20 top-1/3 right-1/2 opacity-6" style={{ animationDelay: '6s', animationDuration: '6s' }}></div>
        <div className="floating-circle w-16 h-16 bottom-1/4 left-1/2 opacity-8" style={{ animationDelay: '3.5s', animationDuration: '8.5s' }}></div>
        <div className="floating-circle w-28 h-28 top-1/6 right-1/6 opacity-7" style={{ animationDelay: '5.5s', animationDuration: '7.5s' }}></div>
      </div>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/2349039087940"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group animate-bounce-gentle"
        aria-label="Contact via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold gradient-text-animated hover:scale-110 transition-transform"
            >
              EA
            </button>

            <div className="hidden md:flex space-x-1">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 capitalize font-medium ${
                    activeSection === section
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={handleResumeDownload}
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 font-medium shine-effect"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fadeIn">
            {/* Profile Image */}
            <div className="mb-10 mt-8 animate-float">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl glow-effect relative group">
                <img
                  src="/IMG-20220914-WA0008- (1).png"
                  alt="Emmanuel Adeyemo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold">EA</div>';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slideInLeft">
              Emmanuel Iyanuoluwa{' '}
              <span className="gradient-text-animated">
                Adeyemo
              </span>
            </h1>

            <div className="mb-8 animate-slideInRight">
              <p className="text-xl md:text-2xl text-gray-600 font-medium inline-block px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
                <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  Front-End Web Developer | Mobile Developer
                </span>
              </p>
            </div>

            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-200">
              5+ years of experience building scalable apps using React.js, Next.js, Vue.js, React Native, and TypeScript.
              Passionate about enhancing UX and delivering high-quality digital products.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fadeIn delay-300">
              <a
                href="mailto:emmadeyemo5@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 text-gray-700 font-medium shine-effect group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Me
              </a>

              <a
                href="https://github.com/Richardson95?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 font-medium shine-effect group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/emmanuel-adeyemo-84115025a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 font-medium shine-effect group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fadeIn delay-400 pb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-medium text-lg shine-effect animate-gradient group"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-medium text-lg border-2 border-gray-200 shine-effect group"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center animate-fadeIn">
            About <span className="gradient-text-animated">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <div className="bg-linear-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 shine-effect">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-linear-to-b from-blue-600 to-purple-600 rounded-full"></span>
                  Professional Summary
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Front-End Web & Mobile Developer with 5+ years of experience building scalable applications using modern technologies like React.js, Next.js, Vue.js, React Native, and TypeScript.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I've successfully improved page load speeds by 40%, optimized app performance for 5,000+ users, and mentored 50 women from learners to intern developers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Passionate about enhancing user experience, implementing efficient state management solutions, and delivering high-quality digital products that make a real impact.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slideInRight">
              <div className="bg-linear-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white text-center hover:scale-110 hover:rotate-3 transition-all duration-300 shine-effect group cursor-pointer">
                <div className="text-4xl font-bold mb-2 group-hover:scale-125 transition-transform">5+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="bg-linear-to-br from-purple-600 to-purple-700 p-6 rounded-2xl text-white text-center hover:scale-110 hover:rotate-3 transition-all duration-300 shine-effect group cursor-pointer">
                <div className="text-4xl font-bold mb-2 group-hover:scale-125 transition-transform">20+</div>
                <div className="text-purple-100">Projects Completed</div>
              </div>
              <div className="bg-linear-to-br from-green-600 to-green-700 p-6 rounded-2xl text-white text-center hover:scale-110 hover:rotate-3 transition-all duration-300 shine-effect group cursor-pointer">
                <div className="text-4xl font-bold mb-2 group-hover:scale-125 transition-transform">5000+</div>
                <div className="text-green-100">Users Served</div>
              </div>
              <div className="bg-linear-to-br from-orange-600 to-orange-700 p-6 rounded-2xl text-white text-center hover:scale-110 hover:rotate-3 transition-all duration-300 shine-effect group cursor-pointer">
                <div className="text-4xl font-bold mb-2 group-hover:scale-125 transition-transform">50</div>
                <div className="text-orange-100">Women Mentored</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center animate-fadeIn">
            Technical <span className="gradient-text-animated">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 shine-effect animate-fadeIn delay-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Frontend Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 hover:scale-110 transition-all cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 shine-effect animate-fadeIn delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mobile Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 hover:scale-110 transition-all cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 shine-effect animate-fadeIn delay-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Styling & Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.styling.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-lg text-sm font-medium hover:bg-pink-100 hover:scale-110 transition-all cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 shine-effect animate-fadeIn delay-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Backend & APIs</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 hover:scale-110 transition-all cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 shine-effect md:col-span-2 animate-fadeIn delay-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">DevOps & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-100 hover:scale-110 transition-all cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center animate-fadeIn">
            Work <span className="gradient-text-animated">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 border border-gray-100 shine-effect animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{exp.role}</h3>
                    <p className="text-lg font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-gray-600 font-medium">{exp.period}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.type === 'contract'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {exp.type === 'contract' ? 'Contract' : 'Full-Time'}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center animate-fadeIn">
            Featured <span className="gradient-text-animated">Projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg animate-fadeIn delay-100">A selection of my recent work and contributions</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 overflow-hidden relative ${
                  project.image
                    ? 'bg-linear-to-br from-blue-100 to-purple-100'
                    : project.title.includes('Chat')
                      ? 'bg-linear-to-br from-green-400 via-blue-500 to-purple-600'
                      : project.title.includes('Movie')
                        ? 'bg-linear-to-br from-red-500 via-pink-500 to-yellow-500'
                        : project.title.includes('Wristwatch')
                          ? 'bg-linear-to-br from-gray-700 via-gray-900 to-black'
                          : project.title.includes('Wardrobe')
                            ? 'bg-linear-to-br from-pink-400 via-purple-400 to-indigo-500'
                            : project.title.includes('Wazobia')
                              ? 'bg-linear-to-br from-orange-400 via-amber-500 to-yellow-500'
                              : project.title.includes('Dezirely')
                                ? 'bg-linear-to-br from-teal-400 via-cyan-500 to-blue-500'
                                : 'bg-linear-to-br from-blue-100 to-purple-100'
                }`}>
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/20 text-8xl font-bold group-hover:scale-110 transition-transform">
                        {project.title.includes('Chat') ? '💬'
                          : project.title.includes('Movie') ? '🎬'
                          : project.title.includes('Wristwatch') ? '⌚'
                          : project.title.includes('Wardrobe') ? '👔'
                          : project.title.includes('Wazobia') ? '📚'
                          : project.title.includes('Dezirely') ? '🛍️'
                          : '🚀'}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-medium hover:scale-110 transition-transform">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12 animate-fadeIn delay-300">
            <a
              href="https://github.com/Richardson95?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-medium text-lg shine-effect animate-gradient group"
            >
              View All Projects on GitHub
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 via-purple-600 to-blue-600 text-white relative z-10 animate-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Let's Work Together</h2>
          <p className="text-xl mb-16 text-blue-100 max-w-2xl mx-auto animate-fadeIn delay-100">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a
              href="mailto:emmadeyemo5@gmail.com"
              className="glass-effect p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shine-effect animate-fadeIn delay-200"
            >
              <svg className="w-12 h-12 mx-auto mb-4 animate-bounce-gentle" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-100">emmadeyemo5@gmail.com</p>
            </a>

            <a
              href="https://wa.me/2349039087940"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shine-effect animate-fadeIn delay-300"
            >
              <svg className="w-12 h-12 mx-auto mb-4 animate-bounce-gentle" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.3s' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-blue-100">+234 903 908 7940</p>
            </a>

            <a
              href="tel:+2349039087940"
              className="glass-effect p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shine-effect animate-fadeIn delay-400"
            >
              <svg className="w-12 h-12 mx-auto mb-4 animate-bounce-gentle" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '0.6s' }}>
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+234 903 908 7940</p>
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-8 animate-fadeIn delay-500">
            <a
              href="https://github.com/Richardson95?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-12"
              aria-label="GitHub"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-adeyemo-84115025a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-125 hover:rotate-12"
              aria-label="LinkedIn"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
              </svg>
            </a>
          </div>

          <button
            onClick={handleResumeDownload}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-medium text-lg inline-flex items-center gap-2 shine-effect group animate-fadeIn delay-600"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-4 gradient-text-animated">
                Emmanuel Adeyemo
              </h3>
              <p className="text-gray-400">
                Front-End Web & Mobile Developer passionate about creating exceptional digital experiences.
              </p>
            </div>

            <div className="animate-fadeIn delay-100">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-gray-400 hover:text-white transition-all capitalize hover:translate-x-2"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div className="animate-fadeIn delay-200">
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-white transition-colors">emmadeyemo5@gmail.com</p>
                <p className="hover:text-white transition-colors">+234 903 908 7940</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/Richardson95?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-125">GitHub</a>
                  <a href="https://www.linkedin.com/in/emmanuel-adeyemo-84115025a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-125">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="animate-fadeIn">&copy; {new Date().getFullYear()} Emmanuel Iyanuoluwa Adeyemo. All rights reserved.</p>
            <p className="mt-2 text-sm animate-fadeIn delay-100">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
