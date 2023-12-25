import { useState, useRef } from "react";
import "./Modal.css";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function DoctorModal() {
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const doctorID = localStorage.getItem("doctorID");
  const dataURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors/${doctorID}`;
  const imageURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/update_doc_picture/${doctorID}`;
  const passwordURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/updateDo_pass/${doctorID}`;

  const triggerFile = () => {
    inputRef.current.click();
  };

  const clickHandler = () => {
    if (modal === true) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const newData = {
    address,
    email,
    phoneNumber,
  };

  async function submitHandler() {
    if (email !="" && !regEmail.test(email)) {
      toast.error("Enter Correct Email");
    }
    if (email === "") {
      delete newData.email;
    }
    if (address === "") {
      delete newData.address;
    }
    if (phoneNumber === "") {
      delete newData.phoneNumber;
    }

    if (password.length < 8 && password != 0) {
      toast.error("Password Must Be 8 Charrecters Or Longer");
    } else if (password.length >= 8) {
      await axios
        .patch(passwordURL, { password })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }

    if (image != "") {
      const formData = new FormData();
      formData.append("image", image);
      await axios
        .patch(imageURL, formData)
        .then((res) => {
          localStorage.setItem("doctorImage", res.data.data.pationt.image);
        })
        .catch((e) => console.log(e));
    }

    await axios
      .patch(dataURL, newData)
      .then((res) => {
        localStorage.setItem("userEmail", res.data.data.doctor.email);
        localStorage.setItem("doctorPhone", res.data.data.doctor.phoneNumber);
        localStorage.setItem("doctorAddress", res.data.data.doctor.address);
        localStorage.setItem("doctorImage", res.data.data.doctor.image);
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
      })
      .catch((e) => console.log(e));
  }

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <span className="text-white text-[8px] bg-[#294d61] p-1 rounded-full  absolute -bottom-2 right-2" onClick={clickHandler}>
        <i className="fa-solid fa-pen"></i>
      </span>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={clickHandler}></div>
          <div className="modal-content max-w-[500px] bg-white px-6 py-4 rounded-xl text-[#212529] relative">
            <h2 className="mb-4 font-semibold sm:text-lg">Only Fill The Data You Wish To Change</h2>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="">Email :</span>
                <input className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="">Password :</span>
                <input className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="">Address:</span>
                <input className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="">Phone Number :</span>
                <input className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="number" onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="sm:flex justify-between items-center mb-4">
              <div className="flex flex-col mb-4">
                <span className="mb-3">Choose Image:</span>
                <input className="hidden" type="file" name="image" ref={inputRef} onChange={(e) => setImage(e.target.files[0])} />
                <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl w-fit" onClick={triggerFile}>
                  Upload
                </button>
              </div>
              <div className="">
                <button className="font-medium bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
            <i className="fa-solid fa-xmark absolute top-3 right-3 text-[#e93131] text-xl" onClick={clickHandler}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorModal;
