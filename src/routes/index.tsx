import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Copy,
  Eye,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

type Project = {
  n: string;
  title: string;
  kind: string;
  domain: string;
  image: string;
  note: string;
  tags: string[];
  challenge: string;
  solution: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    n: "01",
    title: "Veloce",
    kind: "Loja online",
    domain: "velocebrasil.com.br",
    image: "/project-veloce.jpg",
    note: "Estudo visual — e-commerce escuro, produto em destaque e compra direta.",
    tags: ["E-commerce", "UI de Alta Conversão", "Mobile-First"],
    challenge:
      "Apresentar bicicletas de alta performance com valor percebido elevado e conduzir o visitante direto aos modelos e especificações.",
    solution:
      "Atmosfera escura de alto contraste com iluminação dramática no produto, tipografia esportiva imponente e barra de diferenciais técnicos logo na primeira dobra.",
    highlights: [
      "Destaque imediato da bicicleta com contraste preto e vermelho",
      "Ação principal clara acima da dobra para explorar modelos",
      "Ícones de prova técnica (carbono, aerodinâmica e fabricação nacional)",
    ],
  },
  {
    n: "02",
    title: "Atelier",
    kind: "Marca de móveis",
    domain: "atelierdesign.com.br",
    image: "/project-atelier.jpg",
    note: "Estudo visual — editorial claro, foto grande e tipografia serifada.",
    tags: ["Institucional", "Catálogo Premium", "Direção Editorial"],
    challenge:
      "Traduzir o cuidado artesanal e a nobreza da madeira natural em uma vitrine digital serena, sofisticada e convidativa.",
    solution:
      "Paleta orgânica em tons de pedra e areia, amplo respiro visual, tipografia serifada clássica e foco absoluto na textura da peça.",
    highlights: [
      "Composição minimalista que valoriza o design autoral do móvel",
      "Hierarquia tipográfica elegante que transmite calma e exclusividade",
      "Navegação limpa voltada para explorar coleções e agendar atendimento",
    ],
  },
  {
    n: "03",
    title: "Urbanic",
    kind: "Revista de moda",
    domain: "urbanicmag.com",
    image: "/project-urbanic.jpg",
    note: "Estudo visual — capa de revista, contraste alto e leitura rápida.",
    tags: ["Editorial", "Tipografia Forte", "Presença de Marca"],
    challenge:
      "Criar impacto visual instantâneo em segundos, unindo estética de capa de revista com leitura fluida no celular e no computador.",
    solution:
      "Manchete monumental em branco puro sobre fundo escuro profundo, fotografia de estúdio marcante e navegação inferior por editorias.",
    highlights: [
      "Impacto de primeira impressão digno de grandes publicações",
      "Contraste calibrado para leitura confortável em qualquer tela",
      "Caminhos rápidos para assinatura, redes sociais e matérias em destaque",
    ],
  },
];

const skills = [
  "Web design",
  "UI",
  "Layout",
  "Tipografia",
  "Responsivo",
  "HTML / CSS",
  "SEO local",
  "WhatsApp",
];

const deliverables = [
  "Layout 100% personalizado para o seu segmento",
  "Perfeito no celular, tablet e computador",
  "Botões e chamada direta para o seu WhatsApp",
  "Estrutura rápida e pronta para aparecer no Google",
];

const steps = [
  {
    icon: Search,
    title: "Entender",
    text: "O que o negócio vende, para quem e o que precisa aparecer primeiro.",
    meta: "Alinhamento rápido",
  },
  {
    icon: Lightbulb,
    title: "Direção",
    text: "Estrutura, páginas e o tom visual antes de abrir o layout.",
    meta: "Mapa da página",
  },
  {
    icon: PenTool,
    title: "Design",
    text: "Tela limpa, hierarquia clara e uma ação principal por seção.",
    meta: "Identidade visual",
  },
  {
    icon: Code2,
    title: "Construir",
    text: "Site rápido no celular, com textos que o cliente consegue ler.",
    meta: "Performance & SEO",
  },
  {
    icon: Rocket,
    title: "Publicar",
    text: "Revisão, ajustes e o site no ar, pronto para receber contato.",
    meta: "Entrega no ar",
  },
];

const pillars = [
  {
    a: "Sob",
    b: "medida",
    desc: "Nada de template genérico: visual alinhado ao seu negócio.",
  },
  {
    a: "Foco",
    b: "local",
    desc: "Pensado para quem busca seu serviço na sua cidade ou região.",
  },
  {
    a: "Tom",
    b: "direto",
    desc: "Sem enrolação: o visitante entende, confia e chama no WhatsApp.",
  },
];

const solutions = [
  {
    tag: "Mais procurado",
    title: "Landing Page Profissional",
    subtitle: "Foco total em gerar mensagens e orçamentos",
    description:
      "Página única estratégica com apresentação impecável do serviço, diferenciais, provas reais, perguntas frequentes e botão direto para o WhatsApp.",
    items: ["Ideal para prestadores de serviço e negócios locais", "Alta conversão no celular", "Entrega ágil"],
  },
  {
    tag: "Autoridade",
    title: "Site Institucional",
    subtitle: "Presença sólida para empresas em crescimento",
    description:
      "Estrutura completa para apresentar sua história, serviços detalhados, portfólio de trabalhos, localização e canais de atendimento profissional.",
    items: ["Ideal para clínicas, escritórios e empresas", "SEO local estruturado", "Credibilidade imediata"],
  },
  {
    tag: "Mostruário",
    title: "Catálogo & Vitrine Digital",
    subtitle: "Seus produtos em destaque com visual de marca grande",
    description:
      "Vitrine organizada por categorias, fotos em alta definição e compra ou pedido direto pelo WhatsApp sem burocracia para o cliente.",
    items: ["Ideal para lojas, móveis, moda e gastronomia", "Destaque visual de produtos", "Fácil navegação"],
  },
];

const faqs = [
  {
    q: "O site funciona bem no celular?",
    a: "Sim, 100%. Como a maioria dos clientes acessa pelo celular, todo projeto é desenhado primeiro para ficar rápido, legível e fácil de clicar no smartphone, além de impecável no computador.",
  },
  {
    q: "Preciso ter textos e fotos prontos antes de começar?",
    a: "Não precisa travar por isso. Na etapa de entendimento eu te oriento sobre o que é essencial e organizo os textos de forma direta e persuasiva para valorizar o seu negócio.",
  },
  {
    q: "Como o cliente entra em contato comigo pelo site?",
    a: "O site é construído com botões estratégicos que levam direto para o seu WhatsApp já com mensagem personalizada, além de formulário de orçamento e links para e-mail e localização.",
  },
  {
    q: "Meu site atual está antigo. Você também faz reforma?",
    a: "Faço sim. Se você já tem um site que não passa profissionalismo ou não gera contato, reformulamos todo o visual, velocidade e estrutura mantendo o seu domínio.",
  },
];

function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function handleSelectProjectInterest(projectTitle: string) {
    setSelectedInterest(`Gostei da direção visual do estudo ${projectTitle}`);
    setActiveProject(null);
    const el = document.getElementById("contato");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="inicio" className="min-h-screen bg-bg text-fg selection:bg-primary selection:text-fg">
      {/* Sticky Studio Header */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="group inline-flex items-center gap-3">
            <span className="flex size-8 items-center justify-center border border-line bg-surface font-display text-lg tracking-wider text-fg transition group-hover:border-primary">
              E<span className="text-primary">.</span>
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold tracking-[0.22em] text-fg uppercase">
                Emanuel Studio
              </p>
              <p className="text-[10px] tracking-[0.2em] text-muted uppercase">
                Web designer · criador digital
              </p>
            </div>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
            {[
              ["Projetos", "#projetos"],
              ["Ofício", "#oficio"],
              ["Processo", "#processo"],
              ["Soluções", "#solucoes"],
              ["Contato", "#contato"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xs tracking-[0.2em] text-muted uppercase transition hover:text-fg"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 border border-line bg-surface/90 px-3.5 py-2 text-[11px] font-medium tracking-[0.18em] text-fg uppercase transition hover:border-primary/70 hover:bg-surface-2"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span>Disponível para projetos</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-studio-grid">
        {/* Ambient subtle red glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 left-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-6xl px-5 pt-4 pb-16 lg:pb-20">
          <p
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1 select-none text-center font-display text-[22vw] leading-none tracking-tight text-primary/95 sm:text-[12rem] lg:text-[13.5rem]"
          >
            STUDIO
          </p>

          <div className="relative z-10 grid items-end gap-10 pt-16 lg:grid-cols-[1.15fr_0.9fr_0.75fr] lg:pt-24">
            {/* Left Column: Intro & Value Prop */}
            <div>
              <p className="font-script text-4xl text-fg/95 sm:text-5xl">Olá, eu sou</p>
              <h1 className="mt-1 font-display text-7xl leading-[0.84] tracking-wide sm:text-8xl lg:text-[6.25rem]">
                EMANUEL
              </h1>

              <div className="mt-4 inline-flex items-center gap-2.5 border-l-2 border-primary pl-3">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase sm:text-sm">
                  Emanuel Studio · sites para empresas
                </p>
              </div>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
                Crio sites personalizados para pequenas empresas. Visual forte, mensagem direta e uma página que faz o cliente entrar em contato — não só “existir na internet”.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contato"
                  className="group inline-flex items-center gap-2.5 bg-primary px-5 py-3.5 text-xs font-semibold tracking-[0.18em] text-fg uppercase transition hover:bg-primary/90"
                >
                  Solicitar orçamento
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 border border-line bg-surface/80 px-5 py-3.5 text-xs font-semibold tracking-[0.18em] text-fg uppercase transition hover:border-fg/40 hover:bg-surface-2"
                >
                  Ver projetos
                </a>
              </div>
            </div>

            {/* Center Column: Signature Panther Visual */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden border border-line/70 bg-bg shadow-[0_0_60px_-15px_rgba(225,6,0,0.28)]">
                <img
                  src="/marca.jpg"
                  alt="Pantera, marca visual do Emanuel Studio"
                  className="relative z-10 w-full object-cover object-top transition duration-700 hover:scale-[1.02]"
                />
                {/* Subtle bottom blend gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-bg via-bg/50 to-transparent"
                />
                <div className="absolute right-3 bottom-3 left-3 z-30 flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px] tracking-[0.22em] text-muted uppercase">
                  <span>Marca Visual</span>
                  <span className="text-primary">Presença & Precisão</span>
                </div>
              </div>
            </div>

            {/* Right Column: Studio Pillars */}
            <aside className="space-y-6 lg:pb-2">
              <div className="border border-line bg-surface/70 p-4 backdrop-blur-xs">
                <p className="text-sm leading-relaxed text-muted">
                  <span className="mr-2 inline-block size-2 rounded-full border border-primary bg-primary/30" />
                  Ideias de negócio viram presença digital clara, rápida e profissional.
                </p>
              </div>

              <ul className="divide-y divide-line border-t border-b border-line">
                {pillars.map((item, idx) => (
                  <li key={item.b} className="group py-3.5 transition hover:pl-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-4xl leading-none text-primary">
                          {item.a}
                        </span>
                        <span className="text-xs font-semibold tracking-[0.2em] text-fg uppercase">
                          {item.b}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-muted/60">0{idx + 1}</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        {/* Architectural Highlights Strip */}
        <div className="border-t border-line bg-surface/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 sm:divide-y-0">
            {[
              { icon: Sparkles, label: "Design Autoral", sub: "Feito para destacar sua marca" },
              { icon: MonitorSmartphone, label: "100% Responsivo", sub: "Rápido e nítido no celular" },
              { icon: MessageCircle, label: "Foco em Contato", sub: "Integração direta com WhatsApp" },
              { icon: Globe, label: "Pronto para o Google", sub: "Estrutura limpa e SEO local" },
            ].map((feat) => (
              <div key={feat.label} className="flex items-center gap-3.5 px-5 py-4">
                <span className="flex size-9 shrink-0 items-center justify-center border border-line bg-bg text-primary">
                  <feat.icon className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-fg uppercase">
                    {feat.label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-muted">{feat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projetos" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-line pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Portfólio & Conceitos
              </p>
              <h2 className="mt-1 font-display text-4xl tracking-wide sm:text-5xl">
                Projetos em destaque
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xs tracking-[0.16em] text-muted uppercase">
                Estudos de direção visual · clique para inspecionar
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.n}
                onClick={() => setActiveProject(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveProject(p);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalhes do projeto ${p.title}`}
                className="group flex flex-col justify-between border border-line bg-surface/50 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-surface focus:border-primary focus:outline-none"
              >
                <div>
                  {/* Browser Frame Header */}
                  <div className="flex items-center justify-between border-b border-line bg-bg px-3.5 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-line transition group-hover:bg-primary" />
                      <span className="size-2 rounded-full bg-line" />
                      <span className="size-2 rounded-full bg-line" />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-muted/80">
                      {p.domain}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-primary uppercase">
                      {p.n}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-bg">
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.kind}`}
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-bg/65 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 border border-primary bg-bg/95 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-fg uppercase">
                        <Eye className="size-3.5 text-primary" />
                        Ver estudo completo
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                          {p.n} · {p.kind}
                        </p>
                        <h3 className="mt-0.5 font-display text-3xl tracking-wide text-fg">
                          {p.title}
                        </h3>
                      </div>
                      <span className="flex size-8 items-center justify-center border border-line bg-bg text-muted transition group-hover:border-primary group-hover:bg-primary group-hover:text-fg">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.note}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 border-t border-line px-5 py-3.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line bg-bg px-2.5 py-0.5 text-[10px] tracking-[0.12em] text-muted uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ofício, Como Trabalho & Quote Section */}
      <section id="oficio" className="border-b border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[0.95fr_1.15fr_0.85fr]">
          {/* Column 1: Ofício */}
          <div className="border-b border-line px-5 py-12 lg:border-r lg:border-b-0 lg:pr-8">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-[0.22em] uppercase">Ofício</h2>
              <Layers className="size-4 text-primary" />
            </div>

            <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Foco
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Pequenas empresas que precisam de um site claro: serviços, fotos, prova e um jeito fácil de chamar no WhatsApp.
            </p>

            <p className="mt-7 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Ferramentas & Especialidades
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="border border-line bg-surface px-3 py-1.5 text-xs tracking-wide text-fg/90 transition hover:border-primary/60"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                O que seu site recebe
              </p>
              <ul className="mt-3.5 space-y-2.5">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Como trabalho */}
          <div
            id="processo"
            className="border-b border-line px-5 py-12 lg:border-r lg:border-b-0 lg:px-8"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-[0.22em] uppercase">Como trabalho</h2>
              <span className="text-[11px] tracking-[0.16em] text-muted uppercase">5 etapas</span>
            </div>

            <ol className="relative mt-7 space-y-6 before:absolute before:top-4 before:bottom-4 before:left-5 before:w-px before:bg-line">
              {steps.map((s, i) => (
                <li key={s.title} className="group relative flex gap-4">
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-primary transition group-hover:border-primary group-hover:bg-primary group-hover:text-fg">
                    <s.icon className="size-4" />
                  </span>
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                        0{i + 1} · {s.title}
                      </p>
                      <span className="border border-line bg-surface px-2 py-0.5 text-[10px] tracking-[0.12em] text-muted uppercase">
                        {s.meta}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Column 3: Crimson Studio Manifesto */}
          <aside className="relative flex flex-col justify-between overflow-hidden bg-primary px-6 py-12 text-fg">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-10 select-none font-display text-[11rem] leading-none text-black/15"
            >
              ES
            </div>

            <div className="relative z-10">
              <p className="font-display text-6xl leading-none text-fg/90">“</p>
              <p className="mt-2 text-xl font-medium leading-snug">
                Um bom site não é só bonito. Ele mostra o negócio e pede o próximo passo.
              </p>
              <p className="mt-6 font-script text-4xl">Emanuel</p>
              <p className="mt-1 text-[11px] tracking-[0.2em] text-fg/80 uppercase">
                Fundador · Emanuel Studio
              </p>
            </div>

            <div className="relative z-10 mt-10 border-t border-white/25 pt-6">
              <div className="mb-5 flex items-center gap-3.5">
                <img
                  src="/capa-whatsapp-emanuel-studio.jpg"
                  alt="Emanuel — Emanuel Studio"
                  className="size-12 border border-white/30 object-cover object-right"
                />
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase">
                    Atendimento Direto
                  </p>
                  <p className="text-xs text-fg/85">
                    Você fala direto com quem cria o seu projeto.
                  </p>
                </div>
              </div>

              <a
                href="#contato"
                className="group inline-flex w-full items-center justify-between bg-bg px-4 py-3.5 text-xs font-semibold tracking-[0.18em] text-fg uppercase transition hover:bg-surface-2"
              >
                <span>Vamos criar juntos</span>
                <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Solutions & FAQ Section */}
      <section id="solucoes" className="border-b border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-line pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Formatos sob medida
              </p>
              <h2 className="mt-1 font-display text-4xl tracking-wide sm:text-5xl">
                O que posso criar para sua empresa
              </h2>
            </div>
            <p className="text-xs tracking-[0.16em] text-muted uppercase">
              Projetos novos ou reforma completa
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {solutions.map((sol) => (
              <div
                key={sol.title}
                className="flex flex-col justify-between border border-line bg-surface p-6 transition hover:border-primary/60"
              >
                <div>
                  <span className="inline-block border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
                    {sol.tag}
                  </span>
                  <h3 className="mt-4 font-display text-3xl tracking-wide text-fg">{sol.title}</h3>
                  <p className="mt-1 text-xs font-medium text-fg/80">{sol.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{sol.description}</p>

                  <ul className="mt-5 space-y-2 border-t border-line pt-4">
                    {sol.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted">
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contato"
                  onClick={() => setSelectedInterest(sol.title)}
                  className="mt-6 inline-flex items-center justify-between border border-line bg-bg px-4 py-3 text-xs font-semibold tracking-[0.16em] text-fg uppercase transition hover:border-primary hover:text-primary"
                >
                  <span>Solicitar este formato</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="mt-14 grid gap-8 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Transparência
              </p>
              <h3 className="mt-1 font-display text-4xl tracking-wide">Perguntas frequentes</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Processo simples e sem termos técnicos complicados. Se tiver outra dúvida, basta chamar direto no WhatsApp.
              </p>
            </div>

            <div className="divide-y divide-line border border-line bg-surface">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-surface-2"
                    >
                      <span className="text-sm font-medium text-fg">{item.q}</span>
                      <ChevronDown
                        className={`size-4 shrink-0 text-primary transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-line/60 bg-bg/60 px-5 py-4 text-sm leading-relaxed text-muted">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Contact selectedInterest={selectedInterest} onClearInterest={() => setSelectedInterest("")} />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/5567992143643?text=Ol%C3%A1%2C%20Emanuel!%20Vi%20o%20site%20do%20Emanuel%20Studio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2.5 border border-white/15 bg-primary px-4 py-3 text-xs font-semibold tracking-[0.16em] text-fg uppercase shadow-[0_10px_30px_rgba(225,6,0,0.4)] transition hover:scale-[1.03] hover:bg-primary/90"
      >
        <Phone className="size-4" />
        <span>WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="border-t border-line bg-surface/40 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex size-7 items-center justify-center border border-line bg-bg font-display text-base text-fg">
              E<span className="text-primary">.</span>
            </span>
            <p className="text-xs font-semibold tracking-[0.2em] text-fg uppercase">
              Emanuel Studio
            </p>
            <span className="text-muted">·</span>
            <p className="text-xs text-muted">Sites profissionais para pequenas empresas</p>
          </div>

          <div className="flex items-center gap-6 text-xs tracking-[0.16em] text-muted uppercase">
            <a href="#inicio" className="transition hover:text-fg">
              Topo ↑
            </a>
            <a href="#projetos" className="transition hover:text-fg">
              Projetos
            </a>
            <a href="#oficio" className="transition hover:text-fg">
              Ofício
            </a>
            <a href="mailto:vendasemanuel2@gmail.com" className="transition hover:text-fg">
              E-mail
            </a>
          </div>
        </div>
      </footer>

      {/* Case Study Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Estudo visual ${activeProject.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-line bg-surface text-fg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-line bg-bg/95 px-5 py-3.5 backdrop-blur-xs">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-primary">
                  {activeProject.n}
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                  {activeProject.title} — {activeProject.kind}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center gap-1.5 border border-line bg-surface px-2.5 py-1 text-xs text-muted uppercase transition hover:border-primary hover:text-fg"
              >
                <span>Fechar</span>
                <X className="size-3.5" />
              </button>
            </div>

            <div className="border-b border-line bg-bg">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full object-cover"
              />
            </div>

            <div className="space-y-6 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    Estudo de Direção Visual
                  </p>
                  <h3 className="mt-1 font-display text-4xl tracking-wide">
                    {activeProject.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line bg-bg px-3 py-1 text-[10px] tracking-[0.14em] text-muted uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-line bg-bg p-4">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                    Objetivo do Projeto
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {activeProject.challenge}
                  </p>
                </div>
                <div className="border border-line bg-bg p-4">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                    Direção & Solução
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              <div className="border border-line bg-bg p-4">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-fg uppercase">
                  Pontos-chave da construção
                </p>
                <ul className="mt-3 space-y-2">
                  {activeProject.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                <p className="text-xs text-muted">
                  Quer um site com esse nível de acabamento para a sua empresa?
                </p>
                <button
                  type="button"
                  onClick={() => handleSelectProjectInterest(activeProject.title)}
                  className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-xs font-semibold tracking-[0.18em] text-fg uppercase transition hover:bg-primary/90"
                >
                  <span>Quero um projeto assim</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const projectTypes = [
  "Site novo",
  "Landing Page",
  "Catálogo / Loja",
  "Reforma de site",
];

function Contact({
  selectedInterest,
  onClearInterest,
}: {
  selectedInterest: string;
  onClearInterest: () => void;
}) {
  const [name, setName] = useState("");
  const [biz, setBiz] = useState("");
  const [projectType, setProjectType] = useState("Site novo");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const effectiveInterest = selectedInterest ? `${projectType} (${selectedInterest})` : projectType;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Olá, Emanuel.",
      "",
      `Sou ${name || "—"}, da ${biz || "minha empresa"}.`,
      `Interesse: ${effectiveInterest}.`,
      "",
      msg || "Quero um site personalizado.",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:vendasemanuel2@gmail.com?subject=${encodeURIComponent(
      `Projeto — ${biz || "Emanuel Studio"}`,
    )}&body=${body}`;
    setSent(true);
  }

  function sendViaWhatsApp() {
    const text = [
      "Olá, Emanuel! Vim pelo site do *Emanuel Studio*.",
      name ? `*Nome:* ${name}` : "",
      biz ? `*Empresa:* ${biz}` : "",
      `*Formato:* ${effectiveInterest}`,
      msg ? `*Detalhes:* ${msg}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/5567992143643?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function copyEmail() {
    navigator.clipboard?.writeText("vendasemanuel2@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  }

  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Orçamento & Contato Direto
          </p>
          <h2 className="mt-2 font-display text-6xl leading-[0.88] sm:text-7xl">
            VAMOS
            <br />
            TRABALHAR
            <br />
            JUNTOS
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Aberto a sites novos e reformas. Me conta o negócio em poucas linhas — eu respondo com o caminho mais direto.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center justify-between gap-3 border border-line bg-surface px-4 py-3">
              <div className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href="mailto:vendasemanuel2@gmail.com"
                  className="text-fg transition hover:text-primary"
                >
                  vendasemanuel2@gmail.com
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 border border-line bg-bg px-2.5 py-1 text-[10px] tracking-[0.14em] text-muted uppercase transition hover:border-primary hover:text-fg"
              >
                {copiedEmail ? (
                  <>
                    <Check className="size-3 text-primary" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </li>

            <li className="flex items-center justify-between gap-3 border border-line bg-surface px-4 py-3">
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href="https://wa.me/5567992143643"
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg transition hover:text-primary"
                >
                  (67) 99214-3643
                </a>
              </div>
              <a
                href="https://wa.me/5567992143643"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase"
              >
                <span>Chamar agora</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>

            <li className="flex items-center justify-between gap-3 border border-line bg-surface px-4 py-3">
              <div className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span>Atendimento remoto</span>
              </div>
              <span className="text-[10px] tracking-[0.16em] text-muted uppercase">
                Todo o Brasil
              </span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3 border border-line/80 bg-surface/40 px-4 py-3 text-xs text-muted">
            <ShieldCheck className="size-4 shrink-0 text-primary" />
            <span>Resposta rápida, proposta clara e sem compromisso inicial.</span>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4 border border-line bg-surface p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-fg uppercase">
                Iniciar conversa
              </p>
              <p className="mt-0.5 text-xs text-muted">
                Preencha abaixo para enviar por e-mail ou direto no WhatsApp
              </p>
            </div>
            <Zap className="size-4 text-primary" />
          </div>

          {selectedInterest && (
            <div className="flex items-center justify-between gap-2 border border-primary/40 bg-primary/10 px-3.5 py-2 text-xs text-fg">
              <span>
                Referência selecionada: <strong>{selectedInterest}</strong>
              </span>
              <button
                type="button"
                onClick={onClearInterest}
                className="text-muted transition hover:text-fg"
                aria-label="Remover referência"
              >
                <X className="size-3.5" />
              </button>
            </div>
          )}

          <div>
            <span className="block text-xs tracking-[0.16em] text-muted uppercase">
              Tipo de projeto
            </span>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {projectTypes.map((type) => {
                const active = projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`border px-2.5 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition ${
                      active
                        ? "border-primary bg-primary/15 text-fg"
                        : "border-line bg-bg text-muted hover:border-fg/30 hover:text-fg"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs tracking-[0.16em] text-muted uppercase">
              Nome
              <input
                required
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border border-line bg-bg px-3.5 py-3 text-sm text-fg placeholder:text-muted/40 outline-none transition focus:border-primary"
              />
            </label>
            <label className="block text-xs tracking-[0.16em] text-muted uppercase">
              Empresa
              <input
                required
                placeholder="Nome do negócio"
                value={biz}
                onChange={(e) => setBiz(e.target.value)}
                className="mt-2 w-full border border-line bg-bg px-3.5 py-3 text-sm text-fg placeholder:text-muted/40 outline-none transition focus:border-primary"
              />
            </label>
          </div>

          <label className="block text-xs tracking-[0.16em] text-muted uppercase">
            O que você precisa
            <textarea
              required
              rows={4}
              placeholder="Ex.: Preciso de um site profissional para apresentar meus serviços e receber clientes no WhatsApp..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="mt-2 w-full resize-none border border-line bg-bg px-3.5 py-3 text-sm text-fg placeholder:text-muted/40 outline-none transition focus:border-primary"
            />
          </label>

          <div className="grid gap-3 pt-1 sm:grid-cols-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 bg-primary px-4 py-3.5 text-xs font-semibold tracking-[0.18em] text-fg uppercase transition hover:bg-primary/90"
            >
              <span>Enviar proposta</span>
              <ArrowRight className="size-4" />
            </button>

            <button
              type="button"
              onClick={sendViaWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2 border border-line bg-bg px-4 py-3.5 text-xs font-semibold tracking-[0.16em] text-fg uppercase transition hover:border-primary hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" />
              <span>Enviar via WhatsApp</span>
            </button>
          </div>

          {sent && (
            <p className="border border-primary/30 bg-primary/10 px-3.5 py-2.5 text-xs text-fg">
              Seu app de e-mail vai abrir com a mensagem pronta. Se preferir resposta imediata, clique em “Enviar via WhatsApp”.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
