import React from "react";
import Image from "next/image";

import classes from "./linkAddBar.module.css";

import linkIcon from "@/public/images/link-icon.png";

function LinkAddBar() {
  return (
    <div className={classes.LinkAddBar}>
      <div className={classes.container}>
        <Image
          className={classes["link_icon"]}
          src={linkIcon}
          alt="link icon"
        />
        링크를 추가해보세요
        <button className={classes["link_add_button"]}>추가하기</button>
      </div>
    </div>
  );
}

export default LinkAddBar;
