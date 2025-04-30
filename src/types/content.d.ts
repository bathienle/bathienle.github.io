export interface Profile {
  firstName: string;
  lastName: string;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Content {
  profile: Profile;
  educations: Education[];
}