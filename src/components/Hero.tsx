import { ArrowDown2 } from "iconsax-react";
import Image from "next/image";
import LinkDemo from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-row items-center justify-center bg-mobile-hero bg-cover bg-left-bottom bg-no-repeat min-h-screen relative lg:bg-none"
    >
      <div className="flex flex-row items-center justify-between w-4/5">
        <div className="flex flex-col w-4/5 md:w-3/5 gap-6 pl-4 lg:z-10 lg:w-1/2">
          <h1 className="text-shadow text-2xl">
            Web Design não é sobre construir sites bonitos
          </h1>
          <p className="text-sm">
            Mas sim possibilitar experiências únicas e inesquecíveis enquanto
            seu cliente desfruta de um sistema limpo, fluido e intuitivo. Fuja
            de templates e soluções pré prontas!{" "}
            <span className="font-bold text-shadow">
              Tenha projetos únicos como você
            </span>
          </p>
          <LinkDemo linkRef="#about">Saiba mais</LinkDemo>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:z-10">
          <Image
            className="shadow-neon"
            src={"/icons/next.svg"}
            alt="Logomarca NextJs"
            width={24}
            height={24}
          />
          <Image
            className="shadow-neon"
            src={"/icons/react.svg"}
            alt="Logomarca React"
            width={24}
            height={24}
          />
          <Image
            className="shadow-neon"
            src={"/icons/tailwind.svg"}
            alt="Logomarca TailwindCss"
            width={24}
            height={24}
          />
          <Image
            className="shadow-neon"
            src={"/icons/figma.svg"}
            alt="Logomarca Figma"
            width={24}
            height={24}
          />
        </div>
      </div>

      <aside className="flex bg-hero bg-cover w-3/5 h-screen bg-center absolute right-0 bottom-0" />
      <a href="#about">
        <ArrowDown2
          size="32"
          className="shadow-neon absolute bottom-20 left-[calc(50vw-16px)] animate-bounce"
        />
      </a>
    </section>
  );
}
