import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
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
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        <button>Login!</button>
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
