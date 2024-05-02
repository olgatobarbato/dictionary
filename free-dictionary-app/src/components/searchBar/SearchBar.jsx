import React, { useState } from "react";
import styles from "./index.module.scss";

const SearchBar = ({ onSearch, setSearchTerm, searchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        className={styles.textInput}
        type="text"
        value={searchTerm}
        placeholder="Enter a word"
        onChange={handleChange}
      />
      <input className={styles.submitInput} type="submit" value="Submit" />
    </form>
  );
};

export default SearchBar;
