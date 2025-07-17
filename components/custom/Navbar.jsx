"use client";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "./ModeToggle";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="px-8 py-4 w-full flex justify-between">
      {mounted && (
      <Link href={"/"}>
        <Image
          src={resolvedTheme === "dark" ? "/Logo.svg" : "/Logo-Light.svg"}
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
      )}
      <div className="flex gap-4">
        <Button variant={"ghost"}>Login</Button>
        <Button
          onClick={() => {
            console.log("Hi There");
          }}
          variant={"primary"}
        >
          Getting Started
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
