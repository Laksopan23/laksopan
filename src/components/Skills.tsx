import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Server, Database, Cloud, Brain } from 'lucide-react';

const skillCategories = [
  {
    icon: Layers,
    category: 'Frontend',
    color: 'blue',
    skills: [
      { name: 'React', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Flutter', level: 72 },
    ],
  },
  {
    icon: Server,
    category: 'Backend',
    color: 'violet',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Laravel', level: 80 },
      { name: 'Python', level: 88 },
      { name: 'Django', level: 82 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    icon: Brain,
    category: 'AI / ML',
    color: 'emerald',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 82 },
      { name: 'NLP (Transformers)', level: 84 },
      { name: 'Computer Vision', level: 78 },
      { name: 'Generative AI', level: 88 },
    ],
  },
  {
    icon: Database,
    category: 'Database',
    color: 'emerald', // I'll change Database to a different color or keep it
    skills: [
      { name: 'PostgreSQL', level: 84 },
      { name: 'MongoDB', level: 86 },
      { name: 'MySQL', level: 80 },
      { name: 'SQLite', level: 75 },
      { name: 'Supabase', level: 78 },
    ],
  },
  {
    icon: Cloud,
    category: 'DevOps',
    color: 'amber',
    skills: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Coolify', level: 72 },
      { name: 'Git / CI/CD', level: 88 },
    ],
  },
];

const colorMap: Record<string, { bg: string; bar: string; icon: string; badge: string }> = {
  blue: {
    bg: 'bg-blue-50 border-blue-100',
    bar: 'bg-blue-500',
    icon: 'bg-blue-100 text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
  },
  violet: {
    bg: 'bg-violet-50 border-violet-100',
    bar: 'bg-violet-500',
    icon: 'bg-violet-100 text-violet-600',
    badge: 'bg-violet-100 text-violet-700',
  },
  emerald: {
    bg: 'bg-emerald-50 border-emerald-100',
    bar: 'bg-emerald-500',
    icon: 'bg-emerald-100 text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  amber: {
    bg: 'bg-amber-50 border-amber-100',
    bar: 'bg-amber-500',
    icon: 'bg-amber-100 text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
  },
};

function SkillBar({ name, level, barColor, delay }: { name: string; level: number; barColor: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs font-bold text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

// Tag-cloud style additional skills
const extraSkills = [
  'PHP', 'Laravel', 'Bootstrap', 'Hostinger', 'Java', 'Kotlin', 'C / C++', 
  'SBERT', 'Prisma', 'JWT', 'Socket.io', 'Redis', 'GraphQL', 'Nginx', 
  'Linux', 'Figma', 'Postman', 'Jest',
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4">
            02 . Technical Skills
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Skill Matrix<span className="text-slate-300">.</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-sm">
              Proficiency across the full SDLC . from pixel-perfect UIs to distributed backend systems.
            </p>
          </div>
          <div className="mt-6 h-px bg-slate-100" />
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, catIdx) => {
            const colors = colorMap[cat.color];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className={`p-5 rounded-2xl border ${colors.bg} hover:shadow-md transition-shadow duration-300`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${colors.icon}`}>
                    <cat.icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">{cat.category}</span>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      barColor={colors.bar}
                      delay={catIdx * 0.1 + skillIdx * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-6 bg-slate-50 rounded-2xl border border-slate-200"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Also proficient in
          </p>
          <div className="flex flex-wrap gap-2">
            {extraSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs font-semibold rounded-lg hover:border-slate-400 hover:text-slate-900 transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
