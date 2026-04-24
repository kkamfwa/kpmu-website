import {
  Bot,
  BookOpen,
  Sprout,
  Building2,
  Cpu,
  GraduationCap,
  Landmark,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Admissions", href: "/admissions" },
  { label: "Learning Experience", href: "/learning-experience" },
  { label: "Contact", href: "/contact" }
];

export const highlights = [
  {
    title: "HEA Accreditation Readiness",
    description:
      "Built with governance, academic quality assurance, and transparent student outcomes at the core.",
    icon: ShieldCheck
  },
  {
    title: "AI-Powered Learning",
    description:
      "Blended digital tools, smart tutoring workflows, and practical innovation embedded across the student journey.",
    icon: Cpu
  },
  {
    title: "Industry-Aligned Degrees",
    description:
      "Programmes designed around employability, entrepreneurship, and Zambia's next-generation workforce needs.",
    icon: GraduationCap
  }
];

export const stats = [
  { value: "HEA", label: "Readiness-focused quality framework" },
  { value: "AI", label: "Enhanced academic support environment" },
  { value: "6", label: "Core site journeys for applicants and families" },
  { value: "24/7", label: "Digital-first learner engagement model" }
];

export const programmes = [
  {
    title: "School of Business & Leadership",
    description:
      "Develop ethical, agile leaders in management, entrepreneurship, finance, and digital business operations.",
    icon: Building2,
    items: ["Business Administration", "Entrepreneurship", "Accounting & Finance"]
  },
  {
    title: "School of Computing & Applied AI",
    description:
      "Prepare students for modern technology careers with software, data, cybersecurity, and AI-enabled problem solving.",
    icon: Bot,
    items: ["Computer Science", "Data & AI Fundamentals", "Cybersecurity"]
  },
 
  {
  title: "BSc Agriculture",
  description:
    "Study Agriculture in Zambia through a practical, career-focused degree covering crop production, agribusiness, sustainable farming systems, and modern agricultural technology.",
  icon: Sprout,
  items: [
    "Crop Production",
    "Agribusiness Management",
    "Sustainable Farming Systems",
    "Practical Farm-Based Learning",
    "Career Pathways in Agriculture",
  ],
}
];

export const pillars = [
  {
    title: "Academic Quality",
    description:
      "Structured review cycles, strong programme governance, and evidence-led continuous improvement.",
    icon: Landmark
  },
  {
    title: "Student-Centered Delivery",
    description:
      "Accessible teaching, supportive advising, and an intentional balance of campus and digital experiences.",
    icon: Users
  },
  {
    title: "Innovation Culture",
    description:
      "A practical mindset that encourages creativity, experimentation, and responsible use of emerging technologies.",
    icon: Lightbulb
  },
  {
    title: "Global Perspective",
    description:
      "Career-ready learning shaped by regional relevance and international academic standards.",
    icon: Sparkles
  }
];

export const admissionsSteps = [
  "Choose your preferred programme and review entry requirements.",
  "Prepare academic records, identification, and supporting documents.",
  "Submit your application and speak with admissions for guidance.",
  "Receive your offer, confirm enrollment, and begin orientation."
];

export const contactDetails = [
  { label: "Email", value: "info@kpmuc.com" },
  { label: "Phone", value: "+260 572 194 480" },
  { label: "Location", value: "Lusaka, Zambia" }
];

