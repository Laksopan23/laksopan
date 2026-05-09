import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Star, GitBranch, ArrowUpRight, Code2 } from 'lucide-react';

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

import { projects } from '../data/portfolio';

const highlightColorMap: Record<string, string> = {
  violet: 'bg-violet-100 text-violet-700',
  blue: 'bg-blue-100 text-blue-700',
  emerald: 'bg-emerald-100 text-emerald-700',
};

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.06)'
          : '0 1px 3px 0 rgb(0 0 0 / 0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
    >
      {/* Card accent top bar */}
      <div className={`h-1 bg-gradient-to-r ${project.accent}`} />

      {/* Card header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${project.accentLight}`}>
              <Code2 className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${highlightColorMap[project.highlightColor]}`}>
                {project.highlight}
              </span>
            </div>
          </div>

          {/* Repo stats */}
          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitBranch className="w-3.5 h-3.5" />
              {project.forks}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-0.5">{project.title}</h3>
        <p className="text-xs font-semibold text-slate-400 mb-3">{project.subtitle}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
      </div>

      {/* Features */}
      <div className="px-6 py-4 space-y-2">
        {project.features.map((f, fi) => (
          <div key={fi} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
            <p className="text-xs text-slate-500">{f}</p>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="px-6 pb-4 flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-semibold rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="mt-auto px-6 pb-6 pt-2 border-t border-slate-100 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
        >
          <GitHubIcon />
          GitHub
        </a>
        {project.demo && project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.accent} text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all duration-200 shadow-sm`}
          >
            Live Demo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="py-28 bg-white">
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
            04 . Featured Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              The Evidence<span className="text-slate-300">.</span>
            </h2>
            <a
              href="https://github.com/Laksopan23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              View all on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 h-px bg-slate-100" />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
