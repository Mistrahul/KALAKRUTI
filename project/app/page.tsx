import Header from '@/components/Header';
import Hero from '@/components/Hero';
import USPBar from '@/components/USPBar';
import ServicesShowcase from '@/components/ServicesShowcase';
import PortfolioHighlights from '@/components/PortfolioHighlights';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <USPBar />
      <ServicesShowcase />
      <PortfolioHighlights />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}