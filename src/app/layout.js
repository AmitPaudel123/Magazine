import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import GoToTop from "@/components/scroll-to-top/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magazine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
