import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Layers3, Server, Database, Cloud, Brain } from 'lucide-react';

const groups = [
  { icon: Layers3, title: 'Frontend & mobile', intro: 'Interfaces and cross-platform experiences', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Vue'] },
  { icon: Server, title: 'Backend & APIs', intro: 'Application logic, services, and integration', skills: ['Node.js', 'Express.js', 'Django', 'Laravel', 'Spring Boot', 'FastAPI', 'REST APIs', '.NET'] },
  { icon: Database, title: 'Data', intro: 'Relational and document data stores', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Supabase', 'Redis'] },
  { icon: Brain, title: 'Applied AI', intro: 'Practical ML features and model integration', skills: ['Machine Learning', 'NLP', 'Computer Vision', 'Generative AI', 'SBERT', 'TensorFlow Lite', 'ONNX'] },
  { icon: Cloud, title: 'Cloud & delivery', intro: 'Shipping, monitoring, and team workflows', skills: ['AWS', 'Docker', 'Coolify', 'CI/CD', 'Git', 'GitHub', 'Postman', 'Jira'] },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden bg-[#f8fafc] py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div ref={ref} initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .55 }} className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-slate-400">02 · Technical toolkit</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Tools I use to turn ideas into working products<span className="text-sky-500">.</span></h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">A focused view of the technologies I’ve used across professional work and personal projects.</p>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <motion.article key={group.title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .45, delay: index * .07 }} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white transition-colors group-hover:bg-sky-600"><group.icon className="h-5 w-5" /></div>
                <div><h3 className="font-semibold text-slate-900">{group.title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{group.intro}</p></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">{group.skills.map(skill => <span key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-800">{skill}</span>)}</div>
            </motion.article>
          ))}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-950 p-6 text-white shadow-sm">
            <div><p className="text-xs font-semibold uppercase tracking-[.2em] text-sky-300">Engineering approach</p><h3 className="mt-4 text-xl font-semibold leading-snug">Build clearly. Ship carefully. Keep learning.</h3></div>
            <p className="mt-8 text-sm leading-6 text-slate-300">From API design and data modeling to deployment and iteration, I enjoy working across the product lifecycle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}