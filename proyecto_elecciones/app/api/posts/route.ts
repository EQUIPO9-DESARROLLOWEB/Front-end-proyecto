import { NextResponse } from 'next/server';

export async function GET() {
  const posts = [
    { id: '1', titulo: 'Centro Norte', descripcion: 'Zona Norte' },
    { id: '2', titulo: 'Centro Sur', descripcion: 'Zona Sur' },
    { id: '3', titulo: 'Centro Este', descripcion: 'Zona Este' },
    { id: '4', titulo: 'Centro Oeste', descripcion: 'Zona Oeste' },
    { id: '5', titulo: 'Centro Histórico', descripcion: 'Centro' },
    { id: '6', titulo: 'Zona Industrial', descripcion: 'Industrial' },
    { id: '7', titulo: 'Zona Residencial', descripcion: 'Residencial' },
    { id: '8', titulo: 'Zona Rural', descripcion: 'Rural' }
  ];
  return NextResponse.json(posts);
}