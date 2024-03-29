import React from "react";

import classes from "./editModal.module.css";
import closeIcon from "../../assets/close-icon.svg";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  changeFolderAddSelect?: () => void;
  isFolderAddSelect?: boolean;
  changeFolderEditSelect?: () => void;
  isFolderEditSelect?: boolean;
}

function EditModal({
  title,
  description,
  changeFolderAddSelect,
  isFolderAddSelect,
  changeFolderEditSelect,
  isFolderEditSelect,
}: Props) {
  return (
    <div className={classes.EditModal}>
      <div className={classes.container}>
        <div className={classes.contents}>
          <Image
            src={closeIcon}
            alt="close icon"
            className={classes["close-icon"]}
            onClick={() => {
              (isFolderAddSelect && changeFolderAddSelect) ||
                (isFolderEditSelect && changeFolderEditSelect);
            }}
          />
          <h1 className={classes.title}>{title}</h1>
          <input
            className={classes["folder_edit_input"]}
            placeholder="내용을 입력해주세요."
          />
          <button className={classes.button}>{description}</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
