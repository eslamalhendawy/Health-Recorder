import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../Images/Home/logo.png";
import HeaderLoggedOut from "../HeaderLoggedOut/HeaderLoggedOut";
import HeaderLoggedIn from "../HeaderLoggedIn/HeaderLoggedIn";

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <nav id="Home">
          <div className="logo">
            <Link to="/">
              <img src={logo} className="nav-logo" alt="" />
            </Link>
            <Link to="/">
              <h1 className="title">Health Recorder</h1>
            </Link>
          </div>
          {props.loggedIn ? <HeaderLoggedIn loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} /> : <HeaderLoggedOut loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />}
        </nav>
      </div>
    </div>
  );
}

export default Header;
