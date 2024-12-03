"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { items } from "@/lib/data";
import Arrow from "@/components/Arrow";

export default function Experience() {
  return (
    <div>
      <section className="" id="experience">
      <div>
        <VerticalTimeline>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
              contentStyle={{ background: '#f9fafb', color: '#18181b', boxShadow: "none"}}
              iconStyle={{background: 'rgb(255, 255, 255)', color: '#000000', boxShadow: "none"}}
              icon={item.icon}
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
    </div>
  );
}
