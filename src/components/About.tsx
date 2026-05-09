import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code2, Server, Cloud } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Frontend Dev', desc: 'React, Next.js, TypeScript, Flutter' },
  { icon: Server, label: 'Backend Arch', desc: 'Django, Laravel, Node.js, REST' },
  { icon: Cloud, label: 'Cloud & DevOps', desc: 'AWS, Hostinger, Coolify, CI/CD' },
  { icon: BookOpen, label: 'Education', desc: 'B.Sc. (Hons) in IT · SLIIT' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">
              01 - Personal Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Building software with<br />
              <span className="text-slate-400">purpose and precision</span>.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am a Software Engineering undergraduate at <span className="font-semibold text-slate-800">SLIIT</span> with 
                internship experience building and deploying full-stack applications using the <span className="font-semibold text-slate-800">MERN stack, Next.js, and Django</span>.
              </p>
              <p>
                Having completed internships at <span className="font-semibold text-slate-800">Remotechies</span> and <span className="font-semibold text-slate-800">DGatewayIn</span>, I have developed a deep understanding of 
                responsive UI design with Tailwind CSS, implementing RESTful APIs, and working with 
                distributed databases like PostgreSQL and Supabase.
              </p>
              <p>
                I am experienced in deploying and maintaining applications across <span className="font-semibold text-slate-800">AWS, Hostinger, and Coolify</span>, and I thrive in 
                collaborative, agile team environments where precision and performance are key.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Certifications</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Postman API Fundamentals Student Expert',
                  'GenAI 101 with Pieces',
                  'Python Programming – UoM',
                  'Front-End Web Development – UoM',
                  'Server-Side Web Programming – UoM'
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg px-3 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider with quote */}
            <div className="mt-8 pl-5 border-l-2 border-slate-200">
              <p className="text-sm italic text-slate-500">
                "Code is like humor. When you have to explain it, it's bad." - Cory House
              </p>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-slate-900 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-bold text-slate-900 text-sm mb-1">{item.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

            {/* SLIIT stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-2 p-5 bg-slate-900 rounded-2xl text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Focusing on</p>
                  <p className="text-base font-bold">Artificial Intelligence & AI-Powered Web Systems</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-1">Jan 2026 - Present</p>
                </div>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">3+</p>
                    <p className="text-xs text-slate-400">Years Coding</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-xs text-slate-400">Technologies</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
