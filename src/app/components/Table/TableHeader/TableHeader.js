import React from "react";
import styles from "./tableHeader.module.css";

const TableHeader = () => {
  return (
    <thead>
      <tr className={styles.header}>
        <th
          className={` ${styles.headerColumnTitle} ${styles.bottomSolidBorder} `}
        >
          Original
        </th>
        <th
          className={` ${styles.headerColumnTitle} ${styles.leftDottedBorder} ${styles.bottomSolidBorder}`}
        >
          Translation
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
