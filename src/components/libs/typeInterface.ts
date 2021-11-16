export type MainNavigationType = {
  name: string;
  link: string;
  subMenu?: SubMenuType[];
};

export type SubMenuType = {
  name: string;
  items: MainNavigationType[];
};

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

export type OverViewType = {
  labelText: string;
  title: string;
  description: string;
};

export type SolutionBlockType = {
  name: string;
  desc: string;
  img: string;
  list?: string[];
};

export type TextSectionType = {
  labelText: string;
  title: string;
  description: string;
  isService?: boolean;
  onlyImage?: boolean;
  blocks?: SolutionBlockType[];
  image?: string;
};

export type SolutionDataType = {
  id: string;
  name: string;
  img: string;
  link: string;
  caseStudy: string;
  overView: OverViewType;
  textSections: TextSectionType[];
};
