"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";

const CarouselData = [
  {
    id: 0,
    description:
      "Site demonstrativo do sistema STDoctor, feito para empresa StartTec",
    gif: "/gif/stdoctor.jpg",
    link: "https://st-doctor-lp.vercel.app/",
  },
  {
    id: 1,
    description:
      "Site para vendas de carros, feito para empresa Venda Seu Carro",
    gif: "/gif/vendaseucarro.jpg",
    link: "https://vendaseucarro.com.br/",
  },
  {
    id: 2,
    description:
      "Site para vendas de carros, feito para empresa Venda Seu Carro",
    gif: "/gif/moriabeauty.jpg",
    link: "https://moria-beauty.vercel.app/",
  },
];

export default function Projects() {
  const [step, setStep] = useState(0);
  function handleNext() {
    if (step >= 0 && step < 2) setStep((current) => current + 1);
    else setStep(0);
  }
  function handlePrevious() {
    if (step > 0 && step <= 2) setStep((current) => current - 1);
    else setStep(2);
  }
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-8"
    >
      <div className="flex flex-col gap-4 w-full pl-8 pr-4 items-end justify-center text-end">
        <h3 className="text-sm">O invisível nos salta os olhos</h3>
        <h2 className="text-xl text-shadow">
          Confira alguns dos meus projetos
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-row items-center justify-around gap-2 min-h-[550px] min-w-[375px] max-h-[550px] max-w-[375px]">
          <button
            onClick={handlePrevious}
            className="rounded-full p-3 bg-white text-main"
          >
            <ArrowLeft2 size={18} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a target="_blank" href={CarouselData[step].link}>
                <Image
                  width={300}
                  height={640}
                  src={CarouselData[step].gif}
                  alt={"Imagem do carrossel"}
                  className=" rounded-xl object-cover"
                />
              </a>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="rounded-full p-3 bg-white text-main"
          >
            <ArrowRight2 size={18} />
          </button>
        </div>

        <h3 className="text-xs">
          Clique no que gostar mais para visita-lo! 😉
        </h3>

        <div className="flex flex-row gap-4 mb-20">
          {CarouselData.map((item, index) => (
            <div
              key={index}
              className={`h-1 w-[30px] flex ${
                index === step ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
