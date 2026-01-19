import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle } from "lucide-react";

export default function About() {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 max-w-4xl pt-24 pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-sm">
              About Me
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get to know <span className="gradient-text">me better</span>
          </h1>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 relative z-10"
        >
          {/* Profile Image and Intro */}
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-64 h-64 rounded-2xl overflow-hidden glass border-2 border-accent/30 shadow-2xl shadow-accent/20"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://via.placeholder.com/400x400?text=Hassam+Shahryar"
                  alt="Hassam Shahryar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Hi, I'm <span className="gradient-text">Hassam Shahryar</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                I'm a passionate MERN Stack Developer with over 5 years of
                experience in crafting beautiful and functional web
                applications. My journey in web development started with a
                curiosity about how things work on the internet, and it has
                evolved into a deep passion for creating exceptional digital
                experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building scalable web applications using modern
                technologies like React, Node.js, MongoDB, and Next.js. Beyond
                coding, I'm also skilled in graphic design and SEO optimization,
                allowing me to provide complete digital solutions to my clients.
              </p>
            </motion.div>
          </div>

          {/* Working Philosophy */}
          <motion.div
            className="glass rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              My <span className="gradient-text">Working Philosophy</span>
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: "Client-Centric Approach",
                  desc: "I believe in understanding my clients' needs deeply and delivering solutions that exceed their expectations. Every project is unique, and I tailor my approach accordingly.",
                },
                {
                  title: "Quality Over Quantity",
                  desc: "I prioritize delivering high-quality work rather than rushing through projects. Clean code, responsive design, and optimal performance are non-negotiable.",
                },
                {
                  title: "Continuous Learning",
                  desc: "The tech industry evolves rapidly, and I'm committed to staying updated with the latest trends and best practices to provide cutting-edge solutions.",
                },
                {
                  title: "Transparent Communication",
                  desc: "I maintain clear and regular communication with clients, keeping them informed about project progress and any challenges that may arise.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Payment Structure */}
          <motion.div
            className="glass rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Payment <span className="gradient-text">Structure</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I operate on a transparent and fair 50/50 payment model:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="glass rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-accent mb-3">
                  50% Upfront
                </h3>
                <p className="text-muted-foreground">
                  Upon project agreement and scope confirmation, 50% of the
                  total project cost is due to begin development.
                </p>
              </motion.div>
              <motion.div
                className="glass rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-accent mb-3">
                  50% Upon Completion
                </h3>
                <p className="text-muted-foreground">
                  The remaining 50% is due when the project is completed,
                  tested, and ready for deployment.
                </p>
              </motion.div>
            </div>
            <p className="text-muted-foreground">
              This structure ensures commitment from both sides and provides
              security for the client while allowing me to allocate resources
              effectively.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="glass rounded-2xl p-8 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: "Frontend",
                  items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                },
                {
                  category: "Backend",
                  items: ["Node.js & Express", "MongoDB", "RESTful APIs", "Authentication"],
                },
                {
                  category: "Design",
                  items: ["UI/UX Design", "Figma", "Graphic Design", "Responsive Design"],
                },
                {
                  category: "Other",
                  items: ["SEO Optimization", "Performance Audits", "Security Best Practices", "Git & Version Control"],
                },
              ].map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-accent mb-4 text-lg">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
