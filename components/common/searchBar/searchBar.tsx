import React from "react";
import Image from "next/image";

import classes from "./searchBar.module.css";

import searchBarImg from "@/public/images/search-icon.png";

function SearchBar() {
  return (
    <div className={classes.SearchBar}>
      <Image src={searchBarImg} alt="search" />
      <input
        className={classes["text_input"]}
        placeholder="링크를 검색해보세요"
      />
    </div>
  );
}

export default SearchBar;
