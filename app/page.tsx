import Link from "next/link";
import {
  ArrowRight, Award, CalendarDays, Check, CircleCheck, Clock3, HeartHandshake,
  MapPin, Phone, ShieldCheck, Siren, Users
} from "lucide-react";
import { physicianRoles, services, site } from "@/lib/data";

const faqs = [
  ["Is Summit Valley accepting patients?", "Yes. Summit Valley is newly opened and appointment availability varies by department and clinician. Call our scheduling team or use the dedicated appointment page."],
  ["Can I request an appointment online?", "Yes. The appointment page collects basic contact and department information only. A scheduler must confirm the date and time."],
  ["Which services are available?", "Summit Valley provides primary care, cardiology, orthopedics, neurology, pediatrics, emergency care, diagnostic imaging, and laboratory services."],
  ["Which insurance plans are accepted?", "Participation varies by plan, clinician, and service. Contact your insurer and our billing team to verify current network status before receiving care."]
];

export default function Home() {
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))};
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image" role="img" aria-label="Summit Valley physician and care team in a bright modern hospital" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow"><HeartHandshake size={17} />A new hospital now serving Austin</span>
          <h1 id="hero-title">Modern medicine. <span>Genuinely human care.</span></h1>
          <p>Summit Valley Medical Center provides emergency, primary, specialty, imaging, and laboratory services in one coordinated Austin medical campus.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/appointments"><CalendarDays size={19}/>Request an Appointment</Link>
            <a className="button button-secondary" href={site.phoneHref}><Phone size={18}/>Call {site.phone}</a>
          </div>
          <div className="hero-note"><CircleCheck size={18}/>Emergency services available 24 hours a day, 7 days a week</div>
        </div>
      </div>
    </section>

    <div className="trust-strip">
      <div className="container trust-card">
        <div className="trust-item"><span className="trust-icon"><Award/></span><span><strong>Newly opened</strong><span>Serving the Austin community</span></span></div>
        <div className="trust-item"><span className="trust-icon"><Users/></span><span><strong>Qualified teams</strong><span>Credentialed medical professionals</span></span></div>
        <div className="trust-item"><span className="trust-icon"><ShieldCheck/></span><span><strong>Safety first</strong><span>Evidence-based clinical standards</span></span></div>
        <div className="trust-item"><span className="trust-icon"><HeartHandshake/></span><span><strong>24/7 emergency</strong><span>Emergency department always open</span></span></div>
      </div>
    </div>

    <section className="section" id="care">
      <div className="container">
        <div className="section-heading center"><span className="eyebrow">Medical services</span><h2>Connected care under one roof</h2><p>Clinical evaluation guides every treatment plan. Service and appointment availability may vary by department.</p></div>
        <div className="services-grid">
          {services.map(({slug,name,icon:Icon,text})=><Link className="service-card" href={`/services/${slug}`} key={slug}>
            <span className="service-icon"><Icon/></span><h3>{name}</h3><p>{text}</p>
            <span className="text-link">Service details <ArrowRight size={15}/></span>
          </Link>)}
        </div>
        <div className="business-disclosure">
          <strong>How Summit Valley operates</strong>
          <p>Summit Valley Medical Center is a direct healthcare provider—not a referral directory or lead seller. Care is delivered by appropriately licensed and credentialed clinicians. Patients and/or their insurers are billed under disclosed financial terms.</p>
        </div>
      </div>
    </section>

    <section className="section section-soft" id="why-harbor">
      <div className="container care-split">
        <div className="care-visual"><div className="care-quote"><p>A new hospital designed from the ground up for clear, coordinated, respectful care.</p><span>Summit Valley care philosophy</span></div></div>
        <div className="care-copy"><span className="eyebrow">The Summit Valley approach</span><h2>A more human hospital from day one</h2><p>Patients receive clear explanations, appropriate clinical evaluation, and coordinated support across departments.</p>
          <ul className="check-list"><li><Check/><span><strong>Coordinated care</strong><br/>Primary, specialty, imaging, and laboratory teams work across shared clinical workflows.</span></li><li><Check/><span><strong>Clear information</strong><br/>Treatment options and financial responsibilities are explained before care whenever possible.</span></li><li><Check/><span><strong>Accessible by design</strong><br/>A modern facility and digital experience built for a broad range of patient needs.</span></li></ul>
          <Link href="/about" className="button button-primary">About our medical center</Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Clinical team</span><h2>Find care by medical specialty</h2><p>Our medical staff office can confirm current physician availability and verified credentials. Individual physician profiles will be added only after publication approval.</p></div>
        <div className="doctor-grid">{physicianRoles.map((d,i)=><article className="doctor-card" key={d.specialty}><div className="doctor-avatar" style={{background:["#dbeafe","#dcfce7","#fef3c7"][i]}}>{d.initials}</div><div className="doctor-info"><h3>{d.title}</h3><span>{d.specialty}</span><p style={{color:"var(--muted)",marginTop:12}}>{d.note}</p></div></article>)}</div>
        <div className="all-services"><Link className="button button-secondary" href="/doctors">Doctors and credential information <ArrowRight size={17}/></Link></div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container insurance-row"><div className="insurance-copy"><span className="eyebrow">Insurance & billing</span><h2>Verify coverage before your visit</h2><p>Network participation varies by insurer, plan, clinician, and service. Our billing team can help you understand the verification process.</p></div><Link href="/insurance" className="button button-secondary">Insurance information <ArrowRight size={17}/></Link></div>
    </section>

    <section className="section">
      <div className="container location-grid">
        <div className="location-info"><span className="eyebrow">Austin medical campus</span><h2>Summit Valley Medical Center</h2><p>Patient care, emergency services, diagnostic imaging, and laboratory services at one accessible location.</p><div className="location-detail"><MapPin/><span><strong>{site.address}</strong><span>Call for parking and entrance information</span></span></div><div className="location-detail"><Clock3/><span><strong>Hospital open</strong><span>Emergency services available 24/7</span></span></div><div className="location-detail"><Phone/><span><strong><a href={site.phoneHref}>{site.phone}</a></strong><span>Appointments and general information</span></span></div><Link href="/contact" className="button button-primary">Directions and contact</Link></div>
        <div className="map"><iframe title="Map showing the Summit Valley Medical Center location" src="https://www.google.com/maps?q=1250+Medical+Plaza+Drive+Austin+TX+78701&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
      </div>
    </section>

    <section className="emergency"><div className="container emergency-inner"><span className="emergency-icon"><Siren/></span><div><h2>If this is a medical emergency, call 911 immediately.</h2><p>Do not use online scheduling or messaging for emergency care.</p></div><a href="tel:911" className="button">Call 911</a></div></section>

    <section className="final-cta"><div className="container"><h2>Choose the right next step</h2><p>Review our services or visit the dedicated appointment page. No personal information is collected on this homepage.</p><div className="hero-actions" style={{justifyContent:"center"}}><Link href="/appointments" className="button button-secondary"><CalendarDays size={18}/>Request an appointment</Link><a href={site.phoneHref} className="button button-ghost" style={{color:"white"}}><Phone size={18}/>Call {site.phone}</a></div></div></section>

    <section className="section section-soft" id="faq"><div className="container"><div className="section-heading center"><span className="eyebrow">Common questions</span><h2>Simple answers before your visit</h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section className="policy-section" aria-labelledby="policy-heading">
      <div className="container policy-inner">
        <div><span className="policy-icon"><ShieldCheck/></span><div><h2 id="policy-heading">Privacy, safety, and website policies</h2><p>Review how Summit Valley handles information, protects patient privacy, and explains website use.</p></div></div>
        <nav aria-label="Privacy and legal policies">
          <Link href="/legal/privacy">Privacy Policy</Link>
          <Link href="/legal/terms">Terms & Conditions</Link>
          <Link href="/legal/hipaa">HIPAA Notice</Link>
          <Link href="/legal/accessibility">Accessibility</Link>
          <Link href="/legal/medical-disclaimer">Medical Disclaimer</Link>
        </nav>
      </div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </>;
}
