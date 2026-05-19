'use client';
import styles from './Contador.module.css'; 

interface PostProps {
    titulo: string;      // Ejemplo: "Centro Norte"
    descripcion: string; // Ejemplo: "Zona Norte"
}

export default function Contador({ titulo, descripcion }: PostProps) {
    // Datos fijos para el diseño (luego los conectaremos a la API)
    const registrados = "5,234";
    const votaron = "1,876";
    const participacion = "35.8%";

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconBox}>
                    {/* Icono de edificio simplificado */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 21h18M3 7v14M13 3v18M13 7h8M7 12h2M7 16h2M17 12h2M17 16h2" />
                    </svg>
                </div>
                <span className={styles.statusBadge}>ACTIVO</span>
            </div>

            <div className={styles.infoPrincipal}>
                <h2 className={styles.localidadTitle}>{titulo}</h2>
                <p className={styles.zonaText}>{descripcion}</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statRow}>
                    <span className={styles.statLabel}>Registrados:</span>
                    <span className={styles.statValue}>{registrados}</span>
                </div>
                <div className={styles.statRow}>
                    <span className={styles.statLabel}>Han votado:</span>
                    <span className={styles.statValueBlue}>{votaron}</span>
                </div>
                <div className={styles.statRow}>
                    <span className={styles.statLabel}>Participación:</span>
                    <span className={styles.statValueBlue}>{participacion}</span>
                </div>
            </div>

            <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: participacion }}></div>
                </div>
            </div>
        </div>
    );
}