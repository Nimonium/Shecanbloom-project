import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart, ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import contactImg from "@/assets/contact-illustration.jpg";
import donateImg from "@/assets/donate-woman.jpg";
import donateQr from "@/assets/donate-qr.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — She Can Foundation" },
      { name: "description", content: "Get in touch with She Can Foundation. Donate, volunteer, or simply learn more about our mission." },
      { property: "og:title", content: "Contact — She Can Foundation" },
      { property: "og:description", content: "Donate, volunteer, or learn more about our mission." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contacts = [
  { icon: Mail, label: "Email Address", value: "hello@shecanfoundation.org" },
  { icon: Phone, label: "Phone Number", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "NGO Address", value: "123 Empowerment Way, Suite 400, NY 10001" },
];

const faqs = [
  { q: "How can I support the foundation?", a: "You can donate online, volunteer your time and skills, or partner with us as a corporate sponsor. Every contribution amplifies our impact." },
  { q: "Where is the foundation located?", a: "We are headquartered in New York City, with active community programs across 9 countries including India, Kenya, and Brazil." },
  { q: "Are donations tax-deductible?", a: "Yes — She Can Foundation is a registered 501(c)(3) and 80G-eligible nonprofit. You will receive a receipt for your records." },
];

const messageSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().max(120),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = messageSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject") || "General inquiry",
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll get back to you within 24 hours. 💖");
    }, 800);
  };

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative bg-gradient-soft py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.78_0.15_295/0.35),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl text-center px-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-5xl md:text-7xl font-bold">
            Get in Touch
          </motion.h1>
          <p className="mt-5 text-lg text-muted-foreground">Whether you're looking to volunteer, donate, or simply learn more about our mission, our heart and doors are always open.</p>
        </div>
      </section>

      {/* DONATE PANEL */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="grid md:grid-cols-[1.2fr_1fr_0.9fr] gap-8 rounded-3xl bg-pink-soft/40 p-8 md:p-10 shadow-soft items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Donate Now</h2>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  Imagine for a moment that you are struggling to make ends meet — worried about how you'll pay for basic necessities like food, shelter, and healthcare. Now imagine that someone steps forward and offers a helping hand. A small donation can make all the difference in someone's life.
                </p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  That feeling of relief and gratitude is immeasurable. By donating to a cause you care about, you have the power to make a difference.
                </p>
                <button onClick={() => toast.success("Thank you for your generosity! 💖")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
                  <Heart className="h-4 w-4" fill="currentColor" /> Donate Now
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-warm opacity-15 blur-2xl" />
                <img src={donateImg} alt="Community helper" loading="lazy" width={900} height={1000} className="relative rounded-3xl shadow-glow w-full h-80 object-cover" />
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-warm opacity-10 blur-2xl" />
                <div className="relative rounded-3xl bg-white p-4 shadow-glow w-full">
                  <img src={donateQr} alt="Razorpay UPI QR code to donate to She Can Foundation" loading="lazy" className="w-full h-auto rounded-2xl" />
                  <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-primary">Scan to donate via UPI</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-[1fr_1.3fr] gap-10">
          <Reveal>
            <h2 className="text-3xl font-display font-bold text-primary">Contact Information</h2>
            <p className="mt-3 text-sm text-muted-foreground">We typically respond within 24 hours. Your voice matters to us.</p>
            <ul className="mt-6 space-y-3">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft border border-border/50">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pink-soft text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <img src={contactImg} alt="Women standing together" loading="lazy" width={900} height={600} className="mt-6 rounded-2xl w-full h-44 object-cover shadow-soft" />
            <div className="mt-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Follow our impact</div>
              <div className="flex gap-2">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft text-primary hover:bg-gradient-warm hover:text-white transition-all" aria-label="social">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-3xl bg-white p-8 shadow-glow space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="name" label="Full Name" placeholder="Jane Doe" />
                <Field name="email" type="email" label="Email Address" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Subject</label>
                <select name="subject" className="w-full rounded-xl border border-input bg-muted/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white">
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Volunteer Question</option>
                  <option>Donation Question</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Your Message</label>
                <textarea name="message" rows={5} maxLength={1000} placeholder="How can we help you?" className="w-full rounded-xl border border-input bg-muted/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white" />
              </div>
              <button type="submit" disabled={submitting} className="w-full rounded-xl bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-all disabled:opacity-60">
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden bg-pink-soft/40 p-3 shadow-soft">
              <div className="relative rounded-2xl overflow-hidden">
                <iframe
                  title="Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.96%2C40.74&amp;layer=mapnik"
                  className="w-full h-[360px] border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Common Questions</h2>
            <p className="mt-3 text-muted-foreground">Everything you need to know about joining our journey.</p>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="rounded-2xl bg-white shadow-soft border border-border/50 overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input name={name} type={type} placeholder={placeholder} maxLength={200} className="w-full rounded-xl border border-input bg-muted/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white" />
    </div>
  );
}
