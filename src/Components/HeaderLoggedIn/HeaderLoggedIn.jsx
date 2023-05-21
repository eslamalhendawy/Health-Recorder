import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header-logged-in.css";
function HeaderLoggedIn(props) {
  let navigate = useNavigate();
  function handleLogOut() {
    // eslint-disable-next-line react/prop-types
    props.setLoggedIn(false);
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="header-logged-in">
      <Link to={"/doctor-page"}>
        <i className="fa-regular fa-circle-user"></i>
      </Link>

      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
}

export default HeaderLoggedIn;
