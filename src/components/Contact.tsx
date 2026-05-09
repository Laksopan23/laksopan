import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EMAIL = 'laksopan2001@gmail.com';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 bg-slate-50 border-t border-slate-200">
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
            05 . Contact
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Let's build something<span className="text-slate-300">.</span>
            </h2>
          </div>
          <div className="mt-6 h-px bg-slate-200" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Get In Touch</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                I'm actively looking for full-time Software Engineer roles and freelance
                collaborations. Whether you have an opportunity or just want to connect — my inbox
                is always open.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {/* Email with copy */}
              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 group hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <p className="text-sm font-semibold text-slate-700 truncate max-w-[180px]">{EMAIL}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone</p>
                  <p className="text-sm font-semibold text-slate-700">+94 70 262 7291</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
                <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Location</p>
                  <p className="text-sm font-semibold text-slate-700">168/5 Veliwita Rd, Malabe</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Laksopan23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:shadow-sm transition-all duration-200 text-sm font-semibold"
                >
                  <GitHubIcon />
                  GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/laksopan-ravindran-92612224b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:shadow-sm transition-all duration-200 text-sm font-semibold"
                >
                  <LinkedInIcon />
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-emerald-700">Currently Available</span>
              </div>
              <p className="text-xs text-emerald-600 ml-4">Typical response time: within 24 hours</p>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Send a message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message sent!</h4>
                  <p className="text-slate-500 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      rows={6}
                      placeholder="Tell me about the opportunity or project you have in mind..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-700 transition-all duration-200 shadow-sm hover:shadow-md group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
