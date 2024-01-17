import React from "react";
import Burger from "../components/utils/burger";
import Logo from "../components/utils/logo";
import Nav from "./utils/nav";

export default function Header() {
  return (
    <header className="flex bg-dua mb-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative ">
          <div>
            <Logo />
          </div>
          <div>
            <Nav />
            <Burger />
          </div>
        </div>
      </div>
    </header>
  );
}
