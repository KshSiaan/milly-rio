import { BoxesIcon, HandCoinsIcon, UsersRoundIcon } from "lucide-react";
import React from "react";
import Chart from "./chart";

export default function Page() {
  return (
    <>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min border">
        <Chart />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 font-poppins">
        <div className="bg-muted/50 aspect-video rounded-xl border flex flex-col justify-around items-center !py-6">
          <HandCoinsIcon className="text-muted-foreground" />
          <h2 className="text-xl text-muted-foreground">Total Earned</h2>
          <h1 className="text-4xl font-baloo font-bold text-green-500">56K</h1>
          <p className="text-sm text-muted-foreground ">This month</p>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl border flex flex-col justify-around items-center !py-6">
          <UsersRoundIcon className="text-muted-foreground" />
          <h2 className="text-xl text-muted-foreground">Total Users</h2>
          <h1 className="text-4xl font-baloo font-bold text-primary">2.3K</h1>
          <p className="text-sm text-muted-foreground ">Registered</p>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl border flex flex-col justify-around items-center !py-6">
          <BoxesIcon className="text-muted-foreground" />
          <h2 className="text-xl text-muted-foreground">Available products</h2>
          <h1 className="text-4xl font-baloo font-bold text-gray-500">120</h1>
          <p className="text-sm text-muted-foreground ">in stock</p>
        </div>
      </div>
    </>
  );
}
