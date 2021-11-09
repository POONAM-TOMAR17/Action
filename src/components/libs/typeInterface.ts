export type SubMenuType = {
  name: string;
  items: {
    name: string;
    link: string;
  }[];
}[];

export type CaseStudyType = {
  name: string;
  mainImage: string;
  logo: string;
  description: string;
  link?: string;
};

export type SolutionsType = {
  name: string;
  image: string;
};

export type CultureType = {
  name: string;
  mainImage: string;
  description: string;
  link?: string;
};

export type OpeningType = {
  id: string;
  name: string;
  img: string;
  jobRole: string[][];
  duties: string[][];
};

export type SolutionServicesType = {
  name: string;
  desc: string;
  img: string;
  list?: string[];
};

export type SolutionDataType = {
  id: string;
  name: string;
  img: string;
  link: string;
  caseStudy: string;
  title1: string;
  description1: string;
  title2?: string;
  description2?: string;
  services: SolutionServicesType[];
  title3?: string;
  description3?: string;
};
