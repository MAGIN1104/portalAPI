import { NextRequest, NextResponse } from 'next/server';
import {
  getAllEndpoints,
  getAvailableCategories,
} from '@/lib/endpoints-data';
import {
  getAllAuthTypes,
  getAllAuthGroups,
} from '@/lib/auth-types-data';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slim = searchParams.get('slim') === 'true';

    const endpoints = getAllEndpoints();
    const authTypes = getAllAuthTypes();
    const authGroups = getAllAuthGroups();
    const categories = getAvailableCategories();

    // Respuesta completa
    const fullConfig = {
      endpoints: {
        data: endpoints,
        count: endpoints.length,
        categories,
      },
      authTypes: {
        data: authTypes,
        count: authTypes.length,
        active: authTypes.filter((t) => t.isActive).length,
      },
      authGroups: {
        data: authGroups,
        count: authGroups.length,
      },
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
    };

    // Respuesta simplificada
    if (slim) {
      return NextResponse.json({
        endpoints: endpoints.map((e) => ({
          id: e.id,
          title: e.title,
          category: e.category,
        })),
        authTypes: authTypes.map((t) => ({
          id: t.id,
          name: t.name,
          isActive: t.isActive,
        })),
        categories,
      });
    }

    return NextResponse.json(fullConfig);
  } catch (error) {
    console.error('Error fetching config:', error);
    return NextResponse.json(
      { error: 'Error al obtener configuración' },
      { status: 500 }
    );
  }
}
