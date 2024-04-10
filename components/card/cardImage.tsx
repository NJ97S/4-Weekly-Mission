"use client";

import Image from "next/image";
import { useState } from "react";

import classes from "./cardImage.module.css";
import noLinkImg from "@/public/images/basic-link.svg";
import { LinkData } from "../cards/cards";

interface Props {
  link: LinkData;
}

export default function CardImage({ link }: Props) {
  const [errorImg, setErrorImg] = useState(null);

  return (
    <Image
      src={errorImg || link.imageSource}
      alt={link.title}
      fill
      onError={() => setErrorImg(noLinkImg)}
      className={classes["link_image"]}
    />
  );
}
