import React from "react";
import features from "../data/aboutData";

function About() {
  return (
    <div className=" mt-10 text-center  bg-amber-950-200 flex flex-col items-center">
      <h2 className=" text-fourth font-lustria font-semibold text-neutral-90 text-3xl">
        Our Technology
      </h2>
      <div className=" text-start my-10 w-[1000px] grid grid-cols-2  gap-10 ">
        {features.map((item, index) => (
          <div
            className=" bg-primary text-tertiary tracking-wider
           font-poppins border-2 border-slate-800 p-3  rounded-md shadow-lg"
            key={index}
          >
            <h2 className=" mt-1 font-semibold  text-2xl">{item.heading}</h2>
            <p className=" my-2 font-poppins tracking-wide ml-10">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
