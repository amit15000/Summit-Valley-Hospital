import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>A new Austin hospital providing coordinated, evidence-based, human care.</p>
            <p><MapPin size={17} />{site.address}</p>
            <p><Phone size={17} /><a href={site.phoneHref}>{site.phone}</a></p>
            <p><Mail size={17} /><a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><Clock3 size={17} />{site.hours}</p>
          </div>
          <div><h2>Patient care</h2><Link href="/services">Medical Services</Link><Link href="/doctors">Doctors & Specialists</Link><Link href="/appointments">Appointments</Link><Link href="/insurance">Insurance Information</Link><Link href="/patient-resources">Patient Resources</Link><Link href="/emergency">Emergency Services</Link></div>
          <div><h2>Medical center</h2><Link href="/about">About Us</Link><Link href="/careers">Careers</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link><Link href="/legal/accessibility">Accessibility</Link></div>
        </div>
      </div>
      <div className="footer-legal">
        <div className="container">
          <div><Link href="/legal/privacy">Privacy Policy</Link><Link href="/legal/terms">Terms & Conditions</Link><Link href="/legal/hipaa">HIPAA Notice</Link><Link href="/legal/medical-disclaimer">Medical Disclaimer</Link><Link href="/legal/accessibility">Accessibility</Link></div>
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
