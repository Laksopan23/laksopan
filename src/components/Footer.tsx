import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Subtitle */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-slate-900 tracking-tight text-sm">
                Laksopan<span className="text-slate-400">.</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">
              Information Technology Undergraduate | Sri Lanka
            </p>
          </div>

          {/* Center text */}
          <p className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            Built with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> using React + Tailwind
          </p>

          {/* Right: Copyright */}
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} Laksopan Ravindran. All rights reserved.
          </p>
        </div>

        {/* Bottom nav links */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap justify-center gap-6">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-slate-400 hover:text-slate-700 font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
