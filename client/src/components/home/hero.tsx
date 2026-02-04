import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/hero-image_1770213665902.png";

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full"
        >
          <img
            src={heroImage}
            alt="Ora Suites luxury treatment room"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-display-xl text-white mb-2 tracking-tight">
            ORÁ.
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-white/80 mb-6" dir="rtl">
            أورا
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-4 tracking-wide"
        >
          Manchester's Premier Women-Only Wellness Sanctuary
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto"
        >
          Where Beauty, Confidence, and Transformation Intersect
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button
              data-testid="button-hero-book"
              size="lg"
              className="bg-white text-ora-fog hover:bg-white/90 font-medium px-8 py-6 text-base"
            >
              Book Your Treatment
            </Button>
          </Link>
          <Link href="/services">
            <Button
              data-testid="button-hero-services"
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 font-medium px-8 py-6 text-base backdrop-blur-sm"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to discover"
        data-testid="button-scroll-down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm tracking-widest uppercase">Discover</span>
          <ChevronDown size={24} className="animate-scroll-hint" />
        </div>
      </motion.button>
    </section>
  );
}
