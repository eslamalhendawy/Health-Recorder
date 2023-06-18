/* eslint-disable react/prop-types */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PatientCard(props) {
  const url = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/${props.id}`;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  async function test() {
    await axios
      .get(url)
      .then((res) => {
        setName(res.data.data.pationt.fristName);
        setAge(res.data.data.pationt.age);
        setPhone(res.data.data.pationt.phoneNumber);
        setImg(res.data.data.pationt.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    test();
  });

  const navigate = useNavigate();
  async function clickHandler() {
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        localStorage.setItem("pFirstName", res.data.data.pationt.fristName);
        localStorage.setItem("pLastName", res.data.data.pationt.lastName);
        localStorage.setItem("pAge", res.data.data.pationt.age);
        localStorage.setItem("pBloodType", res.data.data.pationt.bloodType);
        localStorage.setItem("pGender", res.data.data.pationt.gender);
        localStorage.setItem("pEmail", res.data.data.pationt.email);
        localStorage.setItem("pImage", res.data.data.pationt.image);
        localStorage.setItem("pPhoneNumber", res.data.data.pationt.phoneNumber);
        localStorage.setItem("pNationalID", res.data.data.pationt.National_ID);
        localStorage.setItem("pHealthProblems", JSON.stringify(res.data.data.pationt.Health_problems));
        localStorage.setItem("pGenetic", JSON.stringify(res.data.data.pationt.Hereditary_diseases));
        localStorage.setItem("pSurgury", JSON.stringify(res.data.data.pationt.Surgical_operations));
        localStorage.setItem("pChronic", JSON.stringify(res.data.data.pationt.chronic_Diseases));
        localStorage.setItem("pDiagonas", JSON.stringify(res.data.data.pationt.diagonas));
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
        navigate("/patient-edit");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="box" onClick={clickHandler}>
      <div className="data">
        <img src={img} alt="" />
        <h3>{name}</h3>
      </div>
      <div className="data">
        <span>Code</span>
        <span>{props.id}</span>
      </div>
      <div className="data">
        <span>Number</span>
        <span>{phone}</span>
      </div>
      <div className="data">
        <span>Age</span>
        <span>{age}</span>
      </div>
    </div>
  );
}

export default PatientCard;
