import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Heart, Award, Users, MessageCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import vol1 from "@/assets/volunteer-1.jpg";
import vol2 from "@/assets/volunteer-2.jpg";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — She Can Foundation" },
      { name: "description", content: "Be the change. Join our community of volunteers and help create sustainable social impact for women everywhere." },
      { property: "og:title", content: "Volunteer — She Can Foundation" },
      { property: "og:description", content: "Be the change. Join our volunteer community." },
      { property: "og:url", content: "/volunteer" },
    ],
    links: [{ rel: "canonical", href: "/volunteer" }],
  }),
  component: VolunteerPage,
});

const benefits = [
  { icon: Crown, label: "Leadership" },
  { icon: Heart, label: "Social Impact" },
  { icon: Award, label: "Certificates" },
  { icon: Users, label: "Teamwork" },
  { icon: MessageCircle, label: "Communication" },
];

const roles = [
  { title: "Social Media Volunteer", desc: "Drive digital change by managing our Instagram and TikTok communities. Create engaging content that tells our impact stories." },
  { title: "Event Organizer", desc: "Help us coordinate workshops and charity galas. Perfect for logistics enthusiasts." },
  { title: "Fundraising", desc: "Strategize donation campaigns and partner with corporate sponsors." },
  { title: "Content Creator", desc: "Write compelling blog posts and newsletter updates for our global subscribers." },
  { title: "Outreach", desc: "Connect directly with community leaders and local stakeholders." },
];

const stories = [
  { name: "Sarah J.", role: "Content Volunteer", quote: "Volunteering with She Can helped me find my voice. I started as a social media intern and now I lead the digital team in Kenya. The empowerment is real." },
  { name: "Maya R.", role: "Event Lead", quote: "The community here is unlike any other. It's not just about work; it's about a shared vision for a more equitable world for our daughters." },
  { name: "Alex T.", role: "Fundraising Lead", quote: "Being an ally at She Can Foundation has opened my eyes to the incredible resilience of women globally. Proud to support such a vital mission." },
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(200),
  phone: z.string().trim().min(6, "Phone is too short").max(30),
  skills: z.string().trim().max(300).optional().or(z.literal("")),
  motivation: z.string().trim().max(1000).optional().or(z.literal("")),
});

function VolunteerPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = formSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      skills: fd.get("skills"),
      motivation: fd.get("motivation"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Application received! We'll be in touch within 48 hours. 💖");
    }, 800);
  };

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative bg-gradient-soft py-24 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-semibold bg-pink-soft px-3 py-1 rounded-full">Join Our Movement</span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-tight">Be the <span className="gradient-text">Change</span></h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Empowering women isn't just a mission — it's a global transformation. Join our community of dedicated volunteers and help us create sustainable social impact.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 items-center">
              <a href="#join" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
                Become a Volunteer
              </a>
              <a href="#roles" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Learn about our impact <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative h-[420px]">
              <motion.div initial={{ rotate: -6 }} animate={{ rotate: -4 }} className="absolute top-0 right-10 w-56 md:w-64 rounded-2xl bg-white p-3 shadow-glow rotate-[-6deg]">
                <img src={vol1} alt="Volunteers smiling" loading="lazy" width={900} height={1100} className="w-full h-72 object-cover rounded-xl" />
              </motion.div>
              <motion.div initial={{ rotate: 6 }} animate={{ rotate: 8 }} className="absolute bottom-0 left-2 w-52 md:w-60 rounded-2xl bg-white p-3 shadow-glow rotate-[6deg]">
                <img src={vol2} alt="Volunteer portrait" loading="lazy" width={900} height={1100} className="w-full h-64 object-cover rounded-xl" />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Why Volunteer With Us?</h2>
            <p className="mt-3 text-muted-foreground">Growth that goes both ways.</p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.label} delay={i * 0.06}>
                <motion.div whileHover={{ y: -6 }} className="rounded-2xl bg-white p-6 text-center shadow-soft border border-border/50">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-soft text-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 font-medium">{b.label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Find Your Role</h2>
            <p className="mt-3 text-muted-foreground">Tailor your contribution to your talents.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <motion.div whileHover={{ y: -4 }} className="h-full rounded-2xl bg-white p-7 shadow-soft border border-border/50">
                  <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  <a href="#join" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn More <ArrowRight className="h-3.5 w-3.5" /></a>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="join" className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.4fr] rounded-3xl overflow-hidden shadow-glow bg-white">
              <div className="bg-gradient-banner text-white p-10 flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold">Join the Movement</h2>
                  <p className="mt-4 text-white/85 text-sm leading-relaxed">Fill out the form and our recruitment team will get back to you within 48 hours.</p>
                </div>
                <div className="mt-8 space-y-3 text-sm">
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> volunteer@shecan.org</div>
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) SHE-CAN-1</div>
                </div>
              </div>
              <form onSubmit={onSubmit} className="p-8 md:p-10 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field name="name" label="Full Name" placeholder="Jane Doe" />
                  <Field name="email" type="email" label="Email Address" placeholder="jane@example.com" />
                </div>
                <Field name="phone" label="Phone Number" placeholder="+123 456 7890" />
                <Field name="skills" label="Special Skills" placeholder="e.g. Graphic Design, Public Speaking, Data Entry" />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Why do you want to join?</label>
                  <textarea name="motivation" rows={4} maxLength={1000} placeholder="Share your motivation..." className="w-full rounded-xl border border-input bg-muted/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white" />
                </div>
                <button type="submit" disabled={submitting} className="w-full rounded-xl bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-all disabled:opacity-60">
                  {submitting ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORIES */}
      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Volunteers Making an Impact</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-soft border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-warm" />
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed italic">"{s.quote}"</p>
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
              <h2 className="font-display text-3xl md:text-5xl font-bold">Start Your Journey With Us</h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">Ready to make an impact? We have roles for every skill level and time commitment.</p>
              <a href="#join" className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover:-translate-y-0.5 transition-all">Apply Now</a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={200}
        className="w-full rounded-xl border border-input bg-muted/50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white"
      />
    </div>
  );
}
