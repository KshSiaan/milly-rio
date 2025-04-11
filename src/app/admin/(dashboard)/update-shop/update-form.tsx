import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { UploadIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function UpdateForm() {
  return (
    <div className="h-full w-full !p-4 flex flex-col justify-start items-start">
      <div className="h-[140px] w-full grid grid-cols-6 gap-6">
        <div className="col-span-4 h-full flex flex-col justify-between">
          <Label htmlFor="name">Product Name:</Label>
          <Input name="name" placeholder="Type here.." />
          <Label htmlFor="category">Product Category</Label>
          <Select name="category">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-full w-full border border-dashed rounded-xl col-span-2 flex flex-col justify-around items-center">
          <UploadIcon className="text-muted-foreground" />
          <p>Upload Image</p>
          <p className="text-xs font-light text-muted-foreground">
            or{" "}
            <Link href="#" className="hover:underline text-indigo-600">
              browse file
            </Link>{" "}
            from device
          </p>
        </div>
      </div>
      <section className="w-full !py-4 !space-y-4">
        <Label>Product Description</Label>
        <Textarea
          placeholder="type here.."
          className="h-[160px] w-full !resize-none"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="!space-y-4">
            <Label>Select Stock amount</Label>
            <Input placeholder="00" className="" type="number" />
          </div>
          <div className="!space-y-4">
            <Label>Select product price</Label>
            <Input placeholder="00" type="number" />
          </div>
        </div>
      </section>
      <div className="flex-1 w-full flex flex-row justify-center items-end">
        <Button variant="gold">Re stock the product</Button>
      </div>
    </div>
  );
}
