import { Faq } from "@/components/faq";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/key-features";
import NewsletterComponent from "@/components/newsletter";
import { SmarterAd } from "@/components/smarter-ad";
import TrustedCompanies from "@/components/trusted-companies";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <TrustedCompanies/>
      <FeaturesSection />
      <SmarterAd/>
      <Faq/>
      <NewsletterComponent/>
    </main>
  );
}
