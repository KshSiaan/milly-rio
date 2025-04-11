import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-screen w-screen flex justify-center items-center font-poppins">
      <section className="w-[40dvw] h-auto flex flex-col justify-center items-center gap-4 border rounded-xl !p-4">
        <div
          className="size-16 rounded-xl bg-muted/50 border bg-center bg-cover"
          style={{ backgroundImage: `url('/image/logo.webp')` }}
        ></div>
        <h3 className="text-3xl font-semibold">Welcome Back</h3>
        <p className="text-base text-muted-foreground">
          Please enter email & password to continue
        </p>
        <div className="w-full !space-y-4 !mt-8">
          <Label>Email</Label>
          <Input placeholder="email@email.com" />
          <Label>Password</Label>
          <Input type="password" placeholder="ABcd12@#" />
          <div className="grid grid-cols-2">
            <div className="flex gap-2 items-center">
              <Checkbox />{" "}
              <Label className="text-muted-foreground text-sm">
                Remember me
              </Label>
            </div>
            <div className="text-sm text-muted-foreground text-end">
              <Link
                href="/forgot-pass"
                className="hover:text-black hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button className="w-full !py-5 !mt-8">Log in</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
