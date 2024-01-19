import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="logo"
        className=" self-start mx-5 my-2 rounded-full hover:scale-110 transition duration-500 cursor-pointer"
        width={50}
        height={50}
      />
    </Link>
  );
}
