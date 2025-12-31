import { Cpu, Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Cpu,
    number: "01",
    title: "Intelligent Automation",
    description: "Systems that identify, qualify, and contact your ideal prospects. Without human intervention. 24/7.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Data & Creativity",
    description: "We find data others don't have. We leverage it creatively. Every signal counts.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Custom-Built Tools",
    description: "Every client has a unique system. Built for your market, your target, your product. No templates.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Scale",
    description: "Support through deployment and beyond. Continuous optimization for maximum results.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A simple and effective process to connect AI innovation with your business needs.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-nexus-purple via-nexus-cyan to-nexus-green" />
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 md:gap-8 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Circle with number - empty by default, fills on hover */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 flex items-center justify-center font-display font-bold text-xl md:text-2xl transition-all duration-300 bg-background border-muted-foreground/50 text-muted-foreground group-hover:bg-nexus-green group-hover:border-nexus-green group-hover:text-foreground group-hover:shadow-lg group-hover:shadow-nexus-green/40"
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 md:pt-4">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2 text-foreground group-hover:text-nexus-green transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
