"use client";

import React from "react";
import Image from "next/image";

import classes from "./deleteModal.module.css";

import closeIcon from "@/public/images/close-icon.svg";

interface Props {
  title: string;
  description: string;
  changeLinkDeleteSelect?: () => void;
  isLinkDeleteSelect?: boolean;
  changeFolderDeleteSelect?: () => void;
  isFolderDeleteSelect?: boolean;
}

function DeleteModal({
  title,
  description,
  changeLinkDeleteSelect,
  isLinkDeleteSelect,
  changeFolderDeleteSelect,
  isFolderDeleteSelect,
}: Props) {
  return (
    <div className={classes.DeleteModal}>
      <div className={classes.container}>
        <div className={classes.contents}>
          <Image
            src={closeIcon}
            alt="close icon"
            className={classes["close-icon"]}
            onClick={
              isLinkDeleteSelect
                ? changeLinkDeleteSelect
                : changeFolderDeleteSelect
            }
          />
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.subtitle}>{description}</p>
          <button className={classes.button}>삭제하기</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
