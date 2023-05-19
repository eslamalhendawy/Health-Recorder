import { useEffect } from "react";
import { Link } from "react-router-dom";

import loginImage from "../../Images/Log In/dr3.png";
import "./Log-In.css";

function DoctorLogin() {
  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="log-in">
        <div className="container">
          <div className="card">
            <div className="lhs">
              <img src={loginImage} alt="Healh Care" />
            </div>
            <div className="rhs">
              <h2>Welcome Back Test!</h2>
              <p>Login To Your Account</p>
              <form>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="submit" value="Log In" className="clickable"/>
              </form>
              <Link className="clickable" to="/patient-reg">Create Account</Link>
              <a >Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorLogin