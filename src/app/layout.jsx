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
      { url: '/images/logo2.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo2.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '120x120', type: 'image/png' },
      { url: '/images/logo2.png', sizes: '76x76', type: 'image/png' },
    ],
    shortcut: '/images/logo2.png',
  },
  themeColor: '#ffffff',
  metadataBase: new URL('https://the-tech-gafru.vercel.app'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Prevent Vercel default favicon */}
        <link rel="icon" href="/images/logo2.png" type="image/png" sizes="any" />
        
        {/* Standard favicon */}
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo2.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo2.png" />
        
        {/* Android Chrome */}
        <link rel="icon" type="image/png" sizes="192x192" href="/images/logo2.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/logo2.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/logo2.png" />
        
        {/* Safari Pinned Tab */}
        <link rel="mask-icon" href="/images/logo2.png" color="#000000" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/images/logo2.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </head>
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