import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="glass border-t border-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold gradient-text mb-3"
              whileHover={{ scale: 1.05 }}
            >
              HASSAM
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer crafting exceptional digital experiences with
              passion and precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-foreground mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-foreground mb-4 text-lg">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "MERN Development",
                "Graphic Design",
                "SEO Optimization",
                "Performance Audits",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-foreground mb-4 text-lg">Contact</h4>
            <div className="space-y-4">
              <motion.a
                href="tel:+923002116854"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/50 transition-all">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                +92 3002116854
              </motion.a>
              <motion.a
                href="mailto:hassamshahryar777@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/50 transition-all">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                Email
              </motion.a>
              <div className="flex gap-3 pt-2">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass border border-accent/20 hover:border-accent/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Instagram className="w-4 h-4 text-accent" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass border border-accent/20 hover:border-accent/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-accent/20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground pt-8"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Hassam Shahryar. All rights reserved. | Crafted
            with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
