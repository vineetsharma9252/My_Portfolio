import React from "react";
import "./About.css";
import Background_img from "../assets/Background_2.png";
export default function About() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
            marginTop: "100px",
            border: "3px solid yellow",
            borderRadius: "30px",
            boxShadow: "4px 5px",
            fontFamily: "fantasy",
            textShadow: "0.1px 0.1px",
          }}
        >
          About Me Hi, I'm Vineet Sharma, a software developer passionate about
          data science, machine learning, and backend development. I enjoy
          crafting solutions that simplify complex problems and improve user
          experiences. I hold certifications in Machine Learning, Data Science,
          and Internet of Things from NPTEL, along with hands-on experience from
          courses like Python for Data Science. My formal education, combined
          with extensive online learning, has built a solid foundation in
          programming and data analysis. My technical stack includes Python,
          JavaScript, ReactJS, Node.js, Django, and MongoDB. I’ve developed web
          applications, automated data processing pipelines, and created machine
          learning models for data-driven projects. My recent work includes a
          Waste Management Dashboard and a Blog Application, integrating MongoDB
          for file storage. Key Projects Waste Management Dashboard: Developed a
          full-stack web application to assist users with waste sorting and
          management using machine learning and interactive dashboards. COVID-19
          Analysis Project: Analyzed COVID-19 trends using Linear Regression and
          ARIMA models, providing insights into case progression and recovery
          rates. Future Goals I’m currently exploring React Native and cloud
          technologies, with a goal to enhance my skills in mobile development
          and scalable cloud applications. I aim to contribute to impactful
          projects and eventually lead a team focused on innovative tech
          solutions. Contact Information Feel free to connect with me on
          LinkedIn or check out my work on GitHub. I’m always open to
          collaborating on new ideas and projects!
        </div>
      </div>
      <footer
        className="bg-dark text-light"
        style={{
          display: "flex",
          top: "700px",
          position: "absolute",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            padding: "20px 20px",
          }}
        >
          <div className="row">
            {/* <!-- About Section --> */}
            <div className="col-md-4 mb-3">
              <h5>About This Blog</h5>
              <p>
                Sharing insights on data science, web development, machine
                learning, and more. Join the journey and learn with us!
              </p>
            </div>

            {/* <!-- Quick Links --> */}
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-me" className="text-light">
                    About Me
                  </a>
                </li>
                <li>
                  <p href="/contact" className="text-light">
                    <br />
                    Contact Email - Mastergenos228@gmail.com
                  </p>
                </li>
              </ul>
            </div>

            {/* <!-- Social Media Links --> */}
            <div className="col-md-4 mb-3">
              <h5>Follow Me</h5>
              <a
                href="https://github.com/vineetsharma9252"
                className="text-light me-3"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vineet-sharma-b6b285201/"
                className="text-light me-3"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* <!-- Copyright and Newsletter --> */}
          <div className="text-center pt-3">
            <small>© 2024 Vineet Sharma. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
