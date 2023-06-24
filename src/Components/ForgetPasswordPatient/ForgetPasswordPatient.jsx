import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgetPasswordPatient() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [National_ID, setID] = useState("");
  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/forget_pass";

  useEffect(() => {
    document.title = "Health Recorder | Login";
    window.scrollTo(0, 0);
  }, []);

  async function submitHandler() {
    await axios
      .post(url, { email, National_ID })
      .then((res) => {
        localStorage.setItem("userFirstName", res.data.data.pationt.fristName);
        localStorage.setItem("pLastName", res.data.data.pationt.lastName);
        localStorage.setItem("pEmail", res.data.data.pationt.email);
        localStorage.setItem("pBloodType", res.data.data.pationt.bloodType);
        localStorage.setItem("pNationalID", res.data.data.pationt.National_ID);
        localStorage.setItem("pID", res.data.data.pationt._id);
        localStorage.setItem("pAge", res.data.data.pationt.age);
        localStorage.setItem("pGender", res.data.data.pationt.gender);
        localStorage.setItem("pImage", res.data.data.pationt.image);
        localStorage.setItem("pPhoneNumber", res.data.data.pationt.phoneNumber);
        localStorage.setItem("pHealthProblems", JSON.stringify(res.data.data.pationt.Health_problems));
        localStorage.setItem("pGenetic", JSON.stringify(res.data.data.pationt.Hereditary_diseases));
        localStorage.setItem("pSurgery", JSON.stringify(res.data.data.pationt.Surgical_operations));
        localStorage.setItem("pChronic", JSON.stringify(res.data.data.pationt.chronic_Diseases));
        localStorage.setItem("pDiagonas", JSON.stringify(res.data.data.pationt.diagonas));
        localStorage.setItem("pXray", JSON.stringify(res.data.data.pationt.x_ray));
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
        navigate("/patient-page");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="forgot-password">
      <div className="password-container">
        <div className="password-card">
          <h2>Retrieve Password</h2>
          <p>Enter The Following Data To Login And Change Your Password</p>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="National ID" onChange={(e) => setID(e.target.value)} />
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPatient;
