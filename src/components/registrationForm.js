import React, { useState } from "react";
import "./style.css";
import validator from "validator";
const dataJson = [
  {
    firstname: "gayathri",
    lastname: "krishnan",
    username: "gayathri0307",
    email: "gayu0307@gmail.com",
    password: "gathie",
    confirmPassword: "gathie",
    dob: "03/07/1997",
  },
  {
    firstname: "Karthick",
    lastname: "krishnan",
    username: "kar0307",
    email: "kar277@gmail.com",
    password: "kar@3454",
    confirmPassword: "kar@3454",
    dob: "27/07/1999",
  },
];

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [error_message, setErrorMessage] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const handleDob = (e) => {
    setDob(e.target.value);
    setSubmitted(false);
  };

  const clearfield = () => {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("date").value = "";
  };
  const checkDuplicateUserName = (dataJson) => {
    for (let i = 0; i < dataJson.length; i++) {
      if (dataJson[i].username === userName) {
        return true;
      }
    }
    return false;
  };

  const handleSubmitButton = () => {
    const userVal = checkDuplicateUserName(dataJson);

    if (
      firstName === "" ||
      lastName === "" ||
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      dob === ""
    ) {
      setError(true);
      setErrorMessage("Fields Should Not be Empty");
    } else if (!validator.isEmail(email)) {
      setError(true);
      setErrorMessage("Enter a valid Email Address");
    } else if (userVal) {
      setError(true);
      setErrorMessage("UserName exists");
    } else if (password !== confirmPassword) {
      setError(true);
      setErrorMessage("password does not match");
    } else {
      setError(false);
      setSubmitted(true);
      dataJson.push({
        firstname: firstName,
        lastname: lastName,
        username: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        dob: dob,
      });
    }
  };

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDob("");
    clearfield();
    setError(false);
    setSubmitted(false);
  };
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <p>
          FirstName: {firstName} <br></br>
          LastName: {lastName} <br></br>
          EmailId: {email} <br></br>
          dob: {dob} <br></br>
        </p>
        <p>User Name: {userName} successfully registered</p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>{error_message}</p>
      </div>
    );
  };

  return (
    <div className="form" id="registraionForm">
      <div className="form-body">
        <div id="messages">
          {successMessage()}
          {errorMessage()}
        </div>
        <div className="firstname">
          <label className="form__label" for="firstName">
            First Name:{" "}
          </label>
          <input
            className="form__input"
            onChange={(e) => handleFirstName(e)}
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name:{" "}
          </label>
          <input
            className="form__input"
            onChange={(e) => handleLastName(e)}
            type="text"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="username">
          <label className="form__label" for="userName">
            User Name:{" "}
          </label>
          <input
            className="form__input"
            onChange={(e) => handleUserName(e)}
            type="text"
            id="userName"
            placeholder="User Name"
          />
        </div>

        <div className="email">
          <label className="form__label" for="email">
            Email Id:{" "}
          </label>
          <input
            className="form__input"
            type="email"
            onChange={(e) => handleEmail(e)}
            id="email"
            placeholder="email"
          />
        </div>

        <div className="password">
          <label className="form__label" for="password">
            Password:{" "}
          </label>
          <input
            className="form__input"
            onChange={(e) => handlePassword(e)}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password:{" "}
          </label>
          <input
            className="form__input"
            onChange={(e) => handleConfirmPassword(e)}
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div className="calender">
          <label className="form__label" for="calender">
            Date Of Birth:{" "}
          </label>
          <input
            className="form__input"
            type="date"
            onChange={(e) => handleDob(e)}
            id="date"
            placeholder="Calender"
          />
        </div>
      </div>
      <div className="footer">
        <button
          id="registerbtn"
          type="submit"
          onClick={handleSubmitButton}
          class="btn"
        >
          Register
        </button>
        <button id="clearbtn" type="submit" onClick={clearState} class="btn">
          Clear
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
