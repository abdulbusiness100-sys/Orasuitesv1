import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

import manchesterImage from "@assets/manchester-location_1770213665902.png";

const serviceOptions = [
  { value: "aesthetics", label: "Aesthetics & Cosmetic Procedures" },
  { value: "nails", label: "Nails & Pedicure" },
  { value: "hair", label: "Hair Services" },
  { value: "laser", label: "Laser Hair Removal" },
  { value: "wellness", label: "Massage & Wellness" },
  { value: "room-rental", label: "Room Rental Inquiry" },
  { value: "other", label: "Other" },
];

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | ORÁ. - Women's Wellness Sanctuary Manchester";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with Ora Suites. Book a consultation, ask questions, or inquire about room rentals. Located in Manchester city centre.");
    }
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully",
        description: "We'll be in touch with you shortly.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

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

              {isSubmitted ? (
                <div className="bg-ora-milk rounded-md p-10 text-center">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ora-bone mb-6">
                    <Check size={32} className="text-ora-taupe" />
                  </span>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    Thank You!
                  </h3>
                  <p className="text-ora-fog" data-testid="text-success-message">
                    We've received your message and will be in touch shortly. In the
                    meantime, feel free to explore our services.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                data-testid="input-name"
                                placeholder="Your name"
                                className="bg-ora-milk border-ora-greige focus:border-ora-taupe"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                data-testid="input-email"
                                placeholder="you@example.com"
                                className="bg-ora-milk border-ora-greige focus:border-ora-taupe"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                data-testid="input-phone"
                                placeholder="+44 123 456 7890"
                                className="bg-ora-milk border-ora-greige focus:border-ora-taupe"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Service Interest</FormLabel>
                            <Select
                              value={field.value || ""}
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger
                                  data-testid="select-service"
                                  className="bg-ora-milk border-ora-greige focus:border-ora-taupe"
                                >
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceOptions.map((option) => (
                                  <SelectItem 
                                    key={option.value} 
                                    value={option.value}
                                    data-testid={`option-service-${option.value}`}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              data-testid="input-message"
                              placeholder="Tell us about your goals or ask any questions..."
                              rows={5}
                              className="bg-ora-milk border-ora-greige focus:border-ora-taupe resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      data-testid="button-submit-contact"
                      disabled={contactMutation.isPending}
                      className="w-full bg-ora-taupe text-white hover:bg-ora-fog py-6"
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-ora-smoke text-xs text-center">
                      By submitting this form, you agree to our privacy policy. We'll
                      never share your information.
                    </p>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
