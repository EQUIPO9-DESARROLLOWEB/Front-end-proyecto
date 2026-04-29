import styles from './Contador.module.css'; // Importamos los estilos

interface PostProps {
    titulo: string;
    descripcion: string;
}

export default function Contador({ titulo, descripcion }: PostProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{titulo}</h1>
            <p className={styles.text}>{descripcion}</p>
        </div>
    );
} // Fin del compone