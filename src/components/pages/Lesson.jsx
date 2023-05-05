import React from "react";
import { FaVideo } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Lesson = () => {
  return (
    <div className="container mx-auto md:px-8">
      <div className="text-center w-8/12 mx-auto">
        <h2 className="md:text-5xl text-3xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-rose-500">
          LEARN AND FUN WITH OUR LESSON IN ONLINE AND OFFLINE
        </h2>
      </div>

      <div className="rounded-xl container mx-auto py-12 md:grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="px-4 order-2 md:order-1">
          <p className="text-2xl mt-4 md:mt-7 text-white text-justify">
            Join our community to gear up your skill and knowledge about world wide famous recipes and delicious food making methods. Learn us on joining meeting or followings our offline video
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-6 mt-7 md:mt-12 justify-center md:gap-16">
            <button className="btn btn-warning"><Link to='/join'>Join Lessons</Link></button>
            <button className="btn btn-outline btn-warning font-bold">
              <FaVideo className="text-2xl mr-4 "></FaVideo><Link to='/details'> Watch Our Videos</Link>
            </button>
          </div>
        </div>
        <div className="mt-7 md:mt-0 rounded-xl order-1 md:order-2">
          <LazyLoad offset={300}>
            <img className="w-full h-full px-6 rounded-full " src='https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Lesson;