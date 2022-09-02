import React, { useRef, useState } from "react";
import BianService from "../services/BianService";

import "../styles.css";
import BianLinksComponent from "./BianLinksComponent";

function LoginComponent() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef(null);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = { uname: uname.value, pass: pass.value };

    BianService.validateLoginDetails(userData).then((res) => {
      setIsSubmitted(res.data);
      if (!isSubmitted)
        setErrorMessages({
          name: "pass",
          message: errors.pass,
        });
    });
    form.current.reset();
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form ref={form}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>
            <BianLinksComponent />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default LoginComponent;
