import React from "react";
import HeadingDescription from "./HeadingDescription";
import { Input } from "@/components/ui/input";
import { useParams, useSearchParams } from "next/navigation";

const LogoTitle = () => {
  const searchParams = useSearchParams();
  const title = searchParams?.get("title");
  return (
    <div className="mt-10">
      <HeadingDescription title={title} description="Logo Title Description" />

      <Input
        defaultValue={title}
        className={" p-4 border rounded-lg mt-5 w-full"}
        type={"text"}
        placeholder="Enter the Logo Title"
      />
    </div>
  );
};

export default LogoTitle;
