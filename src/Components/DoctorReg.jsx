import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";



function DoctorReg() {
  useEffect(() => {
    document.title = "Health Recorder | Doctor Sign Up";
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const regCharectars = /^[A-Za-z\s]*$/;
  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const url = "https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("mail");
  const [initialType, setType1] = useState("password");



  async function submitHandler() {
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
      toast.error("Password Must Be 8 Charrectars Or Longer");
    } else if (department === "") {
      toast.error("Enter Department");
    } else if (!regCharectars.test(department)) {
      toast.error("Enter Correct Department");
    } else if (phoneNumber === "") {
      toast.error("Enter Phone Number");
    } else if (!regNumbers.test(phoneNumber) || phoneNumber.length != 11) {
      toast.error("Enter Correct Phone Number");
    } else if (address === "") {
      toast.error("Enter Address");
    } else if (age === "") {
      toast.error("Enter Age");
    } else {
      toast.info("Attempting Registration");
      await axios
        .post(url, { firstName, lastName, email, password, department, phoneNumber, address, age, gender})
        .then((res) => {
          console.log(res);
          localStorage.setItem("userFirstName", res.data.data.doctor.firstName);
          localStorage.setItem("userLastName", res.data.data.doctor.lastName);
          localStorage.setItem("userEmail", res.data.data.doctor.email);
          localStorage.setItem("doctorDepartment", res.data.data.doctor.department);
          localStorage.setItem("doctorPhone", res.data.data.doctor.phoneNumber);
          localStorage.setItem("doctorAddress", res.data.data.doctor.address);
          localStorage.setItem("doctorImage", res.data.data.doctor.image);
          localStorage.setItem("doctorID", res.data.data.doctor._id);
          localStorage.setItem("patientList", JSON.stringify(res.data.data.doctor.pId));
          setTimeout(() => {
            window.location.reload(true);
          }, 400);
          navigate("/doctor-page");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Email And Phone Number Must Be Unique");
        });
    }
  }

  const changeType = () => {
    if (initialType === "password") {
      setType1("text");
    } else {
      setType1("password");
    }
  };

  return (
        <div className="flex justify-center items-center bg-[#0cb8b6] px-0 lg:px-12 py-20 h-screen">
          <div className="bg-white login-card rounded-xl relative w-[80%] xl:w-[60%]">
            <h2 className="text-xl font-bold text-white bg-[#0cb8b6] rounded-t-xl p-6">Doctor Registration</h2>
            <div className="p-6">
              <div className="mb-3 sm:flex gap-4 lg:gap-8">
                <div className="mb-3 flex flex-col basis-2/4">
                  <span>First Name :</span>
                  <input id="fname" onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
                </div>
                <div className="flex flex-col basis-2/4">
                  <span>Last Name :</span>
                  <input id="lname" onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" />
                </div>
              </div>
              <div className="mb-3 sm:flex gap-4 lg:gap-8">
                <div className="mb-3 flex flex-col basis-2/4">
                  <span>Email :</span>
                  <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" value={email} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" />
                </div>
                <div className="flex flex-col basis-2/4 relative">
                  <span>Password :</span>
                  <input onChange={(e) => setPassword(e.target.value)} id="password" value={password} type={initialType} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" />
                  <i className="fa-solid fa-eye absolute bottom-2 sm:bottom-4 right-2 cursor-pointer" onClick={changeType}></i>
                </div>
              </div>
              <div className="mb-3 sm:flex gap-4 lg:gap-8">
                <div className="mb-3 flex flex-col basis-2/4">
                  <span>Department :</span>
                  <input onChange={(e) => setDepartment(e.target.value)} type="text" id="department" value={department} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" />
                </div>
                <div className="flex flex-col basis-2/4">
                  <span>Phone Number :</span>
                  <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} id="phoneNumber" value={phoneNumber} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" />
                </div>
              </div>
              <div className="mb-3 sm:flex gap-4 lg:gap-8">
                <div className="mb-3 flex flex-col basis-2/4">
                  <span>Address :</span>
                  <input onChange={(e) => setAddress(e.target.value)} type="text" id="address" value={address} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" />
                </div>
                <div className="flex flex-col basis-2/4">
                <span>Gender :</span>
                <div className="">
                  <input className="mr-2" type="radio" name="gender" value="mail" checked={gender === "mail"} onChange={(e) => setGender(e.target.value)} />
                  <span className="mr-2">Male</span>
                  <input className="mr-2" type="radio" name="gender" value="femail" checked={gender === "femail"} onChange={(e) => setGender(e.target.value)} />
                  <span>Female</span>
                </div>
                </div>
              </div>
              <div className="mb-3 flex flex-col sm:w-[50%]">
                <span>Age :</span>
                <input value={age} type="number" onChange={(e) => setAge(e.target.value)} className="focus:outline-none border-b-[2px] border-[#0cb8b6]" />
              </div>
              <div className="text-right">
                <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl" onClick={submitHandler}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
  );
}



export default DoctorReg;
