import React from "react";
import chef from "../../../assets/banner.jpg";
import { FaVideo } from "react-icons/fa";

const Lesson = () => {
  return (
    <div className="rounded-xl container mx-auto py-12 my-container md:grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="px-4">
        <h2 className="md:text-5xl text-4xl text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-rose-700">
          LEARN AND FUN WITH OUR LESSON IN ONLINE AND OFFLINE
        </h2>
        <p className="text-2xl mt-4 md:mt-7 pe-8 text-justify">
          Join our community to gear up your skill and knowledge about world wide famous recipes and delicious food making methods. Learn us on joining meeting or followings our offline video
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