import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function Navbar() {
  let { theme, setTheme } = useTheme("dark");
  const smFont = "text-xl ";
  const lgFont = " md:text-2xl";
  return (
    <>
      <div
        className={`sticky  top-0  z-50   flex w-full  shadow-xl justify-between px-8  md:px-14 py-5  items-center mb-8 ${
          theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
        } transition-all`}
      >
        <Link href={"/"}>
          <div className={`${smFont} ${lgFont}  font-bold  `}>
            Where in the world?
          </div>
        </Link>
        <div
          className="flex items-center gap-1 cursor-pointer p-2 rounded-full md:rounded-md bg-gray-500 md:bg-transparent md:px-4 md:py-2   hover:opacity-50   md:text-lg font  transition duration-500 ease-in-out opacity-75 "
          onClick={() =>
            setTheme(theme === "light" ? (theme = "dark") : (theme = "light"))
          }
        >
          <span
            className={` ${smFont} ${lgFont}  ml-1  font-semibold  hidden md:block  `}
          >
            {theme === "light" ? "Dark " : "Light "}
            Mode
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
