"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Smile,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "#treatments" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Treatments", href: "#treatments" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glassmorphism border-b border-slate-200/60 shadow-lg shadow-slate-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative bg-navy rounded-xl p-2.5 group-hover:shadow-lg group-hover:shadow-cyan-accent/20 transition-shadow duration-300">
              <Smile className="w-5 h-5 text-cyan-accent" />
            </div>
            <div className="flex flex-col">
              <span className="text-navy font-bold text-lg leading-tight tracking-tight">
                Whiteline
              </span>
              <span className="text-slate-500 text-[11px] font-medium tracking-wider uppercase">
                Dental Clinic
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy rounded-lg hover:bg-slate-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+923211234567"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-navy border border-slate-200 rounded-xl hover:border-cyan-accent hover:bg-cyan-accent/5 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Emergency
            </a>
            <a
              href="https://wa.me/923211234567?text=Hello%20Whiteline%20Dental%2C%20I%20would%20like%20to%20chat."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-navy rounded-xl hover:bg-navy-light transition-all duration-200 hover:shadow-lg hover:shadow-navy/20"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Doctor
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-navy" />
            ) : (
              <Menu className="w-6 h-6 text-navy" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glassmorphism border-t border-slate-200/60 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-navy hover:bg-slate-50 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 space-y-2 border-t border-slate-100 mt-3">
                <a
                  href="tel:+923211234567"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-navy border border-slate-200 rounded-xl"
                >
                  <Phone className="w-4 h-4" />
                  Emergency Call
                </a>
                <a
                  href="https://wa.me/923211234567?text=Hello%20Whiteline%20Dental%2C%20I%20would%20like%20to%20chat."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-navy rounded-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat with Doctor
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
