import { useNavigate } from "react-router-dom";
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
    <div>
      <span>Hello {localStorage.getItem("DoctorFirstName")}</span>
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
}

export default HeaderLoggedIn;
