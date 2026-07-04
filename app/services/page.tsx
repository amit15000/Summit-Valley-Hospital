import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { MedicalNotice } from "@/components/MedicalNotice";
import { services } from "@/lib/data";

export const metadata:Metadata={title:"Medical Services",description:"Explore evidence-based hospital and medical services at Summit Valley Medical Center in Austin."};
export default function ServicesPage(){return <><PageHero title="Medical services" description="Comprehensive hospital care delivered through coordinated clinical teams, clear communication, and patient-safety standards."/><section className="section"><div className="container"><div className="business-disclosure" style={{marginTop:0,marginBottom:32}}><strong>Service availability</strong><p>Availability varies by department, clinician, and clinical need. Treatment suitability is determined after an appropriate professional evaluation.</p></div><div className="services-grid">{services.map(({slug,name,icon:Icon,text})=><Link href={`/services/${slug}`} className="service-card" key={slug}><span className="service-icon"><Icon/></span><h2 style={{fontSize:"1.22rem"}}>{name}</h2><p>{text}</p><span className="text-link">Learn more <ArrowRight size={15}/></span></Link>)}</div><MedicalNotice/></div></section></>}
