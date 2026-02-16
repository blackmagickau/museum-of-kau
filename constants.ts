import { CuratorProfile, Education, Experience, SkillCategory } from './types';

export const CURATOR: CuratorProfile = {
  name: "Kaushik Yadhunath",
  title: "Account Solutions Engineer",
  tagline: "Exhibition Lead & Strategist",
  bio: [
    " view technical presales not merely as a transaction, but as the curation of value. Just as a museum selects pieces that converse with one another to tell a greater story, I assemble cloud solutions, AI capabilities, and business requirements into cohesive digital transformation strategies.",
    "My career spans from deep-dive software engineering to high-level strategic consulting. From crafting SQL queries to improve memory usage by 30% to managing $1.5M+ pipelines for complex multi-cloud solutions.",
    "Currently, I am focused on the intersection of AI and enterprise value—guiding customers through the gallery of possibilities that Generative AI offers."
  ],
  location: "Singapore",
  status: "Open to conversations",
  email: "kyadunath@gmail.com",
  phone: "9189 1857",
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com/in/kaushik-y/", icon: "ri-linkedin-fill" },
    { platform: "GitHub", url: "https://github.com/BlackMagicKau", icon: "ri-github-fill" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "salesforce-2025",
    company: "Salesforce",
    role: "Account Solutions Engineer",
    period: "Oct 2025 - Present",
    location: "Singapore",
    type: "Corporate",
    description: "Driving complex multi-cloud solution design for customers spanning Nonprofit, Automotive, Finance and Consumer Good sectors.",
    achievements: [
      "Managed $1.5M+ pipeline across strategic opportunities in ASEAN.",
      "Driving complex multi-cloud solution design with CRM, CDP and AI solutions.",
      "Led community engagement by supporting field marketing events across ASEAN.",
      "Guided 100+ customers through hands-on AI workshops."
    ],
    tech: ["CRM", "CDP", "GenAI", "Multi-cloud Strategy"],
    imageUrl: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1600",
    imageAlt: "Salesforce Tower in San Francisco representing cloud dominance"
  },
  {
    id: "squirro-2025",
    company: "Squirro",
    role: "Senior Presales Engineer, APJ",
    period: "Mar 2025 - Sep 2025",
    location: "Singapore",
    type: "Corporate",
    description: "Led technical scoping and PoC delivery for high-profile clients in Public Sector and Financial Institutions.",
    achievements: [
      "Led technical scoping and PoC delivery across APJ, amounting to $2M NNACV.",
      "Produced on-prem blueprint for public sector defense agency including infrastructure sizing.",
      "Secured a 7-figure tender win through strategic risk controls and implementation planning.",
      "Designed and deployed demo environments integrated with SharePoint, Jira, and on-prem systems.",
      "Planned LLM infrastructure for customer-hosted, on-premise GenAI deployments.",
      "Authored internal deployment playbook for LLM deployment on 100GB vRAM Linux workbench."
    ],
    tech: ["Vector Search", "LLM", "Linux", "On-prem Infrastructure", "SharePoint"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
    imageAlt: "Abstract data visualization representing cognitive search and AI"
  },
  {
    id: "servicenow-2023",
    company: "ServiceNow",
    role: "Digital Solution Consultant",
    period: "Nov 2023 - Feb 2025",
    location: "Singapore",
    type: "Corporate",
    description: "Owned and developed technical and strategic business relationships with C-Level executives.",
    achievements: [
      "Plan and deliver strategic roadmap for accounts, identifying customer needs and product adoption.",
      "Influence and orchestrate the delivery of all technical resources to realise customer outcomes.",
      "Secured an IT Operations engagement for a leading global electronics company (CACV SGD 650k).",
      "Designed and implemented a predictive model using Azure Databricks & Azure ML to forecast API volume.",
      "Reduced API latency by 2% at peak through proactive resource allocation."
    ],
    tech: ["Azure Databricks", "Azure ML", "IT Operations", "Strategic Consulting"],
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
    imageAlt: "Modern enterprise office interior symbolizing digital workflows"
  },
  {
    id: "agoda-2023",
    company: "Agoda",
    role: "Software Engineer Intern",
    period: "Aug 2023 - Oct 2023",
    location: "Singapore",
    type: "Internship",
    description: "Full-stack development for the Chain Wholesale distribution portal.",
    achievements: [
      "Implemented new features using ReactJS (TypeScript) and Kotlin.",
      "Conducted unit tests using MockK and Jest and end-to-end tests using Playwright.",
      "Researched on OLAP tools like Cube.js for optimising data retrieval."
    ],
    tech: ["ReactJS", "Kotlin", "TypeScript", "MockK", "Jest", "Playwright", "Cube.js"],
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1600",
    imageAlt: "Singapore skyline featuring Marina Bay Sands"
  },
  {
    id: "google-2023",
    company: "Google",
    role: "Customer Engineer Intern",
    period: "May 2023 - Aug 2023",
    location: "Singapore",
    type: "Internship",
    description: "Developed AI models and facilitated GenAI workshops for major organizations.",
    achievements: [
      "Developed models converting questions into SQL queries using PaLM2.",
      "Integrated Vertex AI support into GPTCache for semantic caching.",
      "Researched efficacy of Knowledge Graphs with LLMs for RAG.",
      "Built a Landing Zone in GCP using Terraform (IaC) and Sentinel (PaC).",
      "Won 'Most Business Impact' in internal AI hackathon with YouTube Shorts Product Recognition feature."
    ],
    tech: ["GCP", "Vertex AI", "PaLM2", "Terraform", "RAG", "SQL"],
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600",
    imageAlt: "Collaborative open office environment representing innovation culture"
  },
  {
    id: "thunes-2022",
    company: "Thunes",
    role: "Technology Intern (Data Science)",
    period: "Sep 2022 - Jan 2023",
    location: "Singapore",
    type: "Internship",
    description: "Data analysis and ETL pipeline optimization.",
    achievements: [
      "Optimized SQL queries in Redash improving memory usage by 30% and speed by 33%.",
      "Created dashboards monitoring 1,000,000+ transactions per day.",
      "Integrated Redash with Grafana for real-time monitoring.",
      "Developed custom ETL pipelines for metadata ingestion into Amazon Redshift."
    ],
    tech: ["SQL", "Redash", "Grafana", "ETL", "Amazon Redshift"],
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600",
    imageAlt: "Digital network connections symbolizing global payments"
  },
  {
    id: "socgen-2022",
    company: "Société Générale",
    role: "Software Engineer Intern",
    period: "May 2022 - Aug 2022",
    location: "Singapore",
    type: "Internship",
    description: "Automated BI reporting and developed internal web applications for vendor management.",
    achievements: [
      "Automated BI time-tracking report generation using Python scripting and PowerBI, saving over $100,000 in project funding.",
      "Developed web application using Flask, React.js, and PostgreSQL that was used for vendor management."
    ],
    tech: ["Python", "PowerBI", "Flask", "React.js", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
    imageAlt: "Glass skyscrapers in a financial district"
  },
  {
    id: "olympus-2022",
    company: "Olympus APAC",
    role: "Solutions Architect Intern",
    period: "Jan 2022 - May 2022",
    location: "Singapore",
    type: "Internship",
    description: "Developed administrative process automation tools and healthcare diagnostic architectures.",
    achievements: [
      "Developed a tool that consolidated form generation and processing using React, PostgreSQL, and Django, reducing administrative man-hours by 75%.",
      "Crafted architecture and proof of concept for pathology diagnostic tool that identifies certain cancer-causing tissues."
    ],
    tech: ["React", "PostgreSQL", "Django", "Healthcare IT"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600",
    imageAlt: "Biomedical research laboratory environment"
  }
];

export const EDUCATION: Education = {
  school: "Singapore Management University",
  degree: "Bachelor of Computer Science (AI Major)",
  period: "Aug 2020 - May 2024",
  details: [
    "SCIS Aspirations Scholarship",
    "Coursework: IT Solution Architecture, Data Structures & Algorithms, Foundations of ML, Database Systems"
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "SQL", icon: "ri-database-2-line" }
    ]
  },
  {
    category: "Tech & Frameworks",
    skills: [
      { name: "ReactJS", icon: "devicon-react-original" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "Grafana", icon: "devicon-grafana-original" },
      { name: "Ansible", icon: "devicon-ansible-plain" }
    ]
  },
  {
    category: "Interests",
    skills: [
      { name: "Basketball", icon: "sports_basketball" },
      { name: "Environmental Sustainability", icon: "eco" },
      { name: "Singing", icon: "mic" },
      { name: "Travelling", icon: "flight" }
    ]
  }
];
