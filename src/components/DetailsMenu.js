import { detailsPosterStyle } from "./styles";

const boxMe = {
  marginRight: "16px",
  backgroundColor: "grey",
  padding: "8px 10px",
  borderRadius: "8px",
  margin: "4px 16px 4px 0px"
};

const section = {
  margin: "16px 0px"
};

export const DetailsMenu = ({ data, setToggleDetails }) => {
  debugger;
  const {
    Title,
    Year,
    // Rated,
    // Released,
    // Runtime,
    // Genre,
    // Director,
    // Writer,
    Actors,
    Plot,
    // Language,
    BoxOffice,
    Poster,
    imdbRating,
    Rated,
    Runtime,
    Genre
  } = data;

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "8px",
        width: "600px",
        height: "300px"
      }}
    >
      <img src={Poster} alt="No Poster" />
      <div id="decription" style={{ marginLeft: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ width: "80%" }}>{Title}</h1>
          <h1 style={{ color: "lightblue" }}>{imdbRating}</h1>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <p style={boxMe}>{Rated}</p>
          <p style={boxMe}>{Runtime}</p>
          <p style={boxMe}>{Genre}</p>
        </div>
        <div style={section}>
          <h3>Plot</h3>
          <p>{Plot}</p>
        </div>
        <div style={section}>
          <h3>Actors</h3>
          <p>{Actors}</p>
          <button
            onClick={() => {
              setToggleDetails(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
