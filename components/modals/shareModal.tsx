import React from "react";

import classes from "./shareModal.module.css";

import closeIcon from "../../assets/close-icon.svg";
import kakaotalkIcon from "../../assets/kakaotalk.svg";
import facebookIcon from "../../assets/facebook.svg";
import copyLinkIcon from "../../assets/copy-link-icon.svg";
import Image from "next/image";

interface Props {
  changeFolderShareSelect: () => void;
}

const shareIcons = [
  { title: "카카오톡", src: kakaotalkIcon },
  { title: "페이스북", src: facebookIcon },
  { title: "링크 복사", src: copyLinkIcon },
];

function ShareModal({ changeFolderShareSelect }: Props) {
  return (
    <div className={classes.ShareModal}>
      <div className={classes.container}>
        <div className={classes.contents}>
          <Image
            src={closeIcon}
            alt="close icon"
            className={classes["close-icon"]}
            onClick={changeFolderShareSelect}
          />
          <h1 className={classes.title}>폴더 공유</h1>
          <p className={classes.subtitle}>폴더명</p>
          <div className={classes["shareIcons_container"]}>
            {shareIcons.map((icon) => (
              <div className={classes["shareIcon_container"]}>
                <Image src={icon.src} alt="icon" />
                <p>{icon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
