import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

  ;
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Baittulhuzan ',
  description: 'Islamic community center in Copenhagen, Denmark',
  keywords: 'Islamic center, Shia, Azadari, Copenhagen, Denmark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
