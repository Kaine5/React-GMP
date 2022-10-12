import styles from "./MovieCard.module.scss";

const MovieCard = (props) => {
  return (
    <div className={styles["movieCard__gridContainer"]}>
      <div className={styles["movieCard__thumbnail"]}>
        <img
          className={styles["movieCard__picture"]}
          src={props.imgURL}
          alt={props.imgAlt}
        />
        <img className={styles["movieCard__moreButton"]} src="/img/more button.svg" alt="more" />
      </div>
      <div className={styles["movieCard__title"]}>{props.title}</div>
      <div className={styles["movieCard__releaseDate"]}>
        {props.releaseDate}
      </div>
      <div className={styles["movieCard__genres"]}>{props.genres}</div>
    </div>
  );
};

export default MovieCard;
