import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

import SearchBar from "@/components/searchBar";
import ErrorMessage from "@/components/errorMessage";
import SearchResults from "@/components/searchResults";
import DefaultEntry from "@/components/defaultEntry";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/dictionary`
  );

  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (e) => {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
    );

    const searchData = await res.json();

    if (searchData.length > 0) {
      setSearchResults(searchData);
      setErrorMessage("");
    } else {
      setSearchResults(null);
      setErrorMessage("The word you are looking for is not in the dictionary.");
    }
  };

  return (
    <div className={styles.main}>
      <h1>🇬🇧 The Free Dictionary</h1>
      <SearchBar
        onSearch={handleSearch}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {searchResults && <SearchResults results={searchResults} />}
      {data && searchResults === null && !searchResults && (
        <DefaultEntry entry={data[0]} />
      )}
    </div>
  );
}
