import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import classes from "./folderMenu.module.css";
import { Folder } from "@/app/folder/page";

import folderAddButton from "../../assets/folder-add-icon.png";

interface Props {
  folders: Folder[];
  getCardsInfo: () => void;
  setFolderId: Dispatch<SetStateAction<number | undefined>>;
  setFolderName: Dispatch<SetStateAction<string | undefined>>;
  setIsAllFolderSelected: Dispatch<SetStateAction<boolean>>;
}

function FolderMenu({
  folders,
  getCardsInfo,
  setFolderId,
  setFolderName,
  setIsAllFolderSelected,
}: Props) {
  const handleWholeFolderClick = () => {
    getCardsInfo();
    setFolderName("");
    setIsAllFolderSelected(true);
  };

  const handleFolderClick = (folderId: number, folderName: string) => {
    setFolderId(folderId);
    setFolderName(folderName);
    setIsAllFolderSelected(false);
  };

  return (
    <div className={classes.FolderMenu}>
      <div className={classes.container}>
        <div className={classes["folder_container"]}>
          <button
            className={classes["folder_selection_button"]}
            onClick={handleWholeFolderClick}
          >
            전체
          </button>
          {folders.map((folder) => (
            <button
              className={classes["folder_selection_button"]}
              key={folder.id}
              onClick={() => handleFolderClick(folder.id, folder.name)}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button className={classes["folder_add_button"]}>
          <span>폴더 추가</span>
          <Image
            className={classes["folder_add_image"]}
            src={folderAddButton}
            alt="add button"
          />
        </button>
      </div>
    </div>
  );
}

export default FolderMenu;
