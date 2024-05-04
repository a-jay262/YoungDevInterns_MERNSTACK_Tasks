import React, {useEffect} from "react";
import "../App.css"; // Import your custom CSS file
import logo from "../images/logo1.jpg";
import i1 from "../images/multi.png";
import i2 from "../images/leader.png";
import i3 from "../images/learner.png";
import i4 from "../images/developer.png";
import i5 from "../images/programmer.png";
import i6 from "../images/IT.png";
import ab from "../images/ab.jpg";
import im1 from "../images/im-1.jpg";
import im2 from "../images/im-2.jpg";
import im3 from "../images/im-3.jpg";
import { useNavigate } from 'react-router-dom';


function Header() {
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
    

    return (
        <section className="header">
        <a href="index.html" className="logo2">
          <img src={logo} alt="YoungDev Interns" className="logo"/> YoungDev Interns
        </a>
        <nav className="navbar">
          <a  onClick={handleHomeClick}>Home</a>
          <a  onClick={handleAboutClick}>About</a>
          <a onClick={handleInternshipClick}>Internships</a>
        </nav>
        <div id="menu-btn" className="fas fa-bars"></div>
      </section>
    );
  }
  
  function HomeSlider() {
    return (
      <section className="index" style={{ marginBottom: 0 }}>
        <div className="background" style={{ backgroundImage: `url(${im1})` }}>
          <div className="content2">
            <span>Explore Remote Internships</span>
            <h3>Empowering Tomorrow's Developers Today</h3>
            <a href="internships.html" className="btn">Browse Internships</a>
          </div>
        </div>
      </section>
    );
  }
  
  function Services() {
    return (
      <section className="services" style={{ marginTop: 0 }}>
        <h1 className="heading-title"> We are Hiring </h1>
        <div className="box-container">
          <div className="box">
            <img src={i1} alt="Multitalented" />
            <h3>Multitalented</h3>
          </div>
          <div className="box">
            <img src={i2} alt="Leaders" />
            <h3>Leaders</h3>
          </div>
          <div className="box">
            <img src={i3} alt="Learners" />
            <h3>Learners</h3>
          </div>
          <div className="box">
            <img src={i4} alt="Developers" />
            <h3>Developers</h3>
          </div>
          <div className="box">
            <img src={i5} alt="Programmers" />
            <h3>Programmers</h3>
          </div>
          <div className="box">
            <img src={i6} alt="IT Experts" />
            <h3>IT Experts</h3>
          </div>
        </div>
      </section>
    );
  }
  
  function AboutSection() {
    const navigate = useNavigate();

    const handleAboutClick = async (e) => {
        e.preventDefault();
        navigate('/About');
    }

    return (
      <section className="index-about">
        <div className="image">
          <img src={ab} alt="About Us Image" />
        </div>
        <div className="content">
          <h3>About Us</h3>
          <p>Welcome to YoungDev Interns – Your Gateway to Skill Development!</p>
          <a className="btn" onClick={handleAboutClick}>
            Read More
          </a>
        </div>
      </section>
    );
  }
  
  function Packages() {
    const navigate = useNavigate();

    const handleInternshipClick = async (e) => {
        e.preventDefault();
        navigate('/Internship');
    }
    return (
      <section className="index-packages">
        <h1 className="heading-title">Our Internships</h1>
        <div className="box-container">
          <section class="index-packages">
            <div class="box-container">
              <div class="box2">
                <div class="image">
                  <img src={im1} alt="Web Development" />
                </div>
                <div class="content">
                  <h3>Web Development</h3>
                  <p>
                    All the tasks will be assigned on Backend and fronted of the
                    website
                  </p>
                  <a
                    href="https://forms.gle/STc1h9p2eJ1pSXPr5"
                    class="btn"
                    target="_blank"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              <div class="box2">
                <div class="image">
                  <img src={im2} alt="Android Development" />
                </div>
                <div class="content">
                  <h3>Android Development</h3>
                  <p>
                    The tasks will be on Android Studio using Java/Kotlin and XML
                  </p>
                  <a
                    href="https://forms.gle/STc1h9p2eJ1pSXPr5"
                    class="btn"
                    target="_blank"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
              <div class="box2">
                <div class="image">
                  <img src={im3} alt="Python Development" />
                </div>
                <div class="content">
                  <h3>Python Development</h3>
                  <p>Basic tasks of Python on different modules</p>
                  <a
                    href="https://forms.gle/STc1h9p2eJ1pSXPr5"
                    class="btn"
                    target="_blank"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
            <div class="load-more">
              {" "}
              <a onClick={handleInternshipClick} class="btn">
                Browse More
              </a>{" "}
            </div>
          </section>
        </div>
      </section>
    );
  }
  
  function Offer() {
    return (
      <section className="index-offer">
        <div className="content">
          <h3>Free</h3>
          <p>We are Freely Assigning tasks and will guide every student</p>
          <a href="https://forms.gle/STc1h9p2eJ1pSXPr5" className="btn">
            Apply Now
          </a>
        </div>
      </section>
    );
  }
  
  function Footer() {
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
    return (
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
    );
  }
  
  function Home() {
    return (
      <div className="App">
        <Header />
        <HomeSlider />
        <Services />
        <AboutSection />
        <Packages />
        <Offer />
        <Footer />
      </div>
    );
  }
  
  export default Home;
  