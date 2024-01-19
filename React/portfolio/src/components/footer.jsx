import React from "react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-32 bg-slate-800">
      <div className="grid grid-cols-2 gap-8 px-20">
        <div className="pl-12">
          <h1 className="text-4xl uppercase text-white font-bold pb-2">
            Wildan
          </h1>
          <h4 className="text-xl text-white opacity-80 font-semibold pb-1">
            Hubungi Saya
          </h4>
          <p className="text-white opacity-60 ">wildanmukmin26@gmail.com</p>
          <p className="text-white opacity-60">
            jln soemantri brojonegoro komplek unila nomor 40
          </p>
        </div>

        <form class="max-w-sm mx-auto">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-white"
          >
            Berikan Saya Saran
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-slate-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </form>
      </div>
    </footer>
  );
}
