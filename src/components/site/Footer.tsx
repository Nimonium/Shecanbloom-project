import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/60 bg-gradient-to-b from-pink-soft/40 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg">
            <img src={logo} alt="She Can Foundation" className="h-9 w-9 rounded-full object-cover shadow-soft" />
            <span className="gradient-text">She Can Foundation</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Empowering women through education, healthcare, and economic opportunity to break the cycle of poverty.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft text-primary hover:bg-gradient-warm hover:text-white transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4 text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            <li><Link to="/volunteer" className="text-muted-foreground hover:text-primary">Volunteer</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Impact Report</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Our Partners</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Media Kit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4 text-primary">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary">Donation FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-base mb-4 text-primary">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 123 Empowerment Way, NY 10001</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@shecan.org</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 000-SHECAN</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 She Can Foundation. Empowering women globally.</p>
          <p>Made with <span className="text-primary">♥</span> for every woman.</p>
        </div>
      </div>
    </footer>
  );
}
