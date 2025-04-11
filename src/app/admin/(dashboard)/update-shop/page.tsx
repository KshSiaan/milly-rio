import React from "react";
import UpdateForm from "./update-form";

export default function Page() {
  return (
    <div className="flex-1 !p-4 rounded-xl border bg-muted/50 font-poppins flex flex-col justify-start items-start">
      <div className="w-full flex flex-row justify-between items-start !mb-4">
        <h3 className="text-lg font-bold text-muted-foreground">
          Update an existing shop item
        </h3>
      </div>
      <div className="flex-1 w-full grid grid-cols-5 gap-6 overflow-hidden">
        <div className="bg-background rounded-xl border col-span-2 h-full flex flex-col justify-start items-start">
          <h4 className="w-full text-sm text-center text-muted-foreground !py-4 border-b">
            Preview product
          </h4>
          <div className="h-[200px] w-full bg-muted"></div>
          <div className="flex-1 w-full !p-4">
            <div className="w-full flex flex-row justify-between items-start">
              <h3 className="font-semibold">Product Name</h3>
              <p className="text-amber-500">$49.99</p>
            </div>
            <p className="text-muted-foreground font-light text-sm w-full text-ellipsis line-clamp-[8]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              sapiente necessitatibus eos voluptatem, quaerat quo enim
              distinctio repudiandae consectetur, dolores animi voluptates
              possimus iusto, beatae nesciunt atque deserunt commodi? Repellat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              sapiente necessitatibus eos voluptatem, quaerat quo enim
              distinctio repudiandae consectetur, dolores animi voluptates
              possimus iusto, beatae nesciunt atque deserunt commodi? Repellat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              sapiente necessitatibus eos voluptatem, quaerat quo enim
              distinctio repudiandae consectetur, dolores animi voluptates
              possimus iusto, beatae nesciunt atque deserunt commodi? Repellat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              sapiente necessitatibus eos voluptatem, quaerat quo enim
              distinctio repudiandae consectetur, dolores animi voluptates
              possimus iusto, beatae nesciunt atque deserunt commodi? Repellat!
            </p>
          </div>
          <div className="!p-4 text-sm text-blue-700 font-bold">Stock : 00</div>
        </div>
        <div className="bg-background rounded-xl border col-span-3 h-full">
          <UpdateForm />
        </div>
      </div>
    </div>
  );
}
