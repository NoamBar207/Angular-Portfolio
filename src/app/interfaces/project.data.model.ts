export interface IShowcase {
  showcaseTitle: string;
  info: string;
  img: string;
  info2?: string[];
}

interface IFeatures {
  title: string;
  desc: string;
  icon: string;
  myOwn?: string;
}

export interface IProjectData {
  _id: string;
  title: string;
  mainInfo: string;
  bg: string;
  url?: string;
  repoLink?: string;
  technologies: string;
  moreAbout?: string[];
  features: IFeatures[];
  showcase?: IShowcase[];
  extraFeatures?: string[];
  dots?: IFeatures[];
}
