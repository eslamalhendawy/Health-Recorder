import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useImmerReducer } from "use-immer";

//Contexts
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

//Components
import HomePage from "./Components/HomePage/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import DoctorLogin from "./Components/Doctor-Login/doctorLogin";
import PatientLogin from "./Components/Patient-Login/PatientLogin";
import DoctorReg from "./Components/DoctorReg/DoctorReg";
import PatientReg1 from "./Components/PatientReg/PatientReg1";
import PatientReg2 from "./Components/PatientReg/PatientReg2";
import PatientReg3 from "./Components/PatientReg/PatientReg3";
import DoctorPage from "./Components/DoctorPage/DoctorPage";
import PatientPage from "./Components/PatientPage/PatientPage";

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
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
