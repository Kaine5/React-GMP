import { useState } from 'react';

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState("No movie found");

    const handleFormSubmit = (e, input) => {
        e.preventDefault();
        setSearchResult(`Here are the movie list with the name ${input} included`);
    }
    return (
        <>
            <form onSubmit={(e) => handleFormSubmit(e, query)}>
                <input placeholder="What do you want to watch?" value={query} onChange={e => setQuery(e.target.value)}/>
                <button type="submit">SEARCH</button>
            </form>
            <div>{searchResult}</div>
        </>
    )
}

export default SearchForm;