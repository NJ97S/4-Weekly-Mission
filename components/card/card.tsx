"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

import classes from "./card.module.css";
import { UserCard } from "@/app/folder/page";

import elapsedTime from "@/utils/elapsedTime";
import CardPopover from "../cardPopover/cardPopover";
import { SampleCard } from "@/app/shared/page";

import noCardImg from "@/public/images/basic-card.png";
import kebabIcon from "@/public/images/kebab-icon.svg";

interface Props {
  card: UserCard | SampleCard;
  changeLinkDeleteSelect?: () => void;
  changeFolderAddSelect?: () => void;
}

function Card({ card, changeLinkDeleteSelect, changeFolderAddSelect }: Props) {
  const [showPopover, setShowPopover] = useState(false);

  const handleKebabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopover(!showPopover);
  };

  return (
    <div className={classes.Card}>
      <a
        href={card.url}
        target="_blank"
        rel="noreferrer noopener"
        className={classes.card}
      >
        <div className={classes["card_image_container"]}>
          <Image
            className={classes["card_image"]}
            src={(card.imageSource || card["image_source"]) ?? noCardImg}
            alt={
              card.imageSource || card["image_source"]
                ? "card image"
                : "no card image"
            }
            fill
          />
        </div>
        <div className={classes["card_information"]}>
          <div className={classes["card_menu_container"]}>
            <div className={classes.createdAt}>{elapsedTime(card)}</div>
            <div className={classes["kebab_container"]}>
              <Image
                src={kebabIcon}
                alt="kebab icon"
                onClick={handleKebabClick}
              />
              {showPopover && (
                <div className={classes["popover_container"]}>
                  <CardPopover
                    changeLinkDeleteSelect={changeLinkDeleteSelect}
                    changeFolderAddSelect={changeFolderAddSelect}
                  />
                </div>
              )}
            </div>
          </div>
          <div className={classes.description}>{card.description}</div>
          <div className={classes.createdAt}>
            {new Date(
              card.createdAt || card.created_at || 1
            ).toLocaleDateString()}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
