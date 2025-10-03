import {
  Home,
  Layers,
  Business,
  Apartment,
  MenuBook,
  HelpOutline,
  Science,
  Nature,   
  BarChart,
  People,
  Dns,
  Security,
  Storage,
  Settings,
  Headphones,
  Computer,
  BuildCircle
} from "@mui/icons-material";

export const menuData = [
  {
    id: "home",
    label: "Home",
    description: "Welcome to our comprehensive platform",
    icon: Home
  },
  {
    id: "products",
    label: "Products & Services",
    description: "Explore our comprehensive offerings",
    icon: Layers,
    children: [
      {
        id: "software",
        label: "Software Solutions",
        description: "Custom software development and deployment",
        icon: Computer
      },
      {
        id: "cloud",
        label: "Cloud & Infrastructure",
        description: "Scalable cloud solutions and infrastructure",
        icon: Dns
      },
      {
        id: "consulting",
        label: "Consulting Services",
        description: "Expert guidance and strategic support",
        icon: Business,
        children: [
          {
            id: "technical",
            label: "Technical Consulting",
            description: "Architecture and implementation guidance",
            icon: BuildCircle
          },
          {
            id: "strategy",
            label: "Business Strategy",
            description: "Digital transformation and business planning",
            icon: BarChart
          },
          {
            id: "training",
            label: "Training & Workshops",
            description: "Team skill development and knowledge transfer",
            icon: MenuBook
          }
        ]
      },
      {
        id: "digital",
        label: "Digital Transformation",
        description: "Comprehensive digital transformation strategies",
        icon: Apartment
      },
      {
        id: "cyber",
        label: "Cybersecurity Consulting",
        description: "Comprehensive cybersecurity services and solutions",
        icon: Security
      },
      {
        id: "analytics",
        label: "Data & Analytics Consulting",
        description: "Data strategy, analytics, and business intelligence",
        icon: Storage
      },
      {
        id: "devops",
        label: "DevOps & Platform Engineering",
        description: "DevOps transformation and platform engineering",
        icon: Settings
      },
      {
        id: "support",
        label: "Support & Maintenance",
        description: "Ongoing maintenance and support services",
        icon: Headphones
      }
    ]
  },
  {
    id: "industry",
    label: "Industry Solutions",
    description: "Specialized solutions for different industries",
    icon: Apartment
  },
  {
    id: "company",
    label: "Company",
    description: "Learn about our organization and culture",
    icon: People
  },
  {
    id: "resources",
    label: "Resources",
    description: "Knowledge base, tools, and learning materials",
    icon: MenuBook
  },
  {
    id: "support",
    label: "Support",
    description: "Get help and support when you need it",
    icon: HelpOutline
  },
  {
    id: "research",
    label: "Research & Innovation",
    description: "Cutting-edge research and innovation initiatives",
    icon: Science
  },
  {
    id: "sustainability",
    label: "Sustainability",
    description: "Environmental responsibility and sustainable technology",
    icon: Nature   // ✅ fixed here
  },
  {
    id: "investors",
    label: "Investor Relations",
    description: "Financial information and investor resources",
    icon: BarChart
  },
  {
    id: "contact",
    label: "Contact",
    description: "Get in touch with our team",
    icon: People
  }
];

export default menuData;
