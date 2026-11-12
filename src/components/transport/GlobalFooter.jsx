import React, { useState } from "react";
import { Truck, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Image } from "@/components/ui/image";

const hubs = [
  { name: "São Paulo", x: "32%", y: "62%", time: "20:56", temp: "18°C" },
  { name: "Rio de Janeiro", x: "38%", y: "70%", time: "20:56", temp: "22°C" },
  { name: "Brasília", x: "45%", y: "48%", time: "20:56", temp: "20°C" },
  { name: "Salvador", x: "58%", y: "52%", time: "20:56", temp: "26°C" },
  { name: "Manaus", x: "30%", y: "28%", time: "20:56", temp: "30°C" },
  { name: "Porto Alegre", x: "36%", y: "88%", time: "20:56", temp: "16°C" },
  { name: "Fortaleza", x: "62%", y: "32%", time: "20:56", temp: "28°C" },
  { name: "Curitiba", x: "40%", y: "80%", time: "20:56", temp: "17°C" },
];

export default function GlobalFooter() {
  const [active, setActive] = useState(null);

  return (
    <footer id="rede" className="relative bg-[#020617] overflow-hidden">
      {/* Map section */}
      <div className="relative h-[420px] lg:h-[500px] overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1707120507473-c4277b3134cf?fm=jpg&q=80&w=2000&auto=format&fit=crop"
          alt="Rede logística nacional"
          className="w-full h-full object-cover opacity-40"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-transparent to-[#020617]" />

        {/* Hub nodes */}
        {hubs.map((h, i) => (
          <button
            key={h.name}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="absolute group"
            style={{ left: h.x, top: h.y, transform: "translate(-50%,-50%)" }}
            aria-label={h.name}
          >
            <span className="block w-3 h-3 rounded-full bg-[#F59E0B] ring-4 ring-[#F59E0B]/20 group-hover:scale-150 transition-transform" />
            <span className="absolute left-1/2 -translate-x-1/2 -top-7 text-xs text-white font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {h.name}
            </span>
            {active === i && (
              <div className="absolute left-1/2 -translate-x-1/2 top-6 bg-[#0F172A] border border-[#F59E0B]/30 rounded-lg p-3 whitespace-nowrap z-20 shadow-xl">
                <div className="text-white font-bold text-sm mb-1">{h.name}</div>
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                  <Clock className="w-3 h-3 text-[#F59E0B]" /> {h.time} local
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mt-0.5">
                  <span className="text-[#F59E0B]">●</span> {h.temp}
                </div>
              </div>
            )}
          </button>
        ))}

        <div className="absolute top-8 left-6 lg:left-10 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 backdrop-blur-md border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[#F59E0B] text-sm font-medium tracking-wide">Rede Nacional Ativa</span>
          </div>
          <h2 className="text-white font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Sempre em movimento,<br />
            <span className="text-[#F59E0B]">em todo o Brasil</span>
          </h2>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B] flex items-center justify-center">
                <Truck className="w-5 h-5 text-[#0F172A]" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                HORIZON<span className="text-[#F59E0B]">LOG</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm font-medium leading-relaxed mb-5">
              Logística inteligente conectando o Brasil. Precisão, velocidade e
              confiabilidade em cada entrega.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:bg-[#F59E0B] hover:text-[#0F172A] hover:border-[#F59E0B] transition-all"
                  aria-label="Rede social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Serviços</h4>
            <ul className="space-y-3">
              {["Transporte Rodoviário", "Frete Aéreo", "Logística Marítima", "Armazenagem", "Distribuição"].map((l) => (
                <li key={l}>
                  <a href="#servicos" className="text-[#94A3B8] text-sm font-medium hover:text-[#F59E0B] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Empresa</h4>
            <ul className="space-y-3">
              {["Sobre nós", "Nossa frota", "Tecnologia", "Sustentabilidade", "Trabalhe conosco"].map((l) => (
                <li key={l}>
                  <a href="#frota" className="text-[#94A3B8] text-sm font-medium hover:text-[#F59E0B] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-[#94A3B8] text-sm font-medium">
                <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                Av. Industrial, 2500 — São Paulo, SP
              </li>
              <li className="flex items-center gap-2.5 text-[#94A3B8] text-sm font-medium">
                <Phone className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                0800 580 0000
              </li>
              <li className="flex items-center gap-2.5 text-[#94A3B8] text-sm font-medium">
                <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                contato@horizonlog.com.br
              </li>
              <li className="flex items-center gap-2.5 text-[#94A3B8] text-sm font-medium">
                <Clock className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                Operação 24h, 7 dias por semana
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm font-medium">
            © 2026 HorizonLog Transportes. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#94A3B8] text-sm font-medium hover:text-[#F59E0B] transition-colors">Privacidade</a>
            <a href="#" className="text-[#94A3B8] text-sm font-medium hover:text-[#F59E0B] transition-colors">Termos</a>
            <a href="#" className="text-[#94A3B8] text-sm font-medium hover:text-[#F59E0B] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}