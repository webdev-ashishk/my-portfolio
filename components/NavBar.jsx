"use client";
import { RiMenu3Line } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const currentRoute = usePathname();

  // styles for all links
  const linkStyle =
    "flex items-center pl-[30px] pr-[30px] h-full no-underline hover:text-blue-600 duration-300";

  // styles for active and non-active links
  const activeStyle = linkStyle + " text-blue-700";
  const nonActiveStyle = linkStyle + " text-white";
  return (
    <>
      <nav className="nav flex justify-between items-center font-mono text-2xl pl-20 font-extrabold border-b-2">
        <h1>portfolio</h1>
        <div className="nav-bar flex justify-center items-center">
          <ul className="nav-items flex text-2xl justify-end p-10 font-bold shadow-2xl text-blue-700">
            <Link
              href="/"
              className={currentRoute === "/" ? activeStyle : nonActiveStyle}
            >
              Home
            </Link>

            <Link
              href="/projects"
              className={
                currentRoute === "/projects" ? activeStyle : nonActiveStyle
              }
            >
              Projects
            </Link>
            <Link
              href={"/skills"}
              className={
                currentRoute === "/skills" ? activeStyle : nonActiveStyle
              }
            >
              Skills
            </Link>
            <Link
              href={"/about"}
              className={
                currentRoute === "/about" ? activeStyle : nonActiveStyle
              }
            >
              About
            </Link>
          </ul>
          <div className="menu mr-8 border-2 border-blue-600 hidden">
            <RiMenu3Line
              className=""
              onClick={() => {
                console.log("menu clicked!");
                setShowDiv(!showDiv);
              }}
            />
          </div>
        </div>
      </nav>
      {showDiv && <div className="h-[100vh]">show div is true</div>}
    </>
  );
};

export default NavBar;
