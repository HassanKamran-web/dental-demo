"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Star,
  Zap,
  Award,
  Sparkles,
  SmilePlus,
  HeartPulse,
} from "lucide-react";

const trustBadges = [
  { icon: Star, text: "4.9★ Google Rating", sub: "120+ Reviews" },
  { icon: Zap, text: "100% Painless Tech", sub: "Advanced Equipment" },
  { icon: Award, text: "Certified Surgeon", sub: "BDS, RDS" },
];

const floatingCards = [
  {
    icon: SmilePlus,
    label: "Pain-Free Root Canal",
    color: "bg-cyan-accent/10 text-cyan-accent border-cyan-accent/20",
    position: "top-4 right-4",
    animation: "animate-float",
  },
  {
    icon: Sparkles,
    label: "Instant Whitening",
    color: "bg-amber-50 text-amber-600 border-amber-200",
    position: "bottom-16 left-4",
    animation: "animate-float-delay",
  },
  {
    icon: HeartPulse,
    label: "Safe & Sterile",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    position: "bottom-4 right-8",
    animation: "animate-float",
  },
];

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-accent/10 border border-cyan-accent/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-accent" />
              <span className="text-sm font-semibold text-navy">
                Top Rated Dental Clinic in Karachi
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1] tracking-tight mb-6">
              Your Smile Deserves Expert Care &{" "}
              <span className="text-gradient">Precision.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Comprehensive dental treatment by Dr. Humail & Associates using advanced
              painless technology. From routine check-ups to complete smile
              makeovers — we deliver excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/923315553579?text=Hello%20Dr.%20Humail%2C%20I%20would%20like%20to%20chat."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white font-semibold rounded-2xl hover:bg-navy-light transition-all duration-300 hover:shadow-xl hover:shadow-navy/20 hover:-translate-y-0.5"
              >
                Chat with Dr. Humail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/923315553579?text=Hello%20Dr.%20Humail%2C%20I%20would%20like%20to%20chat."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Quick Inquiry
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-2">
                    <badge.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-sm font-bold text-navy leading-tight">
                    {badge.text}
                  </span>
                  <span className="text-xs text-slate-500">{badge.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 lg:p-12 glow-shadow overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full flex items-center justify-center mb-8 border border-white/20 animate-pulse-glow">
                  <SmilePlus className="w-16 h-16 lg:w-20 lg:h-20 text-cyan-accent" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  World-Class Dental Care
                </h3>
                <p className="text-white/70 text-sm lg:text-base max-w-sm mb-8">
                  Advanced technology meets gentle care for a pain-free dental
                  experience.
                </p>

                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                    <span className="text-3xl font-extrabold text-cyan-accent">
                      10+
                    </span>
                    <p className="text-white/70 text-xs mt-1">Years Experience</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                    <span className="text-3xl font-extrabold text-cyan-accent">
                      5K+
                    </span>
                    <p className="text-white/70 text-xs mt-1">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>

            {floatingCards.map((card) => (
              <div
                key={card.label}
                className={`absolute ${card.position} ${card.animation} z-20 hidden sm:flex`}
              >
                <div
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border backdrop-blur-sm bg-white/90 shadow-lg ${card.color}`}
                >
                  <card.icon className="w-4 h-4" />
                  <span className="text-xs font-semibold whitespace-nowrap">
                    {card.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
