"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import classes from "./folderOwner.module.css";
import { getSampleFolderData } from "@/services/api";

export default function FolderOwner() {
  const [sampleFolderInfo, setSampleFolderInfo] = useState({
    ownerImg: "",
    ownerName: "",
    folderName: "",
  });

  async function getFolderOwnerInfo() {
    const data = await getSampleFolderData();
    setSampleFolderInfo({
      ownerImg: data.folder.owner.profileImageSource,
      ownerName: data.folder.owner.name,
      folderName: data.folder.name,
    });
  }

  useEffect(() => {
    getFolderOwnerInfo();
  }, []);

  return (
    <div className={classes.container}>
      <Image
        src={sampleFolderInfo.ownerImg}
        alt="folder owner profile image"
        width={60}
        height={60}
      />
      <p className={classes["owner_name"]}>@{sampleFolderInfo.ownerName}</p>
      <p className={classes["folder_name"]}>{sampleFolderInfo.folderName}</p>
    </div>
  );
}
