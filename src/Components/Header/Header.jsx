import { Link } from "react-router-dom";
import logo from "../../Images/Home/logo.png";

function Header() {
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
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/doctor-reg">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
