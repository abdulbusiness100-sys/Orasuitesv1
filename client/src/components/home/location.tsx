import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import manchesterImage from "@assets/manchester-location_1770213665902.png";

export function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section id="location" className="bg-ora-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="In the Heart of Manchester"
          subtitle="Conveniently located in Manchester city centre, Ora is your accessible sanctuary for beauty and wellness."
        />

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-md">
              <img
                src={manchesterImage}
                alt="Manchester city skyline"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-5 bg-ora-sand rounded-md">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                  <MapPin size={20} className="text-ora-taupe" />
                </span>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Address</h4>
                  <p className="text-ora-fog text-sm">
                    Manchester City Centre
                    <br />
                    Greater Manchester, UK
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-ora-sand rounded-md">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                  <Phone size={20} className="text-ora-taupe" />
                </span>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+441234567890"
                    className="text-ora-fog text-sm hover:text-ora-taupe transition-colors"
                  >
                    +44 (0) 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-ora-sand rounded-md">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                  <Mail size={20} className="text-ora-taupe" />
                </span>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:hello@orasuites.com"
                    className="text-ora-fog text-sm hover:text-ora-taupe transition-colors"
                  >
                    hello@orasuites.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-ora-sand rounded-md">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                  <Clock size={20} className="text-ora-taupe" />
                </span>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Hours</h4>
                  <p className="text-ora-fog text-sm">
                    Mon - Sat: 9am - 7pm
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Manchester+City+Centre+UK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                data-testid="button-get-directions"
                className="bg-ora-taupe text-white hover:bg-ora-fog px-8 w-full sm:w-auto"
              >
                <Navigation size={16} className="mr-2" />
                Get Directions
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
