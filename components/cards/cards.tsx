"use client";

import { useEffect, useState } from "react";

import classes from "./cards.module.css";
import Card from "../card/card";
import { getSampleFolderData } from "@/services/api";

export interface LinkData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export default function Cards() {
  const [sampleLink, setSampleLink] = useState<LinkData[]>([]);

  async function getSampleLinkInfo() {
    const data = await getSampleFolderData();
    setSampleLink(data.folder.links);
  }

  useEffect(() => {
    getSampleLinkInfo();
  }, []);

  return (
    <div className={classes["cards_container"]}>
      {sampleLink.map((link) => (
        <Card key={link.id} link={link} />
      ))}
    </div>
  );
}
