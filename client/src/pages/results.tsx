import { Layout } from "@/components/layout/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

import beforeAfterImage from "@assets/before-after-results_1770213665903.png";

const results = [
  {
    id: 1,
    treatment: "Profhilo Treatment",
    description: "Visible improvement in skin hydration and firmness after 2 sessions",
    category: "Aesthetics",
    image: beforeAfterImage,
  },
  {
    id: 2,
    treatment: "Polynucleotide Therapy",
    description: "Enhanced skin quality and reduced fine lines",
    category: "Aesthetics",
    image: beforeAfterImage,
  },
  {
    id: 3,
    treatment: "Dermal Fillers",
    description: "Natural enhancement maintaining facial harmony",
    category: "Aesthetics",
    image: beforeAfterImage,
  },
  {
    id: 4,
    treatment: "Skin Rejuvenation",
    description: "Comprehensive treatment for texture and tone improvement",
    category: "Aesthetics",
    image: beforeAfterImage,
  },
  {
    id: 5,
    treatment: "Laser Hair Removal",
    description: "Smooth, lasting results after treatment course",
    category: "Laser",
    image: beforeAfterImage,
  },
  {
    id: 6,
    treatment: "Anti-Aging Treatment",
    description: "Reduced wrinkles and improved skin elasticity",
    category: "Aesthetics",
    image: beforeAfterImage,
  },
];

const categories = ["All", "Aesthetics", "Laser", "Skin"];

export default function ResultsPage() {
  useSEO({
    title: "Before & After Results | ORÁ. Manchester",
    description: "See real before and after results from Ora Suites treatments. Profhilo, dermal fillers, laser hair removal, and more aesthetic transformations.",
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
              Real Results, Real Confidence
            </h1>
            <p className="text-ora-fog text-lg max-w-2xl mx-auto">
              Every transformation tells a story of renewed confidence. See what's
              possible with expert care and personalized treatment plans.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-ora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                data-testid={`button-filter-${category.toLowerCase()}`}
                className="px-5 py-2.5 bg-ora-bone text-ora-fog hover:bg-ora-greige hover:text-ora-taupe rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-result-${result.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-md bg-ora-sand">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={result.image}
                      alt={`${result.treatment} before and after`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-ora-milk/90 backdrop-blur-sm rounded-full text-xs font-medium text-ora-fog">
                      {result.category}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg text-foreground" data-testid={`text-result-title-${result.id}`}>
                    {result.treatment}
                  </h3>
                  <p className="text-ora-fog text-sm mt-1">{result.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <section className="py-20 bg-ora-bone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Your Transformation Awaits
            </h2>
            <p className="text-ora-fog mb-8">
              Book a consultation with our experts to discuss your goals and create
              a personalized treatment plan.
            </p>
            <Link href="/contact">
              <Button
                data-testid="button-results-book"
                className="bg-ora-taupe text-white hover:bg-ora-fog px-8"
              >
                Book Your Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Section className="bg-ora-milk">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Important Information"
            subtitle="Results vary by individual. Here's what you should know."
          />

          <div className="prose prose-ora max-w-none text-ora-fog">
            <div className="bg-ora-sand rounded-md p-6 md:p-8 space-y-4" data-testid="text-disclaimer">
              <p>
                <strong className="text-foreground">Individual Results May Vary:</strong>{" "}
                The results shown on this page are examples of what our treatments can
                achieve. Individual results depend on various factors including skin
                type, age, lifestyle, and adherence to post-treatment care instructions.
              </p>
              <p>
                <strong className="text-foreground">Consultation Required:</strong>{" "}
                All aesthetic treatments at Ora begin with a thorough consultation. Our
                practitioners will assess your suitability for treatment and discuss
                realistic expectations.
              </p>
              <p>
                <strong className="text-foreground">Client Consent:</strong>{" "}
                All before and after images are shared with express permission from our
                clients. We respect privacy and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
