import MovieList from "./components/MovieList";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
