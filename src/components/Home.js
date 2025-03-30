import React from "react";
import My_photo from "../assets/My_photo.jpg";
import Timeline from "./Timeline";
import Background_img from "../assets/Background_2.png";
import "./Home.css";
import { projects } from "./contents";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Hero Section */}
      <div
        id="container_home"
        className="vh-90 w-full align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${Background_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          padding: "20px 15px",
          height: "900px",
          maxWidth: "100%",
          minWidth: "100%",
          margin: 0,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Photo - Hidden on small screens */}
            <div className="col-12 col-md-6 order-md-1 order-2 text-center d-none d-md-block">
              <img
                src={My_photo}
                className="img-thumbnail"
                alt="Vineet Sharma"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "300px",
                  objectFit: "cover",
                  margin: "20px auto",
                }}
              />
            </div>
            <div className="col-12 col-md-6 order-md-2 order-1">
              <div
                className="card"
                style={{
                  backgroundColor: "rgba(128, 128, 128, 0.8)",
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  padding: "0",
                  marginTop: "250px",
                  margin: "20px auto",
                }}
              >
                <div
                  className="card-body my-5"
                  style={{
                    marginTop: "200px",
                  }}
                >
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
                  <a href="/MyResume.pdf" download="Vineet_Sharma_Resume.pdf">
                    <button
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "black",
                        color: "white",
                        fontFamily: "sans-serif",
                        padding: "10px 20px",
                        marginTop: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Background Section */}
      <div
        id="education"
        className="bg-gray py-5"
        style={{
          margin: "10px",
          borderRadius: "40px",
          padding: "20px",
          border: "5px solid black",
        }}
      >
        <div className="container">
          <h2 className="text-center mb-4">Academic Background</h2>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <div className="card border-primary h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Bachelor of Technology in Computer Science
                  </h5>
                  <p className="card-text">
                    <strong>Institution:</strong> Government Engineering
                    College, Ajmer
                  </p>
                  <p className="card-text">
                    <strong>Year:</strong> 2022-2026
                  </p>
                  <p>
                    <strong>Current Status:</strong> Ongoing
                  </p>
                  <p>
                    <strong>CGPA:</strong> 8.90
                  </p>
                  <p className="card-text">
                    <strong>Key Courses:</strong> Web Development, Data Science,
                    Machine Learning
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-3">
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
                    <strong>Address:</strong> Subhash Nagar, Ajmer
                  </p>
                  <p className="card-text">
                    <strong>Key Topics:</strong> Mathematics, Science, English
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mx-auto mb-3">
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
                    <strong>Address:</strong> Civil Road, Ajmer
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

      {/* New Area of Expertise Section */}
      <div
        id="expertise"
        className="py-5"
        style={{
          margin: "10px",
          borderRadius: "40px",
          padding: "20px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(90deg, #4f46e5, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.5px",
            }}
          >
            Areas of Expertise
          </h2>

          <div className="row g-4">
            {/* Machine Learning */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="skill-card h-100"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderLeft: "4px solid #4f46e5",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i className="fas fa-brain text-white"></i>
                  </div>
                  <h3 style={{ margin: 0 }}>Machine Learning</h3>
                </div>
                <p className="text-muted mb-3">
                  Predictive modeling, feature engineering, and model deployment
                </p>
                <div className="skill-level">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Experience Level</span>
                    <span>Advanced</span>
                  </div>
                  <div
                    className="progress-bar-container"
                    style={{
                      height: "8px",
                      background: "#e9ecef",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "85%",
                        height: "100%",
                        background: "linear-gradient(90deg, #4f46e5, #8b5cf6)",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep Learning */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="skill-card h-100"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderLeft: "4px solid #10b981",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i className="fas fa-network-wired text-white"></i>
                  </div>
                  <h3 style={{ margin: 0 }}>Deep Learning</h3>
                </div>
                <p className="text-muted mb-3">
                  Neural networks, computer vision, and NLP applications
                </p>
                <div className="skill-level">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Experience Level</span>
                    <span>Intermediate</span>
                  </div>
                  <div
                    className="progress-bar-container"
                    style={{
                      height: "8px",
                      background: "#e9ecef",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "70%",
                        height: "100%",
                        background: "linear-gradient(90deg, #10b981, #34d399)",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Programming */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="skill-card h-100"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderLeft: "4px solid #f59e0b",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i className="fas fa-code text-white"></i>
                  </div>
                  <h3 style={{ margin: 0 }}>Competitive Programming</h3>
                </div>
                <p className="text-muted mb-3">
                  Problem solving, algorithms, and data structures expertise
                </p>
                <div className="skill-level">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Experience Level</span>
                    <span>Advanced</span>
                  </div>
                  <div
                    className="progress-bar-container"
                    style={{
                      height: "8px",
                      background: "#e9ecef",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        height: "100%",
                        background: "linear-gradient(90deg, #f59e0b, #fcd34d)",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="skill-card h-100"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderLeft: "4px solid #3b82f6",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i className="fas fa-laptop-code text-white"></i>
                  </div>
                  <h3 style={{ margin: 0 }}>Web Development</h3>
                </div>
                <p className="text-muted mb-3">
                  Full-stack development with modern frameworks and tools
                </p>
                <div className="skill-level">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Experience Level</span>
                    <span>Proficient</span>
                  </div>
                  <div
                    className="progress-bar-container"
                    style={{
                      height: "8px",
                      background: "#e9ecef",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "75%",
                        height: "100%",
                        background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Science */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="skill-card h-100"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderLeft: "4px solid #8b5cf6",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #c4b5fd 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i className="fas fa-chart-line text-white"></i>
                  </div>
                  <h3 style={{ margin: 0 }}>Data Science</h3>
                </div>
                <p className="text-muted mb-3">
                  Data analysis, visualization, and statistical modeling
                </p>
                <div className="skill-level">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Experience Level</span>
                    <span>Proficient</span>
                  </div>
                  <div
                    className="progress-bar-container"
                    style={{
                      height: "8px",
                      background: "#e9ecef",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "70%",
                        height: "100%",
                        background: "linear-gradient(90deg, #8b5cf6, #c4b5fd)",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="skill-card h-100"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderLeft: "4px solid #ec4899",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(135deg, #ec4899 0%, #f9a8d4 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "1rem",
                    }}
                  >
                    <i className="fas fa-server text-white"></i>
                  </div>
                  <h3 style={{ margin: 0 }}>Backend Development</h3>
                </div>
                <p className="text-muted mb-3">
                  API design, database architecture, and system optimization
                </p>
                <div className="skill-level">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Experience Level</span>
                    <span>Intermediate</span>
                  </div>
                  <div
                    className="progress-bar-container"
                    style={{
                      height: "8px",
                      background: "#e9ecef",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "65%",
                        height: "100%",
                        background: "linear-gradient(90deg, #ec4899, #f9a8d4)",
                        borderRadius: "4px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div
        id="projects"
        className="container-fluid my-5 py-5"
        style={{ background: "#f8f9fa" }}
      >
        <div className="container">

          <div
            id="projectCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* Indicators */}
            {/* <div className="carousel-indicators">
              {projects && Object.values(projects).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#projectCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div> */}

            {/* Carousel Items */}
            {/* Projects Section */}
            {/* Projects Section */}
            <div
              id="projects"
              className="container-fluid my-5 py-5"
              style={{ background: "#f8f9fa" }}
            >
              <div className="container">
                <h2
                  className="text-center mb-5"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    background: "linear-gradient(90deg, #4f46e5, #10b981)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Featured Projects
                </h2>

                <div
                  id="projectCarousel"
                  className="carousel slide"
                  data-bs-ride="false"
                >
                  {/* Indicators */}
                  <div className="carousel-indicators">
                    {Object.values(projects).map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#projectCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>

                  {/* Carousel Items */}
                  <div
                    className="carousel-inner rounded-4"
                    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  >
                    {Object.values(projects).map((item, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div className="row g-0">
                          {/* Image Column - Full width on mobile, half on desktop */}
                          <div className="col-12 col-md-6">
                            <img
                              src={item.image_link}
                              className="d-block w-100"
                              alt={item.project_name}
                              style={{
                                height: "300px",
                                objectFit: "cover",
                                borderTopLeftRadius: "16px",
                                borderTopRightRadius: "16px",
                                borderBottomLeftRadius: "0",
                                borderBottomRightRadius: "0",
                              }}
                            />
                          </div>

                          {/* Content Column - Full width on mobile, half on desktop */}
                          <div
                            className="col-12 col-md-6 d-flex align-items-center bg-white"
                            style={{
                              padding: "1.5rem",
                              borderBottomLeftRadius: "16px",
                              borderBottomRightRadius: "16px",
                            }}
                          >
                            <div className="p-3 w-100">
                              <h3
                                className="mb-3"
                                style={{ fontWeight: "700" }}
                              >
                                {item.project_name}
                              </h3>
                              <p className="mb-4">{item.project_desc}</p>
                              <div className="d-flex flex-wrap gap-2">
                                <a
                                  href={item.link}
                                  className="btn btn-primary px-3 py-2"
                                  style={{
                                    borderRadius: "8px",
                                    fontWeight: "600",
                                    minWidth: "140px",
                                  }}
                                >
                                  View on GitHub
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-outline-primary px-3 py-2"
                                  style={{
                                    borderRadius: "8px",
                                    fontWeight: "600",
                                    minWidth: "140px",
                                  }}
                                >
                                  Live Demo
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Controls - Only show on desktop */}
                  <button
                    className="carousel-control-prev d-none d-md-flex"
                    type="button"
                    data-bs-target="#projectCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark rounded-circle p-3"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next d-none d-md-flex"
                    type="button"
                    data-bs-target="#projectCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark rounded-circle p-3"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* Timeline Section */}
      <div className="container text-center my-5">
        <h1
          style={{
            textShadow: "2px 3px black",
            color: "transparent",
            opacity: "40%",
          }}
        >
          TimeLine of My Work
        </h1>
        <div
          style={{
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Timeline />
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="container-fluid bg-dark text-light py-5"
        style={{
          borderRadius: "10px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 style={{ fontFamily: "initial" }}>
                Contact <br /> Information
              </h2>
              <p>Contact - +916378761180</p>
              <p>Email - mastergenos228@gmail.com</p>
              <p>Phone Number - +916378761180</p>
              <p>Address - Subhash Nagar Ajmer , Rajashthan </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
