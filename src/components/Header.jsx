import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // For bold text
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-row-reverse px-10 w-full">
      <button
        onClick={() => navigate("/documentation")}
        className="font-poppins text-gray-300 px-5 py-3 text-xl font-stretch-expanded
       hover:bg-tertiary hover:text-fourth mx-20 my-3 rounded-md "
      >
        Documentation
      </button>
    </div>
  );
}

export default Header;
