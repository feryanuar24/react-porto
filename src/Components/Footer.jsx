import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <footer id="footer" className="footer">
      <div className="up-container">
        <a href="#home">
          <FaAngleUp className="up" />
        </a>
      </div>
      <div className="logos">
        <a href={data.social && data.social.facebook}>
          <FaFacebook className="logo" />
        </a>
        <a href={data.social && data.social.twitter}>
          <FaTwitter className="logo" />
        </a>
        <a href={data.social && data.social.instagram}>
          <FaInstagram className="logo" />
        </a>
        <a href={data.social && data.social.linkedin}>
          <FaLinkedin className="logo" />
        </a>
        <a href={data.social && data.social.github}>
          <FaGithub className="logo" />
        </a>
      </div>
      <div className="by">
        <p>&copy; 2024 | Built by Fery Anuar</p>
      </div>
    </footer>
  );
};

export default Footer;
