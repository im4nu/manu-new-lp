"use client";

import { CloseCircle, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <nav className="flex fixed z-20 top-0 left-0 flex-row items-center justify-center w-full h-fit py-6">
      <div className="flex flex-row items-center justify-between w-5/6 max-w-7xl">
        <Image alt="Logomarca manu" src={"/logo.png"} width={80} height={80} />

        <button
          onClick={handleMenu}
          className="flex p-3 items-center justify-center relative"
        >
          <div
            className={`absolute top-0 right-4 ease-linear duration-500 ${
              menu ? "opacity-0" : "opacity-100"
            }`}
          >
            <HambergerMenu size={32} />
          </div>
          <div
            className={`absolute top-0 right-4 ease-linear duration-500 ${
              menu ? "opacity-100" : "opacity-0"
            }`}
          >
            <CloseCircle size={32} />
          </div>
        </button>
      </div>
    </nav>
  );
}
