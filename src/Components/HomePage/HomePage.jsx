//Libraries
import { useEffect } from "react";

//CSS File
import "./Home.css"

//Images
import doctor from "../../Images/Home/doctor.png";
import feature1 from "../../Images/Home/feature1.jpg";
import feature2 from "../../Images/Home/feature2.jpg";
import feature3 from "../../Images/Home/feature3.jpg";
import appStore from "../../Images/Home/app-store.png";
import playStore from "../../Images/Home/play-store.png";

function HomePage() {
  useEffect(() => {
    document.title = "Health Recorder";
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
        {/* Main Landing */}
      <div className="main-landing">
        <div className="container">
          <div className="main-landing-text">
            <h2>Your Health Recorder</h2>
            <p>
              When you register on the site, your information and the care you
              receive are recorded and stored in the health care record.
            </p>
            <p>
              This is so people caring for you can make the best decisions about
              your care.
            </p>
          </div>
          <img src={doctor} className="main-landing-photo" alt="" />
          <a href="#features" className="go-down"><i className="fa-solid fa-angles-down"></i></a>
        </div>
      </div>
      {/* Features */}
      <div className="features" id="features">
        <div className="container">
          <div className="feature-card">
            <h2>Advantages For Patients</h2>
            <img src={feature1} alt="" />
            <p>
              Help Patients Obtain The Best Medical Care By Keeping Track Of
              Their Medication, Operation History And Chronic Diseases
            </p>
          </div>
          <div className="feature-card">
            <h2>Advantages For Doctors</h2>
            <img src={feature2} alt="" />
            <p>
              Help Doctors Provide Patients With The Best Medical Care By
              Giving Them All The Information Needed To Reach A Correct Diagnosis
            </p>
          </div>
          <div className="feature-card">
            <h2>Mechanism Of Work</h2>
            <img src={feature3} alt="" />
            <p>
              We Store Patient&apos;s Health Data And Arrange It In Easy To
              Understand Tables That Help Both Doctors And Patients To Keep
              Track Of The Patient&apos;s Health 
            </p>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="about" id="about">
        <div className="container">
          <div className="info">
            <h2>About Us</h2>
            <p>
              Health Recorder Is The Biggest Health Website In Egypt With More
              Than 20 Million Visits Every Month.
            </p>
          </div>
          <div className="socials">
            <h2>Contact Us</h2>
            <p>HealthRecorder@gmail.com</p>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="mobile">
        <div className="container">
          <p>
            For The Best Experince On Mobile Phones Please Download Our App
            Available On Android And IOS
          </p>
          <a href="https://www.apple.com/eg/app-store/">
            <img src={appStore} alt="" />
          </a>
          <a href="https://play.google.com/store/apps">
            <img src={playStore} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default HomePage