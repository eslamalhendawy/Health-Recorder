import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DispatchContext from "../DispatchContext";

import "react-toastify/dist/ReactToastify.css";

function PatientReg1() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Sign Up";
    window.scrollTo(0, 0);
  }, []);

  let navigate = useNavigate();

  const appDispatch = useContext(DispatchContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("mail");
  const [bloodType, setBloodtype] = useState("A+");
  const [nationalID, setNationalID] = useState("");

  const regCharectars = /^[A-Za-z]+$/;
  const regNumbers = /^[0-9]+$/;
  // eslint-disable-next-line no-useless-escape
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [initialType, setType1] = useState("password");

  const changeType = () => {
    if (initialType === "password") {
      setType1("text");
    } else {
      setType1("password");
    }
  };

  function goSecondPage() {
    if (firstName === "") {
      toast.error("Enter First Name");
    } else if (!regCharectars.test(firstName)) {
      toast.error("Enter Correct First Name");
    } else if (lastName === "") {
      toast.error("Enter Last Name");
    } else if (!regCharectars.test(lastName)) {
      toast.error("Enter Correct Last Name");
    } else if (email === "") {
      toast.error("Enter Email");
    } else if (!regEmail.test(email)) {
      toast.error("Enter Correct Email");
    } else if (password === "") {
      toast.error("Enter Password");
    } else if (password.length < 8) {
      toast.error("Password Must Be 8 Charrecters Or Longer");
    } else if (phoneNumber === "") {
      toast.error("Enter Phone Number");
    } else if (phoneNumber.length != 11 || !regNumbers.test(phoneNumber)) {
      toast.error("Enter Correct Phone Number");
    } else if (age === "") {
      toast.error("Enter Age");
    }else if (!regNumbers.test(age)) {
      toast.error("Enter Correct Age");
    } else if (nationalID === "") {
      toast.error("Enter National ID");
    } else if (nationalID.length != 14) {
      toast.error("Enter Correct National ID");
    } else {
      appDispatch({ type: "patient1", data: { firstName, lastName, email, password, phoneNumber, gender, age, bloodType, nationalID } });
      navigate("/patient-reg2");
    }
  }

  return (
    <div className="flex justify-center items-center bg-[#0cb8b6] px-0 lg:px-12 py-20">
      <div className="bg-white login-card rounded-xl relative w-[80%] xl:w-[60%]">
        <h2 className="text-xl lg:text-2xl font-bold text-white bg-[#0cb8b6] rounded-t-xl p-6" >Personal Information</h2>
        <div className="p-8">
          <div className="mb-3 sm:flex gap-4 lg:gap-8">
            <div className="mb-3 flex flex-col basis-2/4">
              <span className="mb-3 lg:text-lg">First Name :</span>
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            </div>
            <div className="flex flex-col basis-2/4">
              <span className="mb-3 lg:text-lg">Last Name :</span>
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            </div>
          </div>
          <div className="mb-3 flex flex-col">
            <span className="mb-3 lg:text-lg">Email :</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
          </div>
          <div className="mb-3 flex flex-col relative">
            <span className="mb-3 lg:text-lg">Password</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={initialType} className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            <i className="fa-solid fa-eye absolute bottom-2 sm:bottom-4 right-2 cursor-pointer" onClick={changeType}></i>
          </div>
          <div className="mb-3 sm:flex gap-4 lg:gap-8">
            <div className="mb-3 flex flex-col basis-2/4">
              <span className="mb-3 lg:text-lg">Phone Number :</span>
              <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            </div>
            <div className="flex flex-col basis-2/4">
              <span className="mb-3 lg:text-lg">Gender :</span>
              <div>
                <input className="mr-2" type="radio" name="gender" value="mail" checked={gender === "mail"} onChange={(e) => setGender(e.target.value)} />
                <span className="mr-2">Male</span>
                <input className="mr-2" type="radio" name="gender" value="femail" checked={gender === "femail"} onChange={(e) => setGender(e.target.value)} />
                <span>Female</span>
              </div>
            </div>
          </div>
          <div className="mb-3 sm:flex gap-4 lg:gap-8">
            <div className="mb-3 flex flex-col basis-2/4">
              <span className="mb-3 lg:text-lg">Age :</span>
              <input value={age} onChange={(e) => setAge(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            </div>
            <div className="flex flex-col basis-2/4">
              <span className="mb-3 lg:text-lg">National ID</span>
              <input value={nationalID} onChange={(e) => setNationalID(e.target.value)} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
            </div>
          </div>
          <div className="mb-3 flex flex-col">
            <span className="mb-3">Blood Type:</span>
            <select value={bloodType} className="sm:w-[50%] py-3 px-3 text-lg test-[#0cb8b6] font-semibold focus:outline-none border-[2px] border-[#0cb8b6]" onChange={(e) => setBloodtype(e.target.value)} name="bloodtype">
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="don't know">Don&apos;t Know</option>
            </select>
          </div>
          <div className="text-right">
            <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl" onClick={goSecondPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientReg1;
