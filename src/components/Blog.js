import React from "react";
import { blog_post, Background_1 } from "./contents";

function Blog() {
  return (
    <>
      <div>
        <div
          className="card_blog text-bg-dark text"
          style={{
            height: "100px",
            display: "flex",
            zIndex: "-1",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            top: "60px",
          }}
        >
          <img src={Background_1} className="card-img" alt="..." />
          <div
            className="card-img-overlay"
            style={{
              marginLeft: "40px",
              marginTop: "40px",
              borderBottomRightRadius: "20px",
            }}
          >
            <h2 className="card-title">Welcome to Vineet's Blog!</h2>
            <p className="card-text">
              Hello! I'm Vineet Sharma, a tech enthusiast and lifelong learner
              with a passion for programming, data science, machine learning,
              and software development. Here, I share insights from my
              experiences, projects, and studies, covering everything from
              coding tutorials to machine learning applications and software
              hacks. Whether you’re a beginner or a seasoned developer, I aim to
              provide practical knowledge and fresh perspectives that help you
              in your tech journey.
            </p>
            <p className="card-text">
              <small>last updated : 28 Feb 2025</small>
            </p>
          </div>
        </div>
        {/* Blog post  */}
        <div
          className="container-fluid"
          style={{
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        ></div>
        <div
          className="container-fluid"
          style={{
            height: "inherit",
          }}
        >
          <div className="container my-4">
            <h1
              className="text-center mb-4"
              style={{ textDecoration: "underline" }}
            >
              Explore My Blog Post
            </h1>
            <div className="row">
              {/* <!-- Card 1 --> */}
              {Object.values(blog_post).map((item, index) => (
                <div
                  className="col-md-4 mb-3 d-flex align-items-stretch"
                  key={index}
                >
                  <div
                    className="card w-100"
                    style={{
                      backgroundColor: "gray",
                      border: "3px solid black",
                      display: "flex",
                      flexDirection: "column",
                      minHeight: "100%",
                    }}
                  >
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt="Blog Post Image"
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                    <div className="card-body d-flex flex-column flex-grow-1">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text flex-grow-1">{item.desc}</p>
                      <h6 style={{ color: "black" }}>{item.date}</h6>
                    </div>
                    <div className="card-footer text-muted text-center">
                      <span>Category: {item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer
          className="bg-dark text-light"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          <div
            className="container"
            style={{
              marginTop: "100px",
              position: "relative",
            }}
          >
            <div className="row">
              {/* <!-- About Section --> */}
              <div className="col-md-4 mb-3">
                <h5>About This Blog</h5>
                <p>
                  Sharing insights on data science, web development, machine
                  learning, and more. Join the journey and learn with me!
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
                      Contact Email - mastergenos228@gmail.com
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
    </>
  );
}

export default Blog;
