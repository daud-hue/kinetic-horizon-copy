import React from "react";
import { ArrowUpRight, Truck, Plane, Ship, Warehouse } from "lucide-react";
import { Image } from "@/components/ui/image";

const services = [
  {
    icon: Truck,
    title: "Transporte Rodoviário",
    desc: "Frota própria de caminhões rastreados para cargas fracionadas e lotação. Cobertura nacional com monitoramento 24/7.",
    img: "https://images.unsplash.com/photo-1562892302-97faedd66f1c?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    tag: "Terrestre",
  },
  {
    icon: Plane,
    title: "Frete Aéreo Expresso",
    desc: "Entrega ágil para cargas de alto valor e urgência. Parcerias com os principais aeroportos e companhias aéreas.",
    img: "https://images.unsplash.com/photo-1628354215124-dd0ab72828ac?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    tag: "Aéreo",
  },
  {
    icon: Ship,
    title: "Logística Marítima",
    desc: "Cabotagem e transporte internacional de containers. Soluções completas para comércio exterior e portos.",
    img: "https://images.unsplash.com/photo-1597334948330-38795f25d05d?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    tag: "Marítimo",
  },
  {
    icon: Warehouse,
    title: "Armazenagem & CD",
    desc: "Centros de distribuição estratégicos com gestão de estoque, picking, packing e cross-docking automatizados.",
    img: "https://images.unsplash.com/photo-1720811559371-7b0ebd219127?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    tag: "Armazenagem",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      {/* Velocity line accent */}
      <div className="absolute top-0 left-0 right-0 h-px velocity-line" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <span className="text-[#F59E0B] text-sm font-medium tracking-wide">Matriz de Serviços</span>
            </div>
            <h2 className="text-white font-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Soluções logísticas<br />
              <span className="text-[#94A3B8]">de ponta a ponta</span>
            </h2>
          </div>
          <p className="text-[#94A3B8] text-lg font-medium max-w-md leading-relaxed">
            Da origem ao destino, integramos todos os modais de transporte
            em uma operação única, fluida e transparente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative rounded-2xl overflow-hidden bg-[#1e293b] border border-white/5 hover:border-[#F59E0B]/40 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/40 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-md text-[#F59E0B] text-xs font-semibold tracking-wide border border-[#F59E0B]/30">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6 -mt-12 relative">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#0F172A]" strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-[#94A3B8] text-sm font-medium leading-relaxed mb-4">{s.desc}</p>
                  <a
                    href="#cotacao"
                    className="inline-flex items-center gap-1.5 text-[#F59E0B] text-sm font-semibold group-hover:gap-2.5 transition-all"
                  >
                    Saiba mais
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}