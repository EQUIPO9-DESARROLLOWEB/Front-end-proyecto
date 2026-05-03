import { NextResponse } from 'next/server';

export async function GET() {
  const posts = [
    { id: '1', titulo: 'Candidato A', descripcion: 'Propuesta de salud' },
    { id: '2', titulo: 'Candidato B', descripcion: 'Propuesta de educación' }
  ];
  return NextResponse.json(posts);
}