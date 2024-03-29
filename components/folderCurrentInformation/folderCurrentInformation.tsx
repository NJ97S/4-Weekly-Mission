"use client";

import React from "react";
import Image from "next/image";

import classes from "./folderCurrentInformation.module.css";

import shareIcon from "../../assets/share-icon.png";
import editIcon from "../../assets/pencil-icon.png";
import deleteIcon from "../../assets/delete-icon.png";

interface Props {
  folderName: string | undefined;
  isAllFolderSelected: boolean;
  changeFolderDeleteSelect: () => void;
  changeFolderEditSelect: () => void;
  changeFolderShareSelect: () => void;
}

function FolderCurrentInformation({
  folderName,
  isAllFolderSelected,
  changeFolderDeleteSelect,
  changeFolderEditSelect,
  changeFolderShareSelect,
}: Props) {
  return (
    <div className={classes.FolderCurrentInformation}>
      <div className={classes.container}>
        <div>{folderName}</div>
        {!isAllFolderSelected && (
          <div className={classes["icon_container"]}>
            <div
              className={classes["icon_each_container"]}
              onClick={changeFolderShareSelect}
            >
              <Image className={classes.icon} src={shareIcon} alt="share" />
              공유
            </div>
            <div
              className={classes["icon_each_container"]}
              onClick={changeFolderEditSelect}
            >
              <Image className={classes.icon} src={editIcon} alt="name edit" />
              이름 변경
            </div>
            <div
              className={classes["icon_each_container"]}
              onClick={changeFolderDeleteSelect}
            >
              <Image className={classes.icon} src={deleteIcon} alt="delete" />
              삭제
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FolderCurrentInformation;
