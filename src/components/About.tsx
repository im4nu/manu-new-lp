const cardsData = [
  {
    id: 0,
    title: "Ambições",
    description:
      "A minha meta é fazer a sua ideia decolar da melhor maneira possível. Clientes satisfeitos são o melhor marketing que um profissional pode ter!",
    bg: "bg-astronaut",
  },
  {
    id: 1,
    title: "Experiência",
    description:
      "Trabalho na área da tecnologia desde os meus 17 anos. São muitos anos de experiência que me trouxeram onde estou hoje. Tanto tempo de atuação na área reasultou em soluções acertivas para qualquer tipo de problema",
    bg: "bg-expirience",
  },
  {
    id: 2,
    title: "Qualificação",
    description:
      "Tenho formação acadêmica técnica, tecnólogo, bacharelado e licenciatura. Cursos de graduação e especialização na área. Com foco em desenvolvimento de softwares e experiência do usuário",
    bg: "bg-qualify",
  },
  {
    id: 3,
    title: "Segurança",
    description:
      "LGPD, tratamento de dados, segurança do usuário, segurança do cliente e o mais importante CONFIDENCIALIDADE e UNICIDADE no seu projeto",
    bg: "bg-security",
  },
  {
    id: 4,
    title: "Autenticidade",
    description:
      "Comigo o seu projeto será ÚNICO, ninguém nunca viu nada igual. Projetos feitos do 0 com soluções personalizadas para cada problema. FUJA DE TEMPLATES E SOLUÇÕES PRÉ PRONTAS! Tenha projetos únicos como você",
    bg: "bg-ideia",
  },
  {
    id: 5,
    title: "Velocidade",
    description:
      "Projetos rápidos. Nada de abrir um site e esperar mais de 2 segundos para ver o que deseja. Respeitamos todas as boas práticas, métricas e padrões de desenvolvimento para que seu projeto voe assim como a sua ideia!",
    bg: "bg-speed",
  },
];

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 pl-8 md:w-4/5 md:items-start">
        <h3 className="text-sm">Me conheça melhor</h3>
        <h2 className="text-xl text-shadow">
          Um profissional que faz a diferença!
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap md:mt-12 items-center justify-center gap-6 mb-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col items-start justify-center p-6 max-w-xs gap-4 rounded-xl bg-cover bg-center bg-no-repeat ${card.bg} md:w-[320px] md:h-[240px]`}
          >
            <p className="text-black bg-white rounded-lg py-3 px-12 text-lg">
              {card.title}
            </p>
            <p className="text-sm text-justify">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
