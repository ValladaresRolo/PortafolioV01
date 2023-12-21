import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Appbar from "@/components/Appbar";
import FormContacto from "@/components/FormContacto"
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import NavApp from "@/components/NavApp";
import Contact from "@/components/Contact";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Rolando Valladares",
  description: "Portafolio simple por Bootcamp FullStack UDD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <NavApp />

          {children}


          <Projects />

          <Contact />

          <Footer />


        </Provider>
      </body>
    </html>
  );
}
