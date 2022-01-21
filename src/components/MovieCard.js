import { getMovieDetailsById } from "./utils";
import { getApiId } from "./variables";

let movieCardStyle = {
  borderRadius: "15%",
  position: "relative",
  width: "180px",
  margin: "0px 16px 0px 16px"
};
let posterStyle = {
  borderRadius: "8px",
  overflow: "hidden",
  width: "180px",
  height: "100%"
};
let briefStyle = {
  padding: "8px",
  color: "rgba(255, 255, 255, 0.9)",
  borderRadius: "0px 0px 8px 8px",
  height: "30%",
  width: "inherit",
  backgroundColor: "rgba(31, 31, 31, 0.6)",
  position: "absolute",
  bottom: "0px"
};
let movieTypeStyle = {
  position: "absolute",
  backgroundColor: "grey",
  textAlign: "center",
  padding: ".2em",
  width: "5em",
  borderRadius: "8px",
  bottom: "8px"
};

const MovieCard = ({
  poster,
  title,
  type,
  data,
  setClickedDetails,
  setError
}) => {
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
