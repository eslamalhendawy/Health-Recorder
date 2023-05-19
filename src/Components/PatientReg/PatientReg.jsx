import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PatientReg1 from "./PatientReg1";
import PatientReg2 from "./PatientReg2";
import PatientReg3 from "./PatientReg3";

function PatientReg() {
  useEffect(() => {
    document.title = "Health Recorder | Patient Sign Up";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route exact path="/patient-reg1" element={<PatientReg1 />} />
      <Route exact path="/patient-reg2" element={<PatientReg2 />} />
      <Route exact path="/patient-reg3" element={<PatientReg3 />} />
    </Routes>
  );
}

export default PatientReg;
