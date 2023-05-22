import { useEffect } from "react";
import "./PatientPage.css";

function PatientPage() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <div className="patient-sidebar">
        <div className="user-information">
          <img src={localStorage.getItem("patientImg")} alt="" />
          <h3>{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("userLastName")}`}</h3>
          <span>{localStorage.getItem("userEmail")}</span>
        </div>
        <ul>
          <li>
            <a href="#person">
              <i className="fa-solid fa-hospital-user"></i>
              Personal Information
            </a>
          </li>
          <li>
            <a href="#health">
              <i className="fa-solid fa-heart"></i>
              Health status
            </a>
          </li>
          <li>
            <a href="#surgical">
              <i className="fa-solid fa-hospital"></i>
              Surgical history
            </a>
          </li>
          <li>
            <a href="#genetic">
              <i className="fa-solid fa-square-virus"></i>
              Genetic disease
            </a>
          </li>
          <li>
            <a href="#diagnosis">
              <i className="fa-solid fa-user-doctor"></i>
              Diagnosis
            </a>
          </li>
        </ul>
      </div>
      <div className="patient-content">
        <div className="header">
          <h2>Profile</h2>
        </div>
        <div className="person" id="person">
          <h2 className="main-head">Personal information</h2>
          <div className="box">
            <div className="profile">
              <div className="image">
                <img src={localStorage.getItem("patientImg")} alt="" />
              </div>
              <div className="text">
                <h3>{`${localStorage.getItem("userFirstName")} ${localStorage.getItem("userLastName")}`}</h3>
                <span>{localStorage.getItem("userEmail")}</span>
              </div>
            </div>
            <div className="information">
              <h5>Age</h5>
              <span>{localStorage.getItem("patientAge")}</span>
              <h5>Blood type</h5>
              <span>{localStorage.getItem("patientBloodtype")}</span>
            </div>
            <div className="information">
              <h5>Gender</h5>
              <span>{localStorage.getItem("patientGender")}</span>
              <h5>Contact Number</h5>
              <span>{`+${localStorage.getItem("patientPhone")}`}</span>
            </div>
            <div className="contact">
              <i className="fa-solid fa-phone"></i>
              <span>123</span>
            </div>
          </div>
        </div>
        <div className="health" id="health">
            <h2 className="main-head">Health status</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Chronic disease</th>
                        <th>Regular medicine</th>
                        <th>Any health problem</th>
                        <th>Regular medicine</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="surgical" id="surgical">
            <h2 className="main-head">Surgical history</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Surgery</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="2"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="2"></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="genetic" id="genetic">
            <h2 className="main-head">Genetic disease</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Relative relation</th>
                        <th>Disease</th>
                        <th>Medicine</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="diagnosis" id="diagnosis">
            <h2 className="main-head">Diagnostic recording history</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Doctor name</th>
                        <th>Depart</th>
                        <th>Diagnosis</th>
                        <th>Medicine</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default PatientPage;
