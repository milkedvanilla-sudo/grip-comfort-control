import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            CONTACT <span className="text-gradient">US</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground font-body leading-relaxed">
              Have questions about our grips or need a custom solution? Reach out — we're here to help.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, text: "info@wsolutions.com" },
                { icon: Phone, text: "(555) 123-4567" },
                { icon: MapPin, text: "United States" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <span className="font-body text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <p className="font-display text-primary text-xl tracking-wider">MESSAGE SENT ✓</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground font-display tracking-wider text-sm hover:brightness-110 transition-all glow-amber"
                >
                  SEND MESSAGE
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
