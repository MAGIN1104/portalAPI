import { NextResponse } from "next/server";
import { fetchApiCatalog } from "@/portal/adapters/prisma/apiCatalog";

export const revalidate = 0;

export const GET = async () => {
  const catalog = await fetchApiCatalog();
  return NextResponse.json(catalog);
};
