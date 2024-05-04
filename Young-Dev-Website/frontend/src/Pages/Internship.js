import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../images/logo1.jpg";
import im1 from "../images/im-1.jpg";
import im2 from "../images/im-2.jpg";
import im3 from "../images/im-3.jpg";
import im4 from "../images/im-4.jpg";
import im5 from "../images/im-5.jpg";
import im6 from "../images/im-6.jpg";
import im7 from "../images/im-7.jpg";
import im8 from "../images/im-8.jpg";
import im9 from "../images/im-9.jpg";
import im10 from "../images/im-10.jpg";
import im11 from "../images/im-11.jpg";
import im12 from "../images/im-12.jpg";
import img14 from "../images/img-14.jpg";
import im16 from "../images/im-16.jpg";
import img18 from "../images/img-18.jpg";
import "./Internship.css";

function InternshipBox(props) {
  return (
    <div className="boxi">
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.applyLink} className="btn" target="_blank">Apply Now</a>
      </div>
    </div>
  );
}

function Internship() {
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

    const internships = [
        {
          title: "Full-Stack Web",
          description: "All the tasks will be assigned on Backend and frontend of the website",
          image: im1,
          applyLink: "https://docs.google.com/forms/d/1yznUkpNyLxZ6RjLIBkakjsKdfejv9OsMuIo_ZaGaYHo/prefill"
        },
        {
          title: "Frontend Development",
          description: "All the tasks will be assigned on only frontend of a website",
          image: im2,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Backend Development",
          description: "All the tasks will be assigned on only backend of a website",
          image: im3,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Android Development",
          description: "The tasks will be on Android studio using Java/Kotlin and XML",
          image: im4,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Python Development",
          description: "Basic tasks of Python on different modules",
          image: im5,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Flutter Development",
          description: "Flutter tasks will be assigned like cross-platform applications",
          image: im6,
          applyLink: "https://example.com/apply"
        },
        {
          title: "C# .Net Development",
          description: "C# .Net 2 simple and 1 complex task will be assigned",
          image: im7,
          applyLink: "https://example.com/apply"
        },
        {
          title: "ASP .NET Development",
          description: "Simple and Complex tasks will be there using ASP.Net",
          image: im8,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Django (Python)",
          description: "3 tasks will be assigned for a month using Django (Python)",
          image: im9,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Graphic Design",
          description: "All the tasks will be assigned to be done on AI and also on Figma",
          image: im10,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Java Desktop",
          description: "The tasks will be assigned for Java effects",
          image: im11,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Machine Learning",
          description: "Machine Learning complex tasks will be assigned",
          image: im12,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Wordpress",
          description: "Simple and Difficult Wordpress tasks will be assigned here",
          image: img14,
          applyLink: "https://example.com/apply"
        },
        {
          title: "C++",
          description: "C++ Complex and simple tasks will be assigned",
          image: im16,
          applyLink: "https://example.com/apply"
        },
        {
          title: "Figma Design",
          description: "Figma App design and Web Design tasks will be assigned here",
          image: img18,
          applyLink: "https://example.com/apply"
        },
        // Add more internship objects here
      ];
    // Add more internship objects here

  return (
    <div>
      <section className="header">
  <a href="index.html" className="logo2">
    <img src={logo} alt="YoungDev Interns" className="logo"/> YoungDev Interns
  </a>
  <nav className="navbar">
    <a  onClick={handleHomeClick}>Home</a>
    <a onClick ={handleAboutClick}>About</a>
    <a >Internships</a>
  </nav>
  <div id="menu-btn" className="fas fa-bars"></div>
</section>

      <div className="heading" style={{backgroundImage: "url(images/header-bg-2.png)"}}>
        <h1>Internships</h1>
      </div>

      <section className="packages">
        <h1 className="heading-title">Top Internships</h1>
        <div className="box-container">
          {internships.map((internship, index) => (
            <InternshipBox
              key={index}
              title={internship.title}
              description={internship.description}
              image={internship.image}
              applyLink={internship.applyLink}
            />
          ))}
        </div>
        <div className="load-more"><span className="btn">Browse More</span></div>
      </section>

      <section className="footer">
      <div class="boxf-container">
      <div class="boxf">
         <h3>quick links</h3>
         <a onClick={handleHomeClick}> <i class="fas fa-angle-right"></i> home</a>
         <a onClick={handleAboutClick}> <i class="fas fa-angle-right"></i> about</a>
         <a onClick={handleInternshipClick}> <i class="fas fa-angle-right"></i> Internships</a>
      </div>
      <div class="boxf">
         <h3>contact info</h3>
         <a href="#"> <i class="fas fa-envelope"></i> youngdevinterns60@gmail.com </a>
         <a href="#"> <i class="fas fa-map"></i> Pakistan - Islamabad </a>
      </div>
      <div class="boxf">
         <h3>follow us</h3>
         <a href="https://www.facebook.com/profile.php?id=61552048663871&__cft__[0]=AZWgvYtjBMeJOXqyWw5T4YrAojDHFKMwtpgycutmBiazqJ6mCcV_-G8hIqOLWgILLyPiL7FrTeeMQPBS1XdG4eosYbpXo-gueN4La2qK0xyh94oBgqMvZ_R89_MSF6qx-LiReDKck7DmVlL1lNAvkK-iknMZyVXoQapiI7b0Vq6HOqkTsx23RQvy-qql66lPi8gkKKX14OeKyUlXJzyqO1En&__tn__=-]C%2CP-R"> <i class="fab fa-facebook-f"></i> facebook </a>
         <a href="https://www.linkedin.com/company/youngdev-intern/?miniCompanyUrn=urn%3Ali%3Afs_miniCompany%3A100750742&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin%3BoTe6IUoQTHKqQA8ImNZuLg%3D%3D"> <i class="fab fa-linkedin"></i> linkedin </a>
      </div>
      </div>
      </section>
    </div>
  );
}

export default Internship;
