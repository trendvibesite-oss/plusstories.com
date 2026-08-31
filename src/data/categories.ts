export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  articleCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "tech",
    name: "Technology",
    slug: "tech",
    description: "Explore the latest in Artificial Intelligence, software engineering, digital security, and tech trends.",
    iconName: "Cpu",
    articleCount: 12,
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    description: "Insights on entrepreneurship, strategic growth, content marketing, digital publishing, and finance.",
    iconName: "TrendingUp",
    articleCount: 15,
  },
  {
    id: "services",
    name: "Services",
    slug: "services",
    description: "In-depth guides on digital marketing solutions, professional services, customer acquisition, and B2B workflows.",
    iconName: "Briefcase",
    articleCount: 9,
  },
  {
    id: "home-decor",
    name: "Home Decor",
    slug: "home-decor",
    description: "Interior design inspiration, modern living spaces, smart home aesthetics, and home improvement tips.",
    iconName: "Home",
    articleCount: 8,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description: "Health guides, wellness habits, medical technology breakthroughs, and preventive healthcare strategies.",
    iconName: "HeartPulse",
    articleCount: 10,
  },
];
