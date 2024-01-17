import React from "react";
import CardSkils from "./cardskils";
export default function MySkils() {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        <CardSkils src={"/wildan.png"} />
        <CardSkils src={"/next.svg"} />
        <CardSkils src={"/vercel.svg"} />
        <CardSkils src={"/logo.png"} />
      </div>
    </div>
  );
}
