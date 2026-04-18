"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black">
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/10 to-black" />
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute h-px bg-white"
              style={{
                top: `${12.5 * (i + 1)}%`,
                left: 0,
                right: 0,
              }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px bg-white"
              style={{
                left: `${8.33 * (i + 1)}%`,
                top: 0,
                bottom: 0,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="lg:max-w-[70%]">
          {/* Eyebrow */}
          <div 
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/60">
              <span className="w-8 h-px bg-white/30" />
              Private trading & capital management
            </span>
          </div>
          
          {/* Main headline */}
          <div className="mb-8 lg:mb-12">
            <h1 
              className={`text-left text-[clamp(2.5rem,6vw,6rem)] font-display leading-[1.1] tracking-tight text-white transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Gold trading<br />
              for disciplined<br />
              investors.
            </h1>
          </div>

          {/* Subheading */}
          <div 
            className={`mb-10 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              JXC Capital deploys algorithmic systems and discretionary expertise in XAUUSD markets. Every trade is governed by strict rules, ensuring consistency, emotional neutrality, and long-term capital preservation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="rounded-full bg-white text-black hover:bg-white/90 font-medium px-8"
            >
              View Strategy
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 text-white hover:bg-white/10 font-medium px-8"
            >
              Request Access
            </Button>
          </div>
        </div>
      </div>
      
      {/* Key metrics at bottom */}
      <div 
        className={`absolute bottom-12 left-0 right-0 px-6 lg:px-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start gap-12 lg:gap-20">
          {[
            { value: "XAUUSD", label: "gold specialization" },
            { value: "Algorithmic", label: "+ discretionary" },
            { value: "Exclusive", label: "private access" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-2xl lg:text-3xl font-display text-white">{stat.value}</span>
              <span className="text-xs text-white/50 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
