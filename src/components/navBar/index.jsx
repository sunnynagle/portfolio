import React from "react";
import { FaReact } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./style.scss";

const Data = [
  {
    laber: "Home",
    to: "/",
  },
  {
    laber: "ABOUT ME",
    to: "/About",
  },
  {
    laber: "SKILLS",
    to: "/skills",
  },
  {
    laber: "RESUME",
    to: "/resume",
  },
  {
    laber: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    laber: "CONTECT",
    to: "/contect",
  },
];

const navBar = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="navBar__container">
          <Link to={"/"} className="navBar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className="navBar__container__menu">
          {Data.map((itam, key) => (
            <li key={key} class="song">
              <Link
       class="link"
                to={itam.to}
              >
                {itam.laber}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default navBar;
