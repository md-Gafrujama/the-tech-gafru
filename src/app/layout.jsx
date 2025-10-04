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
    icon: [
      { url: '/images/logo2.png' },
      { url: '/images/logo2.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo2.png' },
      { url: '/images/logo2.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo2.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/logo2.png',
      },
    ],
  },
  themeColor: '#ffffff',
  metadataBase: new URL('https://martechbiz.com'),
  manifest: '/manifest.json', // Optional: if you have a manifest file
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