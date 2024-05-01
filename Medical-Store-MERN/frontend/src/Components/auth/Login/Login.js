import React, { useState } from "react";
import "../auth.css";
import { useNavigate } from "react-router-dom";
import { login } from "../apicalls";

const Login = ({ setShowModel }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [shopName, setShopName] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePass = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Assuming 'email' and 'password' are already defined or obtained from the form input
      const userData = await login(email, pass); // Call the login function
      if (userData && userData.token) {
        const { shopName } = userData.user; // Destructure shopName from the user data
        setShopName(shopName);
        console.log("LogIn Shopname: ", shopName); // Set shopName in component state
        // User found and token received, indicating successful login
        console.log(
          "User logged in:",
          userData.user,
        );

        // Store the token in local storage for subsequent requests
        localStorage.setItem("token", userData.token);

        // Navigate to UserHome or perform other actions for successful login
        navigate(`/UserHome/${shopName}`);

        alert("User Logged In!! Close DialogBox to continue");
      } else {
        // Login failed or user not found
        console.error("User not found or login failed");
        // Add code here to inform the user about the failed login attempt, e.g., display an error message on the login form.
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error.message);
      // Add code here to inform the user about the error, e.g., display an error message on the login form.
    }
  };

  return (
    <div className="auth-container">
      <span className="login-dismiss" onClick={() => setShowModel(false)}>
        &times;
      </span>
      <div className="login-top">
        <span>Login via UserName</span>
      </div>
      <hr />
      <div className="login-center">
        <form>
          <div className="login-username">
            <label>Email: </label>
            <input
              type="email"
              placeholder="Enter Your Email!!!"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="login-password">
            <label>Password: </label>
            <input
              type="password"
              placeholder="That's a Secret"
              value={pass}
              onChange={updatePass}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <span>Forgot Password?</span>
        </form>
      </div>
      <hr />
      <div className="login-bottom">
        Don't have an account?
        <button onClick={() => setShowModel("signup")}>SignUp</button> Now
      </div>
    </div>
  );
};

export default Login;
