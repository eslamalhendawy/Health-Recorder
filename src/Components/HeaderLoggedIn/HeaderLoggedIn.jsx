import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import "./header-logged-in.css";
function HeaderLoggedIn() {
  const appDispatch = useContext(DispatchContext);
  let navigate = useNavigate();
  function handleLogOut() {
    // eslint-disable-next-line react/prop-types
    appDispatch({ type: "logout" });
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="header-logged-in">
      {localStorage.getItem("doctorDepartment") ? (
        <Link to="/doctor-page">
          <i className="fa-regular fa-circle-user"></i>
        </Link>
      ) : (
        <Link to="/patient-page">
          <i className="fa-regular fa-circle-user"></i>
        </Link>
      )}
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
}

export default HeaderLoggedIn;
