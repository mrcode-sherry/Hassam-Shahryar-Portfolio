import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Search,
  Shield,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "MERN Stack Development",
    description:
      "Build scalable web applications using MongoDB, Express, React, and Node.js with modern best practices.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Create stunning visual designs that capture your brand identity and engage your audience.",
  },
  {
    icon: Search,
    title: "SEO Strategy & Optimization",
    description:
      "Implement proven SEO strategies to improve your online visibility and drive organic traffic.",
  },
  {
    icon: Shield,
    title: "Performance & Security Audits",
    description:
      "Comprehensive audits to ensure your applications are fast, secure, and optimized.",
  },
  {
    icon: Zap,
    title: "Complete Digital Solution",
    description:
      "End-to-end solutions from concept to deployment, including design, development, and optimization.",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, 100, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm">
              My Expertise
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services to transform your digital presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  whileHover={{ scale: 1.05 }}
                />

                <div className="relative glass rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 h-full flex flex-col border border-accent/20 group-hover:shadow-2xl group-hover:shadow-accent/20">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-flex"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-accent via-accent to-accent/30 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
