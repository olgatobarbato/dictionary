import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

const SearchResults = ({ results }) => {
  return (
    <div className={styles.searchResults}>
      {results.map((entry, index) => (
        <div key={index} className={`${styles.words} ${styles.entry}`}>
          <div>
            <h2>{entry.word}</h2>
            {entry.meanings.map((meaning, meaningIndex) => (
              <div
                key={meaningIndex}
                className={`${styles.meaning} ${styles["definition-group"]}`}
              >
                <p className={styles.partOfSpeech}>{meaning.partOfSpeech}</p>
                <ul className={styles.definitions}>
                  {meaning.definitions.map((definition, definitionIndex) => (
                    <li key={definitionIndex}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p>
            Phonetic: {entry.phonetics[0]?.text} –{" "}
            {entry.phonetics[0]?.audio && (
              <Link className={styles.link} href={entry.phonetics[0]?.audio}>
                Click here to hear the correct pronunciation
              </Link>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
