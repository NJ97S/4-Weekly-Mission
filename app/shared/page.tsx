"use client";

import React from "react";
import { useEffect, useState } from "react";

import classes from "./page.module.css";
import Cards from "@/components/cards/cards";
import Footer from "@/components/common/footer/footer";
import NavigationBar from "@/components/common/navigationBar/navigationBar";
import FolderInformation from "@/components/folderInformation/folderInformation";
import SearchBar from "@/components/common/searchBar/searchBar";
import { getSampleCards, getSampleUser } from "@/services/api";
import { UserCard } from "../folder/page";

export interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface SampleCard extends UserCard {
  createdAt: string;
  title: string;
  imageSource?: string;
}

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource?: string;
  image_source?: string;
}

function FolderSharedPage() {
  const [folderOwners, setFolderOwners] = useState<Owner>();
  const [folderName, setFolderName] = useState<string>();
  const [sampleCards, setSampleCards] = useState<SampleCard[]>([]);
  const [sampleUserInfo, setSampleUserInfo] = useState<SampleUser>();

  const getSampleCardsInfo = async () => {
    const sampleCardsInfo = await getSampleCards();
    const { owner, name, link } = sampleCardsInfo.folder;
    setFolderOwners(owner);
    setFolderName(name);
    setSampleCards(link);
  };

  const getSampleUserInfo = async () => {
    const sampleUserInfo = await getSampleUser();
    setSampleUserInfo(sampleUserInfo);
  };

  useEffect(() => {
    getSampleCardsInfo();
    getSampleUserInfo();
  }, []);

  return (
    <div className={classes.FolderPage}>
      <header>
        <NavigationBar userInfo={sampleUserInfo} />
      </header>
      <main>
        <FolderInformation
          folderOwners={folderOwners}
          folderName={folderName}
        />
        <div className={classes["content_container"]}>
          <SearchBar />
          <Cards cards={sampleCards} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default FolderSharedPage;
