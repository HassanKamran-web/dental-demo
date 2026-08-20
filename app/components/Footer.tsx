import {
  Smile,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { label: "Teeth Whitening", href: "#treatments" },
  { label: "Dental Implants", href: "#treatments" },
  { label: "Root Canal Treatment", href: "#treatments" },
  { label: "Patient Reviews", href: "#reviews" },
  { label: "Emergency Care", href: "tel:+923315553579" },
  { label: "WhatsApp Chat", href: "https://wa.me/923315553579" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-white/10 rounded-xl p-2.5 border border-white/10">
                <Smile className="w-5 h-5 text-cyan-accent" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">
Dr. Humail & Associates
                </p>
                <p className="text-white/50 text-xs tracking-wider uppercase">
                  Dental Clinic
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Providing exceptional dental care in Karachi with advanced painless
              technology. Your smile is our passion and priority.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Clock className="w-4 h-4 text-cyan-accent flex-shrink-0" />
              <span>Mon - Sat: 4:00 PM - 9:00 PM</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-cyan-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-relaxed">
                  Shop 1, Phase 1, Taqi Plaza,
                  <br />
                  Block J, North Nazimabad,
                  <br />
                  Karachi, Pakistan
                </span>
              </li>
              <li>
                <a
                  href="tel:+923315553579"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-cyan-accent transition-colors"
                >
                  <Phone className="w-5 h-5 text-cyan-accent flex-shrink-0" />
                  +92 321 1234567
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923315553579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-cyan-accent transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-cyan-accent flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
              Find Us
            </h4>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-square flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=North+Nazimabad+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-center p-6 hover:text-cyan-accent transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-cyan-accent/20 transition-colors">
                  <MapPin className="w-7 h-7 text-cyan-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/80 group-hover:text-cyan-accent transition-colors">
                    Get Directions
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Open in Google Maps
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Dr. Humail & Associates. All
            rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Built with ZentyxStudio
          </p>
        </div>
      </div>
    </footer>
  );
}
