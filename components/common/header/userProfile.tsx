"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import classes from "./userProfile.module.css";
import { getSampleUserData } from "@/services/api";

export default function UserProfile() {
  const [sampleUser, setSampleUser] = useState({ profileImg: "", email: "" });

  async function getSampleUser() {
    const { profileImageSource, email } = await getSampleUserData();
    setSampleUser({
      profileImg: profileImageSource,
      email: email,
    });
  }

  useEffect(() => {
    getSampleUser();
  }, []);

  return (
    <div className={classes.container}>
      <Image
        src={sampleUser.profileImg}
        alt="sample user profile image"
        width={28}
        height={28}
        className={classes.profileImg}
      />
      <span className={classes["user_email"]}>{sampleUser.email}</span>
    </div>
  );
}
