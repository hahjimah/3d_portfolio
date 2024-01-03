import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences, educations } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Yong Elliot Kim
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer in Seattle seeking developer roles, with a strong
          aptitude for quickly learning new technologies and skills.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, key) => (
            <div key={key} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with many different developers leveling up my skills and
            collaborating with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, key) => (
              <VerticalTimelineElement
                key={key}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <h3 className="subhead-text">Education</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          As a graduate of Bellevue College with a Bachelor of Science in
          Computer Science and a 3.6 GPA, I have developed a robust foundation
          in both the theoretical and practical aspects of technology. My
          academic journey at Bellevue honed my analytical skills and deepened
          my passion for computer science, preparing me for a dynamic career in
          the tech industry.
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {educations.map((education, key) => (
            <VerticalTimelineElement
              key={key}
              date={education.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={education.icon}
                    alt={education.name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: "#D9D9D9" }} // You can customize this
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: "#D9D9D9", // And this, to match your style
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {education.major}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {education.name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {education.skills.map((skill, index) => (
                  <li
                    key={`education-skill-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
