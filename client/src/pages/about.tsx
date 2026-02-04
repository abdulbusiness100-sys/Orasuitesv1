import { Layout } from "@/components/layout/layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles, Users } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

import teamImage from "@assets/team-photo_1770213665902.png";
import receptionImage from "@assets/reception-area_1770213665902.png";
import heroImage from "@assets/hero-image_1770213665902.png";

const values = [
  {
    icon: Heart,
    title: "Intentional Care",
    description:
      "Every treatment is performed with intention and attention to detail. We believe beauty should be cultivated, not rushed.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Your wellbeing is our priority. All treatments are performed by trained, certified professionals using the highest quality products.",
  },
  {
    icon: Sparkles,
    title: "Transformation",
    description:
      "We're not just about treatments—we're about helping you feel confident, radiant, and empowered in your own skin.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Ora is more than a clinic. It's a community of women supporting women on their wellness journeys.",
  },
];

const teamMembers = [
  {
    name: "Founder & Director",
    role: "Aesthetics & Vision",
    bio: "With over 15 years in the beauty and wellness industry, our founder created Ora to be the sanctuary she always wished existed—a space where women could transform without compromise.",
  },
  {
    name: "Lead Aesthetician",
    role: "Advanced Treatments",
    bio: "Specializing in regenerative aesthetics including polynucleotides and Profhilo, bringing cutting-edge treatments to Manchester.",
  },
  {
    name: "Hair Director",
    role: "Creative Styling",
    bio: "Award-winning stylist with expertise in color correction and transformative hair design.",
  },
  {
    name: "Wellness Lead",
    role: "Holistic Therapies",
    bio: "Certified in multiple massage modalities and holistic wellness practices, dedicated to restoring balance and wellbeing.",
  },
];

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });

  useSEO({
    title: "About Us | ORÁ. - Women's Wellness Sanctuary Manchester",
    description: "Learn about Ora Suites, Manchester's premier women-only beauty sanctuary. Discover our story, values, and the team dedicated to your transformation.",
  });

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6">
              About Ora
            </h1>
            <p className="text-ora-fog text-lg leading-relaxed">
              A sanctuary built for women, by women. Where beauty meets intention.
              Where care becomes ritual.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-ora-sand py-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={heroImage}
              alt="Ora Suites interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </Section>

      <Section className="bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={storyRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                This is Ora
              </h2>
              <div className="space-y-5 text-ora-fog leading-relaxed">
                <p className="text-lg">
                  Ora is not a clinic. It's a sanctuary. A space where women come
                  to pause, breathe, and transform. Where every treatment is a
                  ritual. Where care is intentional. Where you are seen, heard,
                  and held.
                </p>
                <p>
                  We believe beauty is not something you chase—it's something you
                  cultivate. From the inside out. With intention. With care. With
                  time.
                </p>
                <p>
                  Founded in Manchester, Ora was created to fill a gap in the
                  wellness industry—a space where women could receive advanced
                  aesthetic treatments, luxurious beauty services, and holistic
                  wellness care all under one roof, in an environment designed
                  specifically for them.
                </p>
                <p className="font-serif text-xl text-foreground italic" data-testid="text-quote">
                  "This is your space. To breathe. To transform. To become."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-ora-bone rounded-lg -z-10" />
                <img
                  src={receptionImage}
                  alt="Ora Suites reception"
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="bg-ora-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do at Ora."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-center p-6"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-ora-milk mb-4">
                  <value.icon size={28} className="text-ora-taupe" />
                </span>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-ora-fog text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ora-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Meet Our Team"
            subtitle="Dedicated professionals committed to your transformation."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={teamImage}
                alt="The Ora team"
                className="w-full h-auto rounded-md shadow-lg"
              />
            </motion.div>

            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`card-team-${member.role.toLowerCase().replace(/\s+/g, "-")}`}
                  className="p-6 bg-ora-sand rounded-md"
                >
                  <h3 className="font-serif text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-ora-taupe text-sm mb-2">{member.role}</p>
                  <p className="text-ora-fog text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="py-20 bg-ora-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Ready to Experience Ora?
            </h2>
            <p className="text-ora-fog mb-8">
              Book your first treatment and discover why women across Manchester
              choose Ora as their sanctuary.
            </p>
            <Link href="/contact">
              <Button
                data-testid="button-about-book"
                className="bg-ora-taupe text-white hover:bg-ora-fog px-8"
              >
                Book Your Treatment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
