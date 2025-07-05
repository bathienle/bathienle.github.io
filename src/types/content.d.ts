export interface Social {
  key: string,
  url: string,
}

export interface Profile {
  firstName: string;
  lastName: string;
  website: string;
  socials: Social[];
}

export interface About {
  description: string;
  interests: string[];
}

export interface Tech {
  key: string;
  name: string;
  url: string;
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
  description: string;
  achievements: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  tags: string[];
  link: string;
}

export interface Content {
  profile: Profile;
  about: About;
  stacks: TechGroup[];
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
}