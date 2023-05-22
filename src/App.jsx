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
import PatientReg from "./Components/PatientReg/PatientReg";
import DoctorPage from "./Components/DoctorPage/DoctorPage";


function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("userFirstName")),
  }

  function myReducer(draft, action){
    switch (action.type){
      case "login":
        draft.loggedIn = true;
        break;
      case "logout":
        draft.loggedIn = false;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(myReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/doctor-login" element={<DoctorLogin />} />
            <Route exact path="/patient-login" element={<PatientLogin />} />
            <Route exact path="/doctor-reg" element={<DoctorReg />} />
            <Route exact path="/patient-reg/*" element={<PatientReg />} />
            <Route exact path="/doctor-page" element={<DoctorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
