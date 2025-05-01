export interface Profile {
  firstName: string;
  lastName: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  link: string;
}

export interface Content {
  profile: Profile;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
}