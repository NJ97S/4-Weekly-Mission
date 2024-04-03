"use client";

import React from "react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import classes from "./page.module.css";
import Cards from "@/components/cards/cards";
import DeleteModal from "@/components/modals/deleteModal";
import EditModal from "@/components/modals/editModal";
import FolderCurrentInformation from "@/components/folderCurrentInformation/folderCurrentInformation";
import FolderMenu from "@/components/folderMenu/folderMenu";
import Footer from "@/components/common/footer/footer";
import LinkAddBar from "@/components/linkAddBar/linkAddBar";
import NavigationBar from "@/components/common/navigationBar/navigationBar";
import SearchBar from "@/components/common/searchBar/searchBar";
import ShareModal from "@/components/modals/shareModal";
import { SampleUser } from "../shared/page";
import {
  getCards,
  getFolders,
  getSelectedCards,
  getUser,
} from "@/services/api";

import floatingButton from "@/public/images/folder-add-icon-white.png";

export interface UserCard {
  id: number;
  created_at?: string;
  createdAt?: string;
  updated_at?: string;
  url: string;
  title: string;
  image_source?: string;
  imageSource?: string;
  folder_id: number;
}

interface Link {
  count: number;
}

export interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Link;
}

export interface User extends SampleUser {
  created_at: string;
  auth_id: string;
}

export default function FolderPage() {
  const [userCards, setUserCards] = useState<UserCard[]>([]);
  const [userFolders, setUserFolders] = useState<Folder[]>([]);
  const [folderId, setFolderId] = useState<number>();
  const [folderName, setFolderName] = useState<string>();
  const [userInfo, setUserInfo] = useState<User>();
  const [isAllFolderSelected, setIsAllFolderSelected] = useState(false);
  const [isLinkDeleteSelect, setIsLinkDeleteSelect] = useState(false);
  const [isFolderDeleteSelect, setIsFolderDeleteSelect] = useState(false);
  const [isFolderAddSelect, setIsFolderAddSelect] = useState(false);
  const [isFolderEditSelect, setIsFolderEditSelect] = useState(false);
  const [isFolderShareSelect, setIsFolderShareSelect] = useState(false);

  const getCardsInfo = async () => {
    const response = await getCards();
    const userCards = response.data;
    setUserCards(userCards);
  };

  const getFoldersInfo = async () => {
    const response = await getFolders();
    const userFolders = response.data;
    setUserFolders(userFolders);
  };

  const getSelectedCardsInfo = async () => {
    const response = await getSelectedCards(folderId);
    const selectedCards = response.data;
    setUserCards(selectedCards);
  };

  const getUserInfo = async () => {
    const response = await getUser();
    const userInfo = response.data[0];
    setUserInfo(userInfo);
  };

  const changeLinkDeleteSelect = useCallback(() => {
    setIsLinkDeleteSelect(!isLinkDeleteSelect);
  }, [isLinkDeleteSelect]);

  const changeFolderDeleteSelect = useCallback(() => {
    setIsFolderDeleteSelect(!isFolderDeleteSelect);
  }, [isFolderDeleteSelect]);

  const changeFolderAddSelect = useCallback(() => {
    setIsFolderAddSelect(!isFolderAddSelect);
  }, [isFolderAddSelect]);

  const changeFolderEditSelect = useCallback(() => {
    setIsFolderEditSelect(!isFolderEditSelect);
  }, [isFolderEditSelect]);

  const changeFolderShareSelect = useCallback(() => {
    setIsFolderShareSelect(!isFolderShareSelect);
  }, [isFolderShareSelect]);

  useEffect(() => {
    getFoldersInfo();
    getSelectedCardsInfo();
  }, [folderId]);

  useEffect(() => {
    getUserInfo();
    getCardsInfo();
  }, []);

  return (
    <div className={classes.FolderPage}>
      {isLinkDeleteSelect && (
        <DeleteModal
          title="링크 삭제"
          description="링크 이름"
          changeLinkDeleteSelect={changeLinkDeleteSelect}
          isLinkDeleteSelect={isLinkDeleteSelect}
        />
      )}
      {isFolderDeleteSelect && (
        <DeleteModal
          title="폴더 삭제"
          description="폴더명"
          changeFolderDeleteSelect={changeFolderDeleteSelect}
          isFolderDeleteSelect={isFolderDeleteSelect}
        />
      )}
      {isFolderAddSelect && (
        <EditModal
          title="폴더 추가"
          description="추가하기"
          changeFolderAddSelect={changeFolderAddSelect}
          isFolderAddSelect={isFolderAddSelect}
        />
      )}
      {isFolderEditSelect && (
        <EditModal
          title="폴더 이름 변경"
          description="변경하기"
          changeFolderEditSelect={changeFolderEditSelect}
          isFolderEditSelect={isFolderEditSelect}
        />
      )}
      {isFolderShareSelect && (
        <ShareModal changeFolderShareSelect={changeFolderShareSelect} />
      )}
      <header>
        <NavigationBar userInfo={userInfo} />
      </header>
      <main>
        <LinkAddBar />
        <SearchBar />
        <FolderMenu
          folders={userFolders}
          getCardsInfo={getCardsInfo}
          setFolderId={setFolderId}
          setFolderName={setFolderName}
          setIsAllFolderSelected={setIsAllFolderSelected}
        />
        <FolderCurrentInformation
          folderName={folderName}
          isAllFolderSelected={isAllFolderSelected}
          changeFolderDeleteSelect={changeFolderDeleteSelect}
          changeFolderEditSelect={changeFolderEditSelect}
          changeFolderShareSelect={changeFolderShareSelect}
        />
        <Cards
          cards={userCards}
          changeLinkDeleteSelect={changeLinkDeleteSelect}
          changeFolderAddSelect={changeFolderAddSelect}
        />
        <button className={classes["mobile_floating_button"]}>
          <span>폴더 추가</span>
          <Image
            className={classes["floating_add_image"]}
            src={floatingButton}
            alt="add button"
          />
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
