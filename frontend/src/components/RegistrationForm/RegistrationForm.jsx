import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegistrationForm = () => {
 //const { registerUser } = useContext(AuthContext);
  const registerUser = useContext(AuthContext);
  console.log("AuthContext", AuthContext)
  console.log("Register User", registerUser)
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const {formData, handleInputChange, handleSubmit} = useCustomForm(
    registerUser,
    defaultValues
  );

  return (
    <div className="container">
      <form className="form registrationForm" onSubmit={handleSubmit}>
        
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            autoComplete="username"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            autoComplete="new-password"
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button>Register!</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
