export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'compost',
  name: 'Compost',
  origin: 'https://sustainability-blog.oriz.in',
  tagline: 'A sustainable-living notebook — waste less, verify claims, repair what breaks',
  description:
    'Compost — a sustainable-living notebook. Practical low-waste habits, honest claim-checking, and repair over replace.',
}
