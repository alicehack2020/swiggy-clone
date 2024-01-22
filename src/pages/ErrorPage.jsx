import React from "react";
import underDevelopment from "../assets/underDevelopment.svg";
const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col justify-center items-center gap-5 animate-pulse">
        <img src={underDevelopment} alt="" className="h-52" />
        <h1>Comming Soon.....</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
