import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aptitude Counsel",
    category: "Web Design",
    image: "https://via.placeholder.com/400x300?text=Aptitude+Counsel",
    description: "Professional counseling platform with modern UI",
  },
  {
    id: 2,
    title: "Kintechy",
    category: "Full Stack",
    image: "https://via.placeholder.com/400x300?text=Kintechy",
    description: "Tech startup website with dynamic features",
  },
  {
    id: 3,
    title: "Edify Softech",
    category: "Web Development",
    image: "https://via.placeholder.com/400x300?text=Edify+Softech",
    description: "Software company portfolio and services",
  },
  {
    id: 4,
    title: "Singh Transports",
    category: "E-Commerce",
    image: "https://via.placeholder.com/400x300?text=Singh+Transports",
    description: "Logistics and transport management system",
  },
  {
    id: 5,
    title: "Scalable E-Commerce",
    category: "Full Stack",
    image: "https://via.placeholder.com/400x300?text=E-Commerce",
    description: "Next.js based e-commerce platform",
  },
  {
    id: 6,
    title: "Figma to React",
    category: "UI/UX",
    image: "https://via.placeholder.com/400x300?text=Figma+to+React",
    description: "Design system implementation from Figma",
  },
  {
    id: 7,
    title: "Travall Global",
    category: "WordPress",
    image: "https://via.placeholder.com/400x300?text=Travall+Global",
    description: "Travel and tourism website",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
  const categories = ["All", ...uniqueCategories];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
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
              My Work
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and creative works
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16 relative z-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all border ${
                selectedCategory === category
                  ? "gradient-button text-accent-foreground border-accent shadow-lg shadow-accent/30"
                  : "glass border-accent/20 text-foreground hover:border-accent/50"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card h-64 mb-4 glass border border-accent/20 hover:border-accent/50 transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:from-accent/90 hover:to-accent/70 transition-all flex items-center gap-2 shadow-lg shadow-accent/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
              <motion.div whileHover={{ x: 5 }}>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent font-semibold mb-2">
                  {project.category}
                </p>
                <p className="text-muted-foreground">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
