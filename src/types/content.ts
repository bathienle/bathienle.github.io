export interface Social {
  key: string,
  url: string,
}

export interface Profile {
  firstName: string;
  lastName: string;
  tagline: string;
  signature: string;
  socials: Social[];
}

export interface Topic {
  title: string;
  description: string;
  icon: string;
}

export interface About {
  description: string;
  interests: Topic[];
}

export interface Tech {
  key: string;
  name: string;
  url?: string;
}

export interface TechGroup {
  title: string;
  items: Tech[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  icon: string;
  description: string;
  stack: Tech[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  icon: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  repository: string;
  tags: string[];
  stack: Tech[];
  link?: string;
}

export interface Content {
  profile: Profile;
  about: About;
  stacks: TechGroup[];
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
}