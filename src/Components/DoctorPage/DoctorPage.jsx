import { useEffect } from "react";

import PatientCard from "../PatientCard/PatientCard";
import "./DoctorPage.css";
import doctor from "../../Images/Doctor Page/doctor.jpg";
import patient1 from "../../Images/Doctor Page/patient-1.png"
import patient2 from "../../Images/Doctor Page/patient-2.png"
import patient3 from "../../Images/Doctor Page/patient-3.png"
import patient4 from "../../Images/Doctor Page/patient-4.png"
import patient5 from "../../Images/Doctor Page/patient-5.png"
import patient6 from "../../Images/Doctor Page/patient-6.png"
function DoctorPage() {
  useEffect(() => {
    document.title = "Health Recorder | Doctor Page";
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="page">
      <div className="sidebar">
        <div className="doc-information">
          <img src={doctor} alt="" />
          <h3>{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("userLastName")}`}</h3>
          <span>{localStorage.getItem("doctorDepartment")}</span>
          <span>{`+${localStorage.getItem("doctorPhone")}`}</span>
          <a href="">
            <i className="fa-solid fa-location-dot"></i>
            {localStorage.getItem("doctorAddress")}
          </a>
        </div>
      </div>
      <div className="content">
        <div className="doctor-header">
          <h2>My Profile</h2>
          <div className="search">
            <input type="text" name="search" placeholder="Enter Patient Code" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="doctor-page-container">
            <PatientCard img={patient1}/>
            <PatientCard img={patient2}/>
            <PatientCard img={patient3}/>
            <PatientCard img={patient4}/>
            <PatientCard img={patient5}/>
            <PatientCard img={patient6}/>
        </div>
      </div>
    </div>
  );
}

export default DoctorPage;
