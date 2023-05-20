function HeaderLoggedIn(props) {
  function handleLogOut() {
    props.setLoggedIn(false);
    localStorage.removeItem("DoctorFirstName");
  }

  return (
    <div>
      <span>Hello {localStorage.getItem("DoctorFirstName")}</span>
      <button onClick={handleLogOut}>Sign Out</button>
    </div>
  );
}

export default HeaderLoggedIn;
