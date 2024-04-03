import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.HomePage}>
      <p className={classes["information_msg"]}>메인 페이지 추가 예정입니다.</p>
      <div className={classes["link_container"]}>
        <Link href="/shared">
          <button className={classes["link_page_button"]}>
            Folder Shared Page
          </button>
        </Link>
        <Link href="/folder">
          <button className={classes["link_page_button"]}>Folder Page</button>
        </Link>
      </div>
    </div>
  );
}
