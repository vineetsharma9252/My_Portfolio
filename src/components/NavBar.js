import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { a, Link } from "react-router-dom";
import DSlogo from "../assets/DSlogo.png";
import "../assets/NavBar.css";
import Github from "../assets/github_img.png";
import LinkedIn from "../assets/Linkedin_img2.png";
export default function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          width: "100%",
          position: "fixed",
          zIndex: "1",
          borderRadius: "10px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={DSlogo}
              style={{ height: "20px" }}
              alt="data science logo "
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <a className="nav-a active " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-a" href="/Blog">
                  Blog
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-a" href="/about-me">
                  AboutMe
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-a" href="/testimonials">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
          <div
            className="github-img"
            style={{
              marginRight: "50px",
              borderRadius: "40px",
              padding: "3px 3px",
            }}
          >
            <a href="https://github.com/vineetsharma9252">
              <img
                src={Github}
                alt=""
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
                alt=""
                className="Link_img"
                style={{
                  height: "inherit",
                  width: "30px",
                }}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
