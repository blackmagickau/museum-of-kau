
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Corporate' | 'Startup' | 'Internship' | 'Project';
  description: string;
  achievements: string[];
  tech: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CuratorProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  status: string;
  email: string;
  phone: string;
  socials: SocialLink[];
}
