import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { DetailsMenu } from "./DetailsMenu";
import { ArrowButton } from "./ArrowButton";

const searchArrayStyle = {
  display: "flex",
  width: "100vw",
  overflowX: "scroll",
  //eventually I might remove this scroll bar
  overflowY: "hidden",
  height: "300px",
  padding: "0px 48px 0px 48px",
  margin: "32px 0px 8px 0px",
  scrollbarColor: "rgba(225, 225, 225, 0%) rgba(225, 225, 225, 0%)",
  scrollbarWidth: "thin",
  scrollBehavior: "smooth"
};

const buttonRight = {
  transform: "rotate(180deg)",
  color: "white",
  border: "none",
  position: "absolute",
  width: "60px",
  height: "inherit",
  right: "0px",
  // opacity: "50%",
  background:
    "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(16,16,16,1) 75%, rgba(16,16,16,1) 100%)"
};

const buttonLeft = {
  border: "none",
  position: "absolute",
  width: "60px",
  height: "inherit",
  left: "0px",
  // opacity: "50%",
  background:
    "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(16,16,16,1) 75%, rgba(16,16,16,1) 100%)"
};

//button right and left will move the array

export const SearchResults = ({ searchData, searchString, setError }) => {
  let searchArr = [];
  const [clickedDetails, setClickedDetails] = useState({});
  const [arrElement, setArrElement] = useState({});
  let _arrElement = document.getElementById("searchArray1");

  useEffect(() => {
    setArrElement(document.getElementById("searchArray1"));
  }, [_arrElement]);

  const moveArrRight = () => {
    const scrollWidth = arrElement.offsetWidth * 0.8;
    arrElement.scrollLeft += scrollWidth;
  };
  const moveArrLeft = () => {
    const scrollWidth = arrElement.offsetWidth * 0.8;
    arrElement.scrollLeft -= scrollWidth;
  };

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
      <div id="searchArray1" style={searchArrayStyle}>
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
        <ArrowButton onClick={moveArrLeft} style={buttonLeft} />
        <ArrowButton onClick={moveArrRight} style={buttonRight} />
        {/* <button style={buttonLeft} onClick={moveArrLeft}></button> */}
      </div>
      {clickedDetails.Response === "True" ? (
        <DetailsMenu data={clickedDetails} />
      ) : (
        <></>
      )}
    </div>
  );
};
