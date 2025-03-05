import React from "react";
import My_photo from "../assets/My_photo.jpg";
import Timeline from "./Timeline";
import Background_img from "../assets/Background_2.png";
import "./Home.css";
import { projects } from "./contents";
export default function Home() {
  return (
    <>
      <div
        id="container_home vh-100 w-100"
        style={{
          display: "flex",
          backgroundImage: `url(${Background_img})`,
          backgroundSize: "cover",
          height: "500px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          className="container text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            width: "100%",
            marginLeft: "60px",
          }}
        >
          <div className="row">
            <div
              className="col-6"
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1.4em",
                width: "40%",
              }}
            >
              <img
                src={My_photo}
                className="img-thumbnail"
                alt="Vineet Sharma"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-6" style={{ color: "blue" }}>
              <div
                className="card"
                style={{
                  opacity: "100%",
                  height: "100%",
                  width: "100%",
                  marginLeft: "30%",
                  backgroundColor: "gray",
                  opacity: "80%",
                  border: "none",
                  boxShadow: "revert-layer",
                }}
              >
                <div className="card-body">
                  <h2 className="card-title">Welcome to Vineet's Tech Hub!</h2>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    “Explore the world of technology, one card at a time.”
                  </h6>
                  <p className="card-text">
                    Hello! I'm Vineet Sharma, a tech enthusiast and an eager
                    learner, currently exploring the world of programming, data
                    science, and machine learning. As a student, I enjoy working
                    on projects that apply theoretical concepts to real-world
                    problems, from coding tutorials to AI-driven applications.
                    Through this platform, I share insights from my learning
                    journey, academic experiences, and hands-on projects, hoping
                    to help fellow students and aspiring developers grow along
                    the way.
                  </p>
                  <a href="#" className="card-link">
                    Portfolio
                  </a>
                  <a href="#" className="card-link">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "gray",
          margin: "10px 10px 10px 10px",
          borderRadius: "40px",
          padding: "10px",
          border: "5px solid black",
        }}
      >
        <div
          className="container my-5"
          id="education"
          style={{ opacity: "110%" }}
        >
          <h2 className="text-center mb-4">Academic Background</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card border-primary h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Bachelor of Technology in Computer Science
                  </h5>
                  <p className="card-text">
                    <strong>Institution:</strong> Government Engineering College
                    , Ajmer
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> 2022-2026
                  </p>
                  <p>
                    <strong>Current Status</strong>:Ongoing
                  </p>
                  <p className="card-text">
                    <strong>Key Courses:</strong> Web Development , Data Sciences
                    Machine Learning
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card border-primary h-100">
                <div className="card-body">
                  <h5 className="card-title">Primary School</h5>
                  <p className="card-text">
                    <strong>Institution:</strong> SBPS School
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> 2020
                  </p>
                  <p className="card-text">
                    <strong>Address:</strong> Subhash Nagar , Ajmer
                  </p>
                  <p className="card-text">
                    <strong>Key Topics:</strong> Mathematics, Science, English
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3" style={{ marginLeft: "25%" }}>
              <div className="card border-primary h-100">
                <div className="card-body">
                  <h5 className="card-title">Secondary School</h5>
                  <p className="card-text">
                    <strong>Institution:</strong> Maharaja School
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> 2022
                  </p>
                  <p className="card-text">
                    <strong>Address:</strong> Civil Road , Ajmer
                  </p>
                  <p className="card-text">
                    <strong>Key Topics:</strong> Mathematics, Science, English
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container text-center"
        style={{ display: "flex", height: "400px", marginTop: "70px" }}
      >
        <div className="container text-center">
          <h2
            style={{
              position: "absolute",
              marginTop: "60px",
              scale: "2",
              opacity: "30%",
              textShadow: "2px 3px gray",
            }}
            className="container text-center"
          >
            Area of Expertise
          </h2>
          <div className="row g-2">
            <div className="col-6">
              <div className="p-3">
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Machine Learning
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Supervised Learning
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Unsupervised Learning
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reinforcement Learning
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Deep Learning
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Neural Networks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Convolutional Neural Networks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Recurrent Neural Networks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Full Stack Web Development
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Frontend Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Backend Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Database Management
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Competitive Programming
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Data Structures
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Algorithms
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Problem Solving
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Python
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Python Basics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Advanced Python
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Python Libraries
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3">
                <div className="btn-group">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    JavaScript
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        JavaScript Basics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Advanced JavaScript
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Frameworks
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ display: "flex" }}>
        <div className="container text-center">
          <h1>Projects</h1>
          <div className="row my-3">
            {Object.values(projects).map((item, key) => (
              <div className="col my-3" key={key}>
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    height: "100%", // Ensures all cards take equal height
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={item.image_link}
                    className="card-img-top"
                    alt="Waste Management System"
                    style={{
                      objectFit: "cover",
                      height: "200px", // Ensures all images are of equal size
                    }}
                  />
                  <div
                    className="card-body"
                    style={{
                      flexGrow: 1, // Makes body expand and balance space
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h5 className="card-title">{item.project_name} </h5>
                    <div className="card-text" style={{ flexGrow: 1 }}>
                      <h4>Description</h4>
                      <p>{item.project_desc}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "white",
                      overflow: "hidden",
                      border: "3.4px solid pink",
                    }}
                  >
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">{item.specs[1]} </li>
                      <li className="list-group-item">{item.specs[2]}</li>
                      <li className="list-group-item">{item.specs[3]}</li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <a href={item.link} className="card-link">
                      <button
                        style={{
                          borderRadius: "12px",
                          backgroundColor: "black",
                          color: "white",
                          fontFamily: "sans-serif",
                        }}
                      >
                        GitHub{" "}
                      </button>
                    </a>
                    <a href="#" className="card-link">
                      <button
                        style={{
                          borderRadius: "12px",
                          backgroundColor: "black",
                          color: "white",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Live Demo{" "}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1
        className="container text-center my-6"
        style={{
          position: "relative",
          top: "110px",
          textShadow: "2px 3px black",
          color: "transparent",
          scale: "2",
          opacity: "40%",
        }}
      >
        TimeLine of My work
      </h1>
      <div
        className="container text-center"
        style={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Timeline />
      </div>

      <div
        className="container_bottom-fluid bg-dark text-light"
        style={{
          height: "300px",
          padding: "0px 0px",
          borderRadius: "10px",
          zIndex: "2",
        }}
      >
        <div className="container ">
          <div className="row">
            <div
              className="col"
              style={{
                marginTop: "20px",
              }}
            >
              <h2
                style={{
                  fontFamily: "initial",
                }}
              >
                Contact <br /> Information{" "}
              </h2>
              <p>Contact - +916378761180</p>
              <p>Email - mastergenos228@gmail.com</p>
              <p>Phone Number - +916378761180</p>
              <p>Address - Subhash Nagar , Ajmer </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
