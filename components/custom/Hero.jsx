"use client";
import React, { useState } from "react";
import Link  from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Hero = () => {
  const [logoTitle, setLogoTitle] = useState("");

  return (
    <div className="flex flex-col items-center mt-24 xl:mt-36 gap-2">
      <h2 className="text-4xl md:text-6xl font-semibold  ">
        AI-Powered{" "}
        <span className="text-pink-600 italic font-bold"> Logos </span>That{" "}
        <br />
        Speak Your Brand
      </h2>
      <p className="text-gray-600 font-medium">
        AI-Powered Logos That Speak Your Brand
      </p>
      <div className="max-w-4xl flex gap-4 items-center justify-center">
        <Input
          onChange={(e) => setLogoTitle(e.target.value)}
          className="min-w-xl h-10  w-full border-none shadow-md text-2xl font-semibold p-4 outline-none"
          placeholder="Enter your logo name"
        />
        <Link href={"/create?title=" + logoTitle}>
          <Button
            className={"cursor-pointer"}
            variant={"primary"}
          >
            Getting Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
