import { useState } from "react";
import "./Modal.css";
import axios from "axios";

function DoctorModal() {
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState();

  const doctorID = localStorage.getItem("doctorID");
  const imageURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/update_doc_picture/${doctorID}`;
  const dataURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors/${doctorID}`;
  const passwordURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/updateDo_pass/${doctorID}`;

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
    if (address === "") {
      delete newData.address;
    }
    if (email === "") {
      delete newData.email;
    }
    if (phoneNumber === "") {
      delete newData.phoneNumber;
    }
    if (password != "") {
      await axios.patch(passwordURL, {password}).then((res) => console.log(res)).catch((e) => console.log(e));
    }
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
            <h2>Choose Image</h2>
            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
            <h2>Phone Number :</h2>
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
            <h2>Address :</h2>
            <input type="text" onChange={(e) => setAddress(e.target.value)} />
            <h2>Email :</h2>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <h2>Password :</h2>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submitHandler}>Submit</button>
            <i className="fa-solid fa-xmark close-modal" onClick={clickHandler}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorModal;
