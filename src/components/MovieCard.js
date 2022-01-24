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
  clickedDetails,
  setError,
  setToggleDetails,
  toggleDetails
}) => {
  const clickHandeler = () => {
    let _oldTitle = clickedDetails.Title.replace(/[^a-zA-Z0-9]/g, "");
    let clickedTitle = title.replace(/[^a-zA-Z0-9]/g, "");
    _oldTitle === clickedTitle && toggleDetails
      ? setToggleDetails(false)
      : openDetails(data);
  };

  const openDetails = async (data) => {
    setToggleDetails(true);
    let detailData = await getMovieDetailsById(getApiId(), data.imdbID);
    if (detailData.Response === "True") {
      setClickedDetails(detailData);
      // console.log(detailData);
    } else {
      setError(detailData.Error);
    }
  };

  //slices string if it is too long trim removes white space
  if (data) {
    return (
      <>
        <div
          id={`search${data.imdbID}`}
          style={movieCardStyle}
          onClick={() => clickHandeler()}
        >
          <img
            id="posterImg"
            style={posterStyle}
            src={poster}
            alt="No Poster Available"
          ></img>
          <div id="movieInfo" style={briefStyle}>
            <div id="cardTitleRow">
              <p
                id="titleText"
                style={{ height: "3.4em", overflowY: "hidden" }}
              >
                {/* {title.length > 20 ? `${title.substr(0, 40).trim()}` : title} */}
                {title}
              </p>
              <div id="typeContainer" style={movieTypeStyle}>
                <p id="movieType">{type}</p>
              </div>
            </div>
          </div>
        </div>
      </>
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
