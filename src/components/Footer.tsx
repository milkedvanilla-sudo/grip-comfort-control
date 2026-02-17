import { useState } from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-widest mb-3">
              W <span className="text-gradient">SOLUTIONS</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Comfort Is Control. Premium foam pistol grips for those who demand more.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-primary mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Signup */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-primary mb-4">STAY UPDATED</h4>
            {subscribed ? (
              <p className="text-primary font-display text-sm tracking-wider">SUBSCRIBED ✓</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="flex-1 bg-card border border-border px-4 py-2.5 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-primary text-primary-foreground font-display text-xs tracking-wider hover:brightness-110 transition-all"
                >
                  JOIN
                </button>
              </form>
            )}

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-body text-xs">
            © {new Date().getFullYear()} W Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
