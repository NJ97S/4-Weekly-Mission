import React from "react";
import Image from "next/image";

import classes from "./footer.module.css";

import facebookImg from "@/public/images/facebook-icon.png";
import twitterImg from "@/public/images/twitter-icon.png";
import youtubeImg from "@/public/images/youtube-icon.png";
import instagramImg from "@/public/images/instagram-icon.png";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.copyright}>©codeit - 2023</div>
      <div className={classes.policy}>
        <a href="#">Privacy Policy</a>
        <a href="#">FAQ</a>
      </div>
      <div className={classes.sns}>
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={facebookImg} alt="facebook" />
        </a>
        <a
          href="http://www.twitter.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={twitterImg} alt="twitter" />
        </a>
        <a
          href="http://www.youtube.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={youtubeImg} alt="youtube" />
        </a>
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image src={instagramImg} alt="instagram" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
