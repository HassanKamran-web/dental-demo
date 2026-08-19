"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Khan",
    rating: 5,
    text: "Dr. Tooba is incredibly gentle and professional. I was terrified of dentists my whole life, but my root canal was completely painless. The clinic is spotless and the staff is amazing!",
    verified: true,
    initial: "FK",
    color: "bg-cyan-accent/10 text-cyan-accent",
  },
  {
    name: "Ahmed Raza",
    rating: 5,
    text: "Got my teeth whitening done here — the results were instant! The pricing was transparent with no hidden costs. Highly recommend for anyone looking for quality dental care in Lahore.",
    verified: true,
    initial: "AR",
    color: "bg-amber-50 text-amber-600",
  },
  {
    name: "Ayesha Malik",
    rating: 5,
    text: "My daughter got her aligners here and the transformation has been incredible. Dr. Tooba explains everything clearly and makes sure the patient is comfortable at every step.",
    verified: true,
    initial: "AM",
    color: "bg-violet-50 text-violet-600",
  },
  {
    name: "Hassan Ali",
    rating: 5,
    text: "Best dental clinic in Lahore, hands down. The 3-tier sterilization protocol gave me confidence. My dental implant looks and feels completely natural. Thank you, Dr. Tooba!",
    verified: true,
    initial: "HA",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Sana Tariq",
    rating: 5,
    text: "I visited for a routine cleaning and was impressed by the modern equipment and hygienic environment. The evening appointment slots are super convenient. Five stars!",
    verified: true,
    initial: "ST",
    color: "bg-pink-50 text-pink-600",
  },
  {
    name: "Bilal Ahmed",
    rating: 5,
    text: "Dr. Tooba saved my tooth with a single-sitting root canal. I was in severe pain and he fit me in the same day. The pain-free technology is real — no exaggeration!",
    verified: true,
    initial: "BA",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-cyan-accent/10 text-cyan-accent text-sm font-semibold rounded-full mb-4 border border-cyan-accent/20">
            Patient Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Real reviews from real patients. Their trust drives us to deliver
            excellence every single day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 lg:p-7 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <Quote className="w-8 h-8 text-slate-200 mb-3" />

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {t.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}
                >
                  {t.initial}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  {t.verified && (
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verified Patient
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
