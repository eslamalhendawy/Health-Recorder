import { useState } from "react";
import axios from "axios";

function ForgetPasswordPatient() {
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const url = "";

  async function submitHandler(){
    await axios.post(url,{email,id})
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    })
  }
  return (
    <div className="forgot-password">
      <div className="password-container">
        <div className="password-card">
          <h2>Retrieve Password</h2>
          <p>Enter The Following Data To Retrieve Password</p>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="National ID" onChange={(e) => setID(e.target.value)} />
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPatient;
