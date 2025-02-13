"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/ninnin.jpg",
    jobTitle: "Website Design and Development Intern (Tokyo, Japan)",
    company: "NinNin",
    jobType: "Internship",
    duration: "Oct 2024 - Jan 2024",
    stuffIDid: [
      "Led the design and development of the nin2creator platform, empowering over 50,000 users to acquire design skills, by architecting a scalable system using MERN stack and UI design using Figma.",
      "Integrated multilingual support to accommodate Japanese and English users via i18next, increasing accessibility and platform reach by 20%.",
      "Designed and integrated a secure authentication system using JWT and OAuth.",
      "Engineered a real-time analytics dashboard with Chart.js, enabling users to tailor their views, boosting engagement metrics."
    ],
  },
  {
    companyImg: "/nnpc.svg",
    jobTitle: "Intern",
    company: "NNPC",
    jobType: "Internship",
    duration: "July 2023 - Sept. 2023",
    stuffIDid: [
      "Came up with cross-functional login & sign-up page designs that are now integral parts of the tools used within the company.",
      "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination, etc. while making very impactful contributions.",
      "I also helped interns grasp the basics of design, enabling them to make meaningful contributions."
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
