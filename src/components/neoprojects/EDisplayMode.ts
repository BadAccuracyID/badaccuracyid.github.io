export enum EDisplayMode {
  ALL,
  CAROUSEL,
}

export interface IProject {
  title: string;
  shortDescription: string;
  longDescription: string[];

  year: string;
  company: string;

  images: string[];
  link?: string;
  github?: string;
  tags: string[];
}
