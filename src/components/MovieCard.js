import { getMovieDetailsById } from "./utils";
import { getApiId } from "./variables";
import { useEffect } from "react";
import {
  movieCardStyle,
  posterStyle,
  briefStyle,
  movieTypeStyle
} from "./styles";

const MovieCard = ({
  poster,
  title,
  type,
  data,
  setClickedDetails,
  setError
}) => {
  if (title.length > 20) {
    title = `${title.slice(0, 19).trim()}...`;
  }
  //slices string if it is too long trim removes white space
  if (data) {
    const openDetails = async (data) => {
      let detailData = await getMovieDetailsById(getApiId(), data.imdbID);
      if (detailData.Response === "True") {
        setClickedDetails(detailData);
        // console.log(detailData);
      } else {
        setError(detailData.Error);
      }
    };
    return (
      <div
        id={`search${data.imdbID}`}
        style={movieCardStyle}
        onClick={() => openDetails(data)}
      >
        <img
          id="posterImg"
          style={posterStyle}
          src={poster}
          alt="No Poster Available"
        ></img>
        <div id="movieInfo" style={briefStyle}>
          <div id="cardTitleRow">
            <p id="titleText">{title}</p>
            <div id="typeContainer" style={movieTypeStyle}>
              <p id="movieType">{type}</p>
            </div>
          </div>
          {/* <div id="detailsBtn">
            <input
              value="Details"
              id="moreDetails"
              type="button"
              onClick={() => {
                openDetails(data);
              }}
            />
          </div> */}
        </div>
      </div>
    );
  } else {
    return <p>Try Searching for Something</p>;
  }
};

MovieCard.defaultProps = {
  title: "Batman",
  type: "Movie",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
};

export default MovieCard;
