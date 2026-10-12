import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone, Search, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const projects = [
  {
    n: "01",
    title: "Veloce",
    kind: "Loja online",
    image: "/project-veloce.jpg",
    note: "Estudo visual — e-commerce escuro, produto em destaque e compra direta.",
  },
  {
    n: "02",
    title: "Atelier",
    kind: "Marca de móveis",
    image: "/project-atelier.jpg",
    note: "Estudo visual — editorial claro, foto grande e tipografia serifada.",
  },
  {
    n: "03",
    title: "Urbanic",
    kind: "Revista de moda",
    image: "/project-urbanic.jpg",
    note: "Estudo visual — capa de revista, contraste alto e leitura rápida.",
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

const steps = [
  { icon: Search, title: "Entender", text: "O que o negócio vende, para quem e o que precisa aparecer primeiro." },
  { icon: Lightbulb, title: "Direção", text: "Estrutura, páginas e o tom visual antes de abrir o layout." },
  { icon: PenTool, title: "Design", text: "Tela limpa, hierarquia clara e uma ação principal por seção." },
  { icon: Code2, title: "Construir", text: "Site rápido no celular, com textos que o cliente consegue ler." },
  { icon: Rocket, title: "Publicar", text: "Revisão, ajustes e o site no ar, pronto para receber contato." },
];

function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-xs tracking-[0.22em] text-muted uppercase">
        <p>Web designer<br className="sm:hidden" /> <span className="hidden sm:inline">· </span>criador digital</p>
        <a href="#contato" className="inline-flex items-center gap-2 text-fg">
          <span className="size-1.5 rounded-full bg-primary" />
          Disponível para projetos
        </a>
      </header>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-16 pt-2">
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 select-none text-center font-display text-[22vw] leading-none tracking-tight text-primary sm:text-[11.5rem]"
        >
          STUDIO
        </p>

        <div className="relative grid items-end gap-8 pt-16 lg:grid-cols-[1.1fr_0.9fr_0.7fr] lg:pt-24">
          <div>
            <p className="font-script text-4xl text-fg">Olá, eu sou</p>
            <h1 className="mt-1 font-display text-7xl leading-[0.85] tracking-wide sm:text-8xl">
              EMANUEL
            </h1>
            <p className="mt-4 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Emanuel Studio · sites para empresas
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Crio sites personalizados para pequenas empresas. Visual forte, mensagem direta e uma página que faz o cliente entrar em contato — não só “existir na internet”.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <img
              src="/marca.jpg"
              alt="Pantera, marca visual do Emanuel Studio"
              className="relative z-10 w-full object-cover object-top"
            />
          </div>

          <aside className="space-y-6 lg:pb-6">
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              <span className="mr-2 inline-block size-2 rounded-full border border-primary" />
              Ideias de negócio viram presença digital clara, rápida e profissional.
            </p>
            <ul className="space-y-4 border-t border-line pt-4">
              {[
                ["Sob", "medida"],
                ["Foco", "local"],
                ["Tom", "direto"],
              ].map(([a, b]) => (
                <li key={b} className="flex items-baseline gap-3">
                  <span className="font-display text-4xl text-primary">{a}</span>
                  <span className="text-xs tracking-[0.18em] text-muted uppercase">{b}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="projetos" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-sm font-semibold tracking-[0.22em] uppercase">Projetos em destaque</h2>
            <p className="hidden text-xs tracking-[0.16em] text-muted uppercase sm:block">Estudos de direção visual</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.n} className="group">
                <div className="overflow-hidden border border-line bg-surface">
                  <img src={p.image} alt="" className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-primary">{p.n}</p>
                    <h3 className="font-display text-3xl tracking-wide">{p.title}</h3>
                    <p className="text-xs tracking-[0.14em] text-muted uppercase">{p.kind}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-4 text-muted" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[0.9fr_1.1fr_0.8fr]">
          <div className="border-b border-line px-5 py-10 lg:border-r lg:border-b-0">
            <h2 className="text-sm font-semibold tracking-[0.22em] uppercase">Ofício</h2>
            <p className="mt-6 text-xs tracking-[0.18em] text-primary uppercase">Foco</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Pequenas empresas que precisam de um site claro: serviços, fotos, prova e um jeito fácil de chamar no WhatsApp.
            </p>
            <p className="mt-6 text-xs tracking-[0.18em] text-primary uppercase">Ferramentas</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-line px-5 py-10 lg:border-r lg:border-b-0">
            <h2 className="text-sm font-semibold tracking-[0.22em] uppercase">Como trabalho</h2>
            <ol className="mt-6 space-y-5">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-primary">
                    <s.icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-muted uppercase">0{i + 1}</p>
                    <h3 className="font-medium">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="bg-primary px-5 py-10 text-fg">
            <p className="font-display text-6xl leading-none">“</p>
            <p className="mt-2 text-lg leading-snug">
              Um bom site não é só bonito. Ele mostra o negócio e pede o próximo passo.
            </p>
            <p className="mt-6 font-script text-3xl">Emanuel</p>
            <a href="#contato" className="mt-10 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
              Vamos criar juntos <ArrowRight className="size-4" />
            </a>
          </aside>
        </div>
      </section>

      <Contact />

      <a
        href="https://wa.me/5567992143643"
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 bg-primary px-4 py-3 text-xs font-semibold tracking-[0.16em] text-fg uppercase shadow-lg"
      >
        <Phone className="size-4" />
        WhatsApp
      </a>
      <footer className="border-t border-line px-5 py-6 text-center text-xs tracking-[0.16em] text-muted uppercase">
        Emanuel Studio
      </footer>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [biz, setBiz] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Olá, Emanuel.%0A%0ASou ${name || "—"}, da ${biz || "minha empresa"}.%0A${msg || "Quero um site personalizado."}`;
    window.location.href = `mailto:vendasemanuel2@gmail.com?subject=${encodeURIComponent("Projeto — Emanuel Studio")}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contato" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-6xl leading-[0.9] sm:text-7xl">
            VAMOS<br />TRABALHAR<br />JUNTOS
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Aberto a sites novos e reformas. Me conta o negócio em poucas linhas — eu respondo com o caminho mais direto.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3"><Mail className="size-4 text-primary" /><a href="mailto:vendasemanuel2@gmail.com">vendasemanuel2@gmail.com</a></li>
            <li className="flex items-center gap-3"><Phone className="size-4 text-primary" /><a href="https://wa.me/5567992143643" target="_blank" rel="noreferrer">(67) 99214-3643</a></li>
            <li className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> Atendimento remoto</li>
          </ul>
        </div>

        <form onSubmit={submit} className="space-y-3 border border-line bg-surface p-5">
          <label className="block text-xs tracking-[0.16em] text-muted uppercase">
            Nome
            <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full border border-line bg-bg px-3 py-3 text-sm text-fg outline-none focus:border-primary" />
          </label>
          <label className="block text-xs tracking-[0.16em] text-muted uppercase">
            Empresa
            <input required value={biz} onChange={(e) => setBiz(e.target.value)} className="mt-2 w-full border border-line bg-bg px-3 py-3 text-sm text-fg outline-none focus:border-primary" />
          </label>
          <label className="block text-xs tracking-[0.16em] text-muted uppercase">
            O que você precisa
            <textarea required rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} className="mt-2 w-full resize-none border border-line bg-bg px-3 py-3 text-sm text-fg outline-none focus:border-primary" />
          </label>
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 bg-primary px-4 py-3 text-xs font-semibold tracking-[0.18em] text-fg uppercase">
            Enviar proposta <ArrowRight className="size-4" />
          </button>
          {sent && <p className="text-sm text-muted">Seu app de e-mail vai abrir com a mensagem pronta.</p>}
        </form>
      </div>
    </section>
  );
}
