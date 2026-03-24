import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://defacedworld.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/what-is-an-seo-audit`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/why-your-website-isnt-showing-up-on-google`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/meta-descriptions-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/local-seo-for-small-business`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/blog/google-business-profile-setup`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog/llm-seo-geo-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
