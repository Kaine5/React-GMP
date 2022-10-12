import MovieCard from "../MovieCard/MovieCard";

import styles from './MovieGrid.module.scss';

const MovieGrid = (props) => {
    return (
        <div className={styles["movieGrid__container"]}>
            {props.movies.map(movie => <MovieCard {...movie} />)}
        </div>
    )
}

export default MovieGrid;