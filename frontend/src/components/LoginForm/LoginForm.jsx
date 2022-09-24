import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const loginUser = async (loginData) => {
  try {
    let response = await fetch(`http://127.0.0.1:8000/api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });
    if (response.status === 200) {
      let data = await response.json()
      localStorage.setItem("token", JSON.stringify(data.access));
      window.location = '/upload'
      //setToken(JSON.parse(localStorage.getItem("token")));
      //let loggedInUser = jwtDecode(response.data.access);
      //setUser(setUserObject(loggedInUser));
      //setIsServerError(false);
      //navigate("/");

    } else {
      //navigate("/register");
    }
  } catch (error) {
    console.log(error);
    //setIsServerError(true);
    //navigate("/register");
  }
};

const LoginForm = () => {
  //const { loginUser, isServerError } = useContext(AuthContext);
  //const loginUser = undefined;
  const isServerError = undefined;


  const defaultValues = { username: "", password: "" };
  const {formData, handleInputChange, handleSubmit, reset} = useCustomForm(
    loginUser,
    defaultValues
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <h3>Welcome! Please Sign in or Register</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/registration">Click to register!</Link>
        <button className="send">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;



























// import React, { useState, useEffect } from "react";
// import "./LoginForm.css";
// import axios from "axios";
// import { Link, Route, Routes } from "react-router-dom";
// import RegistrationForm from "../RegistrationForm/RegistrationForm";

// const LoginForm = (props) => {

//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");


//   async function loginUser(userInfo) {
//     let response = await axios.post(
//       "http://127.0.0.1:8000/api/auth/login/", userInfo);
//     console.log(response);
//     localStorage.setItem('token', response.data.access);
//     window.location = '/';
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let userInfo = {
//       username: userName,
//       password: password,
//     };
//     props.setStoredUserName(userInfo.username)
//     loginUser(userInfo);
//   }

//   return (
//     <div className="login-form">
//       <h3>Welcome! Please Sign in or Register</h3>
//       <form onSubmit={handleSubmit}>
//         <label>UserName</label>
//         <input
//           type="text"
//           required
//           className="user-name"
//           value={userName}
//           onChange={(event) => setUserName(event.target.value)}
//         ></input>
//         <label>Password</label>
//         <input
//           type="password"
//           required
//           className="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         ></input>
//         <button type="submit">Login</button>
//         <Routes>
//         <Route exact path="registration" element={<RegistrationForm />} />
//         </Routes>
//         <Link to='registration'>
//         <button>Sign-Up</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
