import React, { useState } from "react";
import "./Home.css";
import image from "./medi5.jpeg";
import medi1 from "./op1.jpeg";
import medi3 from "./op3.jpeg";
import medi2 from "./op2.jpeg";
import medi4 from "./op4.jpeg";

const Home = () => {
  return (
    <div>
      <div className="home-top-container">
        <div class="banner-content">
          <img src={image} alt="Banner Image" />
          <div class="text-overlay">
            <h1>Online Medical Store – Online Pharmacy in Pakistan</h1>
            <p>
              We home-deliver medicines and health products all over Lahore.
            </p>
          </div>
          </div>
          <h1> About Us </h1>
          <p>
            {" "}
            P-Medics, An online platform offers a comprehensive range of
            pharmaceuticals, wellness products, medical equipment, and
            healthcare essentials, all carefully curated to meet your diverse
            needs. Whether you're looking for over-the-counter medications,
            prescription drugs, vitamins, or personal care items, we've got you
            covered.
          </p>
          <p>
            With our user-friendly interface, browsing and purchasing your
            required products is simple and hassle-free. You can easily search
            for specific items, explore various categories, and conveniently
            place orders from the comfort of your home or office, saving you
            time and effort.
          </p>
          <p>
            Moreover, our team of knowledgeable pharmacists and healthcare
            professionals are always ready to assist you with any questions or
            concerns you may have regarding your health or medications. We
            believe in providing personalized care and support to each of our
            valued customers, ensuring a positive and fulfilling shopping
            experience every time.
          </p>
        <div className="home-banner third">
          <h1>Shop Medicines online your way</h1>
          <div className="third-items">
            <div className="third-items-card">
              <img src={medi1} alt="" />
              <p>NEW ! Pickup from Store</p>
            </div>
            <div className="third-items-card">
              <img src={medi2} alt="" />
              <p>Low cost shipping across Lahore</p>
            </div>
            <div className="third-items-card">
              <img src={medi3} alt="" />
              <p>Ship to Store</p>
            </div>
            <div className="third-items-card">
              <img src={medi4} alt="" />
              <p>Same day deliveries</p>
            </div>
          </div>
        </div>
        <h1> Why Us? </h1>
        <p>
          At P-Medics, we understand the importance of trust when
          it comes to your health and well-being. That's why we're dedicated to
          earning and maintaining your trust every step of the way. With a
          commitment to quality assurance, secure transactions, and professional
          expertise, we strive to provide you with a reliable and hassle-free
          shopping experience. Our team of experienced pharmacists and
          healthcare professionals is here to assist you with any questions or
          concerns, ensuring that you have the information and support you need
          to make informed decisions about your health. We value your
          satisfaction above all else and are committed to exceeding your
          expectations. Shop with confidence at P-Medics, your trusted online
          destination for all your medical and healthcare needs.
        </p>
        <div className="home-banner third">
          <h1>Browse medicines & health products</h1>
          <div className="third-items">
            <div className="third-items-card">
              <img src={medi1} alt="" />
              <p>Daily Health Needs</p>
            </div>
            <div className="third-items-card">
              <img src={medi2} alt="" />
              <p>Devices & Instruments</p>
            </div>
            <div className="third-items-card">
              <img src={medi3} alt="" />
              <p>Wellness</p>
            </div>
            <div className="third-items-card">
              <img src={medi4} alt="" />
              <p>Alternate Medicines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
