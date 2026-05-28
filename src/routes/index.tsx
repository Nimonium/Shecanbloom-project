import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, HeartPulse, Users, Star, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { DonationCards } from "@/components/site/DonationCards";
import heroImg from "@/assets/hero-women.jpg";
import quoteImg from "@/assets/quote-woman.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "She Can Foundation — Empowering Women, Transforming Lives" },
      { name: "description", content: "Together we create opportunities, dignity, education, and hope for women everywhere. Join, volunteer, or donate." },
      { property: "og:title", content: "She Can Foundation — Empowering Women, Transforming Lives" },
      { property: "og:description", content: "Together we create opportunities, dignity, education, and hope for women everywhere." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const programs = [
  { icon: GraduationCap, title: "Education", desc: "Providing scholarships and vocational training for lifelong empowerment." },
  { icon: Sparkles, title: "Empowerment", desc: "Leadership workshops and mentorship to build confidence and independence." },
  { icon: HeartPulse, title: "Healthcare", desc: "Ensuring access to essential reproductive and maternal health services." },
  { icon: Users, title: "Community", desc: "Building safe spaces and support networks for collective growth." },
];

const testimonials = [
  { name: "Sarah Jenkins", role: "Mentor, 2 years", quote: "Seeing the immediate impact of our education programs in remote areas has been life-changing for me as a mentor." },
  { name: "Amara Okafor", role: "Field Officer", quote: "The community support here is incredible. We are not just giving resources, we are building lasting dignity." },
  { name: "Elena Rodriguez", role: "Education Specialist", quote: "I joined to give back, but I've learned so much about resilience and strength from the women we serve." },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative -mt-16 h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img src={heroImg} alt="Empowered women smiling together" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl text-white pt-16">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="h-3 w-3" /> She Can Foundation
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Empowering Women,<br />Transforming Lives
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Together we create opportunities, dignity, education, and a brighter future for every woman.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-all">
                Donate Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all">
                Join Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Our Focus</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">Areas of Impact</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl bg-white p-7 shadow-soft border border-border/50 transition-shadow hover:shadow-glow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-soft text-primary">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-display font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-pink-soft/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          <StatCounter value={10000} label="Women Supported" />
          <StatCounter value={500} label="Volunteers" />
          <StatCounter value={100} label="Campaigns" />
          <StatCounter value={50} label="Communities" />
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-glow">
              <img src={quoteImg} alt="Hopeful woman at sunset" loading="lazy" width={1600} height={900} className="w-full h-[480px] md:h-[560px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="max-w-2xl text-white">
                  <p className="font-display italic text-3xl md:text-5xl leading-tight">
                    "Every woman deserves the opportunity to thrive."
                  </p>
                  <div className="mt-6 text-xs tracking-[0.4em] uppercase opacity-80">— Our Vision</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Voice of our Volunteers</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-soft border border-border/50">
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4" fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-warm" />
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-banner p-10 md:p-16 text-center text-white shadow-glow">
              <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <h2 className="relative font-display text-3xl md:text-5xl font-bold">Become a Volunteer and Make a Difference</h2>
              <p className="relative mt-4 text-white/85 max-w-xl mx-auto">Your time and skills can change a life. Join our global network of change-makers today.</p>
              <Link to="/volunteer" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover:-translate-y-0.5 transition-all">
                Join the Mission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DONATION */}
      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">Your Impact in Dollars</h2>
            <p className="mt-3 text-muted-foreground">Choose a contribution level and see how you can transform lives.</p>
          </Reveal>
          <Reveal>
            <DonationCards />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
