import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { getMovieDetailsById } from "./utils";
import { DetailsMenu } from "./DetailsMenu";

const searchArrayStyle = {
  display: "flex",
  width: "100vw",
  overflowX: "scroll",
  //eventually I might remove this scroll bar
  overflowY: "hidden",
  height: "300px",
  padding: "0px 32px 0px 32px",
  margin: "32px 0px 8px 0px"
};

const buttonRight = {
  position: "absolute",
  width: "80px",
  height: "inherit",
  right: "0px",
  opacity: "50%"
};
//button right and left will move the array

export const SearchResults = ({ searchData, searchString, setError }) => {
  let searchArr = [];
  const [clickedDetails, setClickedDetails] = useState({});
  const [detailsOpen, setDetailsOpen] = useState(false);
  if (searchData.Response === "True") {
    searchArr = searchData.Search;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <p style={{}}>Search Results for: {searchString}</p>
      <div id="searchArray" style={searchArrayStyle}>
        {searchArr.map((data) => (
          //these parentheses are very important make sure you dont use curlies
          <MovieCard
            key={data.imdbID}
            poster={data.Poster}
            title={data.Title}
            type={data.Type}
            data={data}
            setClickedDetails={setClickedDetails}
            setError={setError}
          />
        ))}
        <button style={buttonRight}>Button Right</button>
      </div>
      {clickedDetails.Response === "True" ? (
        <DetailsMenu data={clickedDetails} />
      ) : (
        <></>
      )}
    </div>
  );
};
