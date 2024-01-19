import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="container lg:mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 self-center px-4 xl:pl-20">
            <h1 className="text-base md:text-xl lg:text-2xl font-semibold text-dua mt-1 ">
              Halo Semua🤚,Saya{" "}
              <span className="block text-satu text-4xl md:text-5xl lg:text-6xl">
                Wildan Mukmin
              </span>
            </h1>
            <h2 className="font-medium text-lg mb-5 lg:text-2xl">
              Student & Web Developer
            </h2>
            <p className="font-medium text-slate-600 text-sm mb-10 leading-relaxed">
              Hidup itu seperti air yang mengalir, mengalir sampai nganu. dan
              cita cita saya ingin punya duit banyak
            </p>
          </div>
          <div className="w-full lg:w-1/2 self-end px-4">
            <div className="mt-10 relative">
              <Image
                src="/wildan.png"
                alt="Foto Wildan"
                className="max-w-full mx-auto "
                width={600}
                height={600}
                priority
              />
              <span className="absolute bottom-10 -z-10 left-1/2 -translate-x-1/2">
                <svg
                  viewBox="0 0 200 200"
                  width={400}
                  height={400}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#BFCFE7"
                    d="M34.6,-29.6C51.2,-17.9,75.4,-9,81.5,6C87.5,21,75.3,42.1,58.7,58.7C42.1,75.3,21,87.5,0.4,87.1C-20.2,86.7,-40.4,73.6,-55,57C-69.6,40.4,-78.7,20.2,-80,-1.3C-81.3,-22.8,-74.8,-45.5,-60.2,-57.2C-45.5,-68.8,-22.8,-69.4,-6.9,-62.5C9,-55.6,17.9,-41.2,34.6,-29.6Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
