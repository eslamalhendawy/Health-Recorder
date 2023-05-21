import { useNavigate } from "react-router-dom";
import "./header-logged-in.css"
function HeaderLoggedIn(props) {
  let navigate = useNavigate();
  function handleLogOut() {
    // eslint-disable-next-line react/prop-types
    props.setLoggedIn(false);
    localStorage.removeItem("userFirstName");
    localStorage.removeItem("userLastName");
    localStorage.removeItem("userEmail");
    navigate("/");
  }

  return (
    <div className="header-logged-in">
      <i className="fa-regular fa-circle-user"></i>
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
}

export default HeaderLoggedIn;
