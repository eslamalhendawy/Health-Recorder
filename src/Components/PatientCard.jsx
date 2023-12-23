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
        localStorage.setItem("pImage", res.data.data.pationt.image);
        localStorage.setItem("pNationalID", res.data.data.pationt.National_ID);
        localStorage.setItem("pHealthProblems", JSON.stringify(res.data.data.pationt.Health_problems));
        localStorage.setItem("pGenetic", JSON.stringify(res.data.data.pationt.Hereditary_diseases));
        localStorage.setItem("pSurgery", JSON.stringify(res.data.data.pationt.Surgical_operations));
        localStorage.setItem("pChronic", JSON.stringify(res.data.data.pationt.chronic_Diseases));
        localStorage.setItem("pDiagonas", JSON.stringify(res.data.data.pationt.diagonas));
        localStorage.setItem("pXray", JSON.stringify(res.data.data.pationt.x_ray));
        localStorage.setItem("pXrayDescreption", JSON.stringify(res.data.data.pationt.orgnis_report));
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
    <div className="flex flex-col gap-4 items-center shadow-md hover:shadow-xl duration-300 cursor-pointer p-6 rounded-xl" onClick={clickHandler}>
      <div className="text-center sm:flex justify-center sm:justify-between items-center w-full" >
        <img className="size-[100px] rounded-full mb-3 mx-auto sm:mx-0" src={img} alt="" />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="w-full text-sm flex justify-center sm:justify-between">
        <span className="hidden sm:inline text-lg font-medium">Code</span>
        <span className="text-lg font-medium">{props.id}</span>
      </div>
      <div className="w-full text-sm flex justify-center sm:justify-between">
        <span className="hidden sm:inline text-lg font-medium">Number</span>
        <span className="text-lg font-medium">{phone}</span>
      </div>
      <div className="w-full text-sm flex justify-center sm:justify-between">
        <span className="hidden sm:inline text-lg font-medium">Age</span>
        <span className="text-lg font-medium">{age}</span>
      </div>
    </div>
  );
}

export default PatientCard;
