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
          <p>{data.contact && data.contact.address}</p>
          <p>{data.contact && data.contact.phone}</p>
          <p>{data.contact && data.contact.email}</p>
        </div>
        <div className="cv">
          <a href="https://drive.google.com/uc?export=download&id=1ZvK2XxyzuPYv0m1cJ5i70JJoEcf41eeX">
            <FaDownload /> Download Resume
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default About;
