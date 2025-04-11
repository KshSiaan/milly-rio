import React from "react";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col justify-start items-start w-full bg-muted/50 !p-4 rounded-xl border font-poppins">
      <h2 className="!py-2 border-b w-full">Admin Inbox</h2>
      <div className="flex-1 w-full max-h-[74dvh]">
        <div className="max-h-full w-full grid grid-cols-4 gap-4 !py-4 !overflow-y-scroll">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-[300px] w-full border rounded-xl bg-background flex flex-col justify-start items-start"
              >
                <div className="flex flex-row justify-between items-center !p-2 gap-2 w-full">
                  <div className="">
                    <div className="size-12 rounded-full bg-accent"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold">Raven</h3>
                    <p className="text-xs font-light">kshsiaan@gmail.com</p>
                  </div>
                </div>
                <div className="flex-1 w-full !p-4 !overflow-y-auto">
                  <p className="text-xs text-muted-foreground ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa corrupti quidem provident excepturi totam porro
                    reprehenderit nesciunt! Accusantium rem natus eveniet alias
                    voluptate, nisi cumque vero pariatur reiciendis harum
                    soluta. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Labore facilis quaerat, iure sunt totam voluptate,
                    dolorum laudantium ipsam ex laboriosam rem quo, laborum non.
                    Delectus in deserunt architecto quasi dolorem.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
