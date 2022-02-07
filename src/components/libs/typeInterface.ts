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

export type InstrumentCalibrationType = {
  name1: string;

}

export type TableContainerType = {
  no: string;
  name: string;
  title: string;
  range1: string;
  range2: string;
  range3: string;
  range4: string;
  range5: string;
  role1: string;
  role2: string;
  role3: string;
  role4: string;
  role5: string;
  method: string;

}
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
  features: { name1: string }[];
  people: TableContainerType[];
  img: string;
  link: string;
  caseStudy: string;
  overView: OverViewType;
  textSections: TextSectionType[];
};

export type ListStudyContentType = {
  type: string;
  data: string[];
};

export type StudyDescriptionType = {
  title?: string;
  list?: ListStudyContentType;
  textOnly?: string;
  img?: string;
};

export type StudyContentMenuType = {
  name: string;
  link: string;
};

export type StudyBlockType = {
  id?: string;
  labelText: string;
  title: string;
  description: StudyDescriptionType[];
};

export type StudyContentType = {
  menu: StudyContentMenuType[];
  blocks: StudyBlockType[];
};

export type CaseStudyInnerType = {
  id: string;
  name: string;
  img: string;
  link: string;
  description: string;
  bannerImg: string;
  category: string;
  customerName: string;
  location: string;
  year: number;
  overView: OverViewType;
  content: StudyContentType;
};
