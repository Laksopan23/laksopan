import { useReducedMotion, motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Mail } from 'lucide-react';
import profileImg from '../assets/laksopan.png';

const GitHubIcon = () => <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.86 8.17 6.84 9.5.5.09.68-.22.68-.49 0-.23-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.1 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2Z"/></svg>;
const LinkedInIcon = () => <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.21 0 22.23 0Z"/></svg>;

function PortfolioScene() {
  const reduceMotion = useReducedMotion();
  return <div className="relative mx-auto flex min-h-[430px] w-full max-w-[520px] items-center justify-center [perspective:1200px] sm:min-h-[500px]" aria-label="Layered portfolio illustration">
    <div className="absolute inset-10 rounded-full bg-gradient-to-br from-sky-100 via-indigo-50 to-transparent blur-3xl" />
    <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24, rotateX: 8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: .8, ease: [0.22, 1, .36, 1] }} className="relative z-10 w-[min(74vw,340px)] overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_35px_100px_-35px_rgba(15,23,42,.35)] [transform:rotateY(-8deg)_rotateX(3deg)]">
      <div className="aspect-[4/4.4] overflow-hidden bg-slate-200"><img src={profileImg} alt="Laksopan Ravindran" className="h-full w-full object-cover object-top" /></div>
      <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">Software Engineer</p><p className="mt-1 text-sm font-semibold text-slate-900">Sri Lanka · Open to opportunities</p></div><span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,.12)]" /></div>
    </motion.div>
    <motion.div animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-0 top-[15%] z-20 w-48 rounded-2xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:w-56">
      <div className="flex justify-between text-[10px] font-semibold text-slate-400"><span>PRODUCT SYSTEM</span><span className="text-emerald-600">● LIVE</span></div>
      <div className="mt-4 space-y-2"><div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">Web experience</div><div className="ml-4 h-3 border-l border-dashed border-slate-300" /><div className="rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-800">APIs · Data · Applied AI</div></div>
    </motion.div>
    <motion.div animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: .4 }} className="absolute bottom-[12%] left-0 z-20 rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-xl">
      <p className="text-[9px] font-semibold uppercase tracking-[.2em] text-slate-400">Building with</p><p className="mt-1 text-xs font-semibold">React <span className="text-sky-400">/</span> Node <span className="text-sky-400">/</span> AI</p>
    </motion.div>
    <div className="absolute bottom-[20%] right-[7%] -z-0 h-20 w-20 rounded-3xl border border-sky-200 bg-sky-100/50 [transform:rotate(18deg)_translateZ(-60px)]" />
  </div>;
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return <section id="hero" className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#f8fafc] pt-20">
    <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(#cbd5e1 .7px, transparent .7px)', backgroundSize: '24px 24px', maskImage: 'linear-gradient(to bottom, black, transparent 90%)' }} />
    <div className="pointer-events-none absolute -right-40 top-8 h-[560px] w-[560px] rounded-full bg-sky-100/60 blur-3xl" />
    <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 pt-12 lg:grid-cols-[1fr_.95fr] lg:gap-6 lg:px-10">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="relative z-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur"><span className="h-2 w-2 rounded-full bg-emerald-500" />Open to new opportunities</div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[.2em] text-slate-500">Full-stack engineering · Applied AI</p>
        <h1 className="max-w-2xl text-5xl font-bold leading-[.98] tracking-[-.055em] text-slate-950 sm:text-6xl lg:text-7xl">Laksopan<br /><span className="text-slate-400">Ravindran</span><span className="text-sky-500">.</span></h1>
        <h2 className="mt-7 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-slate-800 sm:text-3xl">I build thoughtful software for real-world problems.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">Software Engineer creating full-stack web and mobile products, with a growing focus on practical AI experiences.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800">Explore selected work <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" /></a>
          <a href="/assets/laksopan_resume.pdf" download className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"><Download className="h-4 w-4" />Download CV</a>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <a href="https://github.com/Laksopan23" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-xl border border-slate-200 bg-white p-3 text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-950"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/laksopan-ravindran-2109672a5" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-xl border border-slate-200 bg-white p-3 text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-950"><LinkedInIcon /></a>
          <a href="mailto:laksopan2001@gmail.com" aria-label="Email" className="rounded-xl border border-slate-200 bg-white p-3 text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-950"><Mail className="h-4 w-4" /></a>
          <a href="#about" className="ml-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-slate-400 transition hover:text-slate-700">Discover more <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
        <div className="mt-10 flex gap-8 border-t border-slate-200 pt-5"><div><p className="text-xl font-bold text-slate-900">8</p><p className="text-xs font-medium text-slate-500">Featured projects</p></div><div className="h-10 w-px bg-slate-200" /><div><p className="text-xl font-bold text-slate-900">2</p><p className="text-xs font-medium text-slate-500">Internships</p></div></div>
      </motion.div>
      <PortfolioScene />
    </div>
  </section>;
}