'use client';
import { useEffect, useState } from "react";
import Contador from "./Contador/Contador"; 

export default function Home() {
  const [post, setPost] = useState({ titulo: "Cargando...", descripcion: "..." });

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Contador 
        titulo={post.titulo} 
        descripcion={post.descripcion} 
      />
    </div>
  );
}