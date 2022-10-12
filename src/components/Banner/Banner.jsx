import SearchForm from "../SearchForm";

import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <header className={styles["banner__container"]}>
      <div className={styles["banner__header"]}>
        <img src="/img/netflixroulette.svg" alt="netflixRoulette" />
        <button className={styles["banner__button"]}>+ Add Movie</button>
      </div>
      <div className={styles["banner__content"]}>
        <h2>FIND YOUR MOVIE</h2>
        <SearchForm />
      </div>
    </header>
  );
};

export default Banner;
