import {
  ServiceItem,
  ProjectItem,
  TestimonialItem,
  TimelineItem,
  TeamMember,
} from "../types";
import HarshaImage from "../assets/Harsha.jpeg";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential",
    title: "Premium Construction",
    description:
      "Solid high-integrity structural builds, engineered foundations, and pristine masonry that stands the test of time.",
    iconName: "Home",
    longDescription:
      "Our construction department specializes in executing high-integrity builds. We leverage state-of-the-art materials, precise concrete formulations, and elite engineering processes to ensure that your dream project becomes an immortal physical structure.",
    benefits: [
      "Rigid structural concrete and steel framework execution",
      "Sustainable premium raw materials sourced with high integrity",
      "Spatially optimized layouts designed for lifelong durability",
      "Trust the process - seamless execution from foundation to handover",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "interior",
    title: "Bespoke Interiors",
    description:
      "Curated modern layouts, premium modular ceilings, custom wood paneling, and luxury ambient lighting scenes.",
    iconName: "Palette",
    longDescription:
      "We breathe soul into concrete hulls. From custom modular millwork to premium floating false ceilings and high-end texture layering, our interior designs turn physical rooms into sensory experiences.",
    benefits: [
      "Exquisite Italian marble integrations and flawless alignments",
      "Elegant false ceiling designs with custom dimmable micro-LEDs",
      "Bespoke modular kitchen cabinets and spatial acoustic details",
      "Premium texture coats and curated mood-specific ambient lighting",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "architecture",
    title: "Architectural Planning",
    description:
      "Intelligent 2D floorplans, 3D photorealistic walkthroughs, local municipal clearances, and drafting.",
    iconName: "Compass",
    longDescription:
      "Before the ground turns, our young, passionate design team engineers precise blueprints. We generate photorealistic spatial models, sun pathway studies, and wind load diagrams to eliminate friction entirely.",
    benefits: [
      "Photorealistic virtual reality walkthrough environments",
      "Comprehensive zoning code audits and expedited approvals",
      "Symmetrical layout structural planning to optimize utilities",
      "Bespoke digital blueprint and cost-engineering dry-runs",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "sn-elysium",
    title: "The Elysium Pavilion",
    description:
      "An extraordinary modern concrete and glass oceanfront masterwork.",
    category: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    client: "Elysium Holdings Ltd.",
    location: "Malibu, California",
    year: "2025",
    size: "18,500 sq. ft.",
    highlights: [
      "Cantilevered infinity pool with royal blue under-lighting",
      "Floor-to-ceiling multi-slide structural double-glazed facades",
      "Smart geothermal climate loops and integrated solar tiles",
    ],
  },
  {
    id: "sn-aurora",
    title: "Aurora Corporate Spires",
    description:
      "A signature multi-tier glassy tower serving as a luxury corporate headquarters.",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    client: "Aurora Global FinTech",
    location: "Singapore Marina District",
    year: "2026",
    size: "420,000 sq. ft.",
    highlights: [
      "LEED Platinum rating certified architecture model",
      "Dynamic auto-shading responsive wind-optimized facade glass",
      "Bespoke triple-height hanging sky-gardens with natural biotopes",
    ],
  },
  {
    id: "sn-lumina",
    title: "Lumina Penthouse Suite",
    description:
      "Ultra-luxury modern interior with custom Italian marble and solid walnut details.",
    category: "Interior",
    imageUrl:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80",
    client: "Private Investor",
    location: "Mayfair, London",
    year: "2025",
    size: "6,200 sq. ft.",
    highlights: [
      "Custom integrated laser-cut marble floors",
      "Warm premium orange dimmable micro-LED light design",
      "Bespoke soundproofing acoustic walls with integrated high-fidelity sound",
    ],
  },
  {
    id: "sn-monolith",
    title: "The Obsidian Monolith",
    description: "A striking minimalist dark luxury corporate office complex.",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    client: "Vanguard Partners Assets",
    location: "Frankfurt, Germany",
    year: "2024",
    size: "180,000 sq. ft.",
    highlights: [
      "High-contrast black volcanic stone texture alignment",
      "Intelligent parking grids featuring inductive EV speed docks",
      "Acoustically dead glass work halls overlooking floating gardens",
    ],
  },
  {
    id: "sn-vanguard",
    title: "Vanguard Coastal Estate",
    description:
      "Modern structural concrete villa blending into native stone cliffside landscapes.",
    category: "Residential",
    imageUrl:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    client: "The Croft Family Trust",
    location: "Costa Brava, Spain",
    year: "2024",
    size: "11,200 sq. ft.",
    highlights: [
      "Integrated natural bedrock support anchoring system",
      "High-durability maritime salt-spray proof cladding materials",
      "Fully customized solar harvesting micro-grid power center",
    ],
  },
  {
    id: "sn-solstice",
    title: "Solstice Pavilion Restoration",
    description:
      "Deep structural upgrading and bespoke retrofitting of an iconic 1930s seaside ballroom.",
    category: "Renovation",
    imageUrl:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80",
    client: "Municipal Heritage Association",
    location: "Nice, France",
    year: "2025",
    size: "14,000 sq. ft.",
    highlights: [
      "Historical decorative plaster restoration using laser photogrammetry",
      "Hidden carbon fiber core installation on original concrete columns",
      "High-efficiency smart underfloor climate grid installation",
    ],
  },
];
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Vishnu",
    role: "Homeowner - Gulzarpet",
    company: "Anantapur",
    comment:
      "Arka infra & interiors handled our residential duplex build in Georgepet with outstanding precision. Their young, energetic team was friendly, highly adaptive, and completed our gorgeous custom interiors ahead of schedule.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "test-2",
    name: "Praveen Kumar Reddy",
    role: "Managing Director",
    company: "Reddy Minerals & Exports, Anantapur",
    comment:
      "Their modern planning layouts and structural integrity are top-tier. From advanced 3D walk-through planning to the final premium ceiling installation, the Arka infra & interiors team executed our workspace with perfection.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "test-3",
    name: "Tharun",
    role: "Homeowner - LakshmiNagar",
    company: "Anantapur",
    comment:
      "We wanted a signature, sleek, high-contrast cafe ambiance on Court Road. Arka infra & interiors delivered structural planning and bespoke interior finishing that completely exceeded our high expectations.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024",
    title: "The Vision & Challenge Born",
    description:
      "A group of passionate young engineers and designers co-found Arka infra & interiors. Eager to challenge traditional brick-and-mortar ideas, we began with a simple but fiery motto: 'Trust the process, we build your dream.'",
  },
  {
    year: "2025",
    title: "Rapid Local Recognition",
    description:
      "Delivering custom bespoke offices and gorgeous high-end residential interiors. We proved that youth is our greatest asset: executing projects with relentless drive, speed, and design precision.",
  },
  {
    year: "2026",
    title: "Next-Gen Building Era",
    description:
      "Mastering fully-integrated construction, planning, and design. Now recognized as the go-to young contractors for top-tier interiors, structural planning, and flawless execution.",
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Harshavardhan Gaddam",
    role: "Founder & Chief Executive Officer",
    imageUrl: HarshaImage,
    linkedin: "https://linkedin.com",
  },
];
