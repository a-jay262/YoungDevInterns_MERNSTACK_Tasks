import React, { useState } from "react";
import { sendOTP, signup , signup2} from "../apicalls";
import "../auth.css";

const Signup = ({ setShowModel }) => {
  const [values, setvalues] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    otp: "",
    password: "",
    repassword: "",
    otpSent: false,
  });

  const { shopName, ownerName, email, otp, password, repassword, otpSent } =
    values;
  const [disabled, setDisabled] = useState(false);
  const handleChange = (value) => (e) => {
    setvalues({ ...values, [value]: e.target.value });
    if (
      values[value].length > 2 &&
      e.target.classList.contains("validation-error") &&
      (value === "FirstName" || value === "LastName")
    ) {
      e.target.classList.remove("validation-error");
      e.target.nextSibling.remove();
    } else if (
      e.target.classList.contains("validation-error") &&
      value === "email" &&
      isEmailValid() === true
    ) {
      e.target.classList.remove("validation-error");
    } else if (
      e.target.classList.contains("validation-error") &&
      value === "otp" &&
      otp.length > 2
    ) {
      e.target.classList.remove("validation-error");
    }
  };
  const onBlur = (value) => (e) => {
    if (
      values[value].length <= 2 &&
      !e.target.classList.contains("validation-error") &&
      (value === "shopName" || value === "ownerName")
    ) {
      e.target.classList.add("validation-error");
      const p = document.createElement("p");
      p.innerHTML = `Please Enter a valid ${value}`;
      p.classList.add("text-error");
      e.target.parentNode.insertBefore(p, e.target.nextSibling);
    }
    if (
      !e.target.classList.contains("validation-error") &&
      value === "email" &&
      isEmailValid() === false
    ) {
      e.target.classList.add("validation-error");
    }
    if (
      !e.target.classList.contains("validation-error") &&
      value === "otp" &&
      otp.length <= 2
    ) {
      e.target.classList.add("validation-error");
    }
  };
  const isEmailValid = () => {
    if (email.match(/^[\w-\.]+@([\w-\.]+\.)+[\w-]+$/g)) {
      return true;
    }
    return false;
  };
  const ValidateSignUp = () => {
    if (
      shopName.length > 2 &&
      ownerName.length > 2 &&
      otp.length > 2 &&
      email &&
      otpSent &&
      password === repassword
    ) {
      return true;
    }
    return false;
  };
  const sendOtpToUser = (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log(email);
    
    sendOTP({ email }).then((response) => {
      if (response && response.error) {
        // Handle error case
        console.error(response.error);
        setvalues({ ...values, otpSent: false });
      } else {
        // Handle success case
        console.log("OTP sent successfully");
        setvalues({ ...values, otpSent: true });
      }
    }).catch((error) => {
      // Handle promise rejection (e.g., network error)
      console.error("Error sending OTP:", error);
      setvalues({ ...values, otpSent: false });
    });
  };
  
  const createUser = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    signup({ shopName, password, email, otp, ownerName }) // Call signup function with user data
      .then((response) => {
        console.log(response); // Log the response from the backend
        // Call signup2 if signup succeeds without errors
        signup2({ shopName, password, email, otp, ownerName })
          .then((response2) => console.log(response2)) // Log the response from signup2
          .catch((err) => console.log(err)); // Log any errors from signup2
      })
      .catch((err) => console.log(err)); // Log any errors from signup
  };
  
  
  return (
    <div className="auth-container">
      <span className="signup-dismiss" onClick={() => setShowModel(false)}>
        &times;
      </span>
      <div className="signup-top">
        <span>SignUp For an Account</span>
      </div>
      <hr />
      <div className="signup-center">
        <form>
          <div className="signup-username">
            <label>shopName: </label>
            <input
              type="text"
              value={shopName}
              onBlur={onBlur("shopName")}
              onChange={handleChange("shopName")}
              placeholder="what is you shops name??"
            />
            <p>
              Your Username must be unique and can contain ' . ', Numbers and '
              _ '.
            </p>
          </div>
          <div className="signup-name">
            <label>Name: </label>
            <input
              type="text"
              onBlur={onBlur("ownerName")}
              value={ownerName}
              onChange={handleChange("ownerName")}
              placeholder="What is shop's owner's name???"
            />
          </div>
          <div className="signup-email">
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onBlur={onBlur("email")}
              onChange={handleChange("email")}
              placeholder="Enter your Email please"
            />
            {otpSent && (
              <p style={{ color: "green", fontSize: "13px" }}>
                OTP sent successfully
              </p>
            )}
            <button
              onClick={(e) => !otpSent && sendOtpToUser(e)}
              disabled={disabled || !isEmailValid()}
            >
              {!otpSent && disabled && <p className="loader"></p>}
              Send OTP
            </button>
          </div>
          <div className="signup-otp">
            <label>Enter OTP: </label>

            <input
              type="text"
              value={otp}
              onChange={handleChange("otp")}
              onBlur={onBlur("otp")}
              placeholder="Enter OTP please"
            />
          </div>
          <div className="signup-password">
            <label>Choose a Password: (At least 6 Characters)</label>
            <input
              type="password"
              value={password}
              onChange={handleChange("password")}
              onBlur={onBlur("password")}
              placeholder="That's a Secrat"
            />
          </div>
          <div className="signup-repassword">
            <label>Reenter the Password: </label>
            <input
              type="password"
              value={repassword}
              onBlur={onBlur("repassword")}
              onChange={handleChange("repassword")}
              placeholder="That's also a Secrat"
            />
            {(password || repassword) &&
              (password !== repassword ? (
                <p style={{ color: "red", fontSize: "13px" }}>
                  Password do not match
                </p>
              ) : (
                <p style={{ color: "green", fontSize: "13px" }}>
                  Password Match.
                </p>
              ))}
          </div>
          <button
            className="signup-button"
            disabled={!ValidateSignUp() || !password || !repassword}
            onClick={(e) => createUser(e)}
          >
            Sign Up
          </button>
        </form>
      </div>
      <hr />
      <div className="login-bottom">
        Already have an account?
        <button onClick={() => setShowModel("login")}>LogIn</button> Now
      </div>
    </div>
  );
};

export default Signup;
