import axios from "axios";
import { useState, useRef } from "react";

function GeneticModal() {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [descrption, setDescreption] = useState("");
  const [date, setDate] = useState("");
  const inputRef = useRef(null);
  const clickHandler = () => {
    if (modal === true) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const patientID = localStorage.getItem("pNationalID");
  const url = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/updateX_ray/${patientID}`;
  const desURL = `https://eslamsaber8-healthrecorder.onrender.com/api/v1/update/${patientID}`;

  const triggerFile = () => {
    inputRef.current.click();
  };

  const [error, setError] = useState("");

  async function submitXray() {
    if(descrption === ""){
      setError("Enter Description")
    }else if (date === ""){
      setError("Enter Date");
    }
    else if (image === "") {
      setError("Select Image");
    }else {
      const newDes = [{descrption, date}];
      await axios.patch(desURL,{orgnis_report : newDes }).then(res => console.log(res)).catch(e => console.log(e));
      const formData = new FormData();
      formData.append("x_ray", image);
      await axios
        .patch(url, formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("pXray", JSON.stringify(res.data.data.pationt.x_ray));
          localStorage.setItem("pXrayDescreption", JSON.stringify(res.data.data.pationt.orgnis_report));
          setTimeout(() => {
            window.location.reload(true);
          }, 400);
        })
        .catch((e) => console.log(e));
    }
  }

  return (
    <>
      <span className="genetic-edit" onClick={clickHandler}>
        <i className="fa-solid fa-pen"></i>
      </span>
      {modal && (
        <div className="modal">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content">
            <h2 className="modal-header">Enter New X-Ray Or Prescription</h2>
            <div className="row second-row diagnosis-second-row">
              <div className="lhs">
                <span className="edit-span">Description :</span>
                <input onChange={e => setDescreption(e.target.value)} className="main-input" type="text" />
              </div>
              <div className="rhs">
                <span className="edit-span">Date :</span>
                <input onChange={e => setDate(e.target.value)}  type="date" className="bloodtype-select" />
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
                <span>{error}</span>
                <button onClick={submitXray} className="submit-changes">
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

export default GeneticModal;
