"use client";

import React from "react";
import DetailNavMobile from "./detailNavMobile";

export default function Burger() {
  function handleClick() {
    const navToggle = document.querySelector("#toggle");
    if (navToggle.classList.contains("nav-toggle")) {
      navToggle.classList.remove("nav-toggle");
    } else {
      navToggle.classList.add("nav-toggle");
    }
    const isiNavToggle = document.querySelector("#nav-menu");
    if (isiNavToggle.classList.contains("hidden")) {
      isiNavToggle.classList.remove("hidden");
    } else {
      isiNavToggle.classList.add("hidden");
    }
  }
  return (
    <>
      <button
        id="toggle"
        className="flex h-6 w-8 flex-wrap  justify-center mr-6 cursor-pointer lg:hidden"
        onClick={handleClick}
      >
        <span className="bg-empat transition duration-500 w-8 h-[3px] origin-top-left self-start"></span>
        <span className="bg-empat transition duration-500 w-8 h-[3px] self-center "></span>
        <span className="bg-empat transition duration-500 w-8 h-[3px] self-end origin-bottom-left"></span>
      </button>
      <nav
        id="nav-menu"
        className="absolute hidden bg-white shadow-lg rounded-lg max-w-[250px] w-full right-2 top-full"
      >
        <DetailNavMobile />
      </nav>
    </>
  );
}
