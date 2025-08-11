"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/freelancer.png",  // replace with your actual Freelancer logo/path
    jobTitle: "Freelancer | Web and App Developer",
    company: "Self-Employed",
    jobType: "Freelance",
    duration: "Jan 2025 – Present",
    stuffIDid: [
      "Collaborated with clients in the UK, Germany, and Canada across cultures and time zones to deliver bespoke web and mobile solutions.",
      "Developed a web-based health appointment booking system for a Canadian clinic, enabling real-time scheduling, reminders, and patient record access—reducing no-shows by 25% and doubling scheduling speed.",
      "Built “Roomies” for a UK startup using React Native, Firebase, Firestore, and Google Maps API, integrating real-time chat and location filtering, which contributed to £150K+ in pre-seed funding."
    ],
  },
  {
    companyImg: "/ninnin.jpg",  // replace with your actual Nin2 logo/path
    jobTitle: "Website Design & Development Intern",
    company: "Nin2 (Tokyo, Japan)",
    jobType: "Internship",
    duration: "Oct 2024 – Dec 2024",
    stuffIDid: [
      "Led the design and development of the nin2creator platform for 10,000+ users, architecting a scalable MERN-stack system and crafting UI in Figma.",
      "Integrated multilingual support (Japanese & English) with i18next and built a customizable authentication flow using JWT and OAuth providers.",
      "Engineered a real-time analytics dashboard with Chart.js, enabling personalized data views and boosting user engagement."
    ],
  },
  {
    companyImg: "/atlasian.png",  // replace with your actual Atlassian logo/path
    jobTitle: "Software Development Intern",
    company: "Atlassian (Remote, USA)",
    jobType: "Internship",
    duration: "Jul 2023 – Oct 2023",
    stuffIDid: [
      "Developed dynamic dashboards with React, Redux, and D3.js to monitor 10+ platform features, enhancing real-time data visualization and user insights.",
      "Collaborated on REST API and WebSocket integrations to stream live data into the UI.",
      "Authored knowledge articles and tutorial videos to streamline new-hire onboarding for the cloud infrastructure team.",
      "Set up Jenkins pipelines with Docker agents to auto-deploy React builds to AWS S3—cutting manual operations by 60%.",
      "Refactored legacy React components into modular, reusable units to improve maintainability and reduce complexity."
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Work Experience</Title>

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
