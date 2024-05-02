import React from "react";
import styles from "./index.module.scss";

const DefaultEntry = ({ entry }) => {
  return (
    <div className={styles.defaultEntry}>
      <h2>{entry.word}</h2>
      <div>
        {entry.meanings &&
          entry.meanings.length > 0 &&
          entry.meanings[0]?.definitions && (
            <ul className={styles.definitions}>
              {entry.meanings[0]?.definitions?.map((definition, index) => (
                <li key={index}>{definition.definition}</li>
              ))}
            </ul>
          )}
      </div>
      <p> Phonetic: {entry.phonetics && entry?.phonetics[0]?.text}</p>
    </div>
  );
};

export default DefaultEntry;
