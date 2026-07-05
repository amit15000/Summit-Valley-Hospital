"use client";
import { useState } from "react";

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="form-card"><h2 style={{color:"var(--navy-dark)", marginBottom:10}}>We received your request.</h2><p>Our scheduling team will contact you to confirm availability. This message is not an appointment confirmation.</p></div>;
  return <form className="form-card" onSubmit={e=>{e.preventDefault();setSent(true)}}>
    <div className="form-grid">
      <div className="form-field"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="form-field"><label htmlFor="timeframe">Preferred timeframe</label><select id="timeframe" name="timeframe" defaultValue="" required><option value="" disabled>Select a timeframe</option><option>Next available</option><option>Within two weeks</option><option>Within one month</option><option>General information only</option></select></div>
      <div className="form-field full"><label htmlFor="service">Department</label><select id="service" name="service" defaultValue="" required><option value="" disabled>Select a department</option><option>Primary Care</option><option>Cardiology</option><option>Orthopedics</option><option>Neurology</option><option>Pediatrics</option><option>Diagnostic Imaging</option><option>Laboratory Services</option><option>Not sure yet</option></select></div>
      {!compact && <div className="form-field full"><p className="form-note"><strong>Please do not include medical details.</strong> This public form is only for scheduling. A care team member will speak with you privately.</p></div>}
    </div>
    <button className="button button-primary" type="submit">Request an appointment</button>
  </form>;
}
