import Image from "next/image";

import classes from "./footer.module.css";

import facebook from "@/public/images/facebook-icon.svg";
import twitter from "@/public/images/twitter-icon.svg";
import youtube from "@/public/images/youtube-icon.svg";
import instagram from "@/public/images/instagram-icon.svg";

const SNS_ICON = [
  { title: "facebook", src: facebook },
  { title: "twitter", src: twitter },
  { title: "youtube", src: youtube },
  { title: "instagram", src: instagram },
];

export default function Footer() {
  return (
    <div className={classes.container}>
      <p className={classes["only_mobile"]}>@codeit - 2023</p>
      <div className={classes["policy_container"]}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={classes["sns_container"]}>
        {SNS_ICON.map((sns) => (
          <Image key={sns.title} src={sns.src} alt={sns.title} />
        ))}
      </div>
    </div>
  );
}
