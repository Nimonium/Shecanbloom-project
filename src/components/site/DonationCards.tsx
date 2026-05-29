import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const tiers = [
  { amount: 500, title: "₹500", desc: "Provides school supplies for one girl for a full year." },
  { amount: 1500, title: "₹1,500", desc: "Covers medical screenings for three women in rural areas.", popular: true },
  { amount: 5000, title: "₹5,000", desc: "Funds a micro-business startup kit for a female entrepreneur." },
];

export function DonationCards() {
  const [selected, setSelected] = useState<number>(1500);
  const [custom, setCustom] = useState<string>("");

  const onDonate = () => {
    const amt = custom ? Number(custom) : selected;
    if (!amt || amt <= 0) return toast.error("Please choose a valid amount");
    toast.success(`Thank you for your ₹${amt} pledge! 💖`);
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">

        {tiers.map((t) => {
          const active = selected === t.amount && !custom;
          return (
            <motion.button
              key={t.amount}
              onClick={() => { setSelected(t.amount); setCustom(""); }}
              whileHover={{ y: -4 }}
              className={`relative text-left rounded-2xl border-2 bg-white p-6 transition-all ${
                active ? "border-primary shadow-glow" : "border-border hover:border-primary/40"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-warm text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-soft">
                  Most Popular
                </span>
              )}
              <div className="text-3xl font-display font-bold gradient-text">{t.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </motion.button>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 rounded-2xl bg-pink-soft/50 p-3">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
          <input
            type="number"
            inputMode="decimal"
            placeholder="Enter custom amount"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="w-full rounded-xl border-0 bg-white pl-8 pr-4 py-3 text-sm shadow-sm outline-none ring-1 ring-transparent focus:ring-primary/40"
          />
        </div>
        <button
          onClick={onDonate}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-warm px-6 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-glow transition-all"
        >
          <Heart className="h-4 w-4" fill="currentColor" /> Donate Now
        </button>
      </div>
    </div>
  );
}
