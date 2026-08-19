"use client";

import { motion } from "framer-motion";
import { Clock, Users, Trophy, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience", description: "Practicing dentistry" },
  { icon: Users, value: "5,000+", label: "Happy Patients", description: "Smiles transformed" },
  { icon: Trophy, value: "99%", label: "Success Rate", description: "Treatment outcomes" },
  { icon: ShieldCheck, value: "100%", label: "Sterilized Equipment", description: "Safety guaranteed" },
];

export default function Stats() {
  return (
    <section className="relative py-6 lg:py-8 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-6 lg:p-10 glow-shadow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                  <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-cyan-accent" />
                </div>
                <div>
                  <span className="text-2xl lg:text-3xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  <p className="text-white/50 text-xs hidden lg:block">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
