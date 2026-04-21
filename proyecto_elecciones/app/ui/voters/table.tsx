import styles from './table.module.css';

// Interface
interface Localidad {
  id: number;
  nombre: string;
  votos: number;
}

// Variable con datos estáticos
const LOCALIDADES_DATA: Localidad[] = [
  { id: 1, nombre: 'Centro', votos: 1500 },
  { id: 2, nombre: 'Norte', votos: 850 },
  { id: 3, nombre: 'Sur', votos: 2100 },
];

export default function VoterTable() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Localidad</th>
            <th className={styles.th}>Votos</th>
          </tr>
        </thead>
        <tbody>
          {LOCALIDADES_DATA.map((loc) => (
            <tr key={loc.id}>
              <td className={styles.td}>{loc.id}</td>
              <td className={styles.td}>{loc.nombre}</td>
              <td className={styles.td}>{loc.votos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Estructura lista