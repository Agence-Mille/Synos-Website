import { ArrowRight, Sparkles, Zap, Target, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nexus-purple/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nexus-cyan/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nexus-green/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-nexus-purple" />
            <span className="text-sm text-muted-foreground">The platform connecting AI and business</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">Where AI</span>
            <br />
            <span className="text-foreground">meets </span>
            <span className="text-gradient-secondary">Growth</span>
          </h1>


          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We identify the most promising AI startups and connect them with businesses ready to innovate. A win-win partnership.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-gradient-to-r from-nexus-purple to-nexus-cyan hover:opacity-90 transition-opacity text-lg px-8 py-6">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted/50 text-lg px-8 py-6">
              <Link to="/services">
                Discover Our Services
              </Link>
            </Button>
          </div>

          {/* Dynamic Circle with Metrics */}
          <div className="relative mt-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] mx-auto">
              {/* Outer dashed circle */}
              <div className="absolute inset-0 rounded-full border border-dashed border-muted-foreground/30" />
              
              {/* Inner solid circle */}
              <div className="absolute inset-8 md:inset-12 rounded-full border border-muted-foreground/20" />
              
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-nexus-cyan/30 rounded-full blur-2xl" />
              
              {/* Metric Cards positioned around the circle */}
              {/* Leads/day - Top left */}
              <div className="absolute top-8 left-0 md:top-12 md:-left-4 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "0s" }}>
                <div className="w-10 h-10 rounded-lg bg-nexus-purple/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Leads/day</div>
                  <div className="text-2xl font-bold text-nexus-green">+47</div>
                </div>
              </div>
              
              {/* Status - Right */}
              <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-10 h-10 rounded-lg bg-nexus-cyan/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-nexus-cyan" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Status</div>
                  <div className="text-2xl font-bold text-nexus-green">Running</div>
                </div>
              </div>
              
              {/* Starting investment - Bottom left */}
              <div className="absolute bottom-12 left-0 md:bottom-16 md:-left-4 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "2s" }}>
                <div className="w-10 h-10 rounded-lg bg-nexus-green/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-nexus-green" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Starting investment</div>
                  <div className="text-2xl font-bold text-nexus-cyan">0€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
