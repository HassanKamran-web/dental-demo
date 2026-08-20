import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr. Humail & Associates | Best Dental Clinic in Karachi | Painless Dentistry",
  description:
    "Dr. Humail & Associates — Top-rated dental clinic in Karachi offering painless root canal, teeth whitening, dental implants, orthodontics & cosmetic dentistry. Book your consultation today!",
  keywords: [
    "dentist in Karachi",
    "dental clinic Karachi",
    "painless dentist",
    "teeth whitening Karachi",
    "dental implants",
    "root canal treatment",
    "Dr. Humail & Associates",
  ],
  openGraph: {
    title: "Dr. Humail & Associates | Best Dentist in Karachi",
    description:
      "Expert dental care with advanced painless technology. Book your appointment today.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
