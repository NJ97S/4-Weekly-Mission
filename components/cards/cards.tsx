"use client";

import React from "react";

import classes from "./cards.module.css";
import Card from "../card/card";
import { UserCard } from "@/app/folder/page";

interface Props {
  cards: UserCard[];
  changeLinkDeleteSelect?: () => void;
  changeFolderAddSelect?: () => void;
}

function Cards({
  cards,
  changeLinkDeleteSelect,
  changeFolderAddSelect,
}: Props) {
  return (
    <div className={classes.Cards}>
      <div className={classes.container}>
        {cards ? (
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              changeLinkDeleteSelect={changeLinkDeleteSelect}
              changeFolderAddSelect={changeFolderAddSelect}
            />
          ))
        ) : (
          <p className={classes["no_link_msg"]}>저장된 링크가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Cards;
