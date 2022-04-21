import customhistory from "../customhistory";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import middlesexlogo from "../assets/Middlesexlogo.png";

function NavBar() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = React.useState("");

  useEffect(() => {
    setCurrentRoute(window.location.pathname.split("/")[1]);
    console.log(`currentRoute: ${currentRoute}`);
  });

  return (
    <div className="">
      <button
        className={`fixed left-4 top-2 hover:text-yellow-400 transition duration-200 ${
          currentRoute === "" ? "border-b-2 border-yellow-400" : ""
        }`}
      >
        <Link to="/">About</Link>
      </button>
      <button className={`fixed right-4 top-2 hover:text-yellow-400 transition duration-200`}>
      {/* TODO: When the instagram page is ready, it can be linked here */}
        <a href="https://www.instagram.com" target={"_blank"}>
          Instagram
        </a>
      </button>
      {/* TODO: If we can't figure out how to handle the changing of active on scroll, change this to the middlesex logo */}
      <button className={`fixed left-4 bottom-3 hover:text-yellow-400 transition duration-200 ${
          currentRoute === "/todo" ? "border-b-2 border-yellow-400" : ""
        }`}>
        <a href="https://www.mdx.ac.ae" target={"_blank"}><img src={middlesexlogo} className="h-8"></img></a>
      </button>
      <button className={`fixed right-4 bottom-2 hover:text-yellow-400 transition duration-200 ${
          currentRoute === "studentA-Z" ? "border-b-2 border-yellow-400" : ""
        }`}>
        <Link to="studentA-Z">Student A-Z</Link>
      </button>
    </div>
  );
}

export default NavBar;
