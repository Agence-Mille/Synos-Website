import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTracker from "@/components/MouseTracker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || null,
          type: formData.type || null,
          message: formData.message.trim(),
        });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        type: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact | Synos - Where AI meets Growth</title>
        <meta name="description" content="Contact Synos to discuss your AI needs. Whether you're a startup or an enterprise, we have a solution for you." />
      </Helmet>

      <MouseTracker />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-nexus-green/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-nexus-cyan/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                <span className="gradient-text">Contact</span> Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to explore opportunities? Let's discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="gradient-border p-8">
                <div className="relative z-10">
                  <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">You are</Label>
                        <select
                          id="type"
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select...</option>
                          <option value="startup">An AI startup</option>
                          <option value="enterprise">An enterprise</option>
                          <option value="investor">An investor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Describe your project or needs..."
                        rows={5}
                        className="bg-muted/50 border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-nexus-green to-nexus-cyan hover:opacity-90"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-6 text-foreground">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nexus-green/20 to-nexus-cyan/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-nexus-green" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">
                          <a
                            href="mailto:contact@synoslab.com"
                            className="hover:underline"
                          >
                            contact@synoslab.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nexus-green/20 to-nexus-cyan/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-nexus-green" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground">Paris, France</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-xl">
                  <h3 className="font-display font-semibold mb-3 text-foreground">
                    Fast Response Guaranteed
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Our team is committed to responding to all inquiries within 24 business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;