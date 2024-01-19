import Link from "next/link";
import React from "react";

export default function DetailNavMobile() {
  return (
    <div className="flex flex-col  w-full bg-cover rounded-lg shadow-xl hover:shadow-2xl lg:hidden items-center">
      <Link href="#home" className="style-link-nav-mobile">
        <div>Home</div>
      </Link>
      <Link href="#about" className="style-link-nav-mobile">
        <div>About</div>
      </Link>
      <Link href="#" className="style-link-nav-mobile">
        <div>Portfolio</div>
      </Link>
      <Link href="#myskils" className="style-link-nav-mobile">
        <div>MySkils</div>
      </Link>
      <Link href="#" className="style-link-nav-mobile">
        <div>Contact</div>
      </Link>
    </div>
  );
}
