'use client';

import HeroSection from '../components/home/HeroSection';
import SoftwareCategories from '../components/home/SoftwareCategories';
import HowWeAnalyzeTechnology from '../components/home/HowWeAnalyzeTechnology';
import ForMarketingProfessionals from '../components/home/ForMarketingProfessionals';
import EmailSignup from '../components/home/EmailSignup';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SoftwareCategories />
      <HowWeAnalyzeTechnology />
      <ForMarketingProfessionals />
      <EmailSignup />
    </main>
  );
}
