"use client";

import React from "react";
import Image from "next/image";

import classes from "./navigationBar.module.css";
import { SampleUser } from "@/app/shared/page";
import { User } from "@/app/folder/page";

import logoImg from "@/public/images/linkbrary-logo.png";
import defaultProfileImage from "@/public/images/rabbit-icon.png";

interface Props {
  userInfo?: User | SampleUser;
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
              src={
                userInfo.profileImageSource ||
                userInfo["image_source"] ||
                defaultProfileImage
              }
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
