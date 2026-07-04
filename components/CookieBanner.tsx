"use client";
import Link from "next/link";
import { useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return <aside className="cookie-banner" aria-label="Cookie notice">
    <div><strong>Your privacy matters.</strong><p>We use essential cookies to keep this site secure and accessible. <Link href="/legal/cookies">Cookie Policy</Link></p></div>
    <div><button onClick={() => setVisible(false)} className="button button-ghost">Manage</button><button onClick={() => setVisible(false)} className="button button-primary">Accept</button></div>
  </aside>;
}
