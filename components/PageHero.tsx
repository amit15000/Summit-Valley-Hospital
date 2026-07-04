import Link from "next/link";

export function PageHero({ title, description, parent }: { title: string; description: string; parent?: string }) {
  return <section className="page-hero"><div className="container">
    <div className="breadcrumbs"><Link href="/">Home</Link> <span aria-hidden="true">/</span> {parent && <><span>{parent}</span> <span aria-hidden="true">/</span> </>}<span>{title}</span></div>
    <h1>{title}</h1><p>{description}</p>
  </div></section>;
}
