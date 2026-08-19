import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Whiteline Dental Clinic | Best Dental Clinic in Lahore | Painless Dentistry",
  description:
    "Whiteline Dental Clinic — Top-rated dental clinic in Lahore offering painless root canal, teeth whitening, dental implants, orthodontics & cosmetic dentistry. Book your consultation today!",
  keywords: [
    "dentist in Lahore",
    "dental clinic Lahore",
    "painless dentist",
    "teeth whitening Lahore",
    "dental implants",
    "root canal treatment",
    "Whiteline Dental Clinic",
  ],
  openGraph: {
    title: "Whiteline Dental Clinic | Best Dentist in Lahore",
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
