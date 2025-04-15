"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const BlogClient = dynamic(() => import("./blogClient"), { ssr: false });

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogClient />
    </Suspense>
  );
}
