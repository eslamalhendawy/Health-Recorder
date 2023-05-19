import logo from "../../Images/Home/logo.png"

function Footer() {
  return (
    <div className="footer">
        <div className="container">
          <div>
            <img src={logo} className="footer-logo" alt="" />
            <h1 className="footer-title">Health Recorder</h1>
          </div>
          <p>Copyright ©2022 health recorder. All rights reserved.</p>
        </div>
      </div>
  )
}

export default Footer