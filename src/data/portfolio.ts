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
    company: 'DGateway In',
    role: 'Associate Software Engineer',
    period: 'Sep 2025 – Present',
    location: 'Malabe, Sri Lanka',
    type: 'Full-Time',
    color: 'emerald',
    logo: dgatewayinLogo,
    url: 'https://dgatewayin.com/',
    description:
      'Developing and maintaining full-stack applications while supporting testing, deployment, optimization, and project handover.',
    highlights: [
      'Developing MERN stack applications with reusable React components and RESTful backend services',
      'Building APIs with CRUD operations, business logic, request validation, error handling, and data management',
      'Implementing secure password hashing and JWT-based authentication workflows',
      'Supporting debugging, refactoring, QA verification, deployment setup, and CI/CD workflows',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'CI/CD'],
  },
  {
    company: 'Freelance',
    role: 'Full-Stack & AI Engineer',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'Self-Employed',
    color: 'emerald',
    logo: freelanceLogo,
    description:
      'Developing high-performance full-stack applications with a focus on AI integration and scalable architectures.',
    highlights: [
      'Architecting custom web solutions for diverse clients using MERN, Next.js, and Cloud-native technologies',
      'Implementing on-device and cloud-based AI models (NLP, Computer Vision) to build intelligent features',
      'Managing complete product lifecycles from conceptualization to production deployment and maintenance',
      'Specializing in bridging the gap between robust backend systems and modern Machine Learning pipelines',
    ],
    tags: [
      'Next.js', 'Spring Boot', 'Laravel', 'Python', 'Flutter', 
      'PyTorch', 'NLP (Transformers)', 'Generative AI', 'AWS'
    ],
  },
  {
    company: 'Remotechies',
    role: 'Software Engineer Intern (Remote)',
    period: 'Jun 2025 – Dec 2025',
    location: 'Batticaloa, Sri Lanka',
    type: 'Internship',
    color: 'violet',
    logo: remotechiesLogo,
    url: 'https://www.remotechies.com/',
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
    url: 'https://dgatewayin.com/',
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
    title: 'PortIntel',
    subtitle: 'Offline Port Intelligence & Safety Supervisor',
    description:
      'An offline-first desktop utility that analyzes active TCP and UDP ports, classifies process risk with embedded machine learning, and prevents unsafe process termination.',
    tags: ['React', 'TypeScript', 'Tauri', 'Rust', 'ONNX', 'Tailwind CSS'],
    highlight: 'Desktop AI',
    highlightColor: 'blue',
    features: [
      'Scans active sockets across Windows, macOS, and Linux using native system tools',
      'Runs offline ONNX inference through a Rust backend without cloud API keys',
      'Groups ports by development servers, databases, Docker containers, system daemons, and utilities',
      'Uses hard safety overrides to prevent termination of protected operating-system processes',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/PortIntel',
    demo: '#',
    accent: 'from-blue-500 to-cyan-600',
    accentLight: 'bg-blue-50 border-blue-200',
  },
  {
    title: 'ProteqHer SOS Listener',
    subtitle: 'AI-Powered Emergency Response · In Development',
    description:
      'A high-reliability safety application that utilizes on-device ML to monitor for distress signals and trigger instant emergency assistance.',
    tags: ['Flutter', 'Dart', 'TensorFlow Lite', 'Machine Learning', 'Android Services'],
    highlight: 'ML / Mobile',
    highlightColor: 'pink',
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
    accent: 'from-pink-500 to-rose-600',
    accentLight: 'bg-pink-50 border-pink-200',
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
    highlightColor: 'indigo',
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
    accent: 'from-indigo-500 to-blue-600',
    accentLight: 'bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Appointment Booking System',
    subtitle: 'Next.js Booking Platform',
    description:
      'A comprehensive booking system designed for service providers to manage appointments and schedules efficiently.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    highlight: 'Full-Stack',
    highlightColor: 'cyan',
    features: [
      'Developed a responsive appointment management system with secure authentication',
      'Integrated calendar views and real-time availability tracking for users',
      'Optimized backend workflows for faster data retrieval and scheduling',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/appointment-booking-system',
    demo: '#',
    accent: 'from-cyan-500 to-sky-600',
    accentLight: 'bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Resume Matcher AI',
    subtitle: 'AI-Powered Screening Tool',
    description:
      'An intelligent system that analyzes resumes and matches them to job descriptions using semantic similarity.',
    tags: ['Python', 'Streamlit', 'SBERT', 'TF-IDF'],
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
      'Deep learning models for detecting brain tumors from MRI scans using TensorFlow and established CNN architectures.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'VGG19', 'InceptionV3', 'YOLOv11'],
    highlight: 'Deep Learning',
    highlightColor: 'rose',
    features: [
      'Trained CNN models for high-accuracy medical image classification',
      'Automated preprocessing of MRI data for consistent inference',
      'Documented training progress and evaluation metrics in notebooks',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/Brain-Tumor-Detection-Models',
    demo: '#',
    accent: 'from-rose-500 to-red-600',
    accentLight: 'bg-rose-50 border-rose-200',
  },
  {
    title: 'Bakery Management',
    subtitle: 'Spring Boot Operations System',
    description:
      'A Java and JSP application for managing bakery sales, inventory, and order processing with file-based persistence.',
    tags: ['Spring Boot', 'Java', 'JSP', 'File-Based Persistence'],
    highlight: 'Desktop App',
    highlightColor: 'amber',
    features: [
      'Full inventory and order management system for daily operations',
      'Automated sales report generation and revenue tracking',
      'Spring Boot services and JSP views for a user-friendly retail operations workflow',
    ],
    stars: 0,
    forks: 0,
    github: 'https://github.com/Laksopan23/Bakery-Management',
    demo: '#',
    accent: 'from-amber-500 to-orange-600',
    accentLight: 'bg-amber-50 border-amber-200',
  },
];

const featuredProjectOrder = [
  'PortIntel',
  'Appointment Booking System',
  'EduInsight',
  'Resume Matcher AI',
  'SkillZone',
  'ProteqHer SOS Listener',
];

projects.sort((a, b) => {
  const aIndex = featuredProjectOrder.indexOf(a.title);
  const bIndex = featuredProjectOrder.indexOf(b.title);
  return (aIndex === -1 ? featuredProjectOrder.length : aIndex) -
    (bIndex === -1 ? featuredProjectOrder.length : bIndex);
});
