export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  qualification: string;
  institution: string;
  year: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  github?: string;
  imageUrl?: string;
  images?: string[];
  date?: string;
  link?: string;
}
