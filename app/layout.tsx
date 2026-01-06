import React from "react";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Garber Bros, Inc.',
  description: 'For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="header-root">
          <div className="container">
            <Header />
          </div>
        </div>
        <main className="container">
          {children}
        </main>
        <div className="footer-root">
          <div className="container">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
