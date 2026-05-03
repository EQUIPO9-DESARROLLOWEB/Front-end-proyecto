import styles from "./head.module.css"
import Image from "next/image";

export default function Head(){
    return(
        <header className={styles.header}>
      <div>
        Esto es un header
      </div>
    </header>
    )
}

