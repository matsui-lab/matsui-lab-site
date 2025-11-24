
export enum SectionId {
  HOME = 'home',
  RESEARCH = 'research',
  COMPUTING = 'computing',
  MEMBERS = 'members',
  PUBLICATIONS = 'publications',
  NEWS = 'news',
  CONTACT = 'contact',
}

export type Language = 'en' | 'jp';

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryDark: string;
    accent: string;
    tech: string;
    dark: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
  };
}

export interface Member {
  id: string;
  name: string; // Usually same in both, or EN specific
  nameJp?: string; // Optional JP name if different representation desired
  role: string;
  image?: string;
  description: string;
  links?: {
    github?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  citation?: string;
  doi?: string;
  tag: 'Journal' | 'Conference' | 'Preprint' | 'Book' | 'Review';
}

export interface NewsItem {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  category: 'Award' | 'Publication' | 'Event' | 'Other';
}

export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; 
  tags?: string[];
}

export interface ResearchDomain {
  id: string;
  title: string;
  description: string;
  projects: ResearchProject[];
}

export interface ServerSpec {
  id: string;
  name: string;
  ip: string;
  os: string;
  location: string;
  role: string;
  specs: {
    cpu: string;
    memory: string;
    gpu?: string;
    storage: string;
  };
}

export interface HPCClusterSpec {
  name: string;
  description: string;
  stats: { label: string; value: string }[];
  nodes: {
    type: string;
    count: number;
    specs: string;
    details?: string;
  }[];
}

export interface DeviceSpec {
  id: string;
  name: string;
  productName: string;
  location: string;
  description: string;
  link?: string;
  sensors?: string[]; // For biosignal plux etc
  notes?: string[];
}

// Localized Content Structure
export interface LabContent {
  labName: string;
  labSubtitle: string;
  affiliation: string;
  hero: {
    titlePrefix: string;
    titleOmics: string;
    titleTwin: string;
    subtitle: string;
    ctaResearch: string;
    ctaJoin: string;
    keywords: { label: string; val: string }[];
  };
  mission: {
    label: string;
    title: string;
    highlight: string;
    description: string;
    bioCard: { title: string; desc: string; };
    healthCard: { title: string; desc: string; };
  };
  research: {
    title: string;
    subtitle: string;
    domains: ResearchDomain[];
  };
  computing: {
    title: string;
    subtitle: string;
    igcoreTitle: string;
    daikoTitle: string;
    deviceTitle: string;
  };
  devices: {
    list: DeviceSpec[];
  };
  dataScience: {
    title: string;
    subtitle: string;
    description: string;
    workbench: {
      title: string;
      desc: string;
      features: string[];
    };
    pipelines: {
      title: string;
      desc: string;
      features: string[];
    };
    connect: {
      title: string;
      desc: string;
      features: string[];
    };
  };
  publications: {
    title: string;
  };
  members: {
    title: string;
    subtitle: string;
    list: Member[];
  };
  footer: {
    rights: string;
    system: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
  locations: {
    name: string;
    address: string;
    detail: string;
  }[];
  nav: { id: SectionId; label: string }[];
}
