import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const events = [
    { year: "2022-Nov", description: "Started my journey as a developer." },
    {
      year: "2023-Aug",
      description: "Created my first OCR based Project(Attedance2Excel).",
    },
    {
      year: "2023-Sep",
      description: "Participated in the Smart India Hackathon.",
    },
    { year: "2024-June", description: "ML intern at Diginique Techlabs." },
    {
      year: "2024-Sep",
      description: "Participated in SIH 2024 and built WasteManagement System",
    },
    {
      year: "2025-Jan",
      description:
        "Contributor of Rajasthan state Collectory projects - ADA-Project website development ",
    },
    {
      year: "2025-March",
      description: "Winner of CODEWAR - Placed 2nd ",
    },
  ];

  return (
    <div className="zigzag-timeline-container">
      <div className="zigzag-timeline-line">
        {events.map((event, index) => (
          <div
            key={index}
            className={`zigzag-timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="zigzag-timeline-content">
              <div className="zigzag-timeline-year">{event.year}</div>
              <div className="zigzag-timeline-description">
                {event.description}
                <a href="/blog"> Watch out The Blog for more</a>
              </div>
            </div>
            <div className="zigzag-timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
