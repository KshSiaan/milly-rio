"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { blogData } from "./blog-data";
import Link from "next/link";

export default function Page() {
  const navig = useRouter();
  const blog = useSearchParams().get("page");
  console.log(blog);

  if (!blog) {
    navig.push("/blogs");
    return <></>;
  }

  if (isNaN(parseInt(blog))) {
    navig.push("/blogs");
    return <></>;
  }

  if (parseInt(blog) > 3 || parseInt(blog) < 1) {
    navig.push("/blogs");
    return <></>;
  }
  return (
    <div className="bg-background !py-12 !px-6 lg:!px-0">
      <div className="flex items-center gap-2.5 container !mx-auto !mb-12">
        <div>
          <Link href={"/blogs"}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_269_793"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="56"
                height="56"
              >
                <rect width="56" height="56" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_269_793)">
                <path
                  d="M37.3333 51.3333L14 28L37.3333 4.66666L41.475 8.80832L22.2833 28L41.475 47.1917L37.3333 51.3333Z"
                  fill="#000030"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-[#000030]">Back</h1>
        </div>
      </div>
      <div className="w-full h-[1000px] rounded-4xl overflow-hidden container !mx-auto flex flex-row justify-center items-center !mb-12">
        <Image
          src={`/blog/blog${blog}.png`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
      </div>
      <div
        className="container !mx-auto !py-12"
        dangerouslySetInnerHTML={{ __html: blogData[parseInt(blog) - 1] }}
      ></div>
    </div>
  );
}
