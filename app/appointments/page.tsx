import type { Metadata } from "next";
import { AppointmentForm } from "@/components/AppointmentForm";
import { ContactDetails } from "@/components/ContactDetails";
import { MedicalNotice } from "@/components/MedicalNotice";
import { PageHero } from "@/components/PageHero";
export const metadata:Metadata={title:"Request an Appointment",description:"Request a Summit Valley Medical Center appointment. A scheduler will confirm department and clinician availability."};
export default function Appointments(){return <><PageHero title="Request an appointment" description="Send a basic scheduling request online. A Summit Valley scheduler must confirm the appointment date and time."/><MedicalNotice emergency/><section className="section"><div className="container content-grid"><div><div className="business-disclosure" style={{marginTop:0,marginBottom:24}}><strong>Protect your privacy</strong><p>Provide contact and scheduling information only. Do not submit symptoms, diagnoses, medical records, Social Security numbers, or payment information through this public form.</p></div><AppointmentForm/></div><ContactDetails/></div></section></>}
