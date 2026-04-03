import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      `https://api.tiendanube.com/v1/${process.env.TIENDANUBE_STORE_ID}/products`,
      {
        headers: {
          'Authentication': `bearer ${process.env.TIENDANUBE_ACCESS_TOKEN}`,
          'User-Agent': 'BananaExpress (admin@bananaexpress.com)',
        },
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) {
        throw new Error(`Tiendanube API responded with status ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Tiendanube products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
