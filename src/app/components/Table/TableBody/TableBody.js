"use client";
import React, { useState } from "react";
import { nl } from "@/app/context/dictionaries/nl";
import { fr } from "@/app/context/dictionaries/fr";
import { pt } from "@/app/context/dictionaries/pt";
import { useAppContext } from "@/app/context/appContext";
import styles from "./tableBody.module.css";
import GrammarCard from "../../GrammarCard/GrammarCard";

const TableBody = () => {
  const toggleDetails = (id) => {
    setOpenRow(openRow === id ? null : id);
  };

  const getRowAnimation = (id) => {
    return {
      maxHeight: openRow === id ? "400px" : "0",
      overflow: openRow === id ? "visible" : "hidden",
      transition: "all 0.3s ease-out",
    };
  };

  const getCardAnimation = (id) => {
    if (openRow === id) {
      return {
        opacity: 1,
        transition: "all 0.1s linear",
        transitionDelay: "0.1s",
      };
    } else {
      return {
        opacity: 0,
        transition: "all 0.1s linear",
        transitionDelay: "0s",
      };
    }
  };

  const sortData = (data) => {
    const sortedData = data.slice().sort((a, b) => {
      const A = a.original.toUpperCase();
      const B = b.original.toUpperCase();

      if (A < B) return -1;
      if (A > B) return 1;
      return 0;
    });

    return sortedData;
  };

  const isActiveRow = (id) => {
    if (openRow === id) {
      return "activeRow";
    } else {
      return "unnactiveRow";
    }
  };
  const { language } = useAppContext();
  const [openRow, setOpenRow] = useState(null);
  let rawData = language === "nl" ? nl : language === "fr" ? fr : pt;
  const data = sortData(rawData);

  return (
    <tbody>
      {data.map((element) => (
        <React.Fragment key={element.original}>
          <tr
            className={`${styles.row} ${styles[isActiveRow(element.original)]}`}
            onClick={() => toggleDetails(element.original)}
          >
            <td className={styles.cell}>{element.original}</td>
            <td className={`${styles.cell} ${styles.leftDashedBorder}`}>
              {element.englishTranslation}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div style={getRowAnimation(element.original)}>
                <div style={getCardAnimation(element.original)}>
                  <GrammarCard element={element} />
                </div>
              </div>
            </td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  );
};

export default TableBody;
