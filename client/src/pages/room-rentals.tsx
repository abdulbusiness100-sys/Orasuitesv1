import { Layout } from "@/components/layout/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Calendar, Users, Sparkles, Shield } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

import roomRentalImage from "@assets/room-rental_1770215241478.png";
import roomRentalImage2 from "@assets/room-rental_1770213665899.png";
import receptionImage from "@assets/reception-area_1770213665902.png";

const features = [
  {
    icon: Sparkles,
    title: "Fully Equipped Rooms",
    description:
      "State-of-the-art treatment rooms with premium equipment, linens, and amenities included.",
  },
  {
    icon: Users,
    title: "Client Base Access",
    description:
      "Tap into Ora's established client base and benefit from our marketing and referrals.",
  },
  {
    icon: Calendar,
    title: "Flexible Terms",
    description:
      "Choose from hourly, daily, or monthly rentals to match your practice needs.",
  },
  {
    icon: Shield,
    title: "Professional Support",
    description:
      "Reception services, booking management, and administrative support included.",
  },
];

const includedAmenities = [
  "Fully furnished treatment room",
  "Professional-grade treatment bed",
  "Storage facilities",
  "High-speed WiFi",
  "Reception and waiting area access",
  "Booking and scheduling support",
  "Marketing exposure on Ora channels",
  "Access to shared facilities",
  "Towels and linens provided",
  "Climate-controlled environment",
];

const pricingPlans = [
  {
    name: "Hourly",
    price: "£25",
    period: "per hour",
    description: "Perfect for occasional use",
    features: ["Minimum 2 hours", "All amenities included", "Same-day booking available"],
  },
  {
    name: "Daily",
    price: "£150",
    period: "per day",
    description: "Ideal for weekly practitioners",
    popular: true,
    features: ["Full day access (9am-7pm)", "Priority booking", "Marketing inclusion"],
  },
  {
    name: "Monthly",
    price: "£1,200",
    period: "per month",
    description: "Best for established practitioners",
    features: ["Dedicated room", "Full access", "Premium marketing", "Client referrals"],
  },
];

export default function RoomRentalsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useSEO({
    title: "Room Rentals for Practitioners | ORÁ. Manchester",
    description: "Rent a fully equipped treatment room at Ora Suites Manchester. Flexible hourly, daily, and monthly options for beauty and wellness practitioners.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-ora-taupe font-medium text-sm uppercase tracking-wider">
                For Practitioners
              </span>
              <h1 className="font-serif text-display-sm md:text-display text-foreground mt-2 mb-6">
                Your Space to Grow
              </h1>
              <p className="text-ora-fog text-lg leading-relaxed mb-6">
                Ora Suites offers fully equipped, beautifully designed treatment
                rooms for independent practitioners. Whether you're an aesthetician,
                therapist, beautician, or holistic wellness coach, this is your
                space to flourish.
              </p>
              <p className="text-ora-fog leading-relaxed mb-8">
                Join a community of women-led wellness experts in the heart of
                Manchester. Elevate your practice in a sanctuary designed for
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    data-testid="button-apply-now"
                    className="bg-ora-taupe text-white hover:bg-ora-fog px-8"
                  >
                    Apply Now
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    data-testid="button-book-tour"
                    variant="outline"
                    className="border-ora-smoke text-ora-fog hover:bg-ora-bone px-8"
                  >
                    Book a Tour
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-ora-bone rounded-lg -z-10" />
                <img
                  src={roomRentalImage}
                  alt="Ora Suites treatment room"
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section className="bg-ora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Ora?"
            subtitle="Everything you need to run a successful practice, all in one beautiful space."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-center p-6 bg-ora-milk rounded-md"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ora-bone mb-4">
                  <feature.icon size={24} className="text-ora-taupe" />
                </span>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-ora-fog text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src={roomRentalImage2}
                alt="Treatment room interior"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {includedAmenities.map((amenity, index) => (
                  <motion.div
                    key={amenity}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                    data-testid={`amenity-${amenity.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-ora-taupe/20 flex items-center justify-center">
                      <Check size={12} className="text-ora-taupe" />
                    </span>
                    <span className="text-ora-fog text-sm">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pricing" className="bg-ora-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Flexible Pricing"
            subtitle="Choose the rental option that best fits your practice needs."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
                className={`relative p-8 rounded-md bg-ora-milk ${
                  plan.popular ? "ring-2 ring-ora-taupe" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-ora-taupe text-white text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-xl text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-ora-fog text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="font-serif text-4xl text-foreground" data-testid={`price-${plan.name.toLowerCase()}`}>
                    {plan.price}
                  </span>
                  <span className="text-ora-fog text-sm ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-ora-fog text-sm">
                      <Check size={14} className="text-ora-taupe flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                    className={`w-full ${
                      plan.popular
                        ? "bg-ora-taupe text-white hover:bg-ora-fog"
                        : "bg-ora-bone text-ora-fog hover:bg-ora-greige"
                    }`}
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                The Ora Community
              </h2>
              <p className="text-ora-fog leading-relaxed mb-4">
                When you join Ora, you become part of a supportive community of
                women-led wellness professionals. Share knowledge, collaborate on
                projects, and grow together in an environment designed for success.
              </p>
              <p className="text-ora-fog leading-relaxed mb-6">
                Our practitioners include aestheticians, massage therapists,
                nutritionists, acupuncturists, and holistic wellness coaches—all
                united by a commitment to excellence and client care.
              </p>
              <Link href="/contact">
                <Button
                  data-testid="button-join-community"
                  className="bg-ora-taupe text-white hover:bg-ora-fog px-8"
                >
                  Join Our Community
                </Button>
              </Link>
            </div>
            <div>
              <img
                src={receptionImage}
                alt="Ora Suites reception area"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
