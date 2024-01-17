import React from "react";
import Image from "next/image";

export default function CardSkils({ src }) {
  return (
    <div class="w-1/2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-end px-4 pt-4">
        <div
          id="dropdown"
          class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        ></div>
      </div>
      <div class="flex flex-col items-center pb-10">
        <Image
          width={120}
          height={120}
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={src}
          alt="skil"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          React Js
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          JavaScript FrameWork
        </span>
      </div>
    </div>
  );
}
