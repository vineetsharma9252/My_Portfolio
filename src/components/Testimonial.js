import React from "react";
import "./Testimonial.css";
import shortlisted from "../assets/Screenshot 2025-02-27 081343.png";

export default function Testimonial() {
  const items = {
    1: {
      image_link: "",
      title: "ML Internship",
      subtitle: "Head",
      description:
        "Vineet was exceptional in our Machine Learning course. His approach to problem-solving and teamwork was impressive! – Bipul Shahi, Instructor",
    },
    2: {
      image_link: shortlisted,
      title: "Web D. Internship shortlisted",
      subtitle: "Head",
      description:
        "Dear Vineet Sharma , We are pleased to inform you that you have been shortlisted for the Web Development Internship at Edunutshell .Your Qualifications and experiences stood out among many impressive candidates. – Edunutshell Team",
    },
  };

  return (
    <div>
      <div>
        {Object.values(items).map((item) => (
          <div>
            <div
              className="card"
              style={{
                position: "relative",
                display: "flex",
                top: "65px",
                marginBottom: "20px",
              }}
            >
              <img
                src={item.image_link}
                className="card-img-top rounded-circle mx-auto"
                alt="..."
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.subititle}
                </h6>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <footer
        class="bg-dark text-light"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <div
          class="container"
          style={{
            marginTop: "100px",
            position: "relative",
          }}
        >
          <div class="row">
            {/* <!-- About Section --> */}
            <div class="col-md-4 mb-3">
              <h5>About This Blog</h5>
              <p>
                Sharing insights on data science, web development, machine
                learning, and more. Join the journey and learn with us!
              </p>
            </div>
            {/* <!-- Quick Links --> */}
            <div class="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/" class="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-me" class="text-light">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="/contact" class="text-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" class="text-light">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Social Media Links --> */}
            <div class="col-md-4 mb-3">
              <h5>Follow Me</h5>
              <a href="https://github.com/your-profile" class="text-light me-3">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                class="text-light me-3"
              >
                <i class="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://twitter.com/your-profile" class="text-light">
                <i class="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>

          {/* <!-- Copyright and Newsletter --> */}
          <div class="text-center pt-3">
            <small>© 2024 Vineet Sharma. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
