import styles from "./page.module.css";
import Title from "./components/Title/Title";
import Table from "./components/Table/Table";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title title="Design Systems' Dictionary" />
      <LanguageSelector />
      <Table />
    </main>
  );
}
