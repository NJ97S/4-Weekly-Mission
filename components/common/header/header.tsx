import Image from "next/image";

import classes from "./header.module.css";
import UserProfile from "./userProfile";

import mainLogo from "@/public/images/linkbrary-logo.svg";

export default function Header() {
  return (
    <div className={classes["profile_container"]}>
      <Image src={mainLogo} alt="linkbrary logo" priority />
      <UserProfile />
    </div>
  );
}
