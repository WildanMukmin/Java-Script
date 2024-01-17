import React from "react";
import Github from "./icons/github";
import Instagram from "./icons/instagram";
import Linkedin from "./icons/linkedin";
import Facebook from "./icons/facebook";
import Tiktok from "./icons/tiktok";
import Discord from "./icons/discord";
import TulisanKenapaWebPrograming from "./tulisanKenapaWebPrograming";
export default function About() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-10 self-center justify-center px-4 xl:pl-20 pr-5">
            <h4 className="text-lg md:text-2xl font-bold text-dua uppercase mb-2">
              Tentang Saya
            </h4>
            <TulisanKenapaWebPrograming />
            <p className="text-[13px] leading-tight tracking-wide font-medium opacity-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              blanditiis nulla ullam quidem delectus molestias vero doloremque
              explicabo dolorum reprehenderit!
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4 self-end pr-20">
            <h3 className="text-2xl md:text-3xl mb-4 text-satu font-bold lg:pt-[55px]">
              Ikuti Saya di Sosial Media!!
            </h3>
            <p className="text-[13px] leading-tight tracking-wide font-medium opacity-50">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium doloribus, beatae sapiente distinctio aliquam ab,
              aliquid quas, qui a corrupti omnis quisquam cum doloremque fugit
              nisi! Accusamus quos cum neque?
            </p>
            <div className="flex  gap-3 mt-4 ">
              <Github />
              <Instagram />
              <Linkedin />
              <Facebook />
              <Tiktok />
              <Discord />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
