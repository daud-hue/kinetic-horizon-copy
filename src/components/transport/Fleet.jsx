import React from "react";
import { CheckCircle2, Gauge, MapPin, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";

const features = [
  { icon: Gauge, title: "Rastreamento 24/7", desc: "Monitore sua carga em tempo real com GPS e telemetria avançada em cada veículo." },
  { icon: ShieldCheck, title: "Seguro de carga", desc: "Cobertura total para mercadorias de qualquer valor, com seguro e gerenciamento de risco." },
  { icon: MapPin, title: "Roteirização otimizada", desc: "Algoritmos de IA calculam a rota mais rápida e econômica, reduzindo prazos e custos." },
  { icon: CheckCircle2, title: "Motoristas certificados", desc: "Equipe treinada e certificada, com direção defensiva e protocolos de segurança rigorosos." },
];

export default function Fleet() {
  return (
    <section id="frota" className="relative bg-[#020617] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1673878277238-d5703954d7ad?fm=jpg&q=80&w=1600&auto=format&fit=crop"
                alt="Frota de caminhões"
                className="w-full h-[460px] object-cover"
                fittingType="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 lg:right-6 bg-[#0F172A] border border-[#F59E0B]/30 rounded-xl p-5 shadow-2xl">
              <div className="text-3xl font-black text-[#F59E0B]">850+</div>
              <div className="text-sm text-white font-semibold">Veículos rastreados</div>
              <div className="text-xs text-[#94A3B8]">em operação ativa</div>
            </div>
            {/* Velocity line */}
            <div className="absolute -top-4 -left-4 right-12 h-px bg-[#F59E0B]/40" />
          </div>

          {/* Content side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <span className="text-[#F59E0B] text-sm font-medium tracking-wide">Nossa Frota</span>
            </div>
            <h2 className="text-white font-black leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              Tecnologia e segurança<br />
              <span className="text-[#F59E0B]">em cada quilômetro</span>
            </h2>
            <p className="text-[#94A3B8] text-lg font-medium leading-relaxed mb-8">
              Nossa frota é o coração da operação. Veículos modernos, manutenção preventiva
              e tecnologia de ponta garantem que sua carga chegue intacta e no prazo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">{f.title}</h3>
                      <p className="text-[#94A3B8] text-sm font-medium leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}