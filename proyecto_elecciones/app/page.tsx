import Image from "next/image";
import Head from "./head/head.tsx";
import styles from "./head/head.module.css"
export default function Home() {
  return (
    <header className={styles.header}>
      <div>
        Esto es un header
      </div>
    </header>
  );
}
