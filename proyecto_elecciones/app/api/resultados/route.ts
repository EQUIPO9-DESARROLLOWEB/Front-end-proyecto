import { NextResponse } from 'next/server';

export async function GET() {
  const candidatos = [
    { id: 1, nombre: "María Elena Rodríguez", partido: "Partido Progresista", votos: 15847, foto: "https://randomuser.me/api/portraits/women/44.jpg", colorPartido: "#1a237e" },
    { id: 2, nombre: "Carlos Mendoza Torres", partido: "Alianza Ciudadana", votos: 13256, foto: "https://randomuser.me/api/portraits/men/32.jpg", colorPartido: "#c62828" },
    { id: 3, nombre: "Ana Patricia Gómez", partido: "Movimiento Verde", votos: 9834, foto: "https://randomuser.me/api/portraits/women/68.jpg", colorPartido: "#2e7d32" },
    { id: 4, nombre: "Roberto Sánchez Vega", partido: "Frente Democrático", votos: 7456, foto: "https://randomuser.me/api/portraits/men/76.jpg", colorPartido: "#37474f" }
  ];
  return NextResponse.json(candidatos);
}