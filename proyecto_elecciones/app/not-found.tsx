"use client";
 
import { useEffect, useState } from "react";
import Link from "next/link";
 
const frases = [
  "Este voto no llegó a su destino.",
  "La página que buscas no está en el padrón.",
  "Ruta no registrada en el sistema electoral.",
  "Este camino no aparece en el registro.",
  "Página ausente en la jornada electoral.",
];
 
export default function NotFound() {
  const [contador, setContador] = useState(10);
  const [frase] = useState(() => frases[Math.floor(Math.random() * frases.length)]);
 
  useEffect(() => {
    if (contador <= 0) {
      window.location.href = "/";
      return;
    }
    const timer = setTimeout(() => setContador((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [contador]);
 
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #061a40 0%, #0d3070 50%, #0a2a5e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
        padding: "2rem",
      }}
    >
      {/* Burbujas de fondo */}
      {[
        { w: 170, t: 6,  l: 3,  dur: 9,  delay: 0,   bg: "rgba(255,255,255,0.04)" },
        { w: 120, t: 58, l: 80, dur: 11, delay: 1,   bg: "rgba(100,160,255,0.07)" },
        { w: 210, t: 2,  l: 55, dur: 13, delay: 2,   bg: "rgba(255,255,255,0.03)" },
      ].map((b, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: b.bg,
            width: `${b.w}px`,
            height: `${b.w}px`,
            top: `${b.t}%`,
            left: `${b.l}%`,
            animation: `flotar ${b.dur}s ease-in-out infinite alternate`,
            animationDelay: `${b.delay}s`,
            pointerEvents: "none",
          }}
        />
      ))}
 
      {/* 404 */}
      <div
        style={{
          fontSize: "clamp(5rem, 16vw, 9rem)",
          fontWeight: 900,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          color: "#ffffff",
          animation: "pulsar 2.5s ease-in-out infinite",
          marginBottom: "0.4rem",
          position: "relative",
          zIndex: 2,
          userSelect: "none",
        }}
      >
        404
      </div>
 
      {/* Separador */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.25rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ width: "50px", height: "1.5px", background: "rgba(255,255,255,0.4)" }} />
        <span
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Sistema Electoral Digital
        </span>
        <div style={{ width: "50px", height: "1.5px", background: "rgba(255,255,255,0.4)" }} />
      </div>
 
      {/* Frase aleatoria */}
      <p
        style={{
          color: "#ffffff",
          fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
          fontStyle: "italic",
          marginBottom: "0.6rem",
          textAlign: "center",
          maxWidth: "440px",
          opacity: 0.92,
          position: "relative",
          zIndex: 2,
          fontFamily: "Georgia, serif",
        }}
      >
        "{frase}"
      </p>
 
      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "0.88rem",
          marginBottom: "2rem",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        La página que buscas no existe o fue removida.
      </p>
 
      {/* Botones */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Link
          href="/"
          style={{
            background: "#ffffff",
            color: "#0a2a5e",
            padding: "0.65rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.88rem",
            letterSpacing: "0.02em",
          }}
        >
          Ir al Inicio
        </Link>
 
        <Link
          href="/Resultados"
          style={{
            background: "transparent",
            color: "#ffffff",
            padding: "0.65rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.88rem",
            border: "1.5px solid rgba(255,255,255,0.35)",
            letterSpacing: "0.02em",
          }}
        >
          Resultados en Vivo
        </Link>
 
        <Link
          href="/registro"
          style={{
            background: "transparent",
            color: "#ffffff",
            padding: "0.65rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.88rem",
            border: "1.5px solid rgba(255,255,255,0.35)",
            letterSpacing: "0.02em",
          }}
        >
          Registro Electoral
        </Link>
      </div>
 
      {/* Contador regresivo */}
      <div
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "10px",
          padding: "0.65rem 1.5rem",
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.85rem",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          backdropFilter: "blur(8px)",
        }}
      >
        Redirigiendo al inicio en{" "}
        <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "1rem" }}>
          {contador}
        </span>{" "}
        segundos...
      </div>
 
      <style>{`
        @keyframes flotar {
          from { transform: translateY(0px); }
          to   { transform: translateY(-30px); }
        }
        @keyframes pulsar {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.82; }
        }
      `}</style>
    </main>
  );
}