import PropTypes from "prop-types";

import MovieCard from "../MovieCard/MovieCard";

import styles from "./MovieGrid.module.scss";

const MovieGrid = (props) => {
  return (
    <div className={styles["movieGrid__container"]}>
      {props.movies.map((movie) => (
        <MovieCard {...movie} />
      ))}
    </div>
  );
};

export default MovieGrid;

MovieGrid.PropTypes = {
  movies: PropTypes.arrayOf({
    imgURL: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genres: PropTypes.string,
  }),
};
