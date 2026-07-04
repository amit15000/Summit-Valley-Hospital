import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";

export function ContactDetails() {
  return <aside className="side-card">
    <h2>Summit Valley Medical Center</h2>
    <div className="location-detail"><MapPin/><span><strong>Hospital location</strong>{site.address}</span></div>
    <div className="location-detail"><Phone/><span><strong>General information</strong><a href={site.phoneHref}>{site.phone}</a></span></div>
    <div className="location-detail"><Mail/><span><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></span></div>
    <div className="location-detail"><Clock3/><span><strong>Hours</strong>{site.hours}</span></div>
  </aside>;
}
