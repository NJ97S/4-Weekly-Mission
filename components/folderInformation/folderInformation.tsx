"use client";

import React from "react";
import Image from "next/image";

import classes from "./folderInformation.module.css";
import { Owner } from "@/app/shared/page";

import rabbitImg from "@/public/images/rabbit-icon.png";

interface Props {
  folderOwners?: Owner;
  folderName?: string;
}

function FolderInformation({ folderOwners, folderName }: Props) {
  return (
    <section className={classes.FolderInformation}>
      {folderOwners ? (
        <Image
          src={folderOwners.profileImageSource}
          alt="userImg"
          width={60}
          height={60}
        />
      ) : (
        <Image
          src={rabbitImg}
          alt="rabbitImg"
          className={classes["user_image"]}
        />
      )}
      {folderOwners && (
        <p className={classes["folder_owner"]}>@{folderOwners.name}</p>
      )}
      <h1 className={classes["folder_name"]}>{folderName}</h1>
    </section>
  );
}

export default FolderInformation;
