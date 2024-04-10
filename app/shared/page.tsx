import Cards from "@/components/cards/cards";
import classes from "./page.module.css";
import Header from "@/components/common/header/header";
import FolderOwner from "@/components/folderOwner/folderOwner";
import SearchBar from "@/components/searchBar/searchBar";
import Footer from "@/components/common/footer/footer";

export default function Share() {
  return (
    <>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <section className={classes.banner}>
          <FolderOwner />
        </section>
        <section className={classes["content_container"]}>
          <SearchBar />
          <Cards />
        </section>
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
}
