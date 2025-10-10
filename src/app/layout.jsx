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
  authors: [
    {
      name: "Martechbiz",
      url: "https://the-tech-gafru.vercel.app",
    },
  ],
  keywords: ["tech", "advice", "insights", "marketing", "technology", "business"],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  icons: {
    icon: [
      { url: "/images/logo2.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo2.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo2.png", sizes: "64x64", type: "image/png" },
      { url: "/images/logo2.png", sizes: "128x128", type: "image/png" },
      { url: "/images/logo2.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo2.png", sizes: "256x256", type: "image/png" },
      { url: "/images/logo2.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo2.png", sizes: "76x76", type: "image/png" },
      { url: "/images/logo2.png", sizes: "120x120", type: "image/png" },
      { url: "/images/logo2.png", sizes: "152x152", type: "image/png" },
      { url: "/images/logo2.png", sizes: "167x167", type: "image/png" },
      { url: "/images/logo2.png", sizes: "180x180", type: "image/png" },
      { url: "/images/logo2.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/images/logo2.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://the-tech-gafru.vercel.app",
    title: "Martechbiz",
    description: "Get the latest tech advice and insights",
    siteName: "Martechbiz",
    images: [
      {
        url: "/images/logo2.png",
        width: 512,
        height: 512,
        alt: "Martechbiz Logo",
        type: "image/png",
      },
      {
        url: "/images/logo2.png",
        width: 1200,
        height: 630,
        alt: "Martechbiz - Tech Advice",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martechbiz",
    description: "Get the latest tech advice and insights",
    image: "/images/logo2.png",
    creator: "@martechbiz",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  metadataBase: new URL("https://the-tech-gafru.vercel.app"),
  appLinks: {
    ios: [
      {
        url: "https://the-tech-gafru.vercel.app",
        app_store_id: "YOUR_APP_STORE_ID",
      },
    ],
    android: [
      {
        package: "com.martechbiz.app",
        app_name: "Martechbiz",
        url: "https://the-tech-gafru.vercel.app",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Standard Favicon */}
        <link rel="icon" href="/images/logo2.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo2.png" type="image/png" />
        
        {/* Apple Touch Icons - iOS Home Screen */}
        <link rel="apple-touch-icon" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/images/logo2.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo2.png" />
        
        {/* iOS Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Martechbiz" />
        
        {/* Android Chrome */}
        <link rel="icon" type="image/png" sizes="192x192" href="/images/logo2.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/images/logo2.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/logo2.png" />
        
        {/* Theme Color - Browser Address Bar */}
        <meta name="theme-color" content="#ffffff" />
        
        {/* Microsoft Tiles - Windows Pinned Sites */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/logo2.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Google Site Verification (if needed) */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
        
        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Additional Mobile Viewport Settings */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        
        {/* Disable Tap Highlight on Mobile */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Color Scheme for Dark/Light Mode */}
        <meta name="color-scheme" content="light dark" />
        
        {/* Manifest File for PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to External Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://the-tech-gafru.vercel.app" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <ArrowNavigation />
        <Footer />
      </body>
    </html>
  );
}