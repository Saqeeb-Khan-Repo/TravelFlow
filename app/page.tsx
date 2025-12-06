import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import SignupPage from "@/components/signUp";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <About />
        <SignupPage />
        <Footer />
      </main>
    </>
  );
}
