import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <section id="hero"><HeroSection /></section>
      <section id="features"><FeaturesSection /></section>
      <section id="how-it-works"><HowItWorksSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="cta"><CtaSection /></section>
      <section id="footer"><FooterSection /></section>
    </main>
  );
}
