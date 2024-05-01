import React from "react";
import "./UserHome.css";
import "../../Components/Topbar/Topbar.css";
import { Link } from "react-router-dom";
import med1 from "../Home/op1.jpeg";
import med3 from "../Home/op3.jpeg";
import med2 from "../Home/op2.jpeg";
import med4 from "../Home/op4.jpeg";

import { useParams } from "react-router-dom";

const UserHome = () => {
  const { shopName } = useParams(); // Access route params using useParams
  console.log("Shop Name Final: ", shopName);
  return (
    <div>
      <div className="topbar2">
        <br></br>
        <div className="topbar-container">
          <nav className="topbar-down">
            <div className="topbar-item-center">
              <div>
                <Link to={`/UserHome/${shopName}`}>Home</Link>
              </div>
              <div>
                <Link to={`/Shop/${shopName}`}>My Items</Link>
              </div>
              <div>
                <Link to={`/Cart/${shopName}`}>Add Items</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="home-top-container">
        <div className="home-banner sky">
          <h1>{shopName} – Online Pharmacy in Pakistan</h1>
          <p>We home-deliver medicines and health products all over Lahore.</p>
        </div>
        <div className="home-banner third">
          <h1>Shop Medicines online your way</h1>
          <div className="third-items">
            <div className="third-items-card">
              <img src={med1}></img>
              <p>NEW ! Pickup from Store</p>
            </div>
            <div className="third-items-card">
            <img src={med2}></img>

              <p>Low cost shipping across Lahore</p>
            </div>
            <div className="third-items-card">
              <img src={med3}></img>

              <p>Ship to Store</p>
            </div>
            <div className="third-items-card">
              <img src={med4}></img>

              <p>Same day deliveries</p>
            </div>
          </div>
        </div>
        <div className="home-banner grey">
          <h1>GET UPTO 33% DISCOUNT & 15% Cashback</h1>
          <p>
            <strong>+ Rs.50 Singup discount on every order.</strong>
          </p>
        </div>
        <div className="home-banner third">

          <h1>Browse medicines & health products</h1>
          <div className="third-items">
            <div className="third-items-card">
              <img src={med2}></img>

              <p>Daily Health Needs</p>
            </div>
            <div className="third-items-card">
              <img src={med3}></img>

              <p>Devices & Instruments</p>
            </div>
            <div className="third-items-card">
              <img src={med4}></img>

              <p>Wellness</p>
            </div>
            <div className="third-items-card">
          <img src={med1}></img>

              <p>Alternate Medicines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
