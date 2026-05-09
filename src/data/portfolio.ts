import remotechiesLogo from '../assets/companies/remotechies.png';
import dgatewayinLogo from '../assets/companies/dgatewayin.png';
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
    company: 'Remotechies',
    role: 'Software Engineer Intern (Remote)',
    period: 'Jun 2025 – Dec 2025',
    location: 'Sri Lanka',
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
    title: 'Autism Care',
    subtitle: 'Healthcare Management System',
    description:
      'A professional platform for autism care, focused on managing project milestones, documents, and team coordination.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'],
    highlight: 'Healthcare AI',
    highlightColor: 'blue',
    features: [
      'Developed a comprehensive management system for autism research and care',
      'Implemented milestone tracking and collaborative document management',
      'Integrated real-time team coordination tools for specialized therapy',
    ],
    stars: 14,
    forks: 3,
    github: 'https://github.com/Laksopan23/Autism-Care',
    demo: '#',
    accent: 'from-blue-500 to-indigo-600',
    accentLight: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'SkinAI',
    subtitle: 'Multimodal Dermatological Diagnosis',
    description:
      'A comprehensive research project developing a multimodal AI system for accurate and inclusive dermatological diagnosis.',
    tags: ['JavaScript', 'Python', 'React', 'Machine Learning'],
    highlight: 'Medical AI',
    highlightColor: 'violet',
    features: [
      'Building inclusive AI models for diverse dermatological skin conditions',
      'Implemented multimodal data processing for high-accuracy diagnosis',
      'Developed a research-focused dashboard for diagnostic visualization',
    ],
    stars: 11,
    forks: 2,
    github: 'https://github.com/Laksopan23/SkinAI',
    demo: '#',
    accent: 'from-violet-500 to-purple-600',
    accentLight: 'bg-violet-50 border-violet-200',
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
    stars: 18,
    forks: 5,
    github: 'https://github.com/Laksopan23/appointment-booking-system',
    demo: '#',
    accent: 'from-blue-500 to-cyan-600',
    accentLight: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'SkillZone',
    subtitle: 'Social Learning Platform',
    description:
      'A social network for knowledge sharing, allowing users to connect, post updates, and engage with educational content.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    highlight: 'Social App',
    highlightColor: 'emerald',
    features: [
      'Built a dynamic social feed with post, like, and comment functionalities',
      'Implemented user profiles and follow systems for community engagement',
      'Developed a robust authentication system with secure session management',
    ],
    stars: 12,
    forks: 3,
    github: 'https://github.com/Laksopan23/SkillZone',
    demo: '#',
    accent: 'from-emerald-500 to-teal-600',
    accentLight: 'bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Resume Matcher AI',
    subtitle: 'NLP-Powered Screening Tool',
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
    stars: 15,
    forks: 4,
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
    stars: 9,
    forks: 2,
    github: 'https://github.com/Laksopan23/Brain-Tumor-Detection-Models',
    demo: '#',
    accent: 'from-purple-500 to-pink-600',
    accentLight: 'bg-purple-50 border-purple-200',
  },
  {
    title: 'EduInsight',
    subtitle: 'Educational Analytics Platform',
    description:
      'A web-based platform for institutional analytics, tracking student performance and engagement.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Data Visualization'],
    highlight: 'Analytics',
    highlightColor: 'emerald',
    features: [
      'Created dashboards for student grade tracking and performance trends',
      'Implemented data visualization for institutional reporting',
      'Developed student profiles with detailed progress metrics',
    ],
    stars: 7,
    forks: 1,
    github: 'https://github.com/Laksopan23/EduInsight',
    demo: '#',
    accent: 'from-teal-400 to-emerald-500',
    accentLight: 'bg-teal-50 border-teal-200',
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
    stars: 6,
    forks: 1,
    github: 'https://github.com/Laksopan23/Bakery-Management',
    demo: '#',
    accent: 'from-amber-500 to-orange-600',
    accentLight: 'bg-amber-50 border-amber-200',
  },
];
