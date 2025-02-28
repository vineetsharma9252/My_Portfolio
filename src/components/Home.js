import React from "react";
import My_photo from "../assets/My_photo.jpg";
import Timeline from "./Timeline";
import Background_img from "../assets/Background_2.png";
import "./Home.css";

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
            <div className="col-6">
              <div
                className="card"
                style={{
                  opacity: "90%",
                  height: "100%",
                  width: "100%",
                  marginLeft: "30%",
                }}
              >
                <div className="card-body">
                  <h2 className="card-title">Welcome to Vineet's Tech Hub!</h2>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    “Explore the world of technology, one card at a time.”
                  </h6>
                  <p className="card-text">
                    Hello! I'm Vineet Sharma, a tech enthusiast and lifelong
                    learner with a passion for programming, data science,
                    machine learning, and software development. Here, I share
                    insights from my experiences, projects, and studies,
                    covering everything from coding tutorials to machine
                    learning applications and software hacks. Whether you’re a
                    beginner or a seasoned developer, I aim to provide practical
                    knowledge and fresh perspectives that help you in your tech
                    journey.
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
      <div className="container my-5" id="education">
        <h2 className="text-center mb-4">Academic Background</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card border-primary h-100">
              <div className="card-body">
                <h5 className="card-title">
                  Bachelor of Technology in Computer Science
                </h5>
                <p className="card-text">
                  <strong>Institution:</strong> Government Engineering College ,
                  Ajmer
                </p>
                <p className="card-text">
                  <strong>Year:</strong> 2019 - 2023
                </p>
                <p className="card-text">
                  <strong>Achievements:</strong> Graduated with Honors, Dean’s
                  List
                </p>
                <p className="card-text">
                  <strong>Key Courses:</strong> Data Structures, Algorithms,
                  Machine Learning
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card border-primary h-100">
              <div className="card-body">
                <h5 className="card-title">Machine Learning Certificate</h5>
                <p className="card-text">
                  <strong>Institution:</strong> Diginique
                </p>
                <p className="card-text">
                  <strong>Year:</strong> 2024
                </p>
                <p className="card-text">
                  <strong>Instructor:</strong> Bipul Shahi
                </p>
                <p className="card-text">
                  <strong>Key Topics:</strong> Supervised Learning, Regression,
                  Neural Networks
                </p>
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
            <div className="col">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img
                  src="..."
                  className="card-img-top"
                  alt="Waste Management System"
                />
                <div className="card-body">
                  <h5 className="card-title">Waste Management System </h5>
                  <p className="card-text">
                    <h4>Description</h4>
                    Waste Management System Web is a comprehensive platform
                    designed to facilitate efficient waste management and
                    disposal. It integrates multiple functionalities to improve
                    sanitation and encourage responsible waste disposal habits.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Integrated GPT </li>
                  <li className="list-group-item">Reporting System</li>
                  <li className="list-group-item">Live waste Analysis</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    GitHub
                  </a>
                  <a href="#" className="card-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img
                  src="..."
                  className="card-img-top"
                  alt="Covid 19 Analysis Dashboard"
                />
                <div className="card-body">
                  <h5 className="card-title">Covid 19 Analysis Dashboard</h5>
                  <p className="card-text">
                    COVID-19 Dashboard is a data-driven analytical tool designed
                    to visualize and track the impact of the pandemic across
                    different regions. It provides insights into the spread of
                    COVID-19, case trends, and predictive modeling using machine
                    learning.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Time series Analysis</li>
                  <li className="list-group-item">Predictive Modeling</li>
                  <li className="list-group-item">Data Visualization </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    GitHub
                  </a>
                  <a href="#" className="card-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img
                  src="..."
                  className="card-img-top"
                  alt="Attendance2Excel"
                />
                <div className="card-body">
                  <h5 className="card-title">Attendance2Excel </h5>
                  <p className="card-text">
                    A solid Django web service that provides College teachers to
                    put attendance sheet inside it and using pytessaract the
                    image data have been extracted and put inside any excel
                    sheet or database . and reduces the manual work .
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Django</li>
                  <li className="list-group-item">Pytessaract , OCR </li>
                  <li className="list-group-item">python excel libraries</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    GitHub
                  </a>
                  <a href="#" className="card-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col my-3">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img src="..." className="card-img-top" alt="Project 4" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    GitHub
                  </a>
                  <a href="#" className="card-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
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
            <div
              className="col"
              style={{
                background: "orange",
                height: "300px",
                overflow: "auto",
                width: "100%",
                opacity: "90%",
                borderRadius: "20px",
                zIndex: "2",
              }}
            >
              <div className="container text-center">
                <div className="row row-cols-2">
                  <div className="col my-3">Column</div>
                  <div className="col my-3">Column</div>
                  <div className="col my-3">Column</div>
                  <div className="col my-3">Column</div>
                </div>
              </div>
              <div className="mb-3 mx-1">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                  style={{
                    display: "flex",
                    left: "10px",
                    fontFamily: "serif",
                  }}
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
