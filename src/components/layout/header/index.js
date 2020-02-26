import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./header.scss";

function index({ logo }) {
  return (
    <header>
      <nav className="container">
        <h1 className="logo">
          <Link to="/">{logo}</Link>
        </h1>

        <ul className="main-nav">
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <a
              href="https://github.com/thienry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thiagotechdev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/thienry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

index.defaultProps = {
  logo: "Rastreador de Despesas"
};

index.propTypes = {
  logo: PropTypes.string
};

export default index;
