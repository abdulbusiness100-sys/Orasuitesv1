import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/home/hero";
import { IntroductionSection } from "@/components/home/introduction";
import { ServicesOverviewSection } from "@/components/home/services-overview";
import { RoomRentalsTeaserSection } from "@/components/home/room-rentals-teaser";
import { ResultsShowcaseSection } from "@/components/home/results-showcase";
import { TestimonialsSection } from "@/components/home/testimonials";
import { LocationSection } from "@/components/home/location";
import { CTASection } from "@/components/home/cta";
import { useSEO } from "@/hooks/use-seo";

export default function HomePage() {
  useSEO({
    title: "ORÁ. | Manchester's Premier Women-Only Wellness Sanctuary",
    description: "Ora Suites is Manchester's premier women-only beauty and wellness sanctuary. From advanced aesthetics and cosmetic procedures to manicures, hair services, and laser treatments. Book your transformation today.",
  });

  return (
    <Layout>
      <HeroSection />
      <IntroductionSection />
      <ServicesOverviewSection />
      <RoomRentalsTeaserSection />
      <ResultsShowcaseSection />
      <TestimonialsSection />
      <LocationSection />
      <CTASection />
    </Layout>
  );
}
