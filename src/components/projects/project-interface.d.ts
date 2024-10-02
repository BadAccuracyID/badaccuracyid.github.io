export interface IProject {
  id: string;

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
