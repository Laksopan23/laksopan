import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

import { experiences } from '../data/portfolio';

const colorBorderMap: Record<string, string> = {
  violet: 'border-violet-200 hover:border-violet-300',
  blue: 'border-blue-200 hover:border-blue-300',
};
const colorDotMap: Record<string, string> = {
  violet: 'bg-violet-500',
  blue: 'bg-blue-500',
};
const colorBadgeMap: Record<string, string> = {
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
};
const colorTagMap: Record<string, string> = {
  violet: 'bg-violet-100 text-violet-700',
  blue: 'bg-blue-100 text-blue-700',
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="py-28 bg-slate-50 border-y border-slate-200">
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
            03 . Experience
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Professional Timeline<span className="text-slate-300">.</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-sm">
              Real-world engineering experience across remote and on-site environments.
            </p>
          </div>
          <div className="mt-6 h-px bg-slate-200" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-7 w-12 h-12 items-center justify-center">
                  <div className={`w-4 h-4 rounded-full border-4 border-white shadow-sm ${colorDotMap[exp.color]}`} />
                </div>

                {/* Card */}
                <div
                  className={`bg-white rounded-2xl border ${colorBorderMap[exp.color]} hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                >
                  {/* Card header */}
                  <div className="p-6 sm:p-8 border-b border-slate-100">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0">
                          {typeof exp.logo === 'string' && !exp.logo.includes('/') && exp.logo.length < 4 ? (
                            <div className="text-3xl">{exp.logo}</div>
                          ) : (
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colorBadgeMap[exp.color]}`}>
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-slate-600 font-medium">{exp.role}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 text-slate-300 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="mt-4 text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="p-6 sm:p-8 space-y-3">
                    {exp.highlights.map((h, hi) => (
                      <motion.div
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: idx * 0.2 + hi * 0.06 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-600">{h}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="px-6 sm:px-8 pb-6 flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${colorTagMap[exp.color]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
