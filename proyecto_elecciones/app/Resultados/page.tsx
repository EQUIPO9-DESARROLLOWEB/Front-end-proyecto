'use client';
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./Resultados.module.css";

interface Candidato {
  id: number;
  nombre: string;
  partido: string;
  votos: number;
  foto: string;
  colorPartido: string;
}

function formatHora(date: Date): string {
  return date.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function Resultados() {
  const [horaActual, setHoraActual] = useState<string>(formatHora(new Date()));
  const [data, setData] = useState<Candidato[]>([]);

  useEffect(() => {
    // Carga desde la API
    fetch('/api/resultados')
      .then((res) => res.json())
      .then((datosApi) => {
        setData(datosApi);
      })
      .catch((err) => console.error("Error cargando API:", err));

    // Simulación de incremento de votos
    const intervalo = setInterval(() => {
      setData((prev) =>
        prev.map((c) => ({
          ...c,
          votos: c.votos + Math.floor(Math.random() * 100),
        }))
      );
      setHoraActual(formatHora(new Date()));
    }, 30000);

    return () => clearInterval(intervalo);
  }, []);

  const totalVotos = useMemo(
    () => data.reduce((acc, c) => acc + c.votos, 0),
    [data]
  );

  const ordenados = useMemo(
    () => [...data].sort((a, b) => b.votos - a.votos),
    [data]
  );

  return (
    <div className={styles.resultados}>
      
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.titulo}>
          <span className={styles.punto}>.</span>Resultados Electorales en Vivo
        </h1>
        <div className={styles.meta}>
          <span className={styles.metaIcono}>🔄</span>
          <div>
            <p>Actualización automática cada 30 segundos</p>
            <p>Última actualización: {horaActual}</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {ordenados.map((candidato, index) => {
          const porcentaje = totalVotos > 0 ? ((candidato.votos / totalVotos) * 100).toFixed(1) : "0";
          const esLider = index === 0;

          return (
            <Link href={`/Resultados/${candidato.id}`} key={candidato.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={`${styles.card} ${esLider ? styles.cardLider : ""}`}>
                {esLider && (
                  <div className={styles.badgeLider}>
                    🏆 LÍDER
                  </div>
                )}

                <div className={styles.badgePorcentaje}>
                  {porcentaje}%
                </div>

                <div className={styles.fotoWrapper}>
                  <img
                    src={candidato.foto}
                    alt={candidato.nombre}
                    className={styles.foto}
                  />
                  <div className={styles.overlay} />
                  <div className={styles.info}>
                    <p className={styles.nombre}>{candidato.nombre}</p>
                    <p className={styles.partido}>{candidato.partido}</p>
                    <p className={styles.votos}>
                      {candidato.votos.toLocaleString("es-MX")} votos
                    </p>
                  </div>
                </div>

                <div
                  className={styles.barra}
                  style={{ backgroundColor: candidato.colorPartido }}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Aviso */}
      <div className={styles.aviso}>
        <div className={styles.avisoIcono}>ℹ️</div>
        <div>
          <p className={styles.avisoTitulo}>Resultados Preliminares</p>
          <p className={styles.avisoTexto}>
            Los resultados mostrados son preliminares y se actualizan en tiempo
            real desde la API de resultados.
          </p>
        </div>
      </div>
    </div>
  );
}