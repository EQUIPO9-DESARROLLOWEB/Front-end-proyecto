import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

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
          Modernizando la democracia local con tecnología
          blockchain, verificación biométrica y{" "}
          <strong>autenticación de dos factores (2FA)</strong>
        </p>
      </div>

      {/* DERECHA */}
      <div className={styles.card}>
        <h2>Acceso Rápido</h2>

        <button className={styles.red}>
          <span>Registrarme como Votante</span>
          <span>👤</span>
        </button>

        <button className={styles.blue}>
          <span>Verificar Identidad (2FA)</span>
          <span>🛡️</span>
        </button>

        <button className={styles.green}>
          <span>Emitir mi Voto</span>
          <span>✅</span>
        </button>

        <button className={styles.white}>
            <span>Ver Resultados en Tiempo Real</span>
            <span>📊</span>
          </button>
        </div>

      {/* BARRA DE ESTADÍSTICAS */}
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <div className={`${styles.statIcon} ${styles.iconBlue}`}>
            <svg width="22" height="22" fill="none" stroke="#003b8f" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div>
            <span className={`${styles.statNumber} ${styles.blue}`}>45.892</span>
            <p className={styles.statLabel}>Votantes Registrados</p>
          </div>
        </div>

        <div className={styles.statDivider} />

        <div className={styles.statItem}>
          <div className={`${styles.statIcon} ${styles.iconRed}`}>
            <svg width="22" height="22" fill="none" stroke="#d90429" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <div>
            <span className={`${styles.statNumber} ${styles.red}`}>12.340</span>
            <p className={styles.statLabel}>Votos Emitidos Hoy</p>
          </div>
        </div>

        <div className={styles.statDivider} />

        <div className={styles.statItem}>
          <div className={`${styles.statIcon} ${styles.iconGreen}`}>
            <svg width="22" height="22" fill="none" stroke="#008f39" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <div>
            <span className={`${styles.statNumber} ${styles.green}`}>87</span>
            <p className={styles.statLabel}>Centros Activos</p>
          </div>
        </div>
      </div>

    </section>
  );
}