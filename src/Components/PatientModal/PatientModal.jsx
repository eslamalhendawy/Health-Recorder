import { useState, useRef } from "react";
import axios from "axios";

function DoctorModal() {
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [bloodType, setBloodType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const inputRef = useRef(null);

  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const patientID = localStorage.getItem("pID");
  const dataURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/pationts/${patientID}`;
  const imageURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/update_image/${patientID}`;
  const passwordURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/updatePa_pass/${patientID}`;

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
    email,
    phoneNumber,
    bloodType,
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
    if (phoneNumber === "") {
      delete newData.phoneNumber;
    }
    if (bloodType === "") {
      delete newData.bloodType;
    }
    // if (password != "") {
    //   await axios.patch(passwordURL, {password}).then((res) => console.log(res)).catch((e) => console.log(e));
    // }
    // const formData = new FormData();
    // formData.append("image", image);
    // await axios.patch(url , formData)
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((e) => {
    //     console.log(e);
    // })

    await axios
      .patch(dataURL, newData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("pEmail", res.data.data.pationt.email);
        localStorage.setItem("pBloodType", res.data.data.pationt.bloodType);
        localStorage.setItem("pImage", res.data.data.pationt.image);
        localStorage.setItem("pPhoneNumber", res.data.data.pationt.phoneNumber);
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
                <span className="edit-span">Blood Type:</span>
                <select value={bloodType} className="bloodtype-select" onChange={(e) => setBloodType(e.target.value)} name="bloodtype">
                  <option value=""></option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="rhs">
                <span className="edit-span">Phone Number :</span>
                <input className="main-input" type="text" onChange={(e) => setPhone(e.target.value)} />
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
