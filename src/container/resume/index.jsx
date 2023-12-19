import React from "react";
import PageHeaderCotent from "../../components/pageHeaderContent";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import { MdWork } from "react-icons/md";

import { data } from "./utlisr.js";

const resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderCotent headerText="My Resume " />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-clolor)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "floralwhite",
                  border: "1.5 solid #a70f0f",
                }}
                date="2020- Presend"
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "floralwhite",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>

          <div className="timeline">
            <div className="timeline__education__header-text">
              <h3>education</h3>
              <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-clolor)"
          >
              {data.education.map((item,i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__education__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "floralwhite",
                    border: "1.5 solid var(--yellow-theme-main-color)",
                  }}
                  date=""
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818",
                    color: "floralwhite",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-title-">
                      {item.title}
                    </h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default resume;
