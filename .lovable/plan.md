
## She Can Foundation — Website Plan

A premium, mobile-first NGO website with 4 routes, soft pink/purple/lavender gradient palette, glassmorphism, smooth scroll animations, and the structure shown in your reference screenshots.

### Pages & Routes

```text
/            Home
/about       About
/volunteer   Volunteer / Join Us
/contact     Contact
```

### Global

- Sticky transparent navbar (frosted on scroll), responsive mobile drawer menu, gradient Donate CTA
- Shared modern footer (brand, quick links, legal, contact, socials)
- Framer Motion scroll-reveal, hover, and page-transition animations
- Tailwind design tokens in `src/styles.css` for the soft feminine palette (pink → rose → lavender → peach gradients), rounded cards, soft shadows, glass surfaces
- Poppins (display) + Inter (body) via Google Fonts
- Lucide React for icons

### Home (`/`)
1. Hero — fullscreen image of women/community, dark overlay, headline "Empowering Women, Transforming Lives", subheading, "Join Us" + "Donate Now" CTAs
2. Areas of Impact — 4 icon cards (Education, Empowerment, Healthcare, Community)
3. Stats strip — 10,000+ / 500+ / 100+ / 50+ with count-up animation
4. Quote banner — full-bleed image + overlay quote
5. Voice of our Volunteers — 3 testimonial cards with stars
6. Volunteer CTA — full-width gradient banner
7. Your Impact in Dollars — $25 / $50 / $100 cards (middle "Most Popular"), custom amount input, gradient Donate button, progress bar
8. Footer

### About (`/about`)
1. Hero — "About She Can Foundation" with soft gradient
2. Our Story — two-column (image + story + highlighted quote card)
3. Driven by Purpose — Mission / Vision / Values glass cards
4. Why We Exist — 4 icon cards (Education Gaps, Healthcare Access, Economic Power, Community Resilience)
5. Our Impact Journey — vertical animated timeline
6. Our Commitment to Transparency — certificate showcase on dark spotlight background, glass card, verification badge, Download button
7. Meet the Visionaries — founder + team circular cards
8. CTA banner — "Together We Can Build a Better Future"

### Volunteer (`/volunteer`)
1. Hero — "Be the Change" with polaroid-style image collage
2. Why Volunteer With Us — 5 benefit chips (Leadership, Social Impact, Certificates, Teamwork, Communication)
3. Find Your Role — role cards (Social Media, Event Organizer, Fundraising, Content Creator, Outreach)
4. Join the Movement — split card: gradient left panel + application form right (Name, Email, Phone, Skills, Motivation)
5. Volunteers Making an Impact — testimonials
6. CTA banner — "Start Your Journey With Us"

### Contact (`/contact`)
1. Hero — "Get in Touch"
2. Donate Now panel — glass card with description + Donate button + QR placeholder
3. Contact Information cards (Email, Phone, Address) + Contact form (Name, Email, Subject, Message)
4. Map section — embedded map placeholder in rounded frame
5. Common Questions — FAQ accordion
6. Footer

### Technical

- TanStack Start file-based routes: `src/routes/index.tsx`, `about.tsx`, `volunteer.tsx`, `contact.tsx`; each with its own `head()` (title, description, og tags)
- New shared components in `src/components/site/`: `Navbar`, `Footer`, `SectionHeading`, `GradientButton`, `StatCounter`, `TestimonialCard`, `DonationCard`, `Timeline`, `FAQ`
- Hero/quote/team images generated via imagegen (warm, hopeful photography of diverse women — saved under `src/assets/`)
- Form submissions are client-only (no backend); show success toast via existing `sonner`
- Install: `framer-motion` (lucide-react and shadcn already present)
- Design tokens added to `src/styles.css`: brand pinks/purples in oklch, gradient variables, glass surface, soft shadow
- Accessibility: semantic landmarks, alt text, focus states, reduced-motion respected

### Out of scope (confirm if you want any)
- Real payment processing / Stripe
- CMS or database for stories/volunteers (Lovable Cloud)
- Actual Google Maps embed (placeholder image used)
- Auth or admin dashboard
