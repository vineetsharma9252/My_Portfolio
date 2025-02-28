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
              <small>Last updated 3 mins ago</small>
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
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt="Blog Post Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.desc}</p>
                      <a href="path/to/full-post1" className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                    <div className="card-footer text-muted">
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
                    <a href="/contact" className="text-light">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="text-light">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Social Media Links --> */}
              <div className="col-md-4 mb-3">
                <h5>Follow Me</h5>
                <a
                  href="https://github.com/your-profile"
                  className="text-light me-3"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/your-profile"
                  className="text-light me-3"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  className="text-light"
                >
                  <i className="fab fa-twitter"></i> Twitter
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
