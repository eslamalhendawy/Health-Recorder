import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import { ToastContainer } from "react-toastify";

//Contexts
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

//Components
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DoctorLogin from "./Components/DoctorLogin";
import PatientLogin from "./Components/PatientLogin";
import DoctorReg from "./Components/DoctorReg";
import PatientReg1 from "./Components/PatientReg1";
import PatientReg2 from "./Components/PatientReg2";
import PatientReg3 from "./Components/PatientReg3";
import DoctorPage from "./Components/DoctorPage";
import PatientPage from "./Components/PatientPage";
import DoctorPatientEdit from "./Components/DoctorPatientEdit";
import ForgetPasswordDoctor from "./Components/ForgetPasswordDoctor";
import ForgetPasswordPatient from "./Components/ForgetPasswordPatient";

import "./App.css"

function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("userFirstName")),
    patient1: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
      age: "",
      bloodType: "",
      nationalID: "",
    },
    patient2: {
      chronicDisease: "",
      mChronicDisease: "",
      healthProblems: "",
      mHealthProblems: "",
    },
  };

  function myReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        break;
      case "logout":
        draft.loggedIn = false;
        break;
      case "patient1":
        draft.patient1 = action.data;
        break;
      case "patient2":
        draft.patient2 = action.data;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(myReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/doctor-login" element={<DoctorLogin />} />
            <Route exact path="/patient-login" element={<PatientLogin />} />
            <Route exact path="/doctor-reg" element={<DoctorReg />} />
            <Route exact path="/patient-reg1" element={<PatientReg1 />} />
            <Route exact path="/patient-reg2" element={<PatientReg2 />} />
            <Route exact path="/patient-reg3" element={<PatientReg3 />} />
            <Route exact path="/doctor-page" element={<DoctorPage />} />
            <Route exact path="/patient-page" element={<PatientPage />} />
            <Route exact path="/patient-edit" element={<DoctorPatientEdit />} />
            <Route exact path="/doctor-password" element={<ForgetPasswordDoctor />} />
            <Route exact path="/patient-password" element={<ForgetPasswordPatient />} />
          </Routes>
          <Footer />
          <ToastContainer autoClose={3000} theme="dark" newestOnTop={true} />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
