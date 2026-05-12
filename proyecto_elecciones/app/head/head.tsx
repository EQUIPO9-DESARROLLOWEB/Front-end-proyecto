import styles from "./head.module.css"
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      
       {/* LOGO */}
       
      <div className={styles.miImagen}></div>
      <div className={styles.logo}>
        <span className={styles.icon}>
          <Image
            src="/SEGOB_logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
        </span>

        <div>
          <h3>Sistema Electoral Digital</h3>
          <p>Gobierno Local</p>
        </div>
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        <a href="#">Inicio</a>
        <a href="#">Registro Electoral</a>
        <a href="#">Emitir Voto</a>
        <a href="#">Resultados en Vivo</a>
        <a href="#">Auditoría</a>
        <a href="#">Seguridad</a>
        <a href="#">Contacto</a>
      </nav>

      {/* BOTÓN */}
      <button className={styles.button}>
        Acceso Ciudadano
      </button>

    </header>
  );
}

