"use client";
import { useAppContext } from "@/app/context/appContext";
import styles from "./languageSelector.module.css";

const LanguageSelector = () => {
  const { setLanguage, language } = useAppContext();
  return (
    <div className={styles.languageSelector}>
      <h2 className={styles.languageSelector__description}>
        From <b>English</b> to
      </h2>
      <div>
        <button
          className={`${styles.languageSelector__button} ${
            language === "nl" ? styles.activeButton : ""
          }`}
          onClick={() => setLanguage("nl")}
        >
          Dutch
        </button>
        <button
          className={`${styles.languageSelector__button} ${
            language === "fr" ? styles.activeButton : ""
          }`}
          onClick={() => setLanguage("fr")}
        >
          French
        </button>
        <button
          className={`${styles.languageSelector__button} ${
            language === "pt" ? styles.activeButton : ""
          }`}
          onClick={() => setLanguage("pt")}
        >
          Portuguese
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;
