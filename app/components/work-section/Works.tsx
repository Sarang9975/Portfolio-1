import Image from "next/image";
import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";
import Img from "@/public/galerie.png"; // ✅ Correct Next.js import for static images

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Galerie",
      liveLink: "https://galerie-one.vercel.app/",
      about:
        "Galerie is an online marketplace on Telegram where artists can showcase and sell their work as NFTs, ensuring digital authenticity and ownership. It enables direct interaction between artists and collectors, bypassing traditional galleries. Explore diverse digital art and support emerging talent within Telegram's seamless platform.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: Img, // ✅ Pass imported image reference
    },
    {
      title: "Splore AI",
      gitLink: "https://github.com/Sarang9975/SploreAI",
      liveLink: "https://splore-ai.vercel.app/",
      about:
        "SploreAI is an AI-powered tool that analyzes social media data to provide insights, strategies, and engagement predictions via chats, dashboards, and PDF reports using Langflow, DataStax, and GPT.",
      stack: ["next.js", "typescript", "framer motion", "tailwindcss"],
      img: "/splorebhai.png",
    },
    {
      title: "FoodSense",
      liveLink: "https://drive.google.com/drive/folders/1iqZUd2cKp8OunwkaZ64tebP2IfXfjcWP",
      about:
        "FoodSense is a smart mobile app that helps people with food allergies make safer choices by instantly scanning food labels using a phone camera. Powered by OCR, GPT-4, and AR overlays, it detects allergens—even hidden ones—in real time, without needing barcodes. With personalized allergy profiles, audio/visual alerts, multilingual support, and label-less food scanning, FoodSense makes ingredient transparency simple, fast, and accessible for everyone.",
      stack: ["OCR", "GPT-4", "AR", "Mobile App"],
      img: "/foodsense.jpg", // Placeholder image
    },
    {
      title: "FindMyBills",
      liveLink: "https://findmybills.vercel.app/",
      about:
        "FindMyBills is a sleek web app that centralizes invoice storage, making it easy to upload, search, and access invoices securely. Built with Next.js, Tailwind CSS, and Supabase, it offers fast performance, real-time search, and a clean UI—perfect for freelancers and businesses who want hassle-free billing management.",
      stack: ["Next.js", "Tailwind CSS", "Supabase"],
      img: "/findmybills.png", // Placeholder image
    },
   
   
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
