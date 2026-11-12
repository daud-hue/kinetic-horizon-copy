import React from "react";
import Navbar from "@/components/transport/Navbar";
import Hero from "@/components/transport/Hero";
import Stats from "@/components/transport/Stats";
import Services from "@/components/transport/Services";
import Fleet from "@/components/transport/Fleet";
import QuoteForm from "@/components/transport/QuoteForm";
import GlobalFooter from "@/components/transport/GlobalFooter";

export default function Home() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Fleet />
        <QuoteForm />
        <GlobalFooter />
      </main>
    </div>
  );
}