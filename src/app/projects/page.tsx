/** @format */

import React from "react";
import Project from "../components/Project";

const Page = () => {
  return (
    <>
      <div>
        <p className="text-secondary text-center font-semibold">
          Here are some of My Projects
        </p>
        <div>
          <Project />
        </div>
      </div>
    </>
  );
};

export default Page;
