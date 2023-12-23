import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderLoggedOut() {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);

  const toggleMenu1 = () => {
    setMenu2(false);
    setMenu1(!menu1);
  };

  const toggleMenu2 = () => {
    setMenu1(false);
    setMenu2(!menu2);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <p className="font-semibold text-xs sm:text-base lg:text-lg cursor-pointer text-[#807979] hover:text-[#212529] duration-300" onClick={toggleMenu1}>
          Login
        </p>
        <ul className={`absolute bg-[#6da5c0] text-white left-[-15px] top-6 sm:top-8 rounded-lg ${menu1 ? "block" : "hidden"}`}>
          <Link to="/patient-login" onClick={toggleMenu1}>
            <li className="text-xs sm:text-base lg:text-lg hover:bg-[#294D61] rounded-t-lg  cursor-pointer text-white p-2">Patient</li>
          </Link>
          <Link to="/doctor-login"  onClick={toggleMenu1}>
            <li className="text-xs sm:text-base lg:text-lg hover:bg-[#294D61] rounded-b-lg cursor-pointer text-white p-2">Doctor</li>
          </Link>
        </ul>
      </div>
      <div className="relative">
        <p className="font-semibold text-xs sm:text-base lg:text-lg  cursor-pointer text-[#807979] hover:text-[#212529] duration-300" onClick={toggleMenu2}>
          Sign Up
        </p>
        <ul className={`absolute bg-[#6da5c0] text-white left-[-15px] top-6 sm:top-8  rounded-lg ${menu2 ? "block" : "hidden"}`}>
          <Link to="/patient-reg1"  onClick={toggleMenu2}>
            <li className="text-xs sm:text-base lg:text-lg hover:bg-[#294D61] rounded-t-lg  cursor-pointer text-white p-2">Patient</li>
          </Link>
          <Link to="/doctor-reg" onClick={toggleMenu2}>
            <li className="text-xs sm:text-base lg:text-lg hover:bg-[#294D61] rounded-b-lg  cursor-pointer text-white p-2">Doctor</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default HeaderLoggedOut;
