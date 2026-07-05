import { Info, Siren } from "lucide-react";

export function MedicalNotice({ emergency = false }: { emergency?: boolean }) {
  return emergency ? (
    <section className="emergency">
      <div className="container emergency-inner">
        <span className="emergency-icon"><Siren /></span>
        <div><h2>If this is a medical emergency, call 911 immediately.</h2><p>Do not use website forms or email for emergency symptoms or time-sensitive medical needs.</p></div>
        <a href="tel:911" className="button">Call 911</a>
      </div>
    </section>
  ) : (
    <aside className="medical-notice">
      <Info size={20} />
      <p>Information on this website is educational and is not medical advice. Individual outcomes vary. Consult a qualified healthcare professional for diagnosis and treatment recommendations.</p>
    </aside>
  );
}
