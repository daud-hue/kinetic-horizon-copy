import React, { useState } from "react";
import { MapPin, Package, Truck, Calculator, Check, ArrowRight } from "lucide-react";

const cargoTypes = [
  { id: "fracionada", label: "Carga Fracionada", icon: Package },
  { id: "lotacao", label: "Lotação", icon: Truck },
  { id: "container", label: "Container", icon: Package },
  { id: "refrigerada", label: "Refrigerada", icon: Truck },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const canNext = step === 1
    ? form.origin && form.destination
    : step === 2
    ? form.cargoType
    : form.weight;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section id="cotacao" className="relative bg-[#0F172A] py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: pitch */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <span className="text-[#F59E0B] text-sm font-medium tracking-wide">Central de Cotação</span>
            </div>
            <h2 className="text-white font-black leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              Simule sua rota<br />
              <span className="text-[#F59E0B]">em segundos</span>
            </h2>
            <p className="text-[#94A3B8] text-lg font-medium leading-relaxed mb-8">
              Interface inteligente de cotação. Informe origem, destino e tipo de carga —
              nossa equipe responde com a melhor solução logística em até 2 horas.
            </p>

            {/* Route visualizer */}
            <div className="rounded-2xl bg-[#1e293b] border border-white/5 p-6">
              <div className="text-xs text-[#94A3B8] font-semibold tracking-widest uppercase mb-4">
                Visualizador de Rota
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-[#F59E0B] ring-4 ring-[#F59E0B]/20" />
                  <span className="text-xs text-white font-medium">
                    {form.origin || "Origem"}
                  </span>
                </div>
                <div className="flex-1 relative h-0.5 bg-white/10">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#F59E0B] transition-all duration-700"
                    style={{ width: form.destination ? "100%" : "0%" }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 transition-all duration-700"
                    style={{ left: form.destination ? "100%" : "0%", transform: "translate(-50%,-50%)" }}
                  >
                    <Truck className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-4 h-4 rounded-full ring-4 transition-all ${form.destination ? "bg-[#F59E0B] ring-[#F59E0B]/20" : "bg-white/20 ring-white/5"}`} />
                  <span className="text-xs text-white font-medium">
                    {form.destination || "Destino"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-[#1e293b] border border-white/5 p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-[#F59E0B]/15 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-[#F59E0B]" strokeWidth={2.5} />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Cotação enviada!</h3>
                <p className="text-[#94A3B8] font-medium max-w-sm">
                  Recebemos sua solicitação de {form.origin} → {form.destination}.
                  Nossa equipe entrará em contato em até 2 horas com a melhor proposta.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setStep(1); setForm({ origin: "", destination: "", cargoType: "", weight: "" }); }}
                  className="mt-8 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Nova cotação
                </button>
              </div>
            ) : (
              <>
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <React.Fragment key={s}>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                          step >= s ? "bg-[#F59E0B] text-[#0F172A]" : "bg-white/5 text-[#94A3B8]"
                        }`}
                      >
                        {step > s ? <Check className="w-4 h-4" /> : s}
                      </div>
                      {s < 3 && <div className={`flex-1 h-0.5 rounded ${step > s ? "bg-[#F59E0B]" : "bg-white/10"}`} />}
                    </React.Fragment>
                  ))}
                </div>

                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#F59E0B]" /> Origem
                      </label>
                      <input
                        value={form.origin}
                        onChange={(e) => update("origin", e.target.value)}
                        placeholder="Ex: São Paulo, SP"
                        className="w-full px-4 py-3.5 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder:text-[#475569] font-medium focus:border-[#F59E0B] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#F59E0B]" /> Destino
                      </label>
                      <input
                        value={form.destination}
                        onChange={(e) => update("destination", e.target.value)}
                        placeholder="Ex: Rio de Janeiro, RJ"
                        className="w-full px-4 py-3.5 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder:text-[#475569] font-medium focus:border-[#F59E0B] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <label className="block text-sm font-semibold text-white mb-4">Tipo de carga</label>
                    <div className="grid grid-cols-2 gap-4">
                      {cargoTypes.map((c) => {
                        const Icon = c.icon;
                        const active = form.cargoType === c.id;
                        return (
                          <button
                            key={c.id}
                            onClick={() => update("cargoType", c.id)}
                            className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-all ${
                              active
                                ? "border-[#F59E0B] bg-[#F59E0B]/10"
                                : "border-white/10 bg-[#0F172A] hover:border-white/20"
                            }`}
                          >
                            <Icon className={`w-7 h-7 ${active ? "text-[#F59E0B]" : "text-[#94A3B8]"}`} />
                            <span className={`text-sm font-semibold ${active ? "text-white" : "text-[#94A3B8]"}`}>
                              {c.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4 text-[#F59E0B]" /> Peso aproximado (kg)
                      </label>
                      <input
                        type="number"
                        value={form.weight}
                        onChange={(e) => update("weight", e.target.value)}
                        placeholder="Ex: 1500"
                        className="w-full px-4 py-3.5 rounded-lg bg-[#0F172A] border border-white/10 text-white placeholder:text-[#475569] font-medium focus:border-[#F59E0B] focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="rounded-xl bg-[#0F172A] border border-white/5 p-5 space-y-3">
                      <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-semibold">
                        <Calculator className="w-4 h-4" /> Resumo da cotação
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-[#94A3B8] font-medium">
                          <span>Rota</span>
                          <span className="text-white">{form.origin} → {form.destination}</span>
                        </div>
                        <div className="flex justify-between text-[#94A3B8] font-medium">
                          <span>Carga</span>
                          <span className="text-white">{cargoTypes.find(c => c.id === form.cargoType)?.label || "—"}</span>
                        </div>
                        <div className="flex justify-between text-[#94A3B8] font-medium">
                          <span>Peso</span>
                          <span className="text-white">{form.weight ? `${form.weight} kg` : "—"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-3 rounded-lg text-[#94A3B8] font-semibold hover:text-white transition-colors"
                    >
                      Voltar
                    </button>
                  ) : <span />}

                  {step < 3 ? (
                    <button
                      onClick={() => canNext && setStep(step + 1)}
                      disabled={!canNext}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F59E0B] text-[#0F172A] font-semibold hover:bg-[#fbbf24] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!canNext}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F59E0B] text-[#0F172A] font-semibold hover:bg-[#fbbf24] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Enviar cotação
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}