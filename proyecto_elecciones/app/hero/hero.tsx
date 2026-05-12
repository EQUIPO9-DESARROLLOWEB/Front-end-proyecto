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
          blockchain, verificación biométrica y autenticación
          de dos factores (2FA)
        </p>

      </div>

      {/* DERECHA */}
      <div className={styles.card}>

        <h2>Acceso Rápido</h2>

        <button className={styles.red}>
          Registrarme como Votante
        </button>

        <button className={styles.blue}>
          Verificar Identidad (2FA)
        </button>

        <button className={styles.green}>
          Emitir mi Voto
        </button>

        <button className={styles.white}>
          Ver Resultados en Tiempo Real
        </button>

      </div>

    </section>
  );
}
