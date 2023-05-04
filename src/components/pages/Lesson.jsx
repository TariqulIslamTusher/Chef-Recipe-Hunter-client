import React from "react";
import chef from "../../../assets/banner.jpg";
import { FaVideo } from "react-icons/fa";

const Lesson = () => {
  return (
    <div className="rounded-xl container mx-auto py-12 my-container md:grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="px-4">
        <h2 className="md:text-5xl text-4xl text-left font-bold ">
          Fun and Easy to Become a Master Chef
        </h2>
        <p className="text-2xl mt-6 md:mt-12 pe-8 ">
          Join Our Com
        </p>
        <div className="flex flex-col-reverse md:flex-row mt-7 md:mt-12 justify-center md:gap-20">
          <button className="btn btn-warning">Join Lessons</button>
          <button className="btn btn-outline ">
            <FaVideo className="text-2xl mr-4 "></FaVideo> Watch Our Videos
          </button>
        </div>
      </div>
      <div className="mt-7 md:mt-0">
        <img className="w-full h-full rounded-xl" src={chef} alt="" />
      </div>
    </div>
  );
};

export default Lesson;