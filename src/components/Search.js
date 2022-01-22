import { useState, useEffect } from "react";
import { getMovieDetailsById } from "./utils";
import { getMoviesBySearchTerm } from "./utils";
import { SearchResults } from "./SearchResults";
import MovieCard from "./MovieCard";
import { getApiId } from "./variables";
import { searchBarStyle } from "./styles";

const Search = ({ setSearching, setSearchData, setSearchString, setError }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let _searchString = e.target[0].value;
    let data = {};

    if (_searchString.length) {
      setSearchString(_searchString);
      data = await getMoviesBySearchTerm(getApiId(), _searchString);
      if (data.Response === "True") {
        setSearchData(data);
        e.target[0].value = "";
        // e.target.reset();
        setSearching(true);
      } else {
        setError(data.Error);
        setSearching(false);
        e.target[0].value = "";
      }
    } else {
      setSearching(false);
      e.target[0].value = "";
    }
  };

  return (
    <>
      <form id="searchBar" style={searchBarStyle} onSubmit={onSubmit}>
        <div id="searchField">
          {/* <label>Search</label> */}
          <input
            type="text"
            placeholder="Search Here"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>

        <input type="submit" value="Search" className="btn btn-block" />
      </form>
    </>
  );
};

export default Search;
