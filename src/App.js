import "./App.css";
import Search from "./components/Search";
import LogIn from "./components/LogIn";
import { SearchResults } from "./components/SearchResults";
import { useState, useEffect } from "react";
import { getApiId } from "./components/variables";

function App() {
  const [login, setLogin] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [searchString, setSearchString] = useState("");
  const [error, setError] = useState(null);
  // test
  return (
    <>
      {/*--------------Login Screen--------------------*/}
      {!login ? (
        <LogIn setLogin={setLogin} />
      ) : (
        <Search
          setSearching={setSearching}
          setSearchData={setSearchData}
          setSearchString={setSearchString}
          setError={setError}
        />
      )}
      {/*--------------Display Search Results--------------------*/}
      {searching ? (
        <>
          <SearchResults
            searchData={searchData}
            searchString={searchString}
            setError={setError}
          />
        </>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </>
  );
}

export default App;
