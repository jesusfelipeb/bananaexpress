import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZoneLanding from '@/components/ZoneLanding';
import { ZONES, getZoneBySlug, getAllZoneSlugs } from '@/lib/zones';

// Genera las rutas estáticas para cada zona
export function generateStaticParams() {
  return getAllZoneSlugs().map((slug) => ({ zone: slug }));
}

// Metadata dinámica por zona
export async function generateMetadata({ params }) {
  const { zone: slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) return {};

  const SITE_URL = 'https://bananaexpress.com.ar';

  return {
    title: `${zone.title} | Banana Express`,
    description: zone.metaDescription,
    alternates: { canonical: `${SITE_URL}/${zone.slug}` },
    openGraph: {
      title: zone.title,
      description: zone.metaDescription,
      url: `${SITE_URL}/${zone.slug}`,
      siteName: 'Banana Express',
      images: [{ url: '/2.jpg', width: 1200, height: 630, alt: `Delivery de frutas y verduras en ${zone.name}` }],
      locale: 'es_AR',
      type: 'website',
    },
  };
}

export default async function ZonePage({ params }) {
  const { zone: slug } = await params;
  const zone = getZoneBySlug(slug);

  if (!zone) {
    notFound();
  }

  // JSON-LD LocalBusiness con zona específica
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Banana Express',
    description: `Delivery de frutas y verduras frescas a domicilio en ${zone.name}, CABA.`,
    url: `https://bananaexpress.com.ar/${zone.slug}`,
    telephone: '+5491125017092',
    areaServed: {
      '@type': 'Place',
      name: zone.fullName,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paraguay 3490',
      addressLocality: 'Palermo',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
  };

  return (
    <main className="relative min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <ZoneLanding zone={zone} />
      <Footer />
    </main>
  );
}
