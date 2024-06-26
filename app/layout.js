import { Inter } from "next/font/google";
import "./globals.css";
import "./global.scss";
import { Header } from "./components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayanokoji",
  description: "Generated by create next app",
};

export default function RootLayout({ children, className = "" }) {
  return (
    <html lang="en">
      {/* <main className={`main relative overflow-hidden ${className}`}> */}
      <Header />
      <main className={`main relative overflow-hidden`}>
        <body className={inter.className}> {children}</body>
      </main>
    </html>
  );
}
