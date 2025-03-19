import React from "react";
import { useNavigate } from "react-router-dom";

function DashHeader() {
  const navigate = useNavigate();
  return (
    <div className=" sticky top-0 w-full bg-primary flex justify-between items-center px-5">
      <div className=" flex gap-5 items-center justify-center w-fit px-5 py-3">
        <h2
          onClick={() => navigate("/")}
          className="text-secondary font-ramusbold text-5xl cursor-pointer"
        >
          JKC
        </h2>
        <p className="font-poppins text-sm bg-tertiary 0 px-5 py-1 rounded-full h-fit w-fit">
          v1.0.0
        </p>
      </div>

      {/* <div className="relative">
        <input
          className="bg-tertiary font-poppins rounded-full border-none px-10 py-2 pl-12 w-full"
          type="search"
          placeholder="Search document"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m2.85-6.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </div> */}
    </div>
  );
}

export default DashHeader;
