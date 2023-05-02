import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong.</h1>
      <img src="https://thumbs.dreamstime.com/z/error-page-builders-repair-site-crane-flat-illustration-cartoon-style-not-found-concept-young-people-using-devices-to-110576125.jpg" alt="Animated Error Image" className="h-96 mb-8" />
      <p className="text-lg text-gray-700 text-center mb-8">We apologize for the inconvenience. Please try again later or contact support if the problem persists.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Go back to homepage
      </button>
    </div>
  );
};

export default ErrorPage;
