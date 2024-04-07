import Image from "next/image";
import Link from "next/link";

import classes from "./signHeader.module.css";

import mainLogo from "@/public/images/linkbrary-logo.svg";

interface Props {
  path: string;
  children: string;
}

export default function SignHeader({ path, children }: Props) {
  return (
    <div className={classes.header}>
      <Image
        src={mainLogo}
        alt="linkbrary logo"
        width={210}
        height={38}
        priority
      />
      <p className={classes["signup_container"]}>
        회원이 아니신가요?
        <Link href={path} className={classes["signup_link"]}>
          {children}
        </Link>
      </p>
    </div>
  );
}
