import React from "react";
import Image from "next/image";

import classes from "./navigationBar.module.css";

import logoImg from "../../assets/linkbrary-logo.png";
import { User } from "../../pages/FolderPage";
import { SampleUser } from "../../pages/FolderSharedPage";

interface Props {
  userInfo: User | SampleUser | undefined;
}

function NavigationBar({ userInfo }: Props) {
  return (
    <div className={classes.NavigationBar}>
      <div className={classes.container}>
        <a href="/">
          <Image src={logoImg} alt="logo" />
        </a>
        {userInfo ? (
          <div className={classes["user_information"]}>
            <Image
              src={userInfo.profileImageSource || userInfo["image_source"]}
              alt="user image"
              className={classes["user_image"]}
            />
            <span className={classes["user_email"]}>{userInfo.email}</span>
          </div>
        ) : (
          <button className={classes["login_button"]}>로그인</button>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
