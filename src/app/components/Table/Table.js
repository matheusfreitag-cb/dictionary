import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import styles from "./table.module.css";

const Table = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
