import React from "react";

/*import {BsInfoCircleFill} from 'react-icons/bs'*/
import PageHeaderCotent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";

import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personleDitale = [
  {
    label: "Name",
    value: "Sunny Nagle",
  },
  {
    label: "Age",
    value: "29",
  },
  {
    label: "Address",
    value: "Betul madhpresh predesh (460553)",
  },
  {
    label: "Email",
    value: "sunnynage974@gmail.com",
  },
  {
    label: "Contact.No",
    value: "+91 9644134007",
  },
];

const jobSummay =
  "writte well desiged testable effcient code by using best sortware development practices, create website layout/user interface by using standard HTML/CSS practices, integrate data from various back-and services and databases, Gather and refine specificatione and requirements base on techincal needs, create and maintain sogtware documentation, Br rsponsible for maintainig expanding and scaling our site,stay plugged into emerging technologies/industry trends and appy them into operations and activities cooperate, with web designers to match visual design intent ,Skills, proven working experiencea in web programming Top-notch programming skills and in-depth knowledge of modern HTML/CSS familiarity with at least one of teh following programming languages: JS RESCT JAVASCRIPT or node.js A solid understanding of how web applications work including security session management and best development practices adequate knowledge of relational database systems object oriented programing and web application development, ";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderCotent headerText="About Me" />

      <div className="about__content">
        <div className="about__content__personlWrapper">
          <Animate
            play
            duration={2.5}
            start={{ opacity: 0 }}
            end={{ opacity: 10 }}
          >
            <h3 class="sunny"> Front End Developer </h3>
            <p class="p">{jobSummay}</p>

            <h3 class="sunny2">Personal Information</h3>
          </Animate>
          <Animate
            play
            duration={2.5}
            start={{ opacity: 0 }}
            end={{ opacity: 10 }}
          >
            <ul class="ul">
              {personleDitale.map((item, i) => (
                <li key={1}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div class="servicesWrapp">
          <Animate
            play
            duration={2.5}
            start={{ opacity: 0 }}
            end={{ opacity: 10 }}
          >
            <div class="innerContent">
             <div class="rodot1">
              <FaDev size={60} color="var(--yellow-theme-main-color)"/>
             </div>
            
             <div class="rodot3">
              <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
             </div>
             
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
