import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Resume = () => {
  const [data, setData] = useState([]);
  const color = [
    "#ffb6c1",
    "#add8e6",
    "#e6e6fa",
    "#98fb98",
    "#ffffe0",
    "#ffdab9",
    "#c0c0c0",
  ];

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="resume" id="resume">
      <Fade direction="left">
        <div className="educations">
          <h2>
            <span>Educations</span>
          </h2>
          <div>
            {data.educations &&
              data.educations.map((education) => (
                <div>
                  <h3>{education.name}</h3>
                  <i className="edu-detail">
                    {education.detail} • {education.graduation}
                  </i>
                  <p className="edu-desc">{education.desc}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="experiences">
          <h2>
            <span>Experiences</span>
          </h2>
          <div>
            {data.experiences &&
              data.experiences.map((experience) => (
                <div>
                  <h3>{experience.name}</h3>
                  <i className="exp-detail">
                    {experience.position} • {experience.start} -{" "}
                    {experience.end}
                  </i>
                  <p className="exp-desc">{experience.desc}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="skills">
          <h2>
            <span>Skills</span>
          </h2>
          <div className="name-bar">
            {data.skills &&
              data.skills.map((skill, index) => (
                <div>
                  <p className={"skill-name"}>{skill.name}</p>
                  <div className="bar">
                    <div
                      style={{
                        backgroundColor: `${color[index]}`,
                        width: `${skill.progress}`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Resume;
