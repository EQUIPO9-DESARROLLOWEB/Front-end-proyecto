'use client';
import { useEffect, useState } from "react";
import Contador from "./Contador/Contador";
import Head from "./head/head";
import Hero from "./hero/hero";

export default function Home() {
  // Inicializamos como un array vacío para poder tener varias tarjetas
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        // Si la API devuelve un solo objeto, lo metemos en un array [data]
        // Si devuelve varios, usamos data directamente
        setPosts(Array.isArray(data) ? data : [data]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head />
      <Hero />
      
      {/* Sección del Dashboard */}
      <main className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-2">
              Contador de Votantes por Localidad
            </h2>
            <p className="text-gray-500">
              Monitoreo en tiempo real de la participación electoral en cada centro de votación
            </p>
          </div>

          {/* Grid de Tarjetas: 1 columna en móvil, 3 en pantallas grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {loading ? (
              <p>Cargando centros de votación...</p>
            ) : (
              posts.map((post, index) => (
                <Contador
                  key={index}
                  titulo={post.titulo}
                  descripcion={post.descripcion}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}