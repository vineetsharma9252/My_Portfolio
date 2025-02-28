import React from "react";
import "./Timeline.css";
// import { FaCircle } from "react-icons/fa"; // You can use icons from react-icons library

const Timeline = () => {
  const events = [
    { year: "2021", description: "Started my journey as a developer." },
    { year: "2022", description: "Completed major projects in data science." },
    { year: "2023", description: "Participated in the Smart India Hackathon." },
    { year: "2024", description: "Developed a waste management solution." },
    { year: "2025", description: "lsdbjsvvsiodfidsfdfvgegh" },
  ];

  return (
    <div
      className="timeline-container d-flex flex-column align-items-center"
      style={{
        height: "300px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "absolute",
        marginBottom: "100px",
        width: "80%",
      }}
    >
      <div className="timeline-line position-relative">
        {events.map((event, index) => (
          <div
            key={index}
            className="timeline-point position-absolute"
            style={{ left: `${(index / (events.length - 1)) * 100}%` }}
          >
            <div className="icon-wrapper">
              {/* <FaCircle className="timeline-icon" /> */}
            </div>
            <span className="timeline-year">{event.year}</span>
            <div className="timeline-description">
              {event.description} <a href="#">Watch out The Blog for more </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
