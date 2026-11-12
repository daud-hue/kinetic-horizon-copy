import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Truck } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Frota", href: "#frota" },
  { label: "Cotação", href: "#cotacao" },
  { label: "Rede", href: "#rede" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-[#F59E0B] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Truck className="w-5 h-5 text-[#0F172A]" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            HORIZON<span className="text-[#F59E0B]">LOG</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#94A3B8] hover:text-white transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F59E0B] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#cotacao"
            className="px-5 py-2.5 rounded-lg bg-[#F59E0B] text-[#0F172A] text-sm font-semibold hover:bg-[#fbbf24] transition-all duration-300 hover:scale-105"
          >
            Solicitar Cotação
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/5">
          <ul className="px-6 py-6 space-y-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-[#94A3B8] hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cotacao"
                onClick={() => setOpen(false)}
                className="block text-center px-5 py-3 rounded-lg bg-[#F59E0B] text-[#0F172A] font-semibold"
              >
                Solicitar Cotação
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}