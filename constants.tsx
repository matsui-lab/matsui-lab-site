

import React from 'react';
import { Member, Publication, NewsItem, ResearchDomain, SectionId, LabContent, Language, ServerSpec, HPCClusterSpec, DeviceSpec } from './types';
import { Dna, BrainCircuit, Activity, Network, Binary, Smartphone, Database, Code, Monitor, Glasses, Hand, Camera } from 'lucide-react';

/* --- SHARED DATA (Images, IDs, Publications) --- */

export const PUBLICATIONS: Publication[] = [
  // 2025
  {
    id: '2025-1',
    year: 2025,
    title: 'Integrative Network Analysis Reveals Novel Moderators of Aβ–Tau Interaction in Alzheimer\'s Disease',
    authors: 'Akihiro Kitani, Yusuke Matsui',
    journal: 'Alzheimer’s Research & Therapy',
    citation: '17(1): 70',
    tag: 'Journal'
  },
  // 2024
  {
    id: '2024-1',
    year: 2024,
    title: 'Predicting Alzheimer\'s Cognitive Resilience Score: A Comparative Study of Machine Learning Models Using RNA-seq Data',
    authors: 'Akihiro Kitani, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-2',
    year: 2024,
    title: 'HuTAge: A Comprehensive Human Tissue- and Cell-specific Ageing Signature Atlas',
    authors: 'Koichi Himori, Bingyuan Zhang, Kazuki Hatta, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-3',
    year: 2024,
    title: 'Toward a Systems Glycogenomics Approach to Understanding Diseases',
    authors: 'Yusuke Matsui',
    journal: 'Glycoforum',
    citation: '27(4): A12',
    tag: 'Journal'
  },
  {
    id: '2024-4',
    year: 2024,
    title: 'A Computational Approach to Interpreting the Embedding Space of Dimension Reduction',
    authors: 'Bingyuan Zhang, Kohei Uno, Hayata Kodama, Koichi Himori, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-5',
    year: 2024,
    title: 'Evaluating Desk-Assisted Standing Techniques for Simulated Pregnant Conditions',
    authors: 'Kohei Uno, Kako Tsukioka, Hibiki Sakata, Tomoe Inoue-Hirakawa, Yusuke Matsui',
    journal: 'Healthcare',
    citation: '12(9): 931',
    tag: 'Journal'
  },
  {
    id: '2024-6',
    year: 2024,
    title: 'Systematic Identification of Exercise-Induced Anti-Aging Processes Involving Intron Retention',
    authors: 'Hayata Kodama, Hirotaka Ijima, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-7',
    year: 2024,
    title: 'BRAFV600E Promotes Anchorage-Independent Growth but Inhibits Anchorage-Dependent Growth in hTERT/Cdk4-Immortalized Normal Human Bronchial Epithelial Cells',
    authors: 'Nao Muraki, Nozomi Kawabe, Ayano Ohashi, Kanna Umeda, Masahito Katsuda, Aya Tomatsu, Mikina Yoshida, Kazuki Komeda, John D. Minna, Ichidai Tanaka, Masahiro Morise, Miyoko Matsushima, Yusuke Matsui, Tsutomu Kawabe, Mitsuo Sato',
    journal: 'Experimental Cell Research',
    citation: 'Pages: 114057',
    tag: 'Journal'
  },
  // 2023
  {
    id: '2023-1',
    year: 2023,
    title: 'Single-Cell Glycogenomics Deciphers Links Between Altered Transcriptional Regulation and Aberrant Glycosylation in Alzheimer’s Disease',
    authors: 'Yusuke Matsui, Akira Togayachi, Kazuma Sakamoto, Kiyohiko Angata, Kenji Kadomatsu, Shoko Nishihara',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-2',
    year: 2023,
    title: 'Network-Based Systematic Dissection of Exercise-Induced Inhibition of Myosteatosis in Older Individuals',
    authors: 'Hirotaka Iijima, Fabrisia Ambrosio, Yusuke Matsui',
    journal: 'The Journal of Physiology',
    tag: 'Journal'
  },
  {
    id: '2023-3',
    year: 2023,
    title: 'Unbiased Estimation of the Population-Level Motor Module',
    authors: 'Yusuke Matsui, Kohei Uno, Ippei Nojima',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-4',
    year: 2023,
    title: 'Pgc-1α Is an Exercise-Responsive Regulator of Myosteatosis in Older Individuals',
    authors: 'Hirotaka Iijima, Fabrisia Ambrosio, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-5',
    year: 2023,
    title: 'Network-Based Cytokine Inference Implicates Oncostatin M as a Driver for Inflammation Phenotype of Knee Osteoarthritis',
    authors: 'Hirotaka Iijima, Fan Zhang, Fabrisia Ambrosio, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-6',
    year: 2023,
    title: 'Types of Anomalies in Two-Dimensional Video-Based Gait Analysis in Uncontrolled Environments',
    authors: 'Yuki Sugiyama, Kohei Uno, Yusuke Matsui',
    journal: 'PLOS Computational Biology',
    citation: '19(1): e1009989',
    tag: 'Journal'
  },
  // 2022
  {
    id: '2022-1',
    year: 2022,
    title: 'Utilization and Challenges of Data Science and AI in Physical Therapy Education',
    authors: 'Yusuke Matsui',
    journal: 'Rigaku Ryoho (Physical Therapy)',
    citation: '39(4): 336–342',
    tag: 'Journal'
  },
  {
    id: '2022-2',
    year: 2022,
    title: 'Meta-Analysis Integrated with Multi-Omics Data Analysis to Elucidate Pathogenic Mechanisms of Age-Related Knee Osteoarthritis in Mice',
    authors: 'Hirotaka Iijima, Gabrielle Gilmer, Kai Wang, Sruthi Sivakumar, Christopher Evans, Yusuke Matsui, Fabrisia Ambrosio',
    journal: 'The Journals of Gerontology: Series A',
    citation: '77(7): 1321–1334',
    tag: 'Journal'
  },
  // 2021
  {
    id: '2021-1',
    year: 2021,
    title: 'Pan-Cancer Methylome Analysis for Cancer Diagnosis and Classification of Cancer Cell of Origin',
    authors: 'Dai Shimizu, Kenzui Taniue, Koshi Mimori',
    journal: 'Cancer Gene Therapy',
    citation: '29(5): 428–436',
    tag: 'Journal'
  },
  {
    id: '2021-2',
    year: 2021,
    title: 'Increased BUB1B/BUBR1 Expression Contributes to Aberrant DNA Repair Activity Leading to Resistance to DNA-Damaging Agents',
    authors: 'Kazumasa Komura, Teruo Inamoto, Haruhito Azuma',
    journal: 'Oncogene',
    citation: '40(43): 6210–6222',
    tag: 'Journal'
  },
  {
    id: '2021-3',
    year: 2021,
    title: 'RoDiCE: Robust Differential Protein Co-expression Analysis for Cancer Complexome',
    authors: 'Yusuke Matsui, Yuichi Abe, Kohei Uno, Satoru Miyano',
    journal: 'Bioinformatics',
    tag: 'Journal'
  },
  {
    id: '2021-4',
    year: 2021,
    title: 'Pre-Stimulus Alpha Oscillation and Post-Stimulus Cortical Activity Differ in Localization Between Consciously Perceived and Missed Near-Threshold Somatosensory Stimuli',
    authors: 'Jun-Ichi Uemura, Aiko Hoshino, Go Igarashi, Yusuke Matsui, Minoru Hoshiyama',
    journal: 'European Journal of Neuroscience',
    citation: '54(4): 5518–5530',
    tag: 'Journal'
  },
  // 2020
  {
    id: '2020-1',
    year: 2020,
    title: 'An In Vitro Coculture System of Human PBMCs with Hepatocellular Carcinoma Cells for Predicting Drug-Induced Liver Injury',
    authors: 'Shingo Oda, Yuka Uchida, Michael D. Aleo, Petra H. Koza-Taylor, Yusuke Matsui, Masanori Hizue, Lisa D. Marroquin, Jessica Whritenour, Eri Uchida, Tsuyoshi Yokoi',
    journal: 'Archives of Toxicology',
    tag: 'Journal'
  },
  {
    id: '2020-2',
    year: 2020,
    title: 'EXOSC9 Depletion Attenuates P-Body Formation, Stress Resistance, and Tumorigenicity of Cancer Cells',
    authors: 'Seiko Yoshino, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Scientific Reports',
    citation: '10(1): 9275',
    tag: 'Journal'
  },
  {
    id: '2020-3',
    year: 2020,
    title: 'Coordinated Demethylation of H3K9 and H3K27 Is Required for Rapid Inflammatory Responses of Endothelial Cells',
    authors: 'Yoshiki Higashijima, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'The EMBO Journal',
    citation: '39(7): e103949',
    tag: 'Journal'
  },
  // 2019
  {
    id: '2019-1',
    year: 2019,
    title: 'Pathogenic Epigenetic Consequences of Genetic Alterations in IDH-Wild-Type Diffuse Astrocytic Gliomas',
    authors: 'Fumiharu Ohka, Keiko Shinjo, Shoichi Deguchi, Yusuke Matsui, et al.',
    journal: 'Cancer Research',
    citation: '79(19): 4814–4827',
    tag: 'Journal'
  },
  {
    id: '2019-2',
    year: 2019,
    title: 'A Network of Networks Approach for Modeling Interconnected Brain Tissue-Specific Networks',
    authors: 'Kawakubo H, Matsui Y, Kushima I, Ozaki N, Shimamura T',
    journal: 'Bioinformatics',
    citation: '35(17): 3092–3101',
    tag: 'Journal'
  },
  {
    id: '2019-3',
    year: 2019,
    title: 'Tumor Subclonal Progression Model for Cancer Hallmark Acquisition',
    authors: 'Y. Matsui, S. Miyano, T. Shimamura',
    journal: 'Lecture Notes in Bioinformatics',
    citation: 'Pages: 115–123',
    tag: 'Journal'
  },
  {
    id: '2019-4',
    year: 2019,
    title: 'GIMLET: Identifying Biological Modulators in Context-Specific Gene Regulation Using Local Energy Statistics',
    authors: 'T. Shimamura, Y. Matsui, S. Miyano',
    journal: 'Lecture Notes in Bioinformatics',
    citation: 'Pages: 124–137',
    tag: 'Journal'
  },
  // 2018
  {
    id: '2018-1',
    year: 2018,
    title: 'A Temporal Shift of the Evolutionary Principle Shaping Intratumor Heterogeneity in Colorectal Cancer',
    authors: 'Tomoko Saito, Atsushi Niida, Yusuke Matsui, et al.',
    journal: 'Nature Communications',
    citation: '9(1): 2884',
    tag: 'Journal'
  },
  {
    id: '2018-2',
    year: 2018,
    title: 'ER Stress Signaling Promotes the Survival of Cancer “Persister Cells” Tolerant to EGFR-TKI',
    authors: 'Hideki Terai, Shunsuke Kitajima, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Cancer Research',
    citation: '78(4): 1044–1057',
    tag: 'Journal'
  },
  {
    id: '2018-3',
    year: 2018,
    title: 'Identification of Cardiomyocyte-Fated Progenitors from Human-Induced Pluripotent Stem Cells Marked with CD82',
    authors: 'Masafumi Takeda, Yasuharu Kanki, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Cell Reports',
    citation: '22(2): 546–556',
    tag: 'Journal'
  },
  // 2017
  {
    id: '2017-1',
    year: 2017,
    title: 'phyC: Clustering Cancer Evolutionary Trees',
    authors: 'Yusuke Matsui, Atsushi Niida, Ryutaro Uchi, Koshi Mimori, Satoru Miyano, Teppei Shimamura',
    journal: 'PLOS Computational Biology',
    citation: '13(5): e1005509',
    tag: 'Journal'
  },
  // 2016
  {
    id: '2016-1',
    year: 2016,
    title: '(DM)-M-3: Detection of Differential Distributions of Methylation Levels',
    authors: 'Yusuke Matsui, Masahiro Mizuta, Satoshi Ito, Satoru Miyano, Teppei Shimamura',
    journal: 'Bioinformatics',
    citation: '32(15): 2248–2255',
    tag: 'Journal'
  },
  {
    id: '2016-2',
    year: 2016,
    title: 'NECAB3 Promotes Activation of Hypoxia-Inducible Factor-1 and Enhances Tumorigenicity of Cancer Cells',
    authors: 'Hiroki J. Nakaoka, Toshiro Hara, Seiko Yoshino, Akane Kanamori, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Scientific Reports',
    citation: '6: 22784',
    tag: 'Journal'
  },
  // 2015
  {
    id: '2015-1',
    year: 2015,
    title: 'Classification of Customers in a Group-Buying Coupon Site and Analysis of Purchasing Tendencies by Group',
    authors: 'Chito Igarashi, Yusuke Matsui, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Journal of the Japan Society of Computational Statistics',
    citation: '28(2): 139–146',
    tag: 'Journal'
  },
  {
    id: '2015-2',
    year: 2015,
    title: 'Proposal of Moving Function k-Means Method and Its Application',
    authors: 'Yusuke Matsui, Yuriko Komiya, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Theory and Applications of Data Analysis',
    citation: '4(1): 43–55',
    tag: 'Journal'
  },
  // 2014
  {
    id: '2014-1',
    year: 2014,
    title: 'A Method for Detecting Abnormal Regions in Multi-Dimensional Functional Data and Its Application to Sensing Data',
    authors: 'Yusuke Matsui, Yuriko Komiya, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Journal of the Japan Society of Computational Statistics',
    citation: '27(2): 65–77',
    tag: 'Journal'
  },
  {
    id: '2014-2',
    year: 2014,
    title: 'Symbolic Cluster Analysis for Distribution-Valued Dissimilarity',
    authors: 'Matsui Y, Minami H, Mizuta M',
    journal: 'Communications for Statistical Applications and Methods',
    citation: '21(3): 225–234',
    tag: 'Journal'
  },
  {
    id: '2014-3',
    year: 2014,
    title: 'SDA for Mixed-Type Data and Its Application to Analysis of Environmental Radio Activity Level Data',
    authors: 'Matsui Y, Mizuta M',
    journal: 'COMPSTAT2014',
    citation: 'Pages: 673–680',
    tag: 'Journal'
  },
  {
    id: '2014-4',
    year: 2014,
    title: 'Comparison of Two Distribution-Valued Dissimilarities and Its Application for Symbolic Clustering',
    authors: 'Yusuke Matsui, Yuriko Komiya, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Studies in Classification, Data Analysis, and Knowledge Organization',
    citation: '46: 37–46',
    tag: 'Journal'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2025-04-01',
    title: 'New academic year started. Welcomed new Master students to the lab.',
    category: 'Event'
  },
  {
    id: 'n2',
    date: '2025-03-15',
    title: 'Research on digital biomarkers accepted for presentation at global conference.',
    category: 'Publication'
  },
  {
    id: 'n3',
    date: '2024-12-01',
    title: 'Looking for Ph.D. students and Postdocs for the new academic year.',
    category: 'Other'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Dna': return <Dna className="w-8 h-8" />;
    case 'BrainCircuit': return <BrainCircuit className="w-8 h-8" />;
    case 'Activity': return <Activity className="w-8 h-8" />;
    case 'Network': return <Network className="w-8 h-8" />;
    case 'Binary': return <Binary className="w-8 h-8" />;
    case 'Smartphone': return <Smartphone className="w-8 h-8" />;
    case 'Database': return <Database className="w-8 h-8" />;
    case 'Code': return <Code className="w-8 h-8" />;
    case 'Monitor': return <Monitor className="w-8 h-8" />;
    case 'Glasses': return <Glasses className="w-8 h-8" />;
    case 'Hand': return <Hand className="w-8 h-8" />;
    case 'Camera': return <Camera className="w-8 h-8" />;
    default: return <Activity className="w-8 h-8" />;
  }
};

export const MEMBERS: Member[] = [
  // STAFF
  {
    id: 'matsui',
    name: 'Yusuke Matsui',
    role: 'Principal Investigator / Associate Professor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800', 
    description: 'Ph.D. (Information Science). Specializes in Multi-omics, Network Medicine, and Digital Health.',
    links: {
      website: 'https://yusuke-matsui.github.io/',
      github: 'https://github.com/yusuke-matsui'
    }
  },
  {
    id: 'uno',
    name: 'Kohei Uno',
    role: 'Assistant Professor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    description: 'Specializes in Biomechanics and Motion Analysis.'
  },
  {
    id: 'zhang',
    name: 'Bingyuan Zhang',
    role: 'Assistant Professor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    description: 'Specializes in Computational Biology and Algorithm Development.'
  },
  {
    id: 'himori',
    name: 'Koichi Himori',
    role: 'Researcher',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    description: 'Focuses on Aging and Omics Data Analysis.'
  },
  {
    id: 'okabe',
    name: 'Masaaki Okabe',
    role: 'Researcher (JSPS Post-Doc)',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    description: 'Expert in JSPS Research Fellowship projects.'
  },
  {
    id: 'hatta',
    name: 'Kazuki Hatta',
    role: 'Server Engineer',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    description: 'Manages HPC and Computing Infrastructure.'
  },
  {
    id: 'yamauchi',
    name: 'Yui Yamauchi',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    description: 'Lab administration and support.'
  },
  // STUDENTS
  {
    id: 'kitani',
    name: 'Akihiro Kitani',
    role: 'Ph.D. Student (D3)',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Alzheimer\'s Disease and Network Medicine.'
  },
  {
    id: 'nakano',
    name: 'Akiha Nakano',
    role: 'Master Student (M2)',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Omics Analysis.'
  },
  {
    id: 'yanase',
    name: 'Ryota Yanase',
    role: 'Master Student (M2)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Digital Health.'
  },
  {
    id: 'suhara',
    name: 'Go Suhara',
    role: 'Master Student (M2)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Motion Analysis.'
  },
  {
    id: 'wakuda',
    name: 'Nanako Wakuda',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Health Informatics.'
  },
  {
    id: 'furuta',
    name: 'Takeru Furuta',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Bioinformatics.'
  },
  {
    id: 'ota',
    name: 'Kosuke Ota',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Data Science.'
  },
  {
    id: 'mizuta',
    name: 'Ryosuke Mizuta',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=800',
    description: 'Researching Integrated Health Sciences.'
  }
];

export const LOCATIONS = [
  {
    name: "Nagoya University Daiko Campus",
    address: "1-1-20 Daiko-Minami, Higashi-ku, Nagoya",
    detail: "South Building 2F, Rm 233 (Digital Health & Health Sciences)",
  },
  {
    name: "Nagoya University Higashiyama Campus",
    address: "Furo-cho, Chikusa-ku, Nagoya",
    detail: "EI Building 8F, Rm 825 (Computational Biology & iGCORE)",
  }
];

/* --- COMPUTING RESOURCES DATA --- */

export const IGCORE_SPECS: HPCClusterSpec = {
  name: "iGCORE-HPC",
  description: "High-Performance Computing Environment for Omics & Big Data",
  stats: [
    { label: "Total Cores", value: "2,000+" },
    { label: "Total RAM", value: "20 TB+" },
    { label: "Storage", value: "4 PB" },
  ],
  nodes: [
    { type: "Fat Memory Nodes", count: 4, specs: "128 Cores, 3.0TB RAM" },
    { type: "Standard Nodes (Linux)", count: 17, specs: "32-64 Cores, 192-512GB RAM" },
    { type: "Standard Nodes (Windows)", count: 2, specs: "32 Cores, 512GB RAM" },
    { type: "GPU Nodes", count: 2, specs: "L40 (48GB) x3, 768GB RAM" },
    { type: "Database Nodes", count: 2, specs: "32 Cores, 512GB RAM" },
    { type: "File Server Nodes", count: 6, specs: "Total 4PB+ Storage" },
  ]
};

export const DAIKO_SERVERS: ServerSpec[] = [
  {
    id: "unikigpu",
    name: "UNIKIGPU",
    ip: ".119",
    os: "Ubuntu 22.04.5 LTS",
    location: "South Bldg 233",
    role: "GPU Workstation",
    specs: {
      cpu: "Intel Xeon Silver 4316 (40 vCPU) @ 2.30GHz",
      memory: "125 GB",
      gpu: "NVIDIA RTX A6000 (48GB)",
      storage: "900 GB NVMe"
    }
  },
  {
    id: "bmhi01",
    name: "BMHI01",
    ip: ".107",
    os: "Ubuntu 22.04.4 LTS",
    location: "Server Room (Console 10)",
    role: "Posit Workbench Server",
    specs: {
      cpu: "AMD EPYC 7413 (96 vCPU) @ 2.65GHz",
      memory: "1.5 TB",
      storage: "109 TB HDD + 900 GB NVMe"
    }
  },
  {
    id: "bmhi02",
    name: "BMHI02",
    ip: ".110",
    os: "Ubuntu 22.04.2 LTS",
    location: "Server Room (Console 12)",
    role: "High-Memory Analysis Node",
    specs: {
      cpu: "AMD EPYC 7543 (128 vCPU) @ 2.80GHz",
      memory: "2.0 TB",
      storage: "109 TB HDD + 900 GB NVMe"
    }
  },
  {
    id: "bmhi-a",
    name: "BMHI-A",
    ip: ".112",
    os: "Ubuntu 22.04.2 LTS",
    location: "Server Room (Console 11)",
    role: "Standard Analysis Node",
    specs: {
      cpu: "Intel Xeon W-2295 (36 vCPU) @ 3.00GHz",
      memory: "503 GB",
      storage: "32.8 TB Total (3.6T + 14.6T + 14.6T)"
    }
  },
  {
    id: "bmhi-b",
    name: "BMHI-B",
    ip: "-",
    os: "Ubuntu 22.04.5 LTS",
    location: "South Bldg 233",
    role: "Analysis Node",
    specs: {
      cpu: "N/A",
      memory: "N/A",
      storage: "N/A"
    }
  }
];


/* --- LOCALIZED CONTENT DICTIONARY --- */

const contentEN: LabContent = {
  labName: "Matsui Laboratory",
  labSubtitle: "Biomedical & Health Informatics",
  affiliation: "Nagoya Univ. Graduate School of Medicine / Institute for Glyco-core Research (iGCORE)",
  hero: {
    titlePrefix: "Computational",
    titleOmics: " Health",
    titleTwin: " Sciences",
    subtitle: "We are pioneering Data-Driven Health Science by fusing Computational Biology with Digital Health technologies. From molecular networks to whole-body sensing.",
    ctaResearch: "Explore Research",
    ctaJoin: "Join the Lab",
    keywords: [
      { label: 'Computational Biology', val: 'Omics' },
      { label: 'Digital Health', val: 'Sensing' },
      { label: 'AI & Machine Learning', val: 'Models' },
      { label: 'Data Integration', val: 'Systems' },
    ]
  },
  mission: {
    label: "Our Mission",
    title: "Deciphering Life through",
    highlight: "Multi-Layered Data",
    description: "The human body is a complex system where molecular dynamics (Micro) and physical behaviors (Macro) interact. We use AI to integrate these layers, creating a precision 'Digital Twin' for healthcare.",
    bioCard: {