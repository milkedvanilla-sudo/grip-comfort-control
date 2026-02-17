import { motion } from "framer-motion";

const products = [
  { name: "Standard Grip", price: "$24.99", tag: "Best Seller" },
  { name: "Tactical Pro", price: "$34.99", tag: "New" },
  { name: "Compact Series", price: "$22.99", tag: null },
];

const Shop = () => {
  return (
    <section id="shop" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">OUR PRODUCTS</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            SHOP <span className="text-gradient">GRIPS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border group hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Placeholder product image area */}
              <div className="aspect-square bg-muted flex items-center justify-center relative">
                <span className="font-display text-muted-foreground/30 text-6xl">W</span>
                {product.tag && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground font-display text-xs tracking-wider px-3 py-1">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold tracking-wide mb-1">{product.name}</h3>
                <p className="text-primary font-display text-xl font-bold">{product.price}</p>
                <button className="mt-4 w-full py-2.5 border border-foreground/20 font-display text-sm tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200">
                  VIEW DETAILS
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
