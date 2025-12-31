import { Helmet } from "react-helmet-async";
import { ArrowRight, Bot, LineChart, Users, Cog, Shield, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTracker from "@/components/MouseTracker";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Scouting",
    description: "Identification and analysis of the most promising AI startups on the market according to your specific criteria.",
    features: ["Technology watch", "Technical due diligence", "Potential evaluation"],
  },
  {
    icon: LineChart,
    title: "Intelligent Matching",
    description: "Proprietary algorithm to find perfect synergies between your needs and AI solutions.",
    features: ["Compatibility analysis", "Automated scoring", "Personalized recommendations"],
  },
  {
    icon: Users,
    title: "Support",
    description: "A dedicated expert supports you from discovery to signing and beyond.",
    features: ["Contract negotiation", "Onboarding", "Post-signature follow-up"],
  },
  {
    icon: Cog,
    title: "Technical Integration",
    description: "Technical support for integrating AI solutions into your existing infrastructure.",
    features: ["Technical audit", "Integration plan", "Developer support"],
  },
  {
    icon: Shield,
    title: "Compliance & Ethics",
    description: "Verification of GDPR compliance and ethical AI best practices.",
    features: ["GDPR audit", "AI ethics charter", "Legal documentation"],
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    description: "Workshops and POCs to test solutions before commitment.",
    features: ["Discovery workshops", "Proof of Concept", "Rapid prototyping"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Synos - Where AI meets Growth</title>
        <meta name="description" content="Discover our AI matching services: scouting, support, technical integration and compliance to connect your business with the best AI startups." />
      </Helmet>

      <MouseTracker />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-nexus-green/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-nexus-purple/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A comprehensive range of services to accelerate your AI transformation, from scouting to integration.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="gradient-border p-6 group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nexus-green/20 to-nexus-cyan/20 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-300">
                      <service.icon className="w-7 h-7 text-nexus-green" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-nexus-green" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Need a <span className="text-gradient-secondary">custom service</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact us to discuss your specific needs.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-nexus-green to-nexus-cyan hover:opacity-90">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;