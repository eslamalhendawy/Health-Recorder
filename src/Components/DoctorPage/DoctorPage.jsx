import { useEffect } from "react";


import PatientCard from "../PatientCard/PatientCard";
import "./DoctorPage.css";
import patient1 from "../../Images/Doctor Page/patient-1.png"
import patient2 from "../../Images/Doctor Page/patient-2.png"
import patient3 from "../../Images/Doctor Page/patient-3.png"
import patient4 from "../../Images/Doctor Page/patient-4.png"
import patient5 from "../../Images/Doctor Page/patient-5.png"
import patient6 from "../../Images/Doctor Page/patient-6.png"
function DoctorPage() {
  let p1 = {
    name: "Amira",
    code: "1",
    phone: "01012609957",
    age: "21",
  }
  let p2 = {
    name: "Moamen",
    code: "2",
    phone: "01012609957",
    age: "21",
  }
  let p3 = {
    name: "Ahmed",
    code: "3",
    phone: "01012609957",
    age: "21",
  }
  let p4 = {
    name: "Khaled",
    code: "4",
    phone: "01012609957",
    age: "21",
  }
  let p5 = {
    name: "Osama",
    code: "5",
    phone: "01012609957",
    age: "21",
  }
  let p6 = {
    name: "Adham",
    code: "6",
    phone: "01012609957",
    age: "21",
  }


  useEffect(() => {
    document.title = "Health Recorder | Doctor Page";
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="page">
      <div className="sidebar">
        <div className="doc-information">
          <img src={localStorage.getItem("doctorImage")} alt="Doctor's Photo" />
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
            <PatientCard data={p1} img={patient1}/>
            <PatientCard data={p2} img={patient2}/>
            <PatientCard data={p3} img={patient3}/>
            <PatientCard data={p4} img={patient4}/>
            <PatientCard data={p5} img={patient5}/>
            <PatientCard data={p6} img={patient6}/>
        </div>
      </div>
    </div>
  );
}

export default DoctorPage;
