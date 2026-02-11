import { NextRequest, NextResponse } from 'next/server';
import {
  getAllAuthTypes,
  getActiveAuthTypes,
  getAuthTypeById,
} from '@/lib/auth-types-data';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const active = searchParams.get('active');
    const id = searchParams.get('id');

    // Si pide un tipo específico
    if (id) {
      const authType = getAuthTypeById(id);
      if (!authType) {
        return NextResponse.json(
          { error: 'Tipo de autenticación no encontrado' },
          { status: 404 }
        );
      }
      return NextResponse.json({ data: authType });
    }

    // Si pide solo activos
    if (active === 'true') {
      const activeTypes = getActiveAuthTypes();
      return NextResponse.json({ data: activeTypes });
    }

    // Retornar todos
    const allTypes = getAllAuthTypes();
    return NextResponse.json({ data: allTypes });
  } catch (error) {
    console.error('Error fetching auth types:', error);
    return NextResponse.json(
      { error: 'Error al obtener tipos de autenticación' },
      { status: 500 }
    );
  }
}
