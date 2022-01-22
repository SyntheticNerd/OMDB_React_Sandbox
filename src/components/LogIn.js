import { getMovieDetailsById } from "./utils";
import { getApiId, setApiId } from "./variables";
import { logInBlockStyle, logInFormStyle } from "./styles";

const LogIn = ({ setLogin }) => {
  const tryLogIn = async (e) => {
    e.preventDefault();
    let _apiId = e.target[0].value;
    let test = !_apiId
      ? alert("Invalid Entry")
      : await getMovieDetailsById(_apiId, "tt3896198");
    if (test.Response === "True") {
      setApiId(_apiId);
      setLogin(true);
      e.target[0].value = "";
    } else {
      alert("Invalid Entry");
    }
    // console.log(getApiId());
  };

  return (
    <div id="logInBlock" style={logInBlockStyle}>
      <form id="logInForm" style={logInFormStyle} onSubmit={tryLogIn}>
        <label>Please Enter your API ID</label>
        <input type="password" placeholder="API ID" />
        <input type="submit" value="Log In" className="btn btn-block" />
      </form>
    </div>
  );
};

export default LogIn;
