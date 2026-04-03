import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://www.tiendanube.com/apps/${process.env.TIENDANUBE_CLIENT_ID}/authorize`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_id: process.env.TIENDANUBE_CLIENT_ID,
          client_secret: process.env.TIENDANUBE_CLIENT_SECRET,
          grant_type: 'authorization_code',
          code,
        }),
      }
    );

    if (!response.ok) {
        throw new Error(`Tiendanube API responded with status ${response.status}`);
    }

    const data = await response.json();

    console.log('=== TIENDANUBE OAUTH COMPLETADO ===');
    console.log('TIENDANUBE_STORE_ID:', data.user_id);
    console.log('TIENDANUBE_ACCESS_TOKEN:', data.access_token);
    console.log('===================================');

    return NextResponse.json({
      ok: true,
      store_id: data.user_id,
      message: 'OAuth completado. Revisar logs de Vercel para copiar las credenciales.'
    });
  } catch (error) {
    console.error('Error in Tiendanube OAuth:', error);
    return NextResponse.json({ error: 'Failed to complete OAuth' }, { status: 500 });
  }
}
