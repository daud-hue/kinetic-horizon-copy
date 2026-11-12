import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12000, suffix: "+", label: "Entregas por mês", sub: "em todo o território nacional" },
  { value: 850, suffix: "", label: "Caminhões na frota", sub: "rastreados em tempo real" },
  { value: 27, suffix: "", label: "Estados atendidos", sub: "cobertura completa do Brasil" },
  { value: 99, suffix: "%", label: "Entregas no prazo", sub: "compromisso com o tempo" },
];

function useCountUp(target, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf;
    const dur = 1800;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return val;
}

function StatCard({ stat, start, index }) {
  const val = useCountUp(stat.value, start);
  return (
    <div
      className="relative px-8 py-10 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {index !== 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/10 hidden lg:block" />
      )}
      <div className="text-4xl lg:text-5xl font-black text-white mb-2 tabular-nums">
        {val.toLocaleString("pt-BR")}
        <span className="text-[#F59E0B]">{stat.suffix}</span>
      </div>
      <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
      <div className="text-xs text-[#94A3B8] font-medium">{stat.sub}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-[#0F172A] border-y border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/50 to-transparent" />
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5"
      >
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} start={visible} index={i} />
        ))}
      </div>
    </section>
  );
}