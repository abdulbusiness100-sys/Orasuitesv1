import { Layout } from "@/components/layout/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

import aestheticsImage from "@assets/service-aesthetics_1770213665902.png";
import nailsImage from "@assets/service-nails_1770213665903.png";
import nailsStationImage from "@assets/service-nails-station_1770215234347.png";
import hairImage from "@assets/service-hair_1770213665902.png";
import roomRentalImage from "@assets/room-rental_1770213665899.png";
import productImage from "@assets/product-display_1770215241478.png";

const serviceCategories = [
  {
    id: "aesthetics",
    title: "Aesthetics & Cosmetic Procedures",
    description:
      "Regenerative. Intentional. Transformative. Our aesthetic treatments are designed to enhance your natural beauty from the inside out.",
    image: aestheticsImage,
    treatments: [
      { name: "Profhilo & Skin Boosters", price: "From £250" },
      { name: "Polynucleotide (PDRN) Injections", price: "From £300" },
      { name: "Dermal Fillers", price: "From £200" },
      { name: "Anti-Wrinkle Injections", price: "From £180" },
      { name: "Exosome Therapy", price: "From £350" },
      { name: "LED Light Therapy", price: "From £60" },
      { name: "Microneedling", price: "From £150" },
      { name: "Hydrafacials", price: "From £120" },
      { name: "IPL & Laser Resurfacing", price: "From £180" },
    ],
  },
  {
    id: "nails",
    title: "Nails & Pedicures",
    description:
      "Luxurious nail care designed to pamper and perfect. Every manicure is a moment of self-care, every pedicure a ritual of relaxation.",
    image: nailsStationImage,
    treatments: [
      { name: "Classic Manicure", price: "From £25" },
      { name: "Gel Manicure", price: "From £35" },
      { name: "Luxury Pedicure", price: "From £45" },
      { name: "Gel Pedicure", price: "From £50" },
      { name: "Nail Art & Extensions", price: "From £40" },
      { name: "Cuticle Care Treatments", price: "From £20" },
      { name: "Paraffin Hand Treatment", price: "From £30" },
    ],
  },
  {
    id: "hair",
    title: "Hair Services",
    description:
      "Expert stylists dedicated to bringing out your best. From subtle enhancements to bold transformations, your hair journey starts here.",
    image: hairImage,
    treatments: [
      { name: "Cut & Style", price: "From £45" },
      { name: "Color & Highlights", price: "From £80" },
      { name: "Balayage & Ombre", price: "From £120" },
      { name: "Keratin Treatments", price: "From £150" },
      { name: "Scalp Treatments", price: "From £60" },
      { name: "Bridal Hair", price: "From £100" },
      { name: "Blowdry & Styling", price: "From £35" },
    ],
  },
  {
    id: "laser",
    title: "Laser Hair Removal",
    description:
      "Smooth, lasting results with our advanced laser technology. Safe for all skin types, performed by trained professionals.",
    image: roomRentalImage,
    treatments: [
      { name: "Full Body", price: "From £350" },
      { name: "Face & Upper Lip", price: "From £50" },
      { name: "Underarms", price: "From £40" },
      { name: "Bikini Area", price: "From £60" },
      { name: "Full Legs", price: "From £180" },
      { name: "Arms", price: "From £100" },
      { name: "Back & Shoulders", price: "From £120" },
    ],
  },
  {
    id: "wellness",
    title: "Massage & Wellness",
    description:
      "Restorative treatments for body and mind. Release tension, restore balance, and reconnect with yourself.",
    image: productImage,
    treatments: [
      { name: "Swedish Massage", price: "From £60" },
      { name: "Deep Tissue Massage", price: "From £75" },
      { name: "Hot Stone Massage", price: "From £85" },
      { name: "Aromatherapy Massage", price: "From £70" },
      { name: "Pregnancy Massage", price: "From £70" },
      { name: "Reflexology", price: "From £50" },
      { name: "Body Wrap Treatments", price: "From £80" },
    ],
  },
];

function ServiceCategory({
  category,
  index,
}: {
  category: typeof serviceCategories[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      id={category.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="scroll-mt-24"
    >
      <div
        className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <div className="relative overflow-hidden rounded-md">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            {category.title}
          </h2>
          <p className="text-ora-fog leading-relaxed mb-8">
            {category.description}
          </p>

          <div className="bg-ora-sand rounded-md p-6">
            <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
              Treatments
            </h3>
            <div className="space-y-3">
              {category.treatments.map((treatment) => (
                <div
                  key={treatment.name}
                  data-testid={`treatment-${category.id}-${treatment.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center justify-between py-2 border-b border-ora-greige last:border-0"
                >
                  <span className="text-ora-fog">{treatment.name}</span>
                  <span className="text-ora-taupe font-medium" data-testid={`price-${treatment.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    {treatment.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact">
            <Button
              data-testid={`button-book-${category.id}`}
              className="mt-6 bg-ora-taupe text-white hover:bg-ora-fog px-8"
            >
              Book Consultation
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  useSEO({
    title: "Services | ORÁ. - Beauty Treatments Manchester",
    description: "Explore our range of beauty and wellness services at Ora Suites Manchester. Aesthetics, nails, hair, laser treatments, and massage therapy designed for women.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-display-sm md:text-display text-foreground mb-4">
              Transformative Treatments
            </h1>
            <p className="text-ora-fog text-lg max-w-2xl mx-auto">
              Tailored to your unique beauty and wellness goals. Every treatment
              is a ritual crafted with intention and care.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-ora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                data-testid={`link-category-${category.id}`}
                className="px-5 py-2.5 bg-ora-bone text-ora-fog hover:bg-ora-greige hover:text-ora-taupe rounded-full text-sm font-medium transition-colors"
              >
                {category.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceCategories.map((category, index) => (
            <ServiceCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-ora-bone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-ora-fog mb-8">
            Book a complimentary consultation with one of our experts. We'll help
            you create a personalized treatment plan tailored to your goals.
          </p>
          <Link href="/contact">
            <Button
              data-testid="button-services-consultation"
              className="bg-ora-taupe text-white hover:bg-ora-fog px-8"
            >
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
