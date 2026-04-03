import { getAllZoneSlugs } from '@/lib/zones';

const SITE_URL = 'https://bananaexpress.com.ar';

export default function sitemap() {
  const zonePages = getAllZoneSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...zonePages,
  ];
}
