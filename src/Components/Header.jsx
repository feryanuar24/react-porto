import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <header>
      <ParticlesBg type="circle" bg={true} />
      <Fade>
        <nav className="navbar">
          <div>Home</div>
          <div>About</div>
          <div>Resume</div>
          <div>Works</div>
          <div>Contact</div>
        </nav>
        <div className="hero">
          <h1 className="name">{data.name}</h1>
          <p className="desc">{data.desc}</p>
          <div className="btn">
            <button className="linkedin">
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
                Linkedin
              </a>
            </button>
            <button className="github">
              <a href={data.github} target="_blank" rel="noreferrer">
                <FaGithub />
                Github
              </a>
            </button>
          </div>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
