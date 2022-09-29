// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


// 09/11/2022 : Pages Imports I am not sure if I want to use these pages.moving them to component.
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";

// leftover from youtube 
//import {} from "./localKey_Semi";
// import {KEY} from "./localKey.js";



// Component Imports
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import Autoemail from "./components/AutoEmail/AutoEmail";
import FullStackDevelopment from "./components/FullStackDevelopment/FullStackDevelopment";
import Electronics from "./components/Electronics/Electronics";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import PCB from "./components/PCB/PCB";
import Reliability from "./components/Reliability/Reliability";
import Contactus from "./components/ContactUs/ContactUs";
import DocumentUpload from "./components/DocumentUpload/DocumentUpload";

import Schematic from "./components/Schematic/Schematic";
import SalesRepView from "./components/SalesRepView/SalesRepView";


//Util Imports
// import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fullstackdevelopment" element={<FullStackDevelopment/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/pcb_layout" element={<PCB />} />
          <Route path="/Reliability" element={<Reliability />} />
          <Route path="/Schematic_development" element={<Schematic />} />
          
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />

          <Route path="/upload" element={<DocumentUpload />} />
          <Route path="/autoemail_test" element={<Autoemail />} />
          <Route path="/sales" element={<SalesRepView />} />
      </Routes>
      {/* <Autoemail /> */}

      <Footer />
      {/* <Footer /> */}

    </div>
  );
}

export default App;




// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <HomePage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;






// function App() {
//   return (
//     <div className="App">
//       <NavBar/>
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={
//             <Home/>
//           }
//         />
//         <Route
//           path="home"
//           element={() => {
//             <LoginForm />;
//             }
//             }

//         />
//         <Route
//           path="loginform/*"
//           element={
//             <LoginForm />
//           }
//         />
//         <Route
//           exact
//           path="loginform/registration"
//           element={<RegistrationForm/>}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;
