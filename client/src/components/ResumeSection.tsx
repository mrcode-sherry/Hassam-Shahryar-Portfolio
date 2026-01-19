import { motion } from "framer-motion";
import { Briefcase, Calendar, Award } from "lucide-react";

interface Job {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    company: "Aryze Tech",
    position: "Senior MERN Stack Developer",
    period: "2024 - Present",
    description:
      "Leading development of scalable web applications using modern MERN stack technologies. Mentoring junior developers and implementing best practices.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
  },
  {
    id: 2,
    company: "Edify College of IT",
    position: "Full Stack Developer & Instructor",
    period: "2023 - 2024",
    description:
      "Developed web applications and taught full-stack development to students. Created curriculum and mentored aspiring developers.",
    skills: ["MERN", "Teaching", "Web Design", "SEO", "Git"],
  },
  {
    id: 3,
    company: "Freelance",
    position: "SEO & Graphic Design Specialist",
    period: "2023 - 2024",
    description:
      "Provided SEO optimization and graphic design services to multiple clients. Improved search rankings and created brand identities.",
    skills: ["SEO", "Graphic Design", "Content Strategy", "Analytics"],
  },
];

export default function ResumeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -100, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
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
              Professional Journey
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            5+ Years of <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional journey and career highlights
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== jobs.length - 1 && (
                <motion.div
                  className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-accent to-accent/30"
                  initial={{ height: 0 }}
                  whileInView={{ height: "96px" }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <motion.div
                  className="relative z-10 flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center border-4 border-background shadow-lg shadow-accent/30">
                    <Briefcase className="w-6 h-6 text-accent-foreground" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-grow glass rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {job.position}
                      </h3>
                      <p className="text-accent font-semibold text-lg">
                        {job.company}
                      </p>
                    </div>
                    <motion.div
                      className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0 bg-accent/10 px-3 py-1 rounded-full border border-accent/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{job.period}</span>
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-accent/20 to-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover:border-accent/50"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "var(--accent)",
                          color: "var(--accent-foreground)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { icon: Award, label: "Years of Experience", value: "5+" },
            { icon: Briefcase, label: "Projects Completed", value: "50+" },
            { icon: Award, label: "Happy Clients", value: "40+" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="glass rounded-2xl p-6 border border-accent/20 text-center hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="inline-flex p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-6 h-6 text-accent" />
                </motion.div>
                <p className="text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
