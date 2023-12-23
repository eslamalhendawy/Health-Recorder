import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Home/logo.png";
import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn";
import StateContext from "../StateContext";

import "react-toastify/dist/ReactToastify.css";

function Header() {
  const appState = useContext(StateContext);
  
  return (
        <div id="Home" className="flex justify-between container mx-auto p-3" >
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} className="w-[50px] lg:w-[70px]" alt="" />
            </Link>
            <Link to="/">
              <h1 className="text-base sm:text-xl lg:text-3xl text-[#212529] font-semibold">Health Recorder</h1>
            </Link>
          </div>
          {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        </div>

  );
}

export default Header;
