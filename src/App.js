import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import MovieList from './components/MovieList';
import Banner from './components/Banner';
import './App.css';


function App() {
  return (
    <div className="App">
      <Banner userName="Khanh Phan" />
      <Counter />
      <SearchForm />
      <MovieList data="Here are the MovieList Data"/>
    </div>
  );
}

export default App;
