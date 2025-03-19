import React from "react";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import Docs from "./Docs";

function Documentaion() {
  return (
    <div className="">
      <DashHeader />
      <div className=" flex">
        <Sidebar />
        <Docs />
      </div>
    </div>
  );
}

export default Documentaion;
