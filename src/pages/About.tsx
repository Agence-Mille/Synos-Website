import { Helmet } from "react-helmet-async";
import { Target, Eye, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTracker from "@/components/MouseTracker";
import ethanPhoto from "@/assets/ethan-photo.jpeg";
import theoPhoto from "@/assets/theo-photo.jpeg";

const team = [
  {
    name: "Ethan Wolff",
    role: "Co-Founder",
    photo: ethanPhoto,
    link: "https://www.linkedin.com/in/ethan-wolff-8b3447314/",
  },
  {
    name: "Théo Ollier",
    role: "Co-Founder",
    photo: theoPhoto,
    link: "https://www.linkedin.com/in/th%C3%A9o-ollier-33b374319/",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every interaction and partnership we facilitate.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear and honest communication with all our partners, both startups and enterprises.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "We believe in AI as a positive force to transform businesses and society.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Synos - Where AI meets Growth</title>
        <meta name="description" content="Discover the Synos team and our mission: connecting the most innovative AI startups with businesses ready to transform." />
      </Helmet>

      <MouseTracker />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-nexus-green/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-nexus-purple/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                About <span className="gradient-text">Synos</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Our mission is simple: create bridges between AI innovation and businesses that want to grow.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="gradient-border p-8 md:p-12">
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 gradient-text">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Synos was born from a simple observation: on one side, hundreds of brilliant AI startups struggle to find their first customers. On the other, companies that want to innovate but don't know where to start.
                    </p>
                    <p>
                      Founded in 2024 by EDHEC Business School students specialized in AI and its business applications, Synos aims to become the bridge between these two worlds.
                    </p>
                    <p>
                      Our platform combines human expertise and matching algorithms to create partnerships that truly work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Our <span className="text-gradient-secondary">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nexus-green/20 to-nexus-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-nexus-green" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              The <span className="gradient-text">Founding Team</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {team.map((member, index) => (
                <a
                  key={index}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="glass p-8 text-center group hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-nexus-green to-nexus-cyan mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-xl">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;