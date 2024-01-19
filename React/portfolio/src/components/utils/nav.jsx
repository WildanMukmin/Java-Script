import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="hidden lg:flex  mr-4 gap-9 justify-around">
      <Link href="#home" className="style-link-nav-desktop ">
        Home
      </Link>
      <Link href="#about" className="style-link-nav-desktop ">
        About
      </Link>
      <Link href="#" className="style-link-nav-desktop ">
        Portfolio
      </Link>
      <Link href="#myskils" className="style-link-nav-desktop ">
        MySkils
      </Link>
      <Link href="#" className="style-link-nav-desktop ">
        Contact
      </Link>
    </div>
  );
}
