import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, GraduationCap, ShieldCheck, Briefcase, Users, Download, BadgeCheck, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import storyImg from "@/assets/about-story.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — She Can Foundation" },
      { name: "description", content: "A vision born from resilience. Learn the story, mission, and values driving She Can Foundation." },
      { property: "og:title", content: "About — She Can Foundation" },
      { property: "og:description", content: "A vision born from resilience. Learn our story, mission, and values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const purpose = [
  { icon: Target, title: "Our Mission", desc: "To empower women through education, awareness, and skill development, enabling them to lead independent, confident, and dignified lives." },
  { icon: Eye, title: "Our Vision", desc: "A world where every woman has equal opportunities, lives with dignity, and becomes a leader of change in her community and beyond." },
  { icon: Heart, title: "Our Values", desc: "Integrity & Transparency · Inclusion · Compassion in Action — guiding everything we do." },
];

const why = [
  { icon: GraduationCap, title: "Education Gaps", desc: "Closing the divide by providing quality learning resources to girls." },
  { icon: ShieldCheck, title: "Healthcare Access", desc: "Improving maternal health and basic hygiene education in rural areas." },
  { icon: Briefcase, title: "Economic Power", desc: "Creating financial independence through labor and skill-building workshops." },
  { icon: Users, title: "Community Resilience", desc: "Building strong networks of women who support each other." },
];

const milestones = [
  { year: "Foundation Started", desc: "Began our journey with a dream to empower women and bring meaningful systemic change." },
  { year: "First Global Campaigns", desc: "Launched multi-nation awareness programs focusing on digital literacy and mental health." },
  { year: "Volunteer Programs", desc: "Expanded our network to include over 500 active volunteers across 9 countries." },
  { year: "Community Events", desc: "Reached over 10,000 beneficiaries through our community-led empowerment centers." },
];

const team = [
  { name: "Kiran Agarwal", role: "Founder & Executive Director" },
  { name: "Priya Sharma", role: "Education Lead" },
  { name: "Nesha Verma", role: "Community Lead" },
  { name: "Anjali Singh", role: "Health & Hygiene Lead" },
];

function AboutPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative bg-gradient-soft py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.85_0.1_340/0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.8_0.12_295/0.35),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl text-center px-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-display text-5xl md:text-7xl font-bold leading-tight">
            About <span className="gradient-text">She Can</span><br />Foundation
          </motion.h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering women, inspiring communities, and creating meaningful change across the globe through education, leadership, and health initiatives.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-warm opacity-20 blur-2xl" />
              <img src={storyImg} alt="Women in community workshop" loading="lazy" width={1200} height={1000} className="relative rounded-[2rem] shadow-glow w-full h-[460px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-semibold bg-pink-soft px-3 py-1 rounded-full">Our Story</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold">A Vision Born from <span className="gradient-text">Resilience</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              She Can Foundation was founded by a group of passionate individuals who believed that every woman deserves the opportunity to live, learn, and lead a dignified life. We started our journey with a simple yet powerful vision: to break barriers and create a world where women can thrive.
            </p>
            <div className="mt-6 rounded-2xl border-l-4 border-primary bg-pink-soft/50 p-5 italic text-foreground/80">
              "Every woman deserves the opportunity to rise, learn, and lead. We are here to make that a reality for all."
            </div>
            <Link to="/volunteer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
              Become Part of Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DRIVEN BY PURPOSE */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Driven by Purpose</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {purpose.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl glass p-8 shadow-soft hover:shadow-glow transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-warm text-white shadow-soft">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-display font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Why We Exist</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Millions of women still face systemic barriers. We are here to dismantle them and pave the way for a more equitable future.</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft border border-border/50">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pink-soft text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Our Impact Journey</h2>
          </Reveal>
          <div className="relative pl-8 md:pl-0">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-lavender" />
            <ul className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.1}>
                  <li className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                    <div className={`absolute left-3 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-warm ring-4 ring-background shadow-soft`} />
                    <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <h3 className="font-display text-xl font-semibold text-primary">{m.year}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                    <div />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CERTIFICATE / TRANSPARENCY */}
      <section className="py-24 bg-[#0f0a14] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.6_0.22_340/0.35),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Our Commitment to Transparency</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">We are proud to be a registered non-profit organization, ensuring every donation and action is used for the highest possible impact.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 relative mx-auto max-w-2xl rounded-3xl glass-dark p-8 shadow-glow">
              <div className="rounded-2xl border border-white/20 p-8 bg-white/5">
                <BadgeCheck className="h-12 w-12 mx-auto text-accent" />
                <h3 className="mt-4 font-display text-2xl font-bold">Certificate of Registration</h3>
                <p className="mt-2 text-sm text-white/70">She Can Foundation • Society Act 1860 • 80G Tax Exempt • FCRA Compliant</p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-xs">
                  <div className="rounded-xl bg-white/5 p-3"><div className="text-white/60">Registered</div><div className="font-semibold mt-1">2019</div></div>
                  <div className="rounded-xl bg-white/5 p-3"><div className="text-white/60">80G</div><div className="font-semibold mt-1">Eligible</div></div>
                  <div className="rounded-xl bg-white/5 p-3"><div className="text-white/60">FCRA</div><div className="font-semibold mt-1">Verified</div></div>
                </div>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
                <Download className="h-4 w-4" /> Download Certificate
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Meet the Visionaries</h2>
            <p className="mt-3 text-muted-foreground">The dedicated individuals working tirelessly behind the scenes.</p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="text-center">
                  <div className="relative mx-auto h-32 w-32 rounded-full bg-gradient-warm p-1 shadow-soft">
                    <div className="h-full w-full rounded-full bg-pink-soft flex items-center justify-center text-3xl font-display font-bold text-primary">
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-banner p-10 md:p-16 text-center text-white shadow-glow">
              <h2 className="font-display text-3xl md:text-5xl font-bold">Together We Can Build a Better Future</h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">Be a part of our mission to empower women and create a lasting impact. Whether through donating, volunteering, or spreading the word — your support matters.</p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover:-translate-y-0.5 transition-all">Join Us</Link>
                <Link to="/volunteer" className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all">Become a Volunteer</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
