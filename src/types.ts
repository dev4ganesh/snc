export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  longDescription: string;
  benefits: string[];
  imageUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: "Residential" | "Commercial" | "Interior" | "Renovation" | "Architecture";
  imageUrl: string;
  client: string;
  location: string;
  year: string;
  size: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
}

