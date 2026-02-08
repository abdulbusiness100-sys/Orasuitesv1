import { useEffect } from "react";
import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import manchesterImage from "@assets/manchester-location_1770213665902.png";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | ORÁ. - Women's Wellness Sanctuary Manchester";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with Ora Suites. Book a consultation, ask questions, or inquire about room rentals. Located in Manchester city centre.");
    }
  }, []);

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
              Get in Touch
            </h1>
            <p className="text-ora-fog text-lg max-w-2xl mx-auto">
              Ready to begin your transformation? Book a consultation or send us a
              message. We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-ora-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-5 bg-ora-milk rounded-md">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                    <MapPin size={20} className="text-ora-taupe" />
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Address</h4>
                    <p className="text-ora-fog text-sm" data-testid="text-address">
                      Manchester City Centre
                      <br />
                      Greater Manchester, UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-ora-milk rounded-md">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                    <Phone size={20} className="text-ora-taupe" />
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+441234567890"
                      data-testid="link-phone"
                      className="text-ora-fog text-sm hover:text-ora-taupe transition-colors"
                    >
                      +44 (0) 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-ora-milk rounded-md">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                    <Mail size={20} className="text-ora-taupe" />
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:hello@orasuites.com"
                      data-testid="link-email"
                      className="text-ora-fog text-sm hover:text-ora-taupe transition-colors"
                    >
                      hello@orasuites.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-ora-milk rounded-md">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ora-bone flex items-center justify-center">
                    <Clock size={20} className="text-ora-taupe" />
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-ora-fog text-sm" data-testid="text-hours">
                      Monday - Saturday: 9am - 7pm
                      <br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-md">
                <img
                  src={manchesterImage}
                  alt="Manchester city"
                  className="w-full h-48 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Send Us a Message
              </h2>

              <div
                className="bg-ora-milk rounded-md min-h-[500px] flex items-center justify-center"
                data-testid="typeform-embed-container"
              >
                <p className="text-ora-smoke text-sm">
                  Booking form loading...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
