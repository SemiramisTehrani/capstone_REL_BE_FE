import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { SendEmail } from '../../utils/AutoEmail';

function SendRegistrationEmail(data) {
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      service_id: 'service_n4kyn9j',
      template_id: 'template_eyvh5rn',
      user_id: 'RmNgCopFUrZDWiDmP',
      template_params: {
        email: data.email,
        to_name: data.first_name + " " + data.last_name,
        message: 'Welcome! You are now registered for our service. Thank you for registering.'
      }
    })
  })
  .then(response => {
    if (response.status === 201) {
      console.log("Successful registration! Log in to access token");
    } else {
      console.log("Failed to send registration email.")
    }
    SendEmail("RoseElectronicsLab2022@gmail.com", 
              "Sales Representative", 
              `A new user with the username ${data.username} has registered to the service`);
    window.location = '/login'
  })
  .catch(error => {
    console.log(error)
    console.log("Failed to send registration email.")
  })
}

const registerUser = async (registerData) => {
  try {
    let finalData = {
      username: registerData.username,
      password: registerData.password,
      email: registerData.email,
      first_name: registerData.firstName,
      last_name: registerData.lastName,
    };
    let response = await fetch(`http://127.0.0.1:8000/api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(finalData)
    });
    if (response.status === 201) {
      SendRegistrationEmail(finalData)
      console.log("Successful registration! Log in to access token");
      //setIsServerError(false);
      //navigate("/login");
    } else {
      //navigate("/register");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

const RegistrationForm = () => {
 //const { registerUser } = useContext(AuthContext);
  //const {registerUser} = AuthContext
  //const registerUser = useContext(AuthContext);
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
      <h3>Welcome New User!</h3>
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
          special characters . It must be at least 8 characters long!
        </p>
        <button className="send">Register!</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
