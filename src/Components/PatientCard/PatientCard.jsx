/* eslint-disable react/prop-types */
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientCard(props) {
  const url = "https://nice-rose-yak-ring.cyclic.app/api/v1/pationts/login";
  const navigate = useNavigate();
  async function clickHandler() {
    await axios
      .post(url, props.data.code)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          window.location.reload(true);
        }, 400);
        navigate("/patient-page");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="box" onClick={clickHandler}>
      <div className="data">
        <img src={props.img} alt="" />
        <h3>{props.data.name}</h3>
      </div>
      <div className="data">
        <span>Code</span>
        <span>{props.data.code}</span>
      </div>
      <div className="data">
        <span>Number</span>
        <span>+2{props.data.phone}</span>
      </div>
      <div className="data">
        <span>Age</span>
        <span>{props.data.age}</span>
      </div>
    </div>
  );
}

export default PatientCard;
