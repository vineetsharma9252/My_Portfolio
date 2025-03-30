import React, { useState } from "react";
import { Link } from "react-router-dom";
import DSlogo from "../assets/DSlogo.png";
import "../assets/NavBar.css";
import Github from "../assets/github_img.png";
import LinkedIn from "../assets/Linkedin_img2.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "1",
        borderRadius: "10px",
        height: "70px"
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={DSlogo}
            style={{ height: "30px" }}
            alt="data science logo"
          />
        </a>

        {/* Mobile menu button - only visible on mobile */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            padding: "5px 10px",
            marginRight: "10px"
          }}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation container */}
        <div 
          className={`nav-container ${isOpen ? "mobile-open" : ""}`}
          style={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center"
          }}
        >
          {/* Left navigation links */}
          <div className="nav-links">
            <a className="nav-a active" href="/" style={{ marginLeft: "40px" }}>
              Home
            </a>
            <a className="nav-a" href="/Blog" style={{ marginLeft: "40px" }}>
              Blog
            </a>
            <a className="nav-a" href="/about-me" style={{ marginLeft: "40px" }}>
              AboutMe
            </a>
            <a className="nav-a" href="/testimonials" style={{ marginLeft: "40px" }}>
              Testimonial
            </a>
          </div>

          {/* Right social icons - unchanged */}
          <div
            className="github-img"
            style={{
              marginLeft: "auto",
              marginRight: "50px",
              borderRadius: "40px",
              padding: "3px 3px",
            }}
          >
            <a href="https://github.com/vineetsharma9252">
              <img
                src={Github}
                alt="GitHub"
                className="Link_img"
                style={{
                  height: "inherit",
                  width: "30px",
                  marginRight: "50px",
                }}
              />
            </a>
            <a href="https://www.linkedin.com/in/vineet-sharma-b6b285201/">
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="Link_img"
                style={{
                  height: "inherit",
                  width: "30px",
                }}
              />
            </a>
          </div>
        </div>

        {/* Mobile styles */}
        <style>{`
          @media (max-width: 768px) {
            .mobile-menu-button {
              display: block !important;
              margin-left: auto;
            }
            
            .nav-links {
              display: none;
              flex-direction: column;
              width: 100%;
              position: absolute;
              top: 70px;
              left: 0;
              background: linear-gradient(rgb(255, 255, 255), rgb(226, 227, 242));
              padding: 15px 20px;
              z-index: 1000;
              border: 2px solid #d1d1d1;
              border-radius: 0 0 10px 10px;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              align-items: flex-start;
            }
            
            .nav-links a {
              margin: 12px 0 !important;
              display: block;
              padding: 8px 15px;
              width: 100%;
              text-align: left;
              margin-left: 0 !important;
            }
            
            .mobile-open .nav-links {
              display: flex;
            }
            
            .github-img {
              margin-right: 20px !important;
            }
          }
        `}</style>
      </div>
    </nav>
  );
}