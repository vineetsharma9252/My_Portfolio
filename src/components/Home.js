import React from "react";
import My_photo from "../assets/My_photo.jpg";
import Timeline from "./Timeline";
import Background_img from "../assets/Background_2.png";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div
        id="container_home"
        style={{
          display: "flex",
          backgroundImage: Background_img,
          height: "500px",
          display: "flex",
          textAlign: "center",
        }}
      >
        <div
          className="container text-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <div className="row">
            <div
              className="col-6"
              style={{
                justifyContent: "center",
                alignItems: "center",
                // alignContent: "center",
                marginTop: "1.4em",
                width: "40%",
              }}
            >
              <img
                src={My_photo}
                className="img-thumbnail"
                alt="..."
                style={{
                  borderRadius: "60px",
                  height: "400px",
                  width: "300px",
                  backfaceVisibility: "hidden",
                  left: "40px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="col-6">
              <div
                className="card"
                style={{
                  width: "10rem",
                  opacity: "90%",
                  height: "100%",
                  width: "100%",
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
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of 1st container of intro */}
      <div class="container my-5" id="education">
        <h2 class="text-center mb-4">Academic Background</h2>
        <div class="row">
          {/* <!-- Degree 1 --> */}
          <div class="col-md-6 mb-3">
            <div class="card border-primary h-100">
              <div class="card-body">
                <h5 class="card-title">
                  Bachelor of Science in Computer Science
                </h5>
                <p class="card-text">
                  <strong>Institution:</strong> XYZ University
                </p>
                <p class="card-text">
                  <strong>Year:</strong> 2019 - 2023
                </p>
                <p class="card-text">
                  <strong>Achievements:</strong> Graduated with Honors, Dean’s
                  List
                </p>
                <p class="card-text">
                  <strong>Key Courses:</strong> Data Structures, Algorithms,
                  Machine Learning
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Degree 2 --> */}
          <div class="col-md-6 mb-3">
            <div class="card border-primary h-100">
              <div class="card-body">
                <h5 class="card-title">Machine Learning Certificate</h5>
                <p class="card-text">
                  <strong>Institution:</strong> Diginique
                </p>
                <p class="card-text">
                  <strong>Year:</strong> 2024
                </p>
                <p class="card-text">
                  <strong>Instructor:</strong> Bipul Shahi
                </p>
                <p class="card-text">
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
        {/* <!-- Stack the columns on mobile by making one full-width and the other half-width --> */}
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
                  <ul className="dropdown-menu">...</ul>
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
                  <ul className="dropdown-menu">...</ul>
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
                  <ul className="dropdown-menu">...</ul>
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
                    Competive Programming
                  </button>
                  <ul className="dropdown-menu">...</ul>
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
                  <ul className="dropdown-menu">...</ul>
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
                  <ul className="dropdown-menu">...</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of the Skill section  */}
      {/* Starting Projects section  */}
      <div className="container-fluid" style={{ display: "flex" }}>
        <div className="container text-center">
          <h1>Projects</h1>
          <div className="row my-3">
            <div className="col">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img src="..." className="card-img-top" alt="..." />
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
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img src="..." className="card-img-top" alt="..." />
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
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img src="..." className="card-img-top" alt="..." />
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
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
            <div className="col my-3">
              <div
                className="card bg-dark text-light"
                style={{ width: "18rem" }}
              >
                <img src="..." className="card-img-top" alt="..." />
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
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TimeLine of work  section */}
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
      {/* Contact Information  */}
      <div
        className="container_bottom-fluid bg-dark text-light"
        style={{
          height: "300px",
          padding: "0px 0px",
          borderRadius: "10px",
          zIndex: "2",
        }}
      >
        <div class="container ">
          <div class="row">
            <div
              class="col"
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
              <p>Contact - </p>
              <p>Email - </p>
              <p>Phone Number - </p>
              <p>Address - </p>
            </div>
            <div
              class="col"
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
              <div class="container text-center">
                <div class="row row-cols-2">
                  <div class="col my-3">Column</div>
                  <div class="col my-3">Column</div>
                  <div class="col my-3">Column</div>
                  <div class="col my-3">Column</div>
                </div>
              </div>
              <div class="mb-3 mx-1">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  style={{
                    display: "flex",
                    left: "10px",
                    fontFamily: "serif",
                  }}
                >
                  Message
                </label>
                <textarea
                  class="form-control"
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
