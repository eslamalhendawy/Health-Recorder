import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../Images/Home/logo.png";

function Header() {
  function clickHandler() {}

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
          <ul className="nav-ul">
            <li className="li-1">
              <a onClick={clickHandler} href="#">
                Login
              </a>
              <ul className="login-list">
                <li>
                  <Link to="/doctor-login">Doctor</Link>
                </li>
                <li>
                  <Link to="/patient-login">Patient</Link>
                </li>
              </ul>
            </li>
            <li className="li-1">
              <a href="#">Sign Up</a>
              <ul className="login-list">
                <li>
                  <Link to="/doctor-reg">Doctor</Link>
                </li>
                <li>
                  <Link to="/patient-reg/patient-reg1">Patient</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
