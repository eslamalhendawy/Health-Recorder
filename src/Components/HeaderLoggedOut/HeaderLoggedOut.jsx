import { Link } from "react-router-dom";

function HeaderLoggedOut() {
  return (
    <ul className="nav-ul">
      <li className="li-1">
        <a href="#">Login</a>
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
            <Link to="/patient-reg1">Patient</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default HeaderLoggedOut;
