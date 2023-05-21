import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DoctorLogin from "./Components/Doctor-Login/doctorLogin";
import PatientLogin from "./Components/Patient-Login/PatientLogin"
import DoctorReg from "./Components/DoctorReg/DoctorReg"
import PatientReg from "./Components/PatientReg/PatientReg";
import DoctorPage from "./Components/DoctorPage/DoctorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("userFirstName")));

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/doctor-login" element={<DoctorLogin/>} setLoggedIn={setLoggedIn}/>
        <Route exact path="/patient-login" element={<PatientLogin/>} setLoggedIn={setLoggedIn}/>
        <Route exact path="/doctor-reg" element={<DoctorReg/>} />
        <Route exact path="/patient-reg/*" element={<PatientReg/>} />
        <Route exact path="/doctor-page" element={<DoctorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
