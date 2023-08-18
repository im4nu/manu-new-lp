import { ArrowDown2 } from "iconsax-react";
import Image from "next/image";
import LinkDemo from "./Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-row items-center justify-evenly bg-mobile-hero bg-cover bg-left-bottom bg-no-repeat min-h-screen relative"
    >
      <div className="flex flex-col w-4/5 gap-6 pl-4">
        <h1 className="text-shadow text-2xl">
          Web Design não é sobre construir sites bonitos
        </h1>
        <p className="text-sm">
          Mas sim possibilitar experiências únicas e inesquecíveis enquanto seu
          cliente desfruta de um sistema limpo, fluido e intuitivo. Fuja de
          templates e soluções pré prontas!{" "}
          <span className="font-bold text-shadow">
            Tenha projetos únicos como você
          </span>
        </p>
        <LinkDemo linkRef="#about">Saiba mais</LinkDemo>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
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

      <ArrowDown2
        size="32"
        className="shadow-neon absolute bottom-20 left-[calc(50vw-16px)] animate-bounce"
      />
    </section>
  );
}
