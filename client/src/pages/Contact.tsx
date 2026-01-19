import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("YOUR_PUBLIC_KEY_HERE");

      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "hassamshahryar777@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div className="container mx-auto px-4 pt-24 pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
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
              Get In Touch
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto relative z-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <motion.div
              className="glass rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
              whileHover={{ y: -5 }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-3 border border-accent/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Phone
                  </h3>
                  <p className="text-muted-foreground">+92 3002116854</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
              whileHover={{ y: -5 }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-3 border border-accent/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <p className="text-muted-foreground">
                    hassamshahryar777@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
              whileHover={{ y: -5 }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-3 border border-accent/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <MapPin className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground">Pakistan</p>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="rounded-2xl overflow-hidden glass h-80 border-2 border-accent/30 shadow-2xl shadow-accent/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://via.placeholder.com/400x400?text=Hassam"
                alt="Hassam Shahryar"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8 border border-accent/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="Project subject"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell me about your project"
                />
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 font-medium"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-medium"
                >
                  ✕ Error sending message. Please try again.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 gradient-button text-accent-foreground rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/30 hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
