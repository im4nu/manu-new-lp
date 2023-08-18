"use client";

import { CloseCircle, HambergerMenu } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu((current) => !current);
  }
  return (
    <nav className="flex flex-col fixed z-20 top-0 left-0 items-center justify-center w-full h-fit py-6">
      <div
        className={`flex flex-row items-center justify-between w-5/6 max-w-7xl ease-in-out duration-300 nav-shadow px-2 ${
          menu ? "rounded-t-xl" : "rounded-xl"
        }`}
      >
        <Image
          alt="Logomarca manu"
          src={"/logo.png"}
          width={90}
          height={90}
          className="p-3"
        />

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

      <div
        className={`flex nav-shadow ease-out duration-300 items-center justify-center rounded-b-xl w-5/6 max-w-7xl h-fit ${
          menu ? "opacity-100 h-[210px]" : "opacity-0 w-0 h-0"
        }`}
      >
        {menu && (
          <ul className="flex flex-col w-full px-12 items-start gap-4 py-8">
            <li>
              <a onClick={handleMenu} href="#hero">
                Início
              </a>
            </li>
            <li>
              <a onClick={handleMenu} href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a onClick={handleMenu} href="#projects">
                Projetos
              </a>
            </li>
            <li>
              <a onClick={handleMenu} href="#values">
                Valores
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
