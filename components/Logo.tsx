import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Summit Valley Medical Center home">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span><strong>Summit Valley</strong><small>MEDICAL CENTER</small></span>
    </Link>
  );
}
