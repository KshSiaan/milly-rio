"use client";
import React from "react";
import { ChartPart } from "./chart-part";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Chart() {
  return (
    <div className="!py-3 !px-4 h-full flex flex-col justify-start items-start w-full">
      <div className="flex flex-row justify-between items-start w-full">
        <p className="text-lg text-gray-400">Statics Analytics</p>
        <Select defaultValue="dark">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Weekly</SelectItem>
            <SelectItem value="dark">Monthly</SelectItem>
            <SelectItem value="system">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <Title className="!m-0 py-2">Revenues</Title> */}
      <div className="flex-grow flex-1 w-full flex flex-col justify-end items-end">
        <div className="h-[40dvh] w-full overflow-hidden">
          <ChartPart />
        </div>
      </div>
    </div>
  );
}
