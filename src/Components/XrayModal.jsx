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
    if (descrption === "") {
      setError("Enter Description");
    } else if (date === "") {
      setError("Enter Date");
    } else if (image === "") {
      setError("Select Image");
    } else {
      const newDes = [{ descrption, date }];
      await axios
        .patch(desURL, { orgnis_report: newDes })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
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
        <i className="fa-solid fa-pen absolute text-white right-2 top-3"></i>
      </span>
      {modal && (
        <div className="modal">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content max-w-[500px] bg-white px-6 py-4 rounded-xl text-[#212529] relative">
            <h2 className="mb-4 font-semibold sm:text-lg">Enter New X-Ray Or Prescription</h2>
            <div className="sm:flex gap-4 mb-4">
              <div className="mb-4 flex flex-col basis-2/4">
                <span className="edit-span">Description :</span>
                <input onChange={(e) => setDescreption(e.target.value)} className="focus:outline-none  border-b-[2px] border-[#0cb8b6]" type="text" />
              </div>
              <div className="flex flex-col basis-2/4">
                <span className="edit-span">Date :</span>
                <input onChange={(e) => setDate(e.target.value)} type="date" className="sm:w-[50%] p-2 text-xs test-[#0cb8b6] font-semibold focus:outline-none border-[2px] border-[#0cb8b6]" />
              </div>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <span >Choose Image:</span>
              <input className="hidden" type="file" name="image" ref={inputRef} onChange={(e) => setImage(e.target.files[0])} />
              <button className="font-medium  bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl" onClick={triggerFile}>
                Upload
              </button>
            </div>
            <div className="text-right">
              <button onClick={submitXray} className="font-medium w-fit bg-[#6da5c0] hover:bg-[#294d61] duration-300 text-white py-2 px-6 rounded-xl">
                Submit
              </button>
            </div>
            <i className="fa-solid fa-xmark absolute top-3 right-3 text-[#e93131] text-xl" onClick={clickHandler}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default GeneticModal;
