"use client";
 
import { useEffect, useRef } from "react";
import styles from "./hero.module.css";
 
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
 
    const NODE_COUNT = 55;
    const MAX_DIST = 160;
 
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: Node[] = [];
    let animId: number;
 
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
 
    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      }));
    };
 
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
 
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100,160,255,${0.18 * (1 - d / MAX_DIST)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
 
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120,180,255,0.55)";
        ctx.fill();
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
 
      animId = requestAnimationFrame(draw);
    };
 
    const handleResize = () => {
      resize();
      initNodes();
    };
 
    window.addEventListener("resize", handleResize);
    resize();
    initNodes();
    draw();
 
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);
 
  return (
     <section id="hero" className={styles.hero}>
 
      {/* Canvas de red animada */}
      <canvas ref={canvasRef} className={styles.canvas} />
 
      <div className={styles.inner}>
 
        {/* IZQUIERDA */}
        <div className={styles.left}>
          <h1>
            Sistema Electoral
            <br />
            Digital Seguro y
            <br />
            Transparente
          </h1>
          <p>
            Modernizando la democracia local con tecnología blockchain,
            verificación biométrica y{" "}
            <strong>autenticación de dos factores (2FA)</strong>
          </p>
        </div>
 
        {/* CARD DERECHA */}
        <div className={styles.card}>
          <h2>Acceso Rápido</h2>
 
          <button className={`${styles.btn} ${styles.red}`}>
            <span>Registrarme como Votante</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
          </button>
 
          <button className={`${styles.btn} ${styles.blue}`}>
            <span>Verificar Identidad (2FA)</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </button>
 
          <button className={`${styles.btn} ${styles.green}`}>
            <span>Emitir mi Voto</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </button>
 
          <button className={`${styles.btn} ${styles.white}`}>
            <span>Ver Resultados en Tiempo Real</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </button>
        </div>
 
      </div>
 
      {/* STATS BAR */}
      <div className={styles.statsBar}>
 
        <div className={styles.stat}>
          <svg className={`${styles.statIcon} ${styles.blueIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <div className={styles.statInfo}>
            <span className={`${styles.statNumber} ${styles.blueNum}`}>45.892</span>
            <span className={styles.statLabel}>Votantes Registrados</span>
          </div>
        </div>
 
        <div className={styles.divider} />
 
        <div className={styles.stat}>
          <svg className={`${styles.statIcon} ${styles.redIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <div className={styles.statInfo}>
            <span className={`${styles.statNumber} ${styles.redNum}`}>12.340</span>
            <span className={styles.statLabel}>Votos Emitidos Hoy</span>
          </div>
        </div>
 
        <div className={styles.divider} />
 
        <div className={styles.stat}>
          <svg className={`${styles.statIcon} ${styles.greenIcon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <div className={styles.statInfo}>
            <span className={`${styles.statNumber} ${styles.greenNum}`}>87</span>
            <span className={styles.statLabel}>Centros Activos</span>
          </div>
        </div>
 
      </div>
 
    </section>
  );
}