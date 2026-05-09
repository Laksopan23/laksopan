import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';

import profileImg from '../assets/laksopan.png';

// SVG icons for social links
const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [-100, 100], [12, -12]);
  const rotateY = useTransform(xSpring, [-100, 100], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          ref={cardRef}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative cursor-pointer"
        >
          {/* Card glow */}
          <div
            className="absolute -inset-1 rounded-3xl transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, #e2e8f0, #cbd5e1)',
              opacity: isHovered ? 0.8 : 0,
              filter: 'blur(8px)',
            }}
          />

          {/* Main card */}
          <div
            className="relative bg-white rounded-3xl overflow-hidden border border-slate-200"
            style={{
              boxShadow: isHovered
                ? '0 25px 50px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)'
                : '0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            {/* Profile photo */}
            <div className="w-80 h-96 sm:w-96 overflow-hidden">
              <img
                src={profileImg}
                alt="Laksopan Ravindran"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Card footer info */}
            <div className="p-5 bg-white border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                    Software Engineer
                  </p>
                  <p className="text-sm font-bold text-slate-900">SLIIT | Sri Lanka</p>
                </div>
                {/* Available badge */}
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-700">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge bottom-right */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg"
            animate={{ rotate: [0, -2, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            Full-Stack Dev
          </motion.div>

          {/* Floating tech badge top-left */}
          <motion.div
            className="absolute -top-3 -left-3 bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            MERN | Next.js | AWS
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(226,232,240,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
          className="flex flex-col gap-6"
        >
          {/* Open-to-work badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <span className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-900 tracking-tight leading-[1.1]">
              Laksopan<br />
              <span className="text-slate-500">Ravindran</span><span className="text-slate-300">.</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mt-6">
              Full-Stack & AI Engineer<span className="text-slate-300">.</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg"
          >
            Architecting scalable full-stack applications with a core focus on{' '}
            <span className="text-slate-700 font-medium">Artificial Intelligence</span>,{' '}
            <span className="text-slate-700 font-medium">Distributed Systems</span>, and{' '}
            <span className="text-slate-700 font-medium">Cloud Architecture</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/assets/laksopan_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social + stats row */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <div className="h-px w-8 bg-slate-200" />
            <div className="flex gap-3">
              <a
                href="https://github.com/Laksopan23"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/laksopan-ravindran-92612224b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:laksopan2001@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-2 ml-1">
              <div className="text-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="text-xs font-bold text-slate-900">7</p>
                <p className="text-[10px] text-slate-400 font-medium">Projects</p>
              </div>
              <div className="text-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="text-xs font-bold text-slate-900">2</p>
                <p className="text-[10px] text-slate-400 font-medium">Internships</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — 3D Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProfileCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-slate-200 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-slate-300 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
