// Types for the portfolio data
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  tags: string[];
  highlight: string;
  highlightColor: string;
  features: string[];
  stars: number;
  forks: number;
  github: string;
  demo: string;
  accent: string;
  accentLight: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  color: string;
  logo: string;
  description: string;
  highlights: string[];
  tags: string[];
  url?: string;
}
