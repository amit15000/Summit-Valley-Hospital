import { Baby, Bone, Brain, FlaskConical, HeartPulse, ScanLine, Siren, Stethoscope } from "lucide-react";

export const site = {
  name: "Summit Valley",
  legalName: "Summit Valley Medical Center",
  email: "info@summitvalleymedical.com",
  address: "1250 Medical Plaza Drive, Austin, TX 78701",
  url: "https://www.summitvalleymedical.com",
  hours: "Emergency Services: 24 hours a day, 7 days a week",
};

export const services = [
  { slug: "primary-care", name: "Primary Care", icon: Stethoscope, text: "Preventive care, annual exams, and ongoing support for your whole health." },
  { slug: "cardiology", name: "Cardiology", icon: HeartPulse, text: "Advanced heart and vascular care, from screening through recovery." },
  { slug: "orthopedics", name: "Orthopedics", icon: Bone, text: "Personalized care to restore movement, strength, and independence." },
  { slug: "neurology", name: "Neurology", icon: Brain, text: "Evaluation and treatment planning for brain, spine, and nervous system conditions." },
  { slug: "pediatrics", name: "Pediatrics", icon: Baby, text: "Family-centered preventive and acute care for infants, children, and adolescents." },
  { slug: "emergency-care", name: "Emergency Care", icon: Siren, text: "24/7 emergency evaluation for serious illness and injury." },
  { slug: "diagnostic-imaging", name: "Diagnostic Imaging", icon: ScanLine, text: "Diagnostic imaging supported by qualified radiology professionals." },
  { slug: "laboratory-services", name: "Laboratory Services", icon: FlaskConical, text: "Timely testing designed to support diagnosis, monitoring, and treatment decisions." }
];

export const physicianRoles = [
  { specialty: "Cardiology", title: "Cardiology Team", initials: "CV", note: "Contact the medical staff office for current physician availability and verified credential information." },
  { specialty: "Orthopedics", title: "Orthopedic Team", initials: "OS", note: "Contact the medical staff office for current physician availability and verified credential information." },
  { specialty: "Family Medicine", title: "Family Medicine Team", initials: "FM", note: "Contact the medical staff office for current physician availability and verified credential information." }
];

export const legalPages: Record<string, { title: string; intro: string }> = {
  privacy: { title: "Privacy Policy", intro: "How Summit Valley collects, uses, protects, and shares information on our public website." },
  terms: { title: "Terms & Conditions", intro: "The terms governing use of Summit Valley websites, information, and digital services." },
  hipaa: { title: "HIPAA Notice of Privacy Practices", intro: "Your rights and our responsibilities regarding protected health information." },
  cookies: { title: "Cookie Policy", intro: "How essential and optional browser technologies support our website." },
  accessibility: { title: "Accessibility Statement", intro: "Our commitment to accessible, inclusive digital and in-person care." },
  "medical-disclaimer": { title: "Medical Disclaimer", intro: "Important limitations of the general educational information provided on this website." },
};
