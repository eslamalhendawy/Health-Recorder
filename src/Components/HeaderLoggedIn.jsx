import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import DispatchContext from "../DispatchContext";
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
    <div className="flex items-center space-x-3">
      {localStorage.getItem("doctorDepartment") ? (
        <Link to="/doctor-page">
          <i className="fa-regular fa-circle-user text-lg lg:text-2xl"></i>
        </Link>
      ) : (
        <Link to="/patient-page">
          <i className="fa-regular fa-circle-user text-lg"></i>
        </Link>
      )}
      <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-3 rounded-xl" onClick={handleLogOut}>Sign Out</button>
    </div>
  );
}

export default HeaderLoggedIn;
