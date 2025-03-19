import React from "react";

function Sidebar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div
      className=" bg-white shadow-md shadow-gray-500 rounded-md fixed left-0 bottom-0 top-18 flex flex-col text-start items-start gap-5
     font-poppins pt-5 px-5 h-full"
    >
      <p className=" ml-2 text-primary font-lustria tracking-wide font-semibold">
        GETTING STARTED
      </p>
      <button
        className="ml-3 py-2 rounded-md w-full text-start hover:bg-primary hover:text-white px-5 text-fourth"
        onClick={() => scrollToSection("install")}
      >
        Installation
      </button>

      <p className=" ml-2 text-primary font-lustria tracking-wide font-semibold">
        USE
      </p>
      <div className="flex flex-col gap-2 items-start ml-3 text-fourth w-full">
        <button
          className="hover:bg-primary hover:text-white px-5 py-2 rounded-md w-full text-start"
          onClick={() => scrollToSection("keyGen")}
        >
          Key Generation
        </button>
        <button
          className="hover:bg-primary hover:text-white px-5 py-2 rounded-md w-full text-start"
          onClick={() => scrollToSection("sign")}
        >
          Sign
        </button>
        <button
          className="hover:bg-primary hover:text-white px-5 py-2 rounded-md w-full text-start"
          onClick={() => scrollToSection("verify")}
        >
          Verify
        </button>
        <button
          className="hover:bg-primary hover:text-white px-5 py-2 rounded-md w-full text-start"
          onClick={() => scrollToSection("decode")}
        >
          Decode
        </button>
      </div>

      <p className=" ml-2 text-primary font-lustria tracking-wide font-semibold">
        ALGORITHM
      </p>
      <button
        className="hover:bg-primary hover:text-white px-5 py-2 rounded-md w-full text-start ml-3 text-fourth"
        onClick={() => scrollToSection("dilithium")}
      >
        Dilithium
      </button>
    </div>
  );
}

export default Sidebar;
