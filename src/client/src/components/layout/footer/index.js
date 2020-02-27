import React from "react";
import { FaHeart, FaRegCopyright } from "react-icons/fa";

import "./footer.scss";

function index() {
  return (
    <footer>
      <div className="container">
        <p>
          {new Date().getFullYear()} <FaRegCopyright className="icon" /> Feito
          com <FaHeart className="icon" /> | Desenvolvido por
          <a
            href="https://thiagotec.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thiago Moura
          </a>
        </p>
      </div>
    </footer>
  );
}

export default index;
