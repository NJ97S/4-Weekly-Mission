"use client";

import React from "react";

import classes from "./cardPopover.module.css";

interface Props {
  changeLinkDeleteSelect?: () => void;
  changeFolderAddSelect?: () => void;
}

function CardPopover({ changeLinkDeleteSelect, changeFolderAddSelect }: Props) {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (changeLinkDeleteSelect) changeLinkDeleteSelect();
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (changeFolderAddSelect) changeFolderAddSelect();
  };

  return (
    <div className={classes.CardPopover}>
      <div className={classes["each_popover"]} onClick={handleDeleteClick}>
        삭제하기
      </div>
      <div className={classes["each_popover"]} onClick={handleAddClick}>
        폴더에 추가
      </div>
    </div>
  );
}

export default CardPopover;
