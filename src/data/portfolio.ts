import remotechiesLogo from '../assets/companies/remotechies.png';
import dgatewayinLogo from '../assets/companies/dgatewayin.png';
import freelanceLogo from '../assets/companies/freelance.png';
import { Project, Experience } from '../types';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const experiences: Experience[] = [
  {
    company: 'Freelance',
    role: 'Senior Software Engineer | AI Architect',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'Self-Employed',
    color: 'emerald',
    logo: freelanceLogo, 
    description:
      'Architecting intelligent, data-driven ecosystems specializing in the intersection of high-performance web systems and modern Artificial Intelligence.',
    highlights: [
      'Designing and deploying scalable distributed systems using MERN, Next.js 15, and Microservices architecture',
      'Implementing sophisticated AI features using LLMs (OpenAI, LangChain) and custom Computer Vision models for automated workflows',
      'Orchestrating cloud-native deployments on AWS and Azure with a core focus on MLOps and CI/CD automation',
      'Providing technical leadership and architectural strategy to transform standard platforms into AI-ready ecosystems',
    ],
    tags: ['Next.js 15', 'Python', 'TensorFlow', 'LangChain', 'AWS SageMaker', 'Kubernetes', 'MLOps'],
  },
  {
    company: 'Remotechies',
    role: 'Software Engineer Intern (Remote)',
    period: 'Jun 2025 – Dec 2025',
    location: 'Batticaloa, Sri Lanka',
    type: 'Internship',
    color: 'violet',
    logo: remotechiesLogo,
    description:
      'Contributed to the development and deployment of full-stack applications in a remote, agile team environment.',
    highlights: [
      'Developed full-stack features using Next.js and Django, building REST APIs and integrating frontend components with backend services',
      'Implemented mobile workflows using Flutter and integrated PostgreSQL and Supabase for data storage and authentication',
      'Deployed and managed applications using Coolify, supporting container-based environments and promoting efficient dev workflows',
      'Contributed through code reviews, Git-based collaboration, sprint planning, and daily standups in a remote team',
    ],
    tags: ['Next.js', 'Django', 'Flutter', 'PostgreSQL', 'Supabase', 'Coolify'],
  },
  {
    company: 'DGatewayIn',
    role: 'Software Engineer Intern',
    period: 'Mar 2025 – Sep 2025',
    location: 'Malabe, Sri Lanka',
    type: 'Internship',
    color: 'blue',
    logo: dgatewayinLogo,
    description:
      'Focused on MERN stack development, production deployments, and application optimization.',
    highlights: [
      'Built and maintained MERN stack modules with responsive UI using Tailwind CSS and reusable React components',
      'Integrated backend APIs and improved data flow, validation, and error handling across the application',
      'Deployed builds on AWS and Hostinger, managing environment variables, production updates, and release readiness',
      'Debugged and optimized existing codebases to improve performance, stability, and maintainability',
    ],
    tags: ['React', 'Node.js', 'Tailwind CSS', 'AWS', 'Hostinger', 'Optimization'],
  },
];

export const projects: Project[] = [
  {
    title: 'ProteqHer SOS Listener',
    subtitle: 'AI-Powered Emergency Response',
    description:
      'A high-reliability safety application that utilizes on-device ML to monitor for distress signals and trigger instant emergency assistance.',
    tags: ['Flutter', 'Dart', 'Machine Learning', 'Android Services', 'Safety Tech'],
    highlight: 'ML / Mobile',
    highlightColor: 'violet',
    features: [
      'Monitors for screams or distress calls using on-device sound classification models',
      'Runs as a persistent Android Foreground Service to ensure protection even when locked',
      'Triggers instant emergency assistance and notifications during distress situations',
      'Privacy-focused architecture with all sound processing happening locally on the device',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/proteqher-sos-listener',
    demo: '#',
    accent: 'from-violet-500 to-purple-600',
    accentLight: 'bg-violet-50 border-violet-200',
  },
  {
    title: 'SkillZone',
    subtitle: 'Social Learning & Skill-Sharing Platform',
    description:
      'A modern, full-stack community platform for skill-sharing, showcasing learning journeys, and professional networking.',
    tags: ['Spring Boot', 'React', 'MongoDB', 'Spring Security', 'OAuth2'],
    highlight: 'Full-Stack Social',
    highlightColor: 'emerald',
    features: [
      'Secure registration with Google OAuth2 and email/password authentication',
      'Dynamic social feed with rich content support, media attachments, and engagement tools',
      'Learning progress tracking for specific skills with milestone documentation',
      'Real-time notification system for activity alerts with instant status updates',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/SkillZone',
    demo: '#',
    accent: 'from-emerald-500 to-teal-600',
    accentLight: 'bg-emerald-50 border-emerald-200',
  },
  {
    title: 'EduInsight',
    subtitle: 'Comprehensive School Management',
    description:
      'A comprehensive Laravel-based management system for students, teachers, guardians, and academic operations.',
    tags: ['Laravel 10', 'PHP 8.1', 'MySQL', 'OpenAI', 'DomPDF'],
    highlight: 'Enterprise System',
    highlightColor: 'blue',
    features: [
      'Role-based management for 5 user types: Admin, Teacher, Student, Parent, and Guardian',
      'Academic tracking with exam scheduling, results management, and PDF report generation',
      'Integrated communication system with scheduled announcements and meeting links',
      'AI-powered student assistant powered by OpenAI for curriculum-specific support',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/EduInsight',
    demo: '#',
    accent: 'from-blue-500 to-indigo-600',
    accentLight: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Appointment Booking System',
    subtitle: 'MERN Stack Platform',
    description:
      'A comprehensive booking system designed for service providers to manage appointments and schedules efficiently.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    highlight: 'Full-Stack',
    highlightColor: 'blue',
    features: [
      'Developed a responsive appointment management system with secure authentication',
      'Integrated calendar views and real-time availability tracking for users',
      'Optimized backend workflows for faster data retrieval and scheduling',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/appointment-booking-system',
    demo: '#',
    accent: 'from-blue-500 to-cyan-600',
    accentLight: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'Resume Matcher AI',
    subtitle: 'AI-Powered Screening Tool',
    description:
      'An intelligent system that analyzes resumes and matches them to job descriptions using semantic similarity.',
    tags: ['Python', 'SBERT', 'NLP', 'Flask', 'React'],
    highlight: 'AI / ML',
    highlightColor: 'violet',
    features: [
      'Utilized Sentence-BERT for semantic text analysis and similarity scoring',
      'Developed a React dashboard for easy result visualization',
      'Optimized the matching engine for high accuracy across various job domains',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/resume_matcher_ai',
    demo: '#',
    accent: 'from-violet-500 to-purple-600',
    accentLight: 'bg-violet-50 border-violet-200',
  },
  {
    title: 'Brain Tumor Detection',
    subtitle: 'Medical AI Classification',
    description:
      'Deep learning models for detecting brain tumors from MRI scans using CNN architectures.',
    tags: ['Python', 'PyTorch', 'CNN', 'Jupyter'],
    highlight: 'Deep Learning',
    highlightColor: 'violet',
    features: [
      'Trained CNN models for high-accuracy medical image classification',
      'Automated preprocessing of MRI data for consistent inference',
      'Documented training progress and evaluation metrics in notebooks',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/Brain-Tumor-Detection-Models',
    demo: '#',
    accent: 'from-purple-500 to-pink-600',
    accentLight: 'bg-purple-50 border-purple-200',
  },
  {
    title: 'Bakery Management',
    subtitle: 'Java Operations System',
    description:
      'A desktop application for managing bakery sales, inventory, and order processing.',
    tags: ['Java', 'MySQL', 'Inventory Management'],
    highlight: 'Desktop App',
    highlightColor: 'emerald',
    features: [
      'Full inventory and order management system for daily operations',
      'Automated sales report generation and revenue tracking',
      'User-friendly desktop interface built for retail staff',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/Bakery-Management',
    demo: '#',
    accent: 'from-amber-500 to-orange-600',
    accentLight: 'bg-amber-50 border-amber-200',
  },
];
