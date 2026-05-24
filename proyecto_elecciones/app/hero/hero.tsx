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

    </section>
  );
}