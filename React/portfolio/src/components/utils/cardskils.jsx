import React from "react";
import Image from "next/image";

export default function CardSkils({ src, alt, tittle, mastrery }) {
  return (
    <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-4 transition duration-500 group">
      <div class="flex flex-col items-center py-10 ">
        <div className="w-[100px] h-[100px] mb-3 rounded-full shadow-lg overflow-hidden flex items-center justify-center  transition duration-300 group-hover:shadow-lg group-hover:shadow-dua group-hover:scale-110 ">
          <Image
            width={80}
            height={80}
            src={src}
            alt={alt}
            className="w-14 h-14w-14 opacity-50 group-hover:opacity-100 transition duration-300"
          />
        </div>
        <h5 class=" mb-1 text-xl text-gray-900 font-bold dark:text-white">
          {tittle}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400 ">
          {mastrery}
        </span>
      </div>
    </div>
  );
}
