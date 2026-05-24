import styles from "./head.module.css";
 
export default function Header() {
  return (
    <header className={styles.header}>
 
      {/* LOGO */}
      <div className={styles.logo}>
        <div className={styles.icon}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 3L5 10V22C5 31.4 12.1 40.2 21 42C29.9 40.2 37 31.4 37 22V10L21 3Z"
              fill="url(#shieldGrad)"
            />
            <path
              d="M14 21L19 26L28 16"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="shieldGrad" x1="5" y1="3" x2="37" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1a3fa0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.logoText}>
          <h3>Sistema Electoral Digital</h3>
          <p>Gobierno Local</p>
        </div>
      </div>
 
      {/* NAV */}
 feature/LuisFernandoResultados
<nav className={styles.nav}>
  <a href="#inicio">Inicio</a>
  <a href="#">Registro Electoral</a>
  <a href="#">Emitir Voto</a>
  <a href="#resultados">Resultados en Vivo</a>
  <a href="#">Auditoría</a>
  <a href="#">Seguridad</a>
  <a href="#">Contacto</a>
</nav>

      <nav className={styles.nav}>
        <a href="#hero">Inicio</a>
        <a href="#">Registro Electoral</a>
        <a href="#">Emitir Voto</a>
        <a href="#Contador">Resultados en Vivo</a>
        <a href="#">Auditoría</a>
        <a href="#">Seguridad</a>
        <a href="#">Contacto</a>
      </nav>
 
 main
      {/* BOTÓN */}
      <button className={styles.button}>Acceso Ciudadano</button>
 
    </header>
  );
}

