"use client";
import React, { useState } from "react";
import { Link } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Hero = () => {
  const [userInput, setUserInp] = useState("");

  return (
    <div className="flex flex-col items-center mt-24 xl:mt-36 gap-2">
      <h2 className="text-4xl md:text-6xl font-semibold  ">
        AI-Powered{" "}
        <span className="text-pink-600 italic font-bold"> Logos </span>That  <br />
        Speak Your Brand
      </h2>
      <p className="text-gray-600 font-medium">
        AI-Powered Logos That Speak Your Brand
      </p>
      <div className="max-w-4xl flex gap-4 items-center justify-center">
        <Input
          className="min-w-xl h-10  w-full border-none shadow-md text-2xl p-4 outline-none"
          placeholder="Enter your logo name"
        />
        <Button className={"cursor-pointer"} variant={"secondary"}>
          Getting Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
