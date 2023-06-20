import { useState } from "react";
import "./Modal.css";
import axios from "axios";

function Modal() {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState();

  const doctorID = localStorage.getItem("doctorID");
  const url = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/doctors/${doctorID}`;

  const clickHandler = () => {
    if(modal === true){
        setModal(false);
    }else {
        setModal(true);
    }
  };

  async function submitHandler() {
    const formData = new FormData();
    formData.append("image", image);
    await axios.patch(url , formData)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    })
  }

  if(modal) {
    document.body.classList.add("active-modal");
  }else {
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
            <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])}/>
            <button onClick={submitHandler}>Submit</button>
            <i className="fa-solid fa-xmark close-modal"  onClick={clickHandler}></i>
        </div>
      </div>)}
      
    </>
  );
}

export default Modal;
