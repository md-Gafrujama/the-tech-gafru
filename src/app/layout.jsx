import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArrowNavigation from '@/components/ArrowNavigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Martechbiz",
  description: "Get the latest tech advice and insights",
  icons: {
    icon: '/images/logo2.png',
    apple: '/images/logo2.png',
    shortcut: '/images/logo2.png',
  },
  themeColor: '#ffffff',
  metadataBase: new URL('https://martechbiz.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <ArrowNavigation />
        <Footer />
      </body>
    </html>
  );
}