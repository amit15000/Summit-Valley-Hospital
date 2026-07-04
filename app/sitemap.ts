import type { MetadataRoute } from "next";
import { legalPages, services, site } from "@/lib/data";
export default function sitemap():MetadataRoute.Sitemap{
  const pages=["","about","services","doctors","patient-resources","appointments","insurance","contact","emergency","careers","faq"];
  return [...pages.map(p=>({url:`${site.url}/${p}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:p===""?1:.8})),...services.map(s=>({url:`${site.url}/services/${s.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7})),...Object.keys(legalPages).map(p=>({url:`${site.url}/legal/${p}`,lastModified:new Date(),changeFrequency:"yearly" as const,priority:.3}))];
}
