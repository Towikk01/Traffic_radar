import { Inter } from "next/font/google";
import "./globals.css";
import BL from "./components/elements/svg/BL";
import TL from "./components/elements/svg/TL";
import TR from "./components/elements/svg/TR";
import BR from "./components/elements/svg/BR";
import AnimatedLogo from "./components/elements/AnimatedLogo";
import Header from "./components/layouts/header/Header";
import Brackets from "./components/layouts/brackets/Brackets";
import Footer from "./components/layouts/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Traffic Radar",
  description: "Generated by Towikk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>
          <Header/>
         <main className="bg-black w-full main">
          <Brackets/>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
