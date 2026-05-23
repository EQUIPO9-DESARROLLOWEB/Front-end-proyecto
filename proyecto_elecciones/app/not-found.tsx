"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const frases = [
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
        background: "linear-gradient(135deg, #0f2460 0%, #1a3a8f 60%, #0f2460 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        overflow: "hidden",
        position: "relative",
        padding: "2rem",
      }}
    >
      {/* Círculos flotantes de fondo */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            borderRadius: "50%",
            opacity: 0.07,
            background: i % 2 === 0 ? "#e53e3e" : "#ffffff",
            width: `${[180, 120, 220, 90, 160, 100][i]}px`,
            height: `${[180, 120, 220, 90, 160, 100][i]}px`,
            top: `${[10, 60, 5, 75, 40, 20][i]}%`,
            left: `${[5, 80, 55, 15, 90, 40][i]}%`,
            animation: `flotar ${[8, 10, 12, 9, 11, 7][i]}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Ola animada inferior */}
      <svg
        viewBox="0 0 1440 120"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          opacity: 0.15,
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
          fill="#ffffff"
          style={{ animation: "ola 6s ease-in-out infinite alternate" }}
        />
      </svg>

      {/* Número 404 */}
      <div
        style={{
          fontSize: "clamp(6rem, 20vw, 12rem)",
          fontWeight: 900,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          background: "linear-gradient(180deg, #ffffff 30%, #e53e3e 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "pulsar 2s ease-in-out infinite",
          userSelect: "none",
          marginBottom: "0.5rem",
        }}
      >
        404
      </div>

      {/* Separador institucional */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ width: "60px", height: "2px", background: "#e53e3e" }} />
        <span
          style={{
            color: "#a0b4e8",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          Sistema Electoral Digital
        </span>
        <div style={{ width: "60px", height: "2px", background: "#e53e3e" }} />
      </div>

      {/* Frase aleatoria */}
      <p
        style={{
          color: "#ffffff",
          fontSize: "clamp(1rem, 3vw, 1.4rem)",
          fontStyle: "italic",
          marginBottom: "0.75rem",
          textAlign: "center",
          maxWidth: "500px",
          opacity: 0.9,
        }}
      >
        "{frase}"
      </p>

      <p
        style={{
          color: "#a0b4e8",
          fontSize: "0.95rem",
          marginBottom: "2.5rem",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        La página que buscas no existe o fue removida.
      </p>

      {/* Botones de acceso rápido */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2.5rem",
        }}
      >
        <Link
          href="/"
          style={{
            background: "#e53e3e",
            color: "#fff",
            padding: "0.75rem 1.75rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 700,
            fontFamily: "sans-serif",
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
            transition: "transform 0.15s, box-shadow 0.15s",
            boxShadow: "0 4px 15px rgba(229,62,62,0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(229,62,62,0.6)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 15px rgba(229,62,62,0.4)";
          }}
        >
          🏠 Ir al Inicio
        </Link>

        <Link
          href="/Resultados"
          style={{
            background: "#38a169",
            color: "#fff",
            padding: "0.75rem 1.75rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 700,
            fontFamily: "sans-serif",
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
            transition: "transform 0.15s, box-shadow 0.15s",
            boxShadow: "0 4px 15px rgba(56,161,105,0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          📊 Resultados en Vivo
        </Link>

        <Link
          href="/registro"
          style={{
            background: "transparent",
            color: "#fff",
            padding: "0.75rem 1.75rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 700,
            fontFamily: "sans-serif",
            fontSize: "0.95rem",
            border: "2px solid rgba(255,255,255,0.4)",
            transition: "border-color 0.15s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          📋 Registro Electoral
        </Link>
      </div>

      {/* Contador regresivo */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "12px",
          padding: "0.75rem 1.5rem",
          color: "#a0b4e8",
          fontFamily: "sans-serif",
          fontSize: "0.9rem",
          textAlign: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        Redirigiendo al inicio en{" "}
        <span
          style={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "1.1rem",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {contador}
        </span>{" "}
        segundos...
      </div>

      {/* Keyframes via style tag */}
      <style>{`
        @keyframes flotar {
          from { transform: translateY(0px) scale(1); }
          to   { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes pulsar {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.85; }
        }
        @keyframes ola {
          from { d: path("M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"); }
          to   { d: path("M0,80 C400,20 1100,100 1440,40 L1440,120 L0,120 Z"); }
        }
      `}</style>
    </main>
  );
}