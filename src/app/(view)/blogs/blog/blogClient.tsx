"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { blogData } from "./blog-data";
import Link from "next/link";

export default function BlogClient() {
  const navig = useRouter();
  const blog = useSearchParams().get("page");

  useEffect(() => {
    if (!blog || isNaN(+blog) || +blog > 3 || +blog < 1) {
      navig.push("/blogs");
    }
  }, [blog, navig]);

  if (!blog || isNaN(+blog) || +blog > 3 || +blog < 1) return null;

  return (
    <div className="bg-background !py-12 !px-6 lg:!px-0">
      {/* header & back btn */}
      <div className="flex items-center gap-2.5 container !mx-auto !mb-12">
        <Link href="/blogs">
          <svg width="50" height="50" viewBox="0 0 56 56" fill="none">
            <path
              d="M37.3333 51.3333L14 28L37.3333 4.66666L41.475 8.80832L22.2833 28L41.475 47.1917L37.3333 51.3333Z"
              fill="#000030"
            />
          </svg>
        </Link>
        <h1 className="text-4xl font-semibold text-[#000030]">Back</h1>
      </div>

      {/* blog image */}
      <div className="w-full h-[1000px] rounded-4xl overflow-hidden container !mx-auto flex justify-center items-center !mb-12">
        <Image
          src={`/blog/blog${blog}.png`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
      </div>

      {/* blog content */}
      <div
        className="container !mx-auto !py-12"
        dangerouslySetInnerHTML={{ __html: blogData[+blog - 1] }}
      ></div>
    </div>
  );
}
