import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_VIDEO = "https://media.base44.com/videos/public/6a7797ec3697ea61e2d3e4fe/52bb6999a_Hero_Truck_Forward.mp4";

export default function Hero() {
  const heroRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);

  // Parallax on mouse move
  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      setMouseX(x * 30);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#0F172A]"
    >
      {/* Background highway video — truck in motion */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/50 via-transparent to-[#0F172A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/75 via-[#0F172A]/10 to-transparent" />
      </div>

      {/* Moving light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#F59E0B]/60 to-transparent streak-move"
            style={{
              top: `${55 + i * 8}%`,
              width: "40%",
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${2.5 + i * 0.3}s`,
            }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <div
            key={`r${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-red-500/40 to-transparent streak-move-rev"
            style={{
              top: `${60 + i * 6}%`,
              width: "35%",
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Giant heading behind */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transform: `translateX(${mouseX * 0.3}px)` }}
      >
        <h1 className="text-white/10 font-black tracking-tighter text-center leading-none select-none"
          style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}
        >
          MOVING<br />THE FUTURE
        </h1>
      </div>

      {/* Moving road dashes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <div className="absolute bottom-12 left-0 right-0 h-1.5 road-dashes" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-10 max-w-[1400px] mx-auto pt-20">
        <div className="max-w-2xl" style={{ transform: `translateX(${mouseX * 0.15}px)` }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[#F59E0B] text-sm font-medium tracking-wide">Logística Inteligente em Tempo Real</span>
          </div>
          <h2 className="text-white font-black leading-[0.95] tracking-tight mb-6 drop-shadow-lg"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Transporte que<br />
            <span className="text-[#F59E0B]">move o futuro</span>
          </h2>
          <p className="text-[#cbd5e1] text-lg lg:text-xl font-medium leading-relaxed max-w-xl mb-8 drop-shadow">
            Conectamos o Brasil com logística de precisão. Rastreamento em tempo real,
            frota moderna e entrega garantida — do armazém ao destino final.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cotacao"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-[#F59E0B] text-[#0F172A] font-semibold text-base hover:bg-[#fbbf24] transition-all duration-300 hover:scale-105"
            >
              Cote sua carga agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Nossos serviços
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8] animate-bounce">
        <span className="text-xs tracking-widest uppercase">Role para explorar</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}