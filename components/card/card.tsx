import classes from "./card.module.css";
import CardImage from "./cardImage";
import getElapsedTime from "@/utils/elapsedTime";
import { LinkData } from "../cards/cards";
import Link from "next/link";

interface Props {
  link: LinkData;
}

export default function Card({ link }: Props) {
  return (
    <Link href={link.url} target="_blank" className={classes.link}>
      <div className={classes.card}>
        <div className={classes["image_container"]}>
          <CardImage link={link} />
        </div>
        <div className={classes["info_container"]}>
          <div className={classes["elapsed_time"]}>
            {getElapsedTime(link.createdAt)}
          </div>
          <div className={classes["link_description"]}>{link.description}</div>
          <div className={classes["creating_date"]}>
            {new Date(link.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
