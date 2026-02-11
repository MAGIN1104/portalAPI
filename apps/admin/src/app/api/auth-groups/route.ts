import { NextRequest, NextResponse } from 'next/server';
import {
  getAllAuthGroups,
  getActiveAuthGroups,
  getAuthGroupById,
  getAuthGroupByEndpoint,
  getAuthTypesForGroup,
} from '@/lib/auth-types-data';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const endpoint = searchParams.get('endpoint');
    const active = searchParams.get('active');
    const includeTypes = searchParams.get('includeTypes') === 'true';

    // Si pide un grupo específico
    if (id) {
      const group = getAuthGroupById(id);
      if (!group) {
        return NextResponse.json(
          { error: 'Grupo de autenticación no encontrado' },
          { status: 404 }
        );
      }

      const response = {
        data: group,
        ...(includeTypes && { authTypes: getAuthTypesForGroup(id) }),
      };

      return NextResponse.json(response);
    }

    // Si pide por endpoint
    if (endpoint) {
      const group = getAuthGroupByEndpoint(endpoint);
      if (!group) {
        return NextResponse.json(
          { error: 'No hay grupo de autenticación para este endpoint' },
          { status: 404 }
        );
      }

      const response = {
        data: group,
        ...(includeTypes && { authTypes: getAuthTypesForGroup(group.id) }),
      };

      return NextResponse.json(response);
    }

    // Si pide solo grupos activos
    if (active === 'true') {
      const activeGroups = getActiveAuthGroups();
      const groups = includeTypes
        ? activeGroups.map((group) => ({
            ...group,
            authTypes: getAuthTypesForGroup(group.id),
          }))
        : activeGroups;

      return NextResponse.json({ data: groups });
    }

    // Retornar todos
    const allGroups = getAllAuthGroups();
    const groups = includeTypes
      ? allGroups.map((group) => ({
          ...group,
          authTypes: getAuthTypesForGroup(group.id),
        }))
      : allGroups;

    return NextResponse.json({ data: groups });
  } catch (error) {
    console.error('Error fetching auth groups:', error);
    return NextResponse.json(
      { error: 'Error al obtener grupos de autenticación' },
      { status: 500 }
    );
  }
}
