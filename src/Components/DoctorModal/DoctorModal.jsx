import { useState, useRef } from "react";
import "./Modal.css";
import axios from "axios";

function DoctorModal() {
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    if (!regEmail.test(email)) {
      setErrorMessage("Enter Correct Email");
    } else {
      setErrorMessage("");
    }
    if (email === "") {
      delete newData.email;
      setErrorMessage("");
    }
    if (address === "") {
      delete newData.address;
    }
    if (phoneNumber === "") {
      delete newData.phoneNumber;
    }

    if (password.length < 8 && password != 0) {
      setErrorMessage("Password Must Be 8 Charrecters Or Longer");
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
        console.log(res);
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
      <span className="edit-button" onClick={clickHandler}>
        <i className="fa-solid fa-pen"></i>
      </span>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={clickHandler}></div>
          <div className="modal-content">
            <h2 className="modal-header">Only Fill The Data You Wish To Change</h2>
            <div className="row first-row">
              <div className="lhs">
                <span className="edit-span">Email :</span>
                <input className="main-input" type="text" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="rhs">
                <span className="edit-span">Password :</span>
                <input className="main-input" type="text" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="row second-row">
              <div className="lhs">
                <span className="edit-span">Address:</span>
                <input className="main-input" type="text" onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="rhs">
                <span className="edit-span">Phone Number :</span>
                <input className="main-input" type="number" onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="row third-row">
              <div className="lhs">
                <span className="edit-span">Choose Image:</span>
                <input type="file" name="image" ref={inputRef} onChange={(e) => setImage(e.target.files[0])} />
                <button className="upload-button" onClick={triggerFile}>
                  Upload
                </button>
              </div>
              <div className="rhs">
                <span>{errorMessage}</span>
                <button className="submit-changes" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
            <i className="fa-solid fa-xmark close-modal" onClick={clickHandler}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorModal;
