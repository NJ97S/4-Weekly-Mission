import classes from "./signOAuth.module.css";

import google from "@/public/images/google-login.svg";
import kakaotalk from "@/public/images/kakaotalk-login.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: string;
}

const SNS_LOGIN = [
  { title: "google", src: google, link: "https://www.google.com" },
  {
    title: "kakaotalk",
    src: kakaotalk,
    link: "https://www.kakaocorp.com/page",
  },
];

export default function SignOAuth({ children }: Props) {
  return (
    <div className={classes.container}>
      <p className={classes.description}>{children}</p>
      <div className={classes["sns_container"]}>
        {SNS_LOGIN.map((sns) => (
          <Link key={sns.title} href={sns.link}>
            <Image src={sns.src} alt={sns.title} width={42} height={42} />
          </Link>
        ))}
      </div>
    </div>
  );
}
