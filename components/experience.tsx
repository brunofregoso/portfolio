"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { items } from "@/lib/data";

export default function Experience() {
  return (
    <section className="mt-[28.25rem]" id="experience">
      <div>
        <VerticalTimeline>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              contentStyle={{ background: 'rgb(22, 78, 99)', color: '#fff', boxShadow: "none"}}
              
              date={item.date}
              visible={true}
              >
                <h1>{item.title}</h1>
                <h3>{item.subtitle}</h3>
                <p>{item.desc}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
