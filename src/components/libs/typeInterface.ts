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

export type StudyDescriptionType = {
  title?: string;
  list?: string[];
  textOnly?: string;
};

export type StudyContentType = {
  labelText: string;
  title: string;
  description: StudyDescriptionType[];
};

export type CaseStudyInnerType = {
  id: string;
  name: string;
  img: string;
  link: string;
  description: string;
  bannerImg: string;
  category: string;
  customName: string;
  location: string;
  year: number;
  overView: OverViewType;
  // content: StudyContentType;
};
