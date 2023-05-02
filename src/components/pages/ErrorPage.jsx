import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div className="bg-slate-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold text-red-500 mb-4 animate-pulse">{error.status}</h1>
      <h3 className="text-2xl mb-4">{error.statusText}</h3>
      <h3 className="text-red-800 text-xl mb-4">{error.data}</h3>

      <Link to='/' className="my-3 btn btn-secondary">Go back to homepage</Link>
    </div>
  );
};

export default ErrorPage;
