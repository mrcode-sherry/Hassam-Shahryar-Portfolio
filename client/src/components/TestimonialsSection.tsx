import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    company: "Aptitude Counsel",
    text: "Hassam delivered an exceptional website that exceeded our expectations. His attention to detail and professionalism were outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Client Name",
    company: "Singh Transport",
    text: "Working with Hassam was a great experience. He understood our requirements perfectly and delivered on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Client Name",
    company: "Professional Blog",
    text: "The SEO optimization work Hassam did for our blog significantly improved our search rankings. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Client Name",
    company: "Shilajit Brand",
    text: "Hassam's graphic design work perfectly captured our brand identity. The designs were creative and professional.",
    rating: 5,
  },
  {
    id: 5,
    name: "Client Name",
    company: "Edify Softec",
    text: "The web application Hassam built for us is fast, secure, and user-friendly. Great collaboration throughout!",
    rating: 5,
  },
  {
    id: 6,
    name: "Client Name",
    company: "WriteSphere SEO",
    text: "Hassam's SEO strategies helped us dominate our niche. His expertise in digital marketing is invaluable.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
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
              Client Feedback
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied clients
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 md:p-12 border border-accent/20 shadow-2xl shadow-accent/10"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map(
                (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </motion.div>
                )
              )}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg text-foreground mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center border border-accent/20"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-accent font-bold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </motion.div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-accent font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              onClick={handlePrev}
              className="p-3 rounded-lg glass border border-accent/20 hover:border-accent/50 transition-all group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-accent group-hover:text-accent transition-colors" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-accent to-accent/60 w-8"
                      : "bg-muted w-2 hover:bg-muted-foreground"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="p-3 rounded-lg glass border border-accent/20 hover:border-accent/50 transition-all group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-accent group-hover:text-accent transition-colors" />
            </motion.button>
          </div>

          {/* Slide Counter */}
          <p className="text-center text-muted-foreground mt-8 font-medium">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
