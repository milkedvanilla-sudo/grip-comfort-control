import { motion } from "framer-motion";
import { Shield, Target, Grip } from "lucide-react";

const features = [
{
  icon: Grip,
  title: "Premium Foam",
  description: "High-density foam material designed for all-day shooting comfort without sacrificing grip."
},
{
  icon: Target,
  title: "Recoil Control",
  description: "Engineered texture patterns absorb recoil energy, keeping your aim steady shot after shot."
},
{
  icon: Shield,
  title: "Built to Last",
  description: "Weather-resistant and durable — trusted by law enforcement and military professionals."
}];


const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">

          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">WHY W SOLUTIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GRIP <span className="text-gradient">REDEFINED</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">We believe comfort directly impacts control. Our premium grips are designed for shooters who refuse to compromise.

          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card border border-border p-8 text-center group hover:border-primary/30 transition-colors duration-300">

              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-primary/10 text-primary">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default About;