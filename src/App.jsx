import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import DoctorReg from "./Components/DoctorReg/DoctorReg"
import PatientReg from "./Components/PatientReg/PatientReg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/doctor-reg" element={<DoctorReg/>} />
        <Route exact path="/patient-reg/*" element={<PatientReg/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
