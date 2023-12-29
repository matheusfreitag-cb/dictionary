import styles from "./grammarCard.module.css";

const GrammarCard = ({ element }) => {
  return (
    <div className={styles.grammarCardWrapper}>
      <div className={styles.grammarCard}>
        <p className={styles.grammarCard__original}>{element.original}</p>
        <p className={styles.grammarCard__grammarClass}>
          {element.grammarClass}
        </p>
        <p className={styles.grammarCard__description}>{element.description}</p>
      </div>
    </div>
  );
};

export default GrammarCard;
