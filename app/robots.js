export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://bananaexpress.com.ar/sitemap.xml',
  };
}
