import { NextRequest, NextResponse } from 'next/server';
import { MOCK_USERS } from '@/lib/mock-credentials';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validar que se proporcionen email y password
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Buscar usuario en credenciales mock
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Crear un token simple (en producción usar JWT)
    const token = Buffer.from(
      JSON.stringify({
        userId: user.id,
        email: user.email,
        iat: Date.now(),
      })
    ).toString('base64');

    // Retornar usuario y token
    const response = NextResponse.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Error en el servidor' },
      { status: 500 }
    );
  }
}
