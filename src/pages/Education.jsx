import React from "react";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      course: "10th (High School)",
      institute: "Govt. Higher Secondary School Bharregaon",
      percentage: "82%",
      year: "2019",
    },
    {
      course: "12th (Higher Secondary)",
      institute: "Govt. Higher Secondary School Bharregaon",
      percentage: "88%",
      year: "2021",
    },
    {
      course: "ITI (COPA)",
      institute: "Government ITI Tedesara",
      percentage: "78%",
      year: "2022",
    },
    {
      course: "Diploma in Computer Science",
      institute: "UPUGovt. Polytechnic College",
      percentage: "80%",
      year: "2026",
    },
    {
      course: "Bachelor of Science (B.sc)",
      institute: "Hemchand Yadav University Durg",
      percentage: "52%",
      year: "2024",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h1>Education</h1>
        <p>My academic journey and qualifications.</p>

        <div className="timeline">
          {education.map((item, index) => (
            <div className="edu-card" key={index}>
              <div className="edu-icon">
                <FaGraduationCap />
              </div>

              <div className="edu-content">
                <h2>{item.course}</h2>
                <h4>{item.institute}</h4>

                <div className="edu-info">
                  <span>📊 {item.percentage}</span>
                  <span>📅 {item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;