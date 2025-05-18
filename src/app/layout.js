import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  // Title
  title: "Summary Customer",
  
  // Meta tag
  description: "Summary Customer",
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Muhammad Fikri' }],
  creator: 'Muhammad Fikri',
  publisher: 'Muhammad Fikri',

  // Icon / favicon
  icons: {
    icon: [
      {
        url: '/assets/favicon/favicon.ico',
        href: '/assets/favicon/favicon.ico'
      },
      new URL('/assets/favicon/favicon.ico', 'https://example.com'),
      {
        url: '/assets/favicon/favicon.ico',
        media: '(prefers-color-scheme: dark)'
      },
    ],
    shortcut: '/assets/favicon/favicon.ico',
    apple: '/assets/favicon/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/assets/faviocn/apple-touch-icon.png',
    },
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
