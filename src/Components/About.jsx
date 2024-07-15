import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="about" id="about">
      <Fade>
        <div className="avatar-container">
          <img src={data.img} alt="Avatar Fery" />
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          <p>{data.about}</p>
          <h2>Contact Details</h2>
          <a
            href="https://maps.app.goo.gl/qNHHZBmoinwsx5Bi6"
            target="_blank"
            rel="noreferrer"
          >
            {data.contact && data.contact.address}
          </a>
          <a
            href={`https://wa.me/${data.contact && data.contact.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            {data.contact && data.contact.phone}
          </a>
          <a
            href="mailto:feryanuar24@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {data.contact && data.contact.email}
          </a>
        </div>
        <div className="cv">
          <a href="https://drive.google.com/file/d/19wJOsg_2NRIQq1GeHhWuxfAFusDJRyyS/view?usp=sharing">
            <FaDownload /> <p>Download Resume</p>
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default About;
