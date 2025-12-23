import { Geist, Geist_Mono, Play } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const play = Play({
subsets:["latin"],
weight:["400", "700"],
});

export const metadata = {
  title: "PeoFile | Showcase. Collaborate. Inspire.",
  description: "Where Creativity Meets connection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${play.className} antialiased`}
      >
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
