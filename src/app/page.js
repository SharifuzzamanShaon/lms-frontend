"use client";
import React, { useState } from "react";
import Heading from "../utils/Heading";
import HeroSection from "../components/HeroSection";
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import CourseComponent from "@/components/User-componets/CourseComponent";
import ForVisitor from "@/utils/ForVisitor";

const page = () => {
  const { user } = useSelector((state) => state.auth);
  const siteTitle = user
    ? `${user.username.split("").slice(0, 5).join("") + "..."}`
    : "LMS-App";

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);



  return (
    <div className="h-[800px]">
      <Heading
        title={`${siteTitle} Profile`}
        description="This is a learning paltform"
        keywords="Programming, MERN, C#, Laravel, React JS"
      ></Heading>
      <Header open={open} activeItem={activeItem} setOpen={setOpen}></Header>
      <HeroSection />
      <CourseComponent/>
      <ForVisitor/> 
    </div>
  );
};

export default page;
