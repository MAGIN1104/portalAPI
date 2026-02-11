import { NextRequest, NextResponse } from 'next/server';
import {
  getAllEndpoints,
  getEndpointsByCategory,
  getEndpointById,
} from '@/lib/endpoints-data';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const id = searchParams.get('id');

    // Si pide un endpoint específico
    if (id) {
      const endpoint = getEndpointById(id);
      if (!endpoint) {
        return NextResponse.json(
          { error: 'Endpoint no encontrado' },
          { status: 404 }
        );
      }
      return NextResponse.json({ data: endpoint });
    }

    // Si pide por categoría
    if (category) {
      const endpoints = getEndpointsByCategory(category);
      return NextResponse.json({ data: endpoints });
    }

    // Retornar todos
    const allEndpoints = getAllEndpoints();
    return NextResponse.json({ data: allEndpoints });
  } catch (error) {
    console.error('Error fetching endpoints:', error);
    return NextResponse.json(
      { error: 'Error al obtener endpoints' },
      { status: 500 }
    );
  }
}
