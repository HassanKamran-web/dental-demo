"use client";

import { motion } from "framer-motion";
import {
  Syringe,
  ShieldCheck,
  BadgeIndianRupee,
  CalendarClock,
} from "lucide-react";

const features = [
  {
    icon: Syringe,
    title: "Pain-Free Anesthesia",
    description:
      "Computerized anesthesia delivery system ensures a completely painless injection experience. No more needle anxiety.",
    accent: "bg-cyan-accent/10 border-cyan-accent/20",
    iconColor: "text-cyan-accent",
  },
  {
    icon: ShieldCheck,
    title: "3-Tier Sterilization",
    description:
      "Strict autoclave sterilization protocol with biological indicators. Every instrument is 100% sterile and safe.",
    accent: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "No hidden charges or surprise bills. Get a detailed treatment plan with upfront cost estimates before we begin.",
    accent: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description:
      "Evening and weekend appointments available to fit your busy schedule. Same-day emergency slots open daily.",
    accent: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-sm font-semibold rounded-full mb-4">
            Why Patients Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Why Dr. Tooba?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Your comfort and safety are our top priorities. Here&apos;s what sets
            our clinic apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative bg-white rounded-2xl border p-8 lg:p-10 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 ${feature.accent}`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
