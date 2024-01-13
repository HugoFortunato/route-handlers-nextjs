import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "./main/button-click";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button label="criar token" />
    </main>
  );
}
