import React from "react";
import CardSkils from "./cardskils";
export default function MySkils() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-6">
      <CardSkils
        mastrery={"Expert"}
        tittle={"HTML"}
        src={"/html.png"}
        alt={"html"}
      />
      <CardSkils
        mastrery={"Advanced"}
        tittle={"CSS"}
        src={"/css.png"}
        alt={"css"}
      />
      <CardSkils
        mastrery={"Advanced"}
        tittle={"Bootstrap"}
        src={"/bootstrap.png"}
        alt={"bootstrap"}
      />
      <CardSkils
        mastrery={"Advanced"}
        tittle={"Tailwind"}
        src={"/tailwind.png"}
        alt={"tailwind"}
      />
      <CardSkils
        mastrery={"Advanced"}
        tittle={"JavaScript"}
        src={"/javascript.png"}
        alt={"javascript"}
      />
      <CardSkils
        mastrery={"Advanced"}
        tittle={"React"}
        src={"/react.png"}
        alt={"react"}
      />
      <CardSkils
        mastrery={"Advanced"}
        tittle={"Next Js"}
        src={"/nextjs.png"}
        alt={"next js"}
      />
      <CardSkils
        mastrery={"Intermediate"}
        tittle={"Vite Js"}
        src={"/vite.png"}
        alt={"vite js"}
      />
      <CardSkils
        mastrery={"Intermediate"}
        tittle={"Node Js"}
        src={"/nodejs.png"}
        alt={"node js"}
      />
      <CardSkils
        mastrery={"Intermediate"}
        tittle={"Express Js"}
        src={"/express.png"}
        alt={"express js"}
      />
      <CardSkils
        mastrery={"Intermediate"}
        tittle={"MongoDB"}
        src={"/mongodb.png"}
        alt={"mongo db"}
      />
      <CardSkils
        mastrery={"Newbie"}
        tittle={"Postgre SQL"}
        src={"/postgresql.png"}
        alt={"postgre sql"}
      />
      <CardSkils
        mastrery={"Advanced"}
        tittle={"Git"}
        src={"/git.png"}
        alt={"git"}
      />
    </div>
  );
}
