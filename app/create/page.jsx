"use client";
import LogoTitle from "@/components/custom/create/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const CreateLogo = () => {
  const onHandleInputChange = (e) => {
    setTitle(e);
  };

  return (
    <div className="">
      <LogoTitle onHandleInputChange={onHandleInputChange} />

      <div className="mt-8 flex justify-between items-center">
        <Button className={" cursor-pointer"} variant={"outline"}>
          
          <ArrowLeft /> Previos
        </Button>
        <Button  className={" cursor-pointer"}>
          
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateLogo;
