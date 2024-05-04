import React, { useEffect } from "react";
import "./About.css"; 
import im from "../images/ab.jpg";
import logo from "../images/logo1.jpg";
import { useNavigate } from 'react-router-dom';

function About() {

    const navigate = useNavigate();

    const handleAboutClick = async (e) => {
        e.preventDefault();
        navigate('/About');
    }

    const handleHomeClick = async (e) => {
        e.preventDefault();
        navigate('/');
    }

    const handleInternshipClick = async (e) => {
        e.preventDefault();
        navigate('/Internship');
    }

  useEffect(() => {
    // Code to run on component mount or update
  }, []); // Empty dependency array means this effect will run only once after initial render

  return (
    <div className="App">
<section className="header">
  <a href="index.html" className="logo2">
    <img src={logo} alt="YoungDev Interns" className="logo"/> YoungDev Interns
  </a>
  <nav className="navbar">
    <a  onClick={handleHomeClick}>Home</a>
    <a onClick ={handleAboutClick}>About</a>
    <a onClick={handleInternshipClick}>Internships</a>
  </nav>
  <div id="menu-btn" className="fas fa-bars"></div>
</section>

      <div className="heading">
        <h1>About Us</h1>
      </div>

      <section className="about">
        <div className="image">
          <img src={im} alt="" />
        </div>
        <div className="content">
          <h3>Why Choose Us?</h3>
          <p>At YoungDev Interns, we're committed to fostering talent and offering exceptional learning experiences. We believe in breaking down barriers to entry by providing free, remote internship opportunities that empower aspiring developers to kickstart their careers.</p>
          <p>We offer a unique month-long internship program, allowing you to gain practical experience from the comfort of your own workspace. Each month, interns will tackle 3 to 4 real-world tasks, giving you hands-on exposure to industry-relevant projects. Upon successful completion of the internship, we provide a certificate to recognize your dedication and skills gained during your time with us.</p>
        </div>
      </section>

      <section className="footer">
        <div className="boxf-container">
          <div className="boxf">
            <h3>Quick Links</h3>
            <a onClick={handleHomeClick}> <i className="fas fa-angle-right"></i> Home</a>
            <a onClick={handleAboutClick}> <i className="fas fa-angle-right"></i> About</a>
            <a onClick={handleInternshipClick}> <i className="fas fa-angle-right"></i> Internships</a>
          </div>
          <div className="boxf">
            <h3>Contact Info</h3>
            <a href="#"> <i className="fas fa-envelope"></i> youngdevinterns60@gmail.com </a>
            <a href="#"> <i className="fas fa-map"></i> Pakistan - Islamabad </a>
          </div>
          <div className="boxf">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com/profile.php?id=61552048663871&__cft__[0]=AZWgvYtjBMeJOXqyWw5T4YrAojDHFKMwtpgycutmBiazqJ6mCcV_-G8hIqOLWgILLyPiL7FrTeeMQPBS1XdG4eosYbpXo-gueN4La2qK0xyh94oBgqMvZ_R89_MSF6qx-LiReDKck7DmVlL1lNAvkK-iknMZyVXoQapiI7b0Vq6HOqkTsx23RQvy-qql66lPi8gkKKX14OeKyUlXJzyqO1En&__tn__=-]C%2CP-R"> <i className="fab fa-facebook-f"></i> Facebook </a>
            <a href="https://www.linkedin.com/company/youngdev-intern/?miniCompanyUrn=urn%3Ali%3Afs_miniCompany%3A100750742&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin%3BoTe6IUoQTHKqQA8ImNZuLg%3D%3D"> <i className="fab fa-linkedin"></i> LinkedIn </a>
          </div>
        </div>
        <div className="credit"> Created by <span>YoungDev Interns</span> | All rights reserved! </div>
      </section>
    </div>
  );
}

export default About;
