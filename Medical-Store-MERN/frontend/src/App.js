import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/auth/Login/Login";
import Signup from "./Components/auth/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import Topbar from "./Components/Topbar/Topbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import UserHome from "./Pages/UserLogIn/UserHome";
import Shop from "./Pages/Shop/Shop";

function App() {
  const [showModel, setShowModel] = useState(null);

  const closeModel = (e) => {
    if (e.target.classList.contains("model")) {
      setShowModel(null);
    }
  };

  useEffect(() => {
    if (showModel) {
      document.getElementById(showModel).classList.add("show");
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "16px";
    } else {
      document.getElementById("login").classList.remove("show");
      document.getElementById("signup").classList.remove("show");
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [showModel]);

  return (
    <div>
      <BrowserRouter>
        <Topbar setShowModel={setShowModel} />
        <div
          id="login"
          className="model login fade"
          onClick={(e) => closeModel(e)}
          style={{ visibility: showModel === "login" ? "visible" : "hidden" }}
        >
          <Login setShowModel={setShowModel} />
        </div>
        <div
          id="signup"
          className="model signup fade"
          onClick={(e) => closeModel(e)}
          style={{ visibility: showModel === "signup" ? "visible" : "hidden" }}
        >
          <Signup setShowModel={setShowModel} />
        </div>
        <div className="section">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Shop/:shopName" element={<Shop />} />
            <Route exact path="/Cart/:shopName" element={<Cart />} />
            <Route path="/UserHome/:shopName" element={<UserHome />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
