import { useState } from "react";
import axios from "axios";

import "./ForgetPasswordDoctor.css";

function ForgetPasswordDoctor() {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const url = "";

  async function submitHandler() {
    await axios
      .post(url, { email, number })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="forgot-password">
      <div className="password-container">
        <div className="password-card">
          <h2>Retrieve Password</h2>
          <p>Enter The Following Data To Retrieve Password</p>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} />
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordDoctor;
