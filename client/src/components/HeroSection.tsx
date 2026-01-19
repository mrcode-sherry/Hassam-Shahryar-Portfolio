import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-background to-card/30 pt-32 pb-16 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm">
                Welcome to my world
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Hassam</span>
                <br />
                <span className="gradient-text">Shahryar</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-semibold text-foreground h-16"
            >
              <span className="text-accent">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              I design captivating user experiences, build high-performance web
              applications, and implement SEO strategies that drive results.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass border border-accent/20 hover:border-accent/50 transition-all group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6 text-accent group-hover:text-accent transition-colors" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass border border-accent/20 hover:border-accent/50 transition-all group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-accent group-hover:text-accent transition-colors" />
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-8 py-3 gradient-button text-accent-foreground rounded-lg font-semibold transition-all group shadow-lg shadow-accent/30 hover:shadow-accent/50"
              whileHover={{ x: 5, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              <div className="w-full aspect-square rounded-3xl overflow-hidden glass border-2 border-accent/30 shadow-2xl shadow-accent/20">
                <img
                  src="https://via.placeholder.com/500x500?text=Hassam+Profile"
                  alt="Hassam Shahryar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-accent/15 to-accent/5 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 px-4 py-2 glass rounded-full border border-accent/30 shadow-lg shadow-accent/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-semibold text-accent">5+ Years</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
