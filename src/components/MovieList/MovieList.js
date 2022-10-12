import GenreOptions from "../GenreOptions";
import SortDropdown from "../SortDropdown";
import MovieGrid from "../MovieGrid/MovieGrid";

import styles from "./MovieList.module.scss";

const MovieList = () => {
  return (
    <div className={styles['movieList']}>
      <div className={styles['movieListOptions']}>
        <GenreOptions />
        <SortDropdown />
      </div>
      <MovieGrid movies={mockedData}/>
    </div>
  );
};

export default MovieList;


const mockedData = [
  {imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg", imgAlt: "Lua", title: 'Lua', releaseDate: '2022', genres: 'cash game'},
  {imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg", imgAlt: "Lua", title: 'Lua', releaseDate: '2022', genres: 'cash game'},
  {imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg", imgAlt: "Lua", title: 'Lua', releaseDate: '2022', genres: 'cash game'},
  {imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg", imgAlt: "Lua", title: 'Lua', releaseDate: '2022', genres: 'cash game'},
  {imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg", imgAlt: "Lua", title: 'Lua', releaseDate: '2022', genres: 'cash game'},
  {imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/2x/MilesPoster.jpg", imgAlt: "Lua", title: 'Lua', releaseDate: '2022', genres: 'cash game'},
]