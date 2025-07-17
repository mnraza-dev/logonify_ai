"use client"
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

const LogoTitle = ({onHandleInputChange}) => {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState(searchParams?.get("title"));
  return (
    <div className="mt-10">
      <HeadingDescription title={title} description="Logo Title Description" />

      <Input
        defaultValue={title}
        onChange={(e) => onHandleInputChange(e.target.value)}
        className={" p-4 border rounded-lg mt-5 w-full"}
        type={"text"}
        placeholder="Enter the Logo Title"
      />
    </div>
  );
};

export default LogoTitle;
