"use client";

import Link from "next/link";
import { CalendarDays, Clock3, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { site } from "@/lib/data";

const nav = [["Services", "/services"], ["Doctors", "/doctors"], ["Patients", "/patient-resources"], ["About", "/about"], ["Contact", "/contact"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="utility">
        <div className="container utility-inner">
          <span><MapPin size={13}/>{site.address}</span>
          <nav aria-label="Utility navigation"><span><Clock3 size={13}/>Open now · Emergency care available 24/7</span><Link href="/emergency">Emergency information</Link></nav>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <a className="phone-link" href={site.phoneHref}><Phone size={18} /><span>{site.phone}</span></a>
            <Link className="button button-primary header-cta" href="/appointments"><CalendarDays size={18} />Appointments</Link>
            <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}
          <Link onClick={() => setOpen(false)} href="/insurance">Insurance</Link>
          <Link onClick={() => setOpen(false)} href="/faq">FAQ</Link>
          <a href={site.phoneHref}>Call {site.phone}</a>
        </nav>}
      </header>
    </>
  );
}
