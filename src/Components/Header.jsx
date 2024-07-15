import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [data, setData] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav className={scrolled === false ? "navbar-relative" : "navbar-fixed"}>
        <a
          className={clickedIndex === 0 && "yellow"}
          href="#home"
          onClick={() => handleClick(0)}
        >
          Home
        </a>
        <a
          className={clickedIndex === 1 && "yellow"}
          href="#about"
          onClick={() => handleClick(1)}
        >
          About
        </a>
        <a
          className={clickedIndex === 2 && "yellow"}
          href="#resume"
          onClick={() => handleClick(2)}
        >
          Resume
        </a>
        <a
          className={clickedIndex === 3 && "yellow"}
          href="#works"
          onClick={() => handleClick(3)}
        >
          Works
        </a>
        <a
          className={clickedIndex === 4 && "yellow"}
          href="#contact"
          onClick={() => handleClick(4)}
        >
          Contact
        </a>
      </nav>
      <Fade>
        <div className="hero">
          <h1 className="name">{data.name}</h1>
          <p className="desc">{data.desc}</p>
          <div className="btn">
            <button className="linkedin">
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
                <p>Linkedin</p>
              </a>
            </button>
            <button className="github">
              <a href={data.github} target="_blank" rel="noreferrer">
                <FaGithub />
                <p>Github</p>
              </a>
            </button>
          </div>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
