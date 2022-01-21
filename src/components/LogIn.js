import { getMovieDetailsById } from "./utils";
import { getApiId, setApiId } from "./variables";

const logInBlock = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const logInForm = {
  display: "flex",
  flexDirection: "column",
};

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
    <div id='logInBlock' style={logInBlock}>
      <form id='logInForm' style={logInForm} onSubmit={tryLogIn}>
        <label>Please Enter your API ID</label>
        <input type='password' placeholder='API ID' />
        <input type='submit' value='Log In' className='btn btn-block' />
      </form>
    </div>
  );
};

export default LogIn;
