"use client";

import { Header, PageLayout, Footer } from "@/components/layout";
import { Hero, Comparison, Features, UseCases, Benefits, Pricing, FAQ, CTA } from "@/components/sections";

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <div className="h-32 md:h-48" />
        <UseCases />
        <Benefits />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </PageLayout>
  );
}
