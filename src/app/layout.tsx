import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prasanna Fund | Venture Capital",
  description: "Prasanna Fund is a $300M venture capital fund led by Prasanna Sankar, co-founder of Rippling. Investing in the next generation of transformative technology companies.",
  keywords: "venture capital, VC fund, Prasanna Sankar, Rippling, startup investment, technology investment",
  authors: [{ name: "Prasanna Sankar" }],
  openGraph: {
    title: "Prasanna Fund | Venture Capital",
    description: "Prasanna Fund is a $300M venture capital fund led by Prasanna Sankar, co-founder of Rippling.",
    type: "website",
  },
};

function BackgroundConstellation() {
  return (
    <svg
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    >
      {/* Subtle gradient overlay */}
      <defs>
        <radialGradient id="bg-grad" cx="50%" cy="50%" r="80%">
          <stop offset="0%" stopColor="#232323" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#181818" stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#bg-grad)" />
      {/* Constellation lines */}
      <line x1="200" y1="200" x2="600" y2="300" stroke="#444" strokeWidth="1.2" />
      <line x1="600" y1="300" x2="900" y2="150" stroke="#444" strokeWidth="1.2" />
      <line x1="900" y1="150" x2="1200" y2="400" stroke="#444" strokeWidth="1.2" />
      <line x1="1200" y1="400" x2="1600" y2="200" stroke="#444" strokeWidth="1.2" />
      <line x1="400" y1="700" x2="900" y2="900" stroke="#444" strokeWidth="1.2" />
      <line x1="900" y1="900" x2="1400" y2="800" stroke="#444" strokeWidth="1.2" />
      {/* Dots (stars) */}
      <circle cx="200" cy="200" r="3" fill="#fff" fillOpacity="0.7" />
      <circle cx="600" cy="300" r="2.5" fill="#fff" fillOpacity="0.5" />
      <circle cx="900" cy="150" r="2.5" fill="#fff" fillOpacity="0.6" />
      <circle cx="1200" cy="400" r="3" fill="#fff" fillOpacity="0.7" />
      <circle cx="1600" cy="200" r="2.5" fill="#fff" fillOpacity="0.5" />
      <circle cx="400" cy="700" r="2.5" fill="#fff" fillOpacity="0.5" />
      <circle cx="900" cy="900" r="3" fill="#fff" fillOpacity="0.7" />
      <circle cx="1400" cy="800" r="2.5" fill="#fff" fillOpacity="0.5" />
      {/* Extra subtle dots */}
      <circle cx="300" cy="500" r="1.5" fill="#fff" fillOpacity="0.3" />
      <circle cx="1700" cy="600" r="1.5" fill="#fff" fillOpacity="0.3" />
      <circle cx="1100" cy="700" r="1.5" fill="#fff" fillOpacity="0.3" />
      <circle cx="800" cy="500" r="1.5" fill="#fff" fillOpacity="0.3" />
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-raleway antialiased bg-pf-black`}>
        <BackgroundConstellation />
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
