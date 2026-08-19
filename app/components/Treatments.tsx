"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Anchor,
  CircleDot,
  Smile,
  Droplets,
  Heart,
  ArrowRight,
} from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Instant shade improvement with advanced laser whitening technology. Get a brighter smile in just one session.",
    price: "Starting PKR 15,000",
    color: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Anchor,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacement using premium titanium implants that last a lifetime.",
    price: "Starting PKR 80,000",
    color: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: CircleDot,
    title: "Root Canal (RCT)",
    description:
      "Single-sitting painless root canal treatment with advanced rotary instruments and modern techniques.",
    price: "Starting PKR 12,000",
    color: "from-red-50 to-rose-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Smile,
    title: "Orthodontics & Aligners",
    description:
      "Invisible aligners and modern braces for perfectly aligned teeth. Custom treatment plans for every age.",
    price: "Starting PKR 150,000",
    color: "from-violet-50 to-purple-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Droplets,
    title: "Scaling & Polishing",
    description:
      "Deep plaque removal and gum health restoration. Ultrasonic cleaning for a fresh, healthy mouth.",
    price: "Starting PKR 3,000",
    color: "from-cyan-50 to-teal-50",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    icon: Heart,
    title: "Cosmetic Dentistry",
    description:
      "Porcelain veneers, smile makeover, and composite bonding for a picture-perfect confident smile.",
    price: "Starting PKR 25,000",
    color: "from-pink-50 to-fuchsia-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-16 lg:py-24 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-accent/10 text-cyan-accent text-sm font-semibold rounded-full mb-4 border border-cyan-accent/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            World-Class Dental Treatments
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From routine cleanings to complete smile transformations — we offer
            comprehensive dental solutions using the latest technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, i) => (
            <motion.div
              key={treatment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-slate-200/80 p-6 lg:p-8 hover:shadow-xl hover:shadow-slate-100 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${treatment.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <treatment.icon className={`w-7 h-7 ${treatment.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-navy mb-3">
                {treatment.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {treatment.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sm font-bold text-cyan-accent">
                  {treatment.price}
                </span>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-cyan-accent transition-colors group/link"
                >
                  Book Service
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
