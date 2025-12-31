import { Zap, Shield, TrendingUp, Users, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Access to Innovation",
    description: "Discover tomorrow's AI solutions before your competitors.",
  },
  {
    icon: Shield,
    title: "Verified Partners",
    description: "Every startup is rigorously analyzed and validated by our experts.",
  },
  {
    icon: TrendingUp,
    title: "Guaranteed ROI",
    description: "We commit to measurable and concrete results.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A Synos expert accompanies you throughout the process.",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "No more searching: we find the ideal partner for you.",
  },
  {
    icon: Award,
    title: "Exclusive Network",
    description: "Access a handpicked ecosystem of AI startups.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Why Choose <span className="text-gradient-secondary">Synos</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Concrete advantages to accelerate your AI transformation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-nexus-purple/20 to-nexus-cyan/20 flex items-center justify-center mb-4 group-hover:glow-purple transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;