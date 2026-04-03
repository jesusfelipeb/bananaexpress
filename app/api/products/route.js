import { NextResponse } from 'next/server';
import { getProducts, isTiendanubeConfigured } from '@/lib/tiendanube';

export async function GET() {
  if (!isTiendanubeConfigured()) {
    return NextResponse.json(
      { error: 'Tiendanube no está configurado', products: [] },
      { status: 200 }
    );
  }

  try {
    const products = await getProducts();
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error fetching Tiendanube products:', error);
    return NextResponse.json(
      { error: 'Error al obtener productos', products: [] },
      { status: 500 }
    );
  }
}
