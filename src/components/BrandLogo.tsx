import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
  iconOnly?: boolean;
  disableHover?: boolean;
}

export default function BrandLogo({ className = '', size = 32, iconOnly = false, disableHover = false }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        style={{ width: size, height: size }}
        className={`rounded-lg overflow-hidden ${!disableHover ? 'shadow-sm hover:shadow-md transition-shadow duration-300' : ''}`}
      >
        <img 
          src="/favicon.png" 
          alt="Laksopan Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      {!iconOnly && (
        <span className="font-bold text-slate-900 tracking-tight text-sm">
          LR<span className="text-slate-400">.</span>
        </span>
      )}
    </div>
  );
}
