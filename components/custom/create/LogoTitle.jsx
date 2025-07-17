"use client";
import React, { useState, useEffect } from "react";
import HeadingDescription from "./HeadingDescription";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

const LogoTitle = () => {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState(searchParams?.get("title") || "");

  useEffect(() => {
    setTitle(searchParams?.get("title") || "");
  }, [searchParams]);

  return (
    <div className="mt-10">
      <HeadingDescription title={title} description="Logo Title Description" />
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-4 border rounded-lg mt-5 w-full"
        type="text"
        placeholder="Enter the Logo Title"
      />
    </div>
  );
};

export default LogoTitle;
