import Image from "next/image";

import classes from "./searchBar.module.css";
import searchIcon from "@/public/images/search-icon.svg";

export default function SearchBar() {
  return (
    <div className={classes["search_box"]}>
      <Image src={searchIcon} alt="search icon" width={16} height={16} />
      <input placeholder="링크를 검색해 보세요." className={classes.input} />
    </div>
  );
}
